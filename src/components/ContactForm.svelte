<script lang="ts">
  declare global {
    interface Window {
      turnstile?: {
        reset: () => void;
      };
    }
  }

  export let turnstileSiteKey = '';

  type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

  type ContactResponse = {
    success?: boolean;
    message?: string;
  };

  let form: HTMLFormElement;
  let state: SubmissionState = 'idle';
  let statusMessage = '';

  function resetTurnstile() {
    window.turnstile?.reset();
  }

  async function submitForm(event: SubmitEvent) {
    event.preventDefault();

    if (!turnstileSiteKey) {
      state = 'error';
      statusMessage = 'The form is temporarily unavailable. Please email directly.';
      return;
    }

    const formData = new FormData(form);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      website: formData.get('website'),
      turnstileToken: formData.get('cf-turnstile-response'),
    };

    state = 'submitting';
    statusMessage = 'Sending your message…';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as ContactResponse;

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? 'The message could not be sent. Please email directly.');
      }

      form.reset();
      resetTurnstile();
      state = 'success';
      statusMessage = 'Message sent. I’ll get back to you soon.';
    } catch (error) {
      resetTurnstile();
      state = 'error';
      statusMessage =
        error instanceof Error ? error.message : 'The message could not be sent. Please email directly.';
    }
  }
</script>

<svelte:head>
  {#if turnstileSiteKey}
    <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
  {/if}
</svelte:head>

<form bind:this={form} class="mt-7 border-t border-line pt-5" onsubmit={submitForm}>
  <div class="flex items-baseline justify-between gap-4">
    <span class="mono">Send a message</span>
    <span class="mono">Usually replies within 2 days</span>
  </div>

  <div class="mt-4 grid gap-3">
    <label class="block">
      <span class="mono">Name</span>
      <input
        class="mt-1.5 w-full border border-line bg-base px-3 py-2 font-sans text-[14px] text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-ink-muted"
        name="name"
        autocomplete="name"
        maxlength="120"
        required
      />
    </label>

    <label class="block">
      <span class="mono">Email</span>
      <input
        class="mt-1.5 w-full border border-line bg-base px-3 py-2 font-sans text-[14px] text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-ink-muted"
        name="email"
        type="email"
        autocomplete="email"
        maxlength="254"
        required
      />
    </label>

    <label class="block">
      <span class="mono">Message</span>
      <textarea
        class="mt-1.5 min-h-32 w-full resize-y border border-line bg-base px-3 py-2 font-sans text-[14px] leading-[1.6] text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-ink-muted"
        name="message"
        rows="5"
        maxlength="5000"
        required
      ></textarea>
    </label>

    <div class="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
      <label>
        Website
        <input name="website" tabindex="-1" autocomplete="off" />
      </label>
    </div>
  </div>

  {#if turnstileSiteKey}
    <div class="mt-4 overflow-hidden">
      <div class="cf-turnstile" data-sitekey={turnstileSiteKey} data-theme="dark" data-action="contact"></div>
    </div>
  {:else}
    <p class="mono mt-4 text-seal">Form configuration unavailable. Please use the direct email link.</p>
  {/if}

  <div class="mt-4 flex flex-wrap items-center gap-3">
    <button class="btn btn-solid" type="submit" disabled={state === 'submitting' || !turnstileSiteKey}>
      {state === 'submitting' ? 'Sending…' : 'Send message'}
    </button>

    {#if statusMessage}
      <p
        class:!text-seal={state === 'error'}
        class="text-[12px] text-ink-muted"
        aria-live="polite"
        role={state === 'error' ? 'alert' : undefined}
      >
        {statusMessage}
      </p>
    {/if}
  </div>
</form>
