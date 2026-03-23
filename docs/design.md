# Design Considerations (MVP)

## Tone & Style
- Modern, warm, trustworthy; feels like a teaching product, not a chatbot.
- Palette: soft neutrals with a teal/green accent; minimal gradients; high legibility.
- Typography: friendly sans (e.g., Sora/Averta); strong headings, comfortable body size, ample line-height.
- Cards over chat bubbles to reinforce “lesson” structure; clear step labels (1–6).

## Layout & Hierarchy
- Landing: value prop → primary CTA → teaching loop → safety → language support → sample.
- Ask: textarea first, then level/language, then samples, then safety note, then submit.
- Answer: safety alert (if any) → lesson header → 6-part cards → check interaction → actions.
- Library: filters/search → saved list → recent → safety reminder.
- Admin placeholder: banner → metrics → queue placeholder → docs link.

## Components (reusable)
- Primary button, secondary button, pill chips, step card, alert/safety banner, progress badge.
- Lesson cards: goal, prerequisites, main steps, example, check, localized companion.
- Form: textarea, select, sample chips.

## Mobile Responsiveness
- Single-column stacks; sticky/fixed CTA bar on ask/answer screens.
- Filters collapse to chips; tables become card lists.
- Progress shown as “Step X/6” badge on top of lesson cards.

## Accessibility & Readability
- Sufficient contrast on text/buttons; avoid tiny text on mobile.
- Large tap targets for chips/buttons; clear focus states.
- Limit dense paragraphs; prefer bullets for steps.

## Safety UX
- Safety banner appears before lesson content when blocked/flagged.
- No external contact links; keep all actions in-app.

## Microinteractions (lightweight)
- Subtle hover/press states on cards/buttons.
- Optional staggered reveal for lesson cards (100–150ms steps) without heavy animation.
