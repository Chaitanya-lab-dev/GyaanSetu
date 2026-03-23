# GyaanSetu

GyaanSetu is a teaching-first educational MVP for India. The product does not behave like a normal question-answer bot. It tries to act like a careful tutor:

- Reframe the student question into a learning goal
- Detect missing basics before answering
- Teach the prerequisite ideas first
- Explain the main concept step by step
- Add an example
- End with a small check-for-understanding
- Prepare a localized companion view for Indian languages including Hindi, Kannada, Marathi, Tamil, Telugu, and Bengali
- Keep the experience mediated and safer for children

## Why this architecture

For MVP speed and clarity, this repo uses a single Next.js application:

- `src/app`: UI and API routes
- `src/components`: student-facing components
- `src/lib/tutor`: teaching pipeline logic kept separate from UI

This keeps deployment simple while leaving room to split out orchestration, moderation, analytics, or translation services later.

## Current MVP flow

1. Student submits a question.
2. `/api/teach` validates the request.
3. `src/lib/tutor/engine.ts` picks a topic, checks for prerequisite needs, and builds a structured teaching response.
4. The UI renders the result in learning order instead of raw chat order.
5. A safety rule blocks requests that try to move learners toward direct private contact.

## Important note about localization

The current localization layer is intentionally lightweight. It creates a structured localized companion view and keeps the code ready for a real model-based translator later. For production, replace this with audited translation and age-aware rewriting.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Recommended next steps

1. Replace the rule-based teaching engine with an LLM orchestration layer that outputs the same response schema.
2. Add age-band and curriculum metadata so explanations better match class level and board context.
3. Add moderation, abuse detection, and conversation logging for child safety.
4. Add persistent sessions and teacher/admin review tools.
5. Expand real translation coverage for Hindi, Kannada, and other Indian regional languages.
