"use client";

import { QuestionForm } from "@/components/question-form";
import { LessonView } from "@/components/lesson/lesson-view";
import { LearningLevel, SupportedLanguage, TeachingResponse } from "@/lib/tutor/types";
import { useState } from "react";

export default function AskPage() {
  const [lesson, setLesson] = useState<TeachingResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(payload: { question: string; level: LearningLevel; language: SupportedLanguage }) {
    setLoading(true);
    setError(null);
    setLesson(null);

    try {
      const res = await fetch("/api/teach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "Could not build the lesson.");
      }

      const data = (await res.json()) as TeachingResponse;
      setLesson(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="studio-grid">
      <section className="panel composer-panel">
        <div className="panel-header">
          <span className="section-tag">Lesson composer</span>
          <strong className="section-title">Turn a single question into a lesson</strong>
        </div>
        <p className="section-copy">
          The app reframes the goal, fills missing basics, explains step by step, adds an example,
          and finishes with a quick check.
        </p>
        <QuestionForm onSubmit={handleSubmit} loading={loading} error={error} />
      </section>

      <section className="response-column">
        <LessonView lesson={lesson} loading={loading} error={error} />
      </section>
    </div>
  );
}
