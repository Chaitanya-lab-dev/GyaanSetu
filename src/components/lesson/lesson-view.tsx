"use client";

import { TeachingResponse } from "@/lib/tutor/types";

type Props = {
  lesson: TeachingResponse | null;
  loading?: boolean;
  error?: string | null;
  onSave?: () => void;
  onAskFollowUp?: () => void;
};

export function LessonView({ lesson, loading, error, onSave, onAskFollowUp }: Props) {
  if (loading) {
    return <div className="panel response-shell placeholder-shell">Building your lesson...</div>;
  }

  if (error) {
    return <div className="panel response-shell alert">{error}</div>;
  }

  if (!lesson) {
    return (
      <div className="panel response-shell placeholder-shell">
        <div className="placeholder-copy">
          <strong>Your lesson will appear here</strong>
          <p>Ask a question to see a reframed goal, basics, main steps, example, and a quick check.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="response-shell">
      {lesson.safety.blocked ? (
        <div className="alert">This request was blocked for safety. Please ask a learning question instead.</div>
      ) : null}
      <header className="response-hero">
        <div>
          <span className="section-tag">Topic</span>
          <h2>{lesson.topic}</h2>
          <p>{lesson.originalQuestion}</p>
        </div>
        <div className="response-meta">
          <span>{lesson.needsPrerequisites ? "Prereqs included" : "Direct teaching"}</span>
          <span>{lesson.localizedVersion.language} companion</span>
        </div>
      </header>

      <div className="result-grid journey-grid">
        <StepCard step="01" title="Reframed learning goal" tone="journey-goal">
          <p>{lesson.learningGoal}</p>
        </StepCard>

        <StepCard step="02" title={lesson.prerequisiteTitle} tone="journey-bridge">
          <ul>
            {lesson.prerequisiteExplanation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </StepCard>

        <StepCard step="03" title="Main explanation" tone="journey-core">
          <ol>
            {lesson.mainExplanation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </StepCard>

        <StepCard step="04" title="Example" tone="journey-example">
          <p>{lesson.example}</p>
        </StepCard>

        <StepCard step="05" title="Check for understanding" tone="journey-check">
          <p>{lesson.checkQuestion}</p>
        </StepCard>

        <StepCard step="06" title={lesson.localizedVersion.title} tone="journey-local">
          <p>{lesson.localizedVersion.summary}</p>
          <ul>
            {lesson.localizedVersion.explanation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            <strong>{lesson.localizedVersion.checkQuestion}</strong>
          </p>
        </StepCard>
      </div>

      <div className="button-row">
        {onSave ? (
          <button className="button-secondary" type="button" onClick={onSave}>
            Save to library
          </button>
        ) : null}
        {onAskFollowUp ? (
          <button className="button" type="button" onClick={onAskFollowUp}>
            Ask a follow-up
          </button>
        ) : null}
      </div>
    </div>
  );
}

function StepCard({
  step,
  title,
  tone,
  children,
}: {
  step: string;
  title: string;
  tone: string;
  children: React.ReactNode;
}) {
  return (
    <article className={`result-card journey-card ${tone}`}>
      <div className="journey-kicker">
        <span>{step}</span>
        <strong>{title}</strong>
      </div>
      <div className="journey-body">{children}</div>
    </article>
  );
}
