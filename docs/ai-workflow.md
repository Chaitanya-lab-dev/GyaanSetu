# AI Workflow

## Steps
1. Safety prefilter (regex/keywords: contact info, PII, abuse, self-harm).
2. Topic guess (keywords + optional lightweight classifier).
3. Prerequisite detection (heuristics or small prompt → boolean + missing basics list).
4. Lesson synthesis prompt → constrained 6-part schema; low temperature.
5. Localization template fill (no generative translation in MVP).
6. Schema validation; on failure, fall back to rules engine.
7. Optional logging (if enabled) of input/output, safety flags, latency.

## Prompt Contract (LLM)
- Inputs: question, level, language, candidate topic, prerequisite signals.
- Output JSON keys: learningGoal, needsPrerequisites, prerequisiteExplanation[], mainExplanation[], example, checkQuestion.
- Tone: patient teacher, age-appropriate, concise steps.
- Hard rules: no contact sharing, no medical/financial/legal advice, keep it in-app.

## Validation
- Enforce required keys and array types.
- Truncate overlong fields (server-side).
- Reject if safety policy violated; route to fallback.

## Fallback
- If validation fails or model unavailable → rules engine:
  - keyword/topic match
  - stock prerequisite list
  - templated explanation steps
  - static example + check
