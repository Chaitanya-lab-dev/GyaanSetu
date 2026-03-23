# Safety

## Block/Redirect
- Contact/PII: phone, email, WhatsApp/Telegram/Instagram handles.
- Harmful: self-harm, violence, explicit content.
- Adult interaction requests: “connect me with a tutor/stranger”, “give phone number”.
- Medical/financial/legal advice: politely decline; keep scope to learning.

## Behavior
- If blocked: return `safety.blocked=true` with a short in-app guidance message; do not call LLM.
- Keep all guidance in-app; no outbound contact or community links.
- Age-appropriate tone; avoid fear or urgency.

## Logging & Retention (when enabled)
- Strip obvious PII before logging.
- Store: question, level, language, safety flag, latency, lesson JSON.
- Retention: short-term (e.g., 30 days) during MVP; configurable.

## Rate Limiting
- Per IP/session guard using `RATE_LIMIT_WINDOW` + `RATE_LIMIT_MAX`.

## Guardrail Prompts
- Remind: “Be a patient teacher. No personal contact. No unsafe content. Keep explanations simple and respectful.”
