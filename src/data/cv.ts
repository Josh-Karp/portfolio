export const profile = {
  name: "Joshua Karp",
  title: "Snr full-stack engineer",
  location: "Pretoria, ZA",
  timezone: "Africa/Johannesburg",
  email: "jkarps4@gmail.com",
  phone: "(079) 553 6030",
  phoneHref: "tel:+27795536030",
  mark: "匠",
  description:
    "Joshua Karp — senior full-stack engineer in Pretoria, South Africa. React front ends on Odoo backends, CRM and LMS systems, seven years in.",
};

export const spec = [
  { label: "Front", value: "React · TypeScript" },
  { label: "Back", value: "Odoo · Node · Python" },
  { label: "Data", value: "PostgreSQL" },
  { label: "Domain", value: "CRM · LMS · Helpdesk" },
  { label: "Since", value: "2018" },
];

export const stats = [
  { value: "7+", label: "Years shipping" },
  { value: "2021", label: "Leading since" },
  { value: "25", label: "Tools in rotation" },
  { value: "1", label: "BEng, UP" },
];

export const statement = {
  headline:
    "I take backend logic that grew up inside an ERP and give it a front end people are willing to use.",
  body: "Seven years designing and leading scalable web applications, most of them sitting on top of Odoo. CRM, helpdesk and LMS systems on one side; React portals, real-time dashboards and origination flows on the other; a translation and authentication layer in the middle that keeps every tenant's version of the truth intact.",
  current: [
    "Lead front-end engineer, TaskFlow / TaskSuite",
    "Pretoria, working with a Texas-based team",
    "Multi-tenant CRM and LMS products",
    "Code review, deployment and version control ownership",
  ],
};

export const pillars = [
  {
    kanji: "設",
    eyebrow: "Architecture",
    title: "Structure first.",
    body: "Business workflows become systems that survive their second client. Shared auth, a translation layer between Odoo and the outside world, and a data model that bends per tenant without forking.",
    points: [
      "Unified authentication across backend and external systems",
      "Multi-tenant configuration instead of per-client branches",
      "REST, GraphQL and XML-RPC pipelines into PostgreSQL",
    ],
  },
  {
    kanji: "実",
    eyebrow: "Delivery",
    title: "Then shipping.",
    body: "Real-time dashboards, origination processes and client portals — built with a team, reviewed as a team, deployed on a pipeline rather than a good mood.",
    points: [
      "Leading a division of developers and its review culture",
      "Performance work on interfaces people use all day",
      "Clean, maintainable codebases as the actual deliverable",
    ],
  },
];

export const stack = {
  intro:
    "Most of the work lives where the two meet: an ERP that knows the business rules, and a client-facing app that has to make them feel obvious.",
  halves: [
    {
      kanji: "前",
      eyebrow: "Client side",
      title: "Portals people live in",
      body: "React front ends wired to Odoo — dashboards that update in real time, origination processes, and interfaces customised per tenant without a separate codebase for each.",
      tags: [
        "React",
        "TypeScript",
        "Redux",
        "React-Query",
        "Zustand",
        "Next.js",
        "Tailwind",
        "Material UI",
      ],
    },
    {
      kanji: "後",
      eyebrow: "Server side",
      title: "Logic worth trusting",
      body: "CRM, helpdesk and LMS backends architected in Odoo and Python, with Node and Fastify services carrying data between systems and PostgreSQL holding the line.",
      tags: [
        "Odoo v12–v14",
        "Python",
        "Node.js",
        "Fastify",
        "Flask",
        "PostgreSQL",
        "XML-RPC",
        "GraphQL",
      ],
    },
  ],
  terminal: [
    { cmd: "whoami", out: "joshua karp — snr full-stack engineer" },
    {
      cmd: "stack --core",
      out: "react · typescript · odoo · node · postgresql",
    },
    {
      cmd: "uptime",
      out: "7+ years · pretoria, za · utc+2 · leading since 2021",
    },
  ],
};

