# Architecture

## Stack
- Next.js (App Router), React 19, TypeScript.
- Server routes in Next.js API (Node) for teaching logic.
- Global CSS for now; no design system dependency.
- Optional LLM call behind a wrapper; rules engine fallback.

## Structure
- `app/` — pages and API routes (e.g., `/api/teach`).
- `components/` — UI pieces (intake form, lesson view, safety banner).
- `lib/tutor/` — topic registry, prerequisite detection, safety, localization, schema types.
- `lib/ai/` — LLM client, prompt builders, schema validation, fallback.
- `lib/analytics/` — minimal event emitter stub.
- `docs/` — product and technical references.

## Feature Flags (env)
- `USE_LLM=true|false` — toggle LLM vs rules engine.
- `LOG_EVENTS=true|false` — enable basic analytics.
- `RATE_LIMIT_WINDOW`, `RATE_LIMIT_MAX` — per-IP/session throttling.

## Principles
- Teaching-first: always return the 6-part lesson object.
- Safety-first: block contact/unsafe queries before any model call.
- Localization-light: template-based companion view; avoid heavy translation in MVP.

## Deployment
- Single Next.js app is enough for MVP; add DB only when logging becomes necessary.
