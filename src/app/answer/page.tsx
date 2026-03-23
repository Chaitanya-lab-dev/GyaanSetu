"use client";

import { LessonView } from "@/components/lesson/lesson-view";
import { mockLesson } from "@/lib/mock/lesson";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TeachingResponse } from "@/lib/tutor/types";

export default function AnswerPage() {
  const [lesson, setLesson] = useState<TeachingResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/mock/lesson");
        if (!res.ok) throw new Error("Unable to load sample lesson.");
        const data = (await res.json()) as TeachingResponse;
        setLesson(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong.");
        setLesson(mockLesson);
      } finally {
        setLoading(false);
      }
    };
    void load();
  }, []);

  return (
    <div className="main-grid">
      <section className="panel">
        <strong className="section-title">Sample answer</strong>
        <p className="section-copy">
          This is a live example of the 6-part lesson the system returns. Try your own question on
          the Ask page.
        </p>
        <LessonView lesson={lesson} loading={loading} error={error} onAskFollowUp={() => window.location.assign("/ask")} />
      </section>
      <section className="panel">
        <strong className="section-title">What you see</strong>
        <ul className="muted">
          <li>Reframed learning goal</li>
          <li>Prerequisite teaching</li>
          <li>Main explanation steps</li>
          <li>Example to make it concrete</li>
          <li>Quick check-for-understanding</li>
          <li>Localized companion view</li>
        </ul>
        <div className="button-row" style={{ marginTop: 16 }}>
          <Link className="button" href="/ask">
            Ask your own question
          </Link>
        </div>
      </section>
    </div>
  );
}