export const jobs = [
  {
    when: "2021 — Present",
    company: "TaskFlow / TaskSuite",
    where: "Pretoria, ZA · Texas, USA",
    role: "Lead front-end engineer",
    scope: "Frontend division · CRM & LMS",
    points: [
      "Spearheads the frontend division, integrating React client portals with an Odoo backend to deliver real-time dashboards and origination processes.",
      "Designed and implemented a unified authentication and translation layer between Odoo and external systems — a highly customisable multi-tenant solution shaped to each client's requirements.",
      "Works with business stakeholders to turn operational workflows into scalable web applications, using pre-built customisable modules or bespoke builds.",
      "Manages a team of developers and owns code review, deployment and version control.",
    ],
  },
  {
    when: "2018 — 2020",
    company: "MECAD — SOLIDWORKS SA",
    where: "Pretoria, ZA",
    role: "Junior application engineer",
    scope: "Technical support · Pre-sales · Tooling",
    points: [
      "Provided technical support across the SOLIDWORKS product range.",
      "Backed sales engineers through the sales process with technical insight and live demonstrations.",
      "Worked with developers to improve product performance and user experience.",
      "Built and maintained custom SOLIDWORKS API plug-ins in VBA and C#.",
    ],
  },
];

export const toolkit = [
  {
    group: "Languages",
    items: ["Python", "JavaScript (ES6+)", "TypeScript", "SQL", "HTML5 · CSS3"],
  },
  {
    group: "Libraries",
    items: [
      "React",
      "Redux",
      "React-Query",
      "Zustand",
      "Material UI · TailwindCSS",
    ],
  },
  {
    group: "Frameworks",
    items: [
      "Odoo (v12–v14)",
      "Node.js",
      "Fastify",
      "Flask",
      "Next.js · Gatsby",
    ],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS", "Vercel", "Docker", "Nginx", "GitHub Actions"],
  },
  { group: "Data", items: ["PostgreSQL", "REST APIs", "GraphQL", "XML-RPC"] },
  {
    group: "Build",
    items: ["Webpack", "Rollup", "Code review", "Version control"],
  },
];

export const marquee = [
  { name: "React", note: "Daily" },
  { name: "TypeScript", note: "Daily" },
  { name: "Odoo", note: "v12–v14" },
  { name: "PostgreSQL", note: "Data" },
  { name: "Node.js", note: "Services" },
  { name: "Python", note: "Backend" },
  { name: "Next.js", note: "Apps" },
  { name: "Docker", note: "Deploy" },
  { name: "AWS", note: "Infra" },
  { name: "GraphQL", note: "Transport" },
];

export const education = {
  years: "2013 — 2017",
  headline: "Mechanical, then software.",
  degree: "BEng Mechanical Engineering",
  school: "University of Pretoria",
  body: "A degree built on design, problem-solving and sustainability. The engineering habit — model the system, find the constraint, build to it — came first; the languages came after.",
};

export const faq = [
  {
    q: "What do you actually build?",
    a: "Client-facing web applications on top of enterprise backends. In practice that means React portals and dashboards wired into Odoo, plus the CRM, helpdesk and LMS logic behind them — and the data pipelines that connect the two.",
  },
  {
    q: "How deep does the Odoo work go?",
    a: "Deep enough to have built a unified authentication and translation layer between an Odoo backend and external systems, and to run it as a multi-tenant product where each client's requirements are configuration rather than a fork. Versions 12 through 14, talking over XML-RPC, REST and GraphQL into PostgreSQL.",
  },
  {
    q: "Do you lead, or do you build?",
    a: "Both. Leading the frontend division at TaskFlow means managing a team of developers and owning code reviews, deployments and version control — while still being the person who designs and implements the layer everything else sits on.",
  },
  {
    q: "Why a mechanical engineering degree?",
    a: "It teaches design and problem-solving before it teaches tools, which transfers cleanly. The first professional code was SOLIDWORKS API plug-ins in VBA and C#, built for engineers with a specific job to do. That habit — build for the person doing the work — has not changed.",
  },
  {
    q: "Where are you, and who do you work with?",
    a: "Pretoria, South Africa, on UTC+2. Currently working across ZA and Texas, so distributed teams and overlapping time zones are the normal working condition rather than an experiment.",
  },
];

export const contact = {
  headline: "Send the brief.",
  body: "The useful first message says what the system has to do and who has to use it. Architecture, a team to lead, or a front end that needs rescuing from the ERP it grew out of — all fair.",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Questions", href: "#questions" },
];
