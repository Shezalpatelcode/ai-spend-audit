# Project Reflection

## Overview

This project evolved from a simple AI spend audit concept into a fully deployed full-stack SaaS-style application with database persistence, dynamic routing, and shareable public reports.

The goal was not only to complete the technical requirements, but also to approach the assignment like a real product build with practical engineering and product decisions.

---

# What Went Well

## Full-Stack Architecture

One of the biggest successes was building the project using a clean full-stack architecture with:
- Next.js App Router
- API routes
- MongoDB integration
- dynamic public pages

This made the application feel like a real SaaS MVP rather than a static frontend demo.

---

## Shareable Audit Reports

The most impactful feature added was dynamic shareable audit pages using:

```bash
/audit/[id]
```

This significantly improved the product feel of the platform and created a more realistic workflow for users.

---

## Deployment and Production Readiness

Deploying the project on Vercel and verifying MongoDB production connectivity helped ensure the application functioned beyond local development.

This also exposed real-world issues such as:
- environment configuration
- MongoDB network access
- production debugging

---

# Challenges Faced

## MongoDB Connection Issues

One of the biggest blockers was resolving MongoDB Atlas connection problems and request timeouts during API integration.

This required debugging:
- environment variables
- network access configuration
- Mongoose connection handling

---

## Dynamic Route Handling

While implementing dynamic audit pages, handling async route params in newer Next.js App Router versions introduced additional debugging challenges.

This improved my understanding of server components and route handling in modern Next.js.

---

# Engineering Decisions

## Keeping the MVP Focused

I intentionally avoided overengineering features such as:
- authentication
- dashboards
- excessive animations
- complex AI integrations

Instead, I focused on:
- core product flow
- backend persistence
- deployment
- UX consistency

This helped maintain momentum and deliver a complete working product within the assignment timeline.

---

# What I Would Improve Next

Given more time, I would add:

- Real AI API integrations
- Authentication and team accounts
- PDF export for reports
- More advanced audit logic
- Analytics dashboards
- Historical audit tracking
- Usage monitoring
- Better automated testing coverage

---

# Biggest Learning

The biggest learning from this project was understanding how important:
- deployment
- architecture decisions
- debugging
- documentation
- product thinking

are in building a complete software product.

This assignment reinforced the idea that shipping a polished and functional system is more valuable than adding excessive unfinished features.

---

# Final Thoughts

This project was a valuable experience in building and deploying a modern full-stack application under time constraints while balancing engineering quality, UX, and product thinking.