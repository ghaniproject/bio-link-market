# bio-link-market

A Link-in-Bio and service portfolio page built with vanilla HTML, CSS, Alpine.js, and Node.js (Express). Designed for freelance developers to showcase services, handle client consultations, and integrate WhatsApp ordering directly from the page.

## Features

**Service Showcase**
Displays three main service categories: custom website development, company profile, and bug solving & fix. Each service card expands to show included features, pricing, and direct action buttons.

**Budget & Timeline Estimator**
An interactive calculator that allows visitors to configure their project requirements (number of pages, additional features, complexity level) and get an instant price and timeline estimate before contacting.

**WhatsApp Order Integration**
Order and consultation buttons generate pre-filled WhatsApp messages with full project specifications, reducing back-and-forth communication.

**Consultation Modal with Email Notification**
A contact form modal that submits consultation data via SMTP email to the developer. Configured through environment variables.

**FAQ Section**
Accordion-style FAQ section addressing common client questions about timelines, payment terms, guarantees, and scope of work.

**Portfolio Section**
Project showcase grid with category filter tabs (All, Website, Company Profile, Bug Solving). Each project card displays description, tags, and a demo link.

**Client Testimonials Slider**
Auto-rotating testimonial slider with reviewer name, company, rating, and review text.

## Tech Stack

- HTML, Vanilla CSS, Alpine.js
- Node.js with Express
- Nodemailer for SMTP email
- Live reload via `livereload` in development

## Getting Started

Copy `.env.example` to `.env` and fill in your SMTP credentials.

```bash
cp .env.example .env
```

Install dependencies:

```bash
pnpm install
```

Run in development mode:

```bash
pnpm run dev
```

Run in production:

```bash
pnpm start
```

## Environment Variables

| Variable | Description |
|---|---|
| `SMTP_HOST` | SMTP server host |
| `SMTP_PORT` | SMTP port (587 or 465) |
| `SMTP_USER` | SMTP username / email |
| `SMTP_PASS` | SMTP password or app password |
| `RECEIVER_EMAIL` | Email address to receive consultations |
| `PORT` | Server port (default: 3000) |
