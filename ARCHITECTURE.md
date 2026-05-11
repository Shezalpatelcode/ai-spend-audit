# Architecture Overview

## Application Type

This project is a full-stack SaaS-style web application built using Next.js App Router architecture.

The platform helps teams audit AI tooling costs and generate optimization recommendations with shareable public reports.

---

# High-Level Architecture

```text
Frontend (Next.js + React)
        ↓
Audit Engine Logic
        ↓
API Routes (Next.js Backend)
        ↓
MongoDB Database
        ↓
Dynamic Public Audit Pages
```

---

# Frontend Architecture

## Technologies
- Next.js 15
- React
- Tailwind CSS
- TypeScript

## Key Components

### AuditForm.tsx
Handles:
- form rendering
- state management
- audit submission
- shareable link generation
- localStorage persistence

### Dynamic Audit Pages
Located at:

```bash
/app/audit/[id]
```

These pages fetch audit reports directly from MongoDB and render public shareable reports.

---

# Backend Architecture

## API Routes

### POST /api/audit

Responsible for:
- receiving audit submissions
- validating request flow
- storing audit results in MongoDB

---

# Database Architecture

## MongoDB Collections

### Audit Collection

Fields:
- tool
- plan
- spend
- seats
- teamSize
- useCase
- recommendation
- savings
- summary
- timestamps

---

# Routing Strategy

Used Next.js App Router dynamic routing:

```bash
/audit/[id]
```

This enables:
- public shareable reports
- database-driven pages
- server-side rendering

---

# State Management

Used React useState for:
- form state
- audit results
- shareable URL state

Used useEffect for:
- localStorage persistence
- restoring form state

---

# Deployment Architecture

## Hosting
- Vercel

## Database
- MongoDB Atlas

The application is fully deployed and publicly accessible.

---

# Scalability Considerations

Potential future improvements:
- authentication
- role-based access
- team workspaces
- AI API integrations
- report exports
- analytics dashboard
- caching layer
- rate limiting

---

# Engineering Tradeoffs

## Why MongoDB?
MongoDB provided fast schema flexibility during rapid MVP iteration.

## Why Next.js App Router?
Allowed frontend and backend logic to exist within a unified architecture while supporting dynamic routes and server rendering.

## Why localStorage?
Improved UX by preventing accidental form data loss during refreshes.