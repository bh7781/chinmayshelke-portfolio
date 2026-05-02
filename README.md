# Chinmay Shelke Portfolio

A portfolio built to present my work across data analytics, AI/ML, analytics automation, data quality, and regulatory reporting.

**Live site:** [chinmayshelke.com](https://chinmayshelke.com)

## What This Portfolio Highlights

- Lead Data Analyst positioning with a recruiter-friendly landing experience
- Impact metrics and case studies for analytics, automation, and data quality work
- Skills across Python, SQL, Snowflake, PySpark, Alteryx, Power BI, and ML workflows
- Certifications with local badge assets linked to Credly credentials
- Blog cards for technical writing and learning-focused articles
- Privacy-first contact and resume request flow backed by a Vercel serverless function

## Tech Stack

- React
- Vite
- Tailwind CSS
- Vercel
- Resend for server-side contact email delivery

## Privacy-First Contact Flow

The site does not expose a public email address, does not use `mailto:`, and does not publish a direct resume download. Visitors submit contact or resume requests through the form, which posts to a Vercel API route at `/api/contact`.

Required local and Vercel environment variables:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your_private_receiving_email
CONTACT_FROM_EMAIL="Portfolio <onboarding@resend.dev>"
```

Keep `.env.local` private. It is ignored by Git.

## Local Development

Install dependencies:

```bash
npm install
```

Run the Vite development server:

```bash
npm run dev
```

Run with Vercel functions locally:

```bash
vercel dev
```

Check code quality:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Project Structure

```text
api/
  contact.js                 # Vercel serverless contact endpoint
public/
  assets/                    # Profile and certification badge images
src/
  components/                # Portfolio sections and reusable UI
  data/                      # Navigation, case studies, skills, articles, certifications
```

## Deployment

The project is deployed on Vercel. Before deploying, configure the Resend environment variables in the Vercel dashboard under Project Settings -> Environment Variables.

## About

Built and maintained by [Chinmay Shelke](https://chinmayshelke.com).
