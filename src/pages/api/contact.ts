import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
  turnstileToken?: unknown;
};

type TurnstileResult = {
  success?: boolean;
};

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json',
    },
  });
}

function valueOf(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

async function verifyTurnstile(token: string, secret: string, remoteIp: string | null) {
  const body = new URLSearchParams({ secret, response: token });

  if (remoteIp) {
    body.set('remoteip', remoteIp);
  }

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });

  if (!response.ok) {
    return false;
  }

  const result = (await response.json()) as TurnstileResult;
  return result.success === true;
}

export const POST: APIRoute = async ({ request, url }) => {
  const origin = request.headers.get('origin');

  if (origin && origin !== url.origin) {
    return json({ message: 'This request was rejected.' }, 403);
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return json({ message: 'Please complete the form and try again.' }, 400);
  }

  const name = valueOf(payload.name);
  const email = valueOf(payload.email);
  const message = valueOf(payload.message);
  const website = valueOf(payload.website);
  const turnstileToken = valueOf(payload.turnstileToken);

  if (website) {
    return json({ success: true });
  }

  if (
    !name ||
    name.length > MAX_NAME_LENGTH ||
    !email ||
    email.length > MAX_EMAIL_LENGTH ||
    !EMAIL_PATTERN.test(email) ||
    !message ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return json({ message: 'Please provide a name, a valid email address, and a message.' }, 400);
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  const to = import.meta.env.CONTACT_TO_EMAIL;
  const from = import.meta.env.CONTACT_FROM_EMAIL;
  const turnstileSecret = import.meta.env.TURNSTILE_SECRET_KEY;

  if (!apiKey || !to || !from || !turnstileSecret) {
    console.error('Contact form environment variables are incomplete.');
    return json({ message: 'The form is temporarily unavailable. Please email directly.' }, 503);
  }

  if (!turnstileToken) {
    return json({ message: 'Please complete the verification and try again.' }, 400);
  }

  try {
    const remoteIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null;
    const verified = await verifyTurnstile(turnstileToken, turnstileSecret, remoteIp);

    if (!verified) {
      return json({ message: 'Please complete the verification and try again.' }, 400);
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Portfolio <${from}>`,
      to,
      replyTo: email,
      subject: `Portfolio enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error('Resend rejected the contact form message.', error);
      return json({ message: 'The message could not be sent. Please email directly.' }, 502);
    }

    return json({ success: true });
  } catch (error) {
    console.error('Contact form submission failed.', error);
    return json({ message: 'The message could not be sent. Please email directly.' }, 502);
  }
};
