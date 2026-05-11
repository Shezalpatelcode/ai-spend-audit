# Credex AI Spend Audit

A full-stack AI SaaS auditing platform built with Next.js, MongoDB, and Tailwind CSS. The application helps teams evaluate AI tooling costs, identify optimization opportunities, and generate shareable AI spend audit reports.

## Live Demo

https://credexproject-eta.vercel.app/

---

# Features

- AI spend audit form
- Dynamic recommendation engine
- Estimated monthly and annual savings
- AI-generated audit summaries
- MongoDB persistence
- Shareable public audit reports
- Dynamic routes using Next.js App Router
- Copy shareable link functionality
- localStorage form persistence
- Responsive SaaS-style UI

---

# Tech Stack

## Frontend
- Next.js 15
- React
- TypeScript
- Tailwind CSS

## Backend
- Next.js API Routes
- MongoDB Atlas
- Mongoose

## Deployment
- Vercel

---

# Folder Structure

```bash
app/
  api/
    audit/
  audit/
    [id]/

components/
lib/
models/
```

---

# How It Works

1. User fills AI spend audit form
2. Audit engine generates optimization recommendations
3. Audit is saved in MongoDB
4. Shareable audit URL is generated
5. Public audit report page displays saved results

---

# Key Engineering Decisions

- Used Next.js App Router for full-stack architecture
- Used MongoDB for persistent audit storage
- Dynamic routing enables shareable public reports
- localStorage improves UX by preserving form state
- Modular audit logic separated into reusable utility functions

---

# Environment Variables

Create a `.env.local` file:

```env
MONGODB_URI=your_mongodb_connection_string
```

---

# Local Development

```bash
npm install
npm run dev
```

---

# Future Improvements

- Real AI API integration
- Authentication system
- PDF export for reports
- Team dashboards
- Usage analytics
- Advanced pricing intelligence

---

# Author
Sheezal Patel


------------------------------------------------------------------------------------------------------------------------------------
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
