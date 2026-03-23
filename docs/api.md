# API

## POST /api/teach
Request body:
```json
{ "question": "Why do plants need sunlight?", "level": "middle-school", "language": "hindi" }
```
Response body (schema):
```json
{
  "originalQuestion": "Why do plants need sunlight?",
  "learningGoal": "...",
  "topic": "Photosynthesis",
  "needsPrerequisites": true,
  "prerequisiteTitle": "...",
  "prerequisiteExplanation": ["..."],
  "mainExplanation": ["step 1", "step 2"],
  "example": "...",
  "checkQuestion": "...",
  "localizedVersion": {
    "language": "hindi",
    "title": "Hindi learning view",
    "summary": "...",
    "explanation": ["..."],
    "checkQuestion": "..."
  },
  "safety": { "blocked": false, "message": null }
}
```
Errors: `400` for missing question; `429` if rate-limited; `451` if safety block.

## POST /api/check (optional stretch)
Request: `{ "lessonId": "opt", "userAnswer": "text" }`  
Response: `{ "correct": true|false, "hint": "..." }`

## POST /api/events (optional)
Fire-and-forget analytics: `{ "event": "question_submitted", "payload": {...} }`
