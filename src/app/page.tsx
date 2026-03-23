import Link from "next/link";

export default function HomePage() {
  return (
    <div className="landing">
      <section className="hero-stage">
        <div className="hero-backdrop" />
        <div className="hero-grid wild-grid">
          <div className="hero-copy">
            <span className="eyebrow">Teaching-first AI for India</span>
            <h1>GyaanSetu teaches before it answers.</h1>
            <p>
              One question becomes a full mini-lesson: reframed goal, missing basics, clear steps,
              everyday example, a quick check, and a companion view in an Indian language.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/ask">
                Enter the learning studio
              </Link>
              <Link className="button-secondary" href="/answer">
                View a sample lesson
              </Link>
            </div>
            <div className="pillar-row">
              <span className="pillar-chip">Question reframing</span>
              <span className="pillar-chip">Prerequisite detection</span>
              <span className="pillar-chip">Layered explanation</span>
              <span className="pillar-chip">Safe for students</span>
            </div>
          </div>

          <div className="hero-showcase">
            <div className="showcase-card showcase-primary">
              <span className="showcase-label">Live teaching loop</span>
              <h2>Question in. Tutor-like lesson out.</h2>
              <p>No anonymous adult contact. A structured lesson shaped for level and language.</p>
            </div>
            <div className="floating-stack">
              <div className="floating-card">
                <span>1. Listen carefully</span>
                <strong>Turn a raw question into a learning goal</strong>
                <p>Decode what the learner needs before giving facts.</p>
              </div>
              <div className="floating-card">
                <span>2. Bridge the gap</span>
                <strong>Teach missing basics first</strong>
                <p>Prevent confusion by filling gaps up front.</p>
              </div>
              <div className="floating-card">
                <span>3. Land the lesson</span>
                <strong>Explain, example, then check</strong>
                <p>End with a tiny understanding check to keep it active.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="story-strip">
        <div className="story-intro">
          <span className="section-tag">How it feels</span>
          <h2>Built to feel like guidance, not chat.</h2>
        </div>
        <div className="story-grid">
          <article className="story-card">
            <strong>Clear lesson flow</strong>
            <p>Six parts, always in order, so learners know where they are.</p>
          </article>
          <article className="story-card">
            <strong>Simple language</strong>
            <p>Every step written for students and parents, not jargon.</p>
          </article>
          <article className="story-card">
            <strong>Safety-first</strong>
            <p>All support stays in-product; no external contact sharing.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
