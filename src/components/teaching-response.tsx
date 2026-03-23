import { TeachingResponse } from "@/lib/tutor/types";

interface TeachingResponseProps {
  response: TeachingResponse | null;
}

function formatLanguageLabel(language: string) {
  return language.charAt(0).toUpperCase() + language.slice(1);
}

export function TeachingResponseView({ response }: TeachingResponseProps) {
  if (!response) {
    return (
      <div className="panel response-shell placeholder-shell">
        <div className="placeholder-copy">
          <strong>Teaching flow appears here</strong>
          <p>
            Ask a question and the system will convert it into a learning goal,
            fill missing basics, teach the concept step by step, and end with a
            small check-for-understanding.
          </p>
          <div className="mini-roadmap">
            <span>Goal</span>
            <span>Basics</span>
            <span>Explain</span>
            <span>Example</span>
            <span>Check</span>
            <span>Translate</span>
          </div>
        </div>
      </div>
    );
  }

  const lessonCards = [
    {
      step: "01",
      title: "Reframed learning goal",
      tone: "journey-goal",
      content: <p>{response.learningGoal}</p>,
    },
    {
      step: "02",
      title: response.prerequisiteTitle,
      tone: "journey-bridge",
      content: (
        <ul>
          {response.prerequisiteExplanation.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      step: "03",
      title: "Main explanation",
      tone: "journey-core",
      content: (
        <ol>
          {response.mainExplanation.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      ),
    },
    {
      step: "04",
      title: "Example",
      tone: "journey-example",
      content: <p>{response.example}</p>,
    },
    {
      step: "05",
      title: "Check for understanding",
      tone: "journey-check",
      content: <p>{response.checkQuestion}</p>,
    },
    {
      step: "06",
      title: response.localizedVersion.title,
      tone: "journey-local",
      content: (
        <>
          <p>{response.localizedVersion.summary}</p>
          <ul>
            {response.localizedVersion.explanation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            <strong>{response.localizedVersion.checkQuestion}</strong>
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="response-shell">
      {response.safety.blocked && response.safety.message ? (
        <div className="alert">{response.safety.message}</div>
      ) : null}

      <header className="response-hero">
        <div>
          <span className="section-tag">Live lesson output</span>
          <h2>{response.topic}</h2>
          <p>{response.originalQuestion}</p>
        </div>
        <div className="response-meta">
          <span>{response.needsPrerequisites ? "Bridge basics first" : "Direct guided teaching"}</span>
          <span>{formatLanguageLabel(response.localizedVersion.language)} companion</span>
        </div>
      </header>

      <div className="result-grid journey-grid">
        {lessonCards.map((card) => (
          <article key={card.step} className={`result-card journey-card ${card.tone}`}>
            <div className="journey-kicker">
              <span>{card.step}</span>
              <strong>{card.title}</strong>
            </div>
            <div className="journey-body">{card.content}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
