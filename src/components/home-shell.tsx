"use client";

import { QuestionForm } from "@/components/question-form";
import { TeachingResponseView } from "@/components/teaching-response";
import { TeachingResponse } from "@/lib/tutor/types";
import { useState } from "react";

const PRODUCT_PILLARS = [
  "Question reframing",
  "Prerequisite detection",
  "Safe AI mediation",
  "Localized teaching",
];

const FLOW_CARDS = [
  {
    kicker: "1. Listen carefully",
    title: "Turn a raw question into a learning goal",
    body: "We decode what the learner really needs before throwing facts at them.",
  },
  {
    kicker: "2. Bridge the gap",
    title: "Teach the missing basics first",
    body: "The product behaves like a patient tutor who notices confusion early.",
  },
  {
    kicker: "3. Land the lesson",
    title: "Explain with rhythm, examples, and checks",
    body: "Each response ends with a tiny moment of active learning, not passive reading.",
  },
];

export function HomeShell() {
  const [response, setResponse] = useState<TeachingResponse | null>(null);

  return (
    <>
      <section className="hero-stage">
        <div className="hero-backdrop" />
        <div className="topbar">
          <div className="brand-lockup">
            <span className="brand-mark">GS</span>
            <div>
              <strong>GyaanSetu</strong>
              <p>Teaching-first AI tutor for India</p>
            </div>
          </div>
          <span className="topbar-note">Built to feel like guidance, not a chatbot.</span>
        </div>

        <div className="hero-grid wild-grid">
          <div className="hero-copy">
            <span className="eyebrow">Teaching-first AI for India</span>
            <h1>GyaanSetu teaches before it answers.</h1>
            <p>
              A learner asks one question. The system reframes the goal, spots the missing basics, teaches the bridge,
              explains the concept clearly, and closes with one calm understanding check.
            </p>

            <div className="hero-actions">
              <a className="button button-link" href="#lesson-studio">
                Enter the learning studio
              </a>
              <span className="trust-note">Safer for children because guidance stays inside the product.</span>
            </div>

            <div className="pillar-row">
              {PRODUCT_PILLARS.map((pillar) => (
                <span key={pillar} className="pillar-chip">
                  {pillar}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-showcase">
            <div className="showcase-card showcase-primary">
              <span className="showcase-label">Live teaching loop</span>
              <h2>Question in. Tutor-like lesson out.</h2>
              <p>No anonymous adult contact. No rushed one-shot answer. Just a layered explanation shaped for the learner’s level and language.</p>
            </div>

            <div className="floating-stack">
              {FLOW_CARDS.map((card) => (
                <article key={card.title} className="floating-card">
                  <span>{card.kicker}</span>
                  <strong>{card.title}</strong>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="story-strip">
        <div className="story-intro">
          <span className="section-tag">Product promise</span>
          <h2>Designed like a brilliant teacher’s desk, not a search box.</h2>
        </div>
        <div className="story-grid">
          <article className="story-card">
            <strong>Reframe first</strong>
            <p>The learner should know what they are trying to understand before they see the explanation.</p>
          </article>
          <article className="story-card">
            <strong>Bridge confusion</strong>
            <p>Missing basics are surfaced gently so the student never feels left behind.</p>
          </article>
          <article className="story-card">
            <strong>Keep it human</strong>
            <p>Simple language, everyday Indian examples, and one small question at the end keep the flow active.</p>
          </article>
        </div>
      </section>

      <main className="studio-grid" id="lesson-studio">
        <section className="panel composer-panel">
          <div className="panel-header">
            <span className="section-tag">Lesson composer</span>
            <strong className="section-title">Turn one student question into a full teaching flow</strong>
          </div>
          <p className="section-copy">Ask in natural language. The app will build a structured lesson, not a raw answer dump.</p>
          <QuestionForm onSubmit={async ({ question, language, level }) => setResponse(null)} />
        </section>

        <section className="response-column">
          <TeachingResponseView response={response} />
        </section>
      </main>
    </>
  );
}
