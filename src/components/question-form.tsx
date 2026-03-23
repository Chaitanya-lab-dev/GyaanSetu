"use client";

import { supportedLanguages } from "@/lib/tutor/localization";
import { LearningLevel, SupportedLanguage } from "@/lib/tutor/types";
import { FormEvent, useState } from "react";

const SAMPLE_QUESTIONS = [
  "What is photosynthesis?",
  "How do fractions work?",
  "Why do things fall down because of gravity?",
];

const LEVELS: { value: LearningLevel; label: string }[] = [
  { value: "foundation", label: "Foundation" },
  { value: "middle-school", label: "Middle school" },
  { value: "high-school", label: "High school" },
  { value: "youth", label: "Youth learner" },
];

interface QuestionFormProps {
  onSubmit: (payload: { question: string; level: LearningLevel; language: SupportedLanguage }) => Promise<void> | void;
  loading?: boolean;
  error?: string | null;
}

export function QuestionForm({ onSubmit, loading, error }: QuestionFormProps) {
  const [question, setQuestion] = useState(
    "Why do plants need sunlight? Please explain like I am in class 6.",
  );
  const [language, setLanguage] = useState<SupportedLanguage>("hindi");
  const [level, setLevel] = useState<LearningLevel>("middle-school");

  function submitQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void onSubmit({ question, language, level });
  }

  return (
    <form className="form-grid" onSubmit={submitQuestion}>
      <div className="composer-note">
        <strong>Teaching mode</strong>
        <p>
          GyaanSetu replies in six parts: learning goal, prerequisites, main
          explanation, example, understanding check, and localized companion.
        </p>
      </div>

      <div className="field-row">
        <label htmlFor="student-question">Student question</label>
        <textarea
          id="student-question"
          className="textarea"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Ask in natural language. The system will reframe and teach, not just answer."
        />
      </div>

      <div className="section-grid split-grid">
        <div className="field-row">
          <label htmlFor="learning-level">Learner stage</label>
          <select
            id="learning-level"
            className="select"
            value={level}
            onChange={(event) => setLevel(event.target.value as LearningLevel)}
          >
            {LEVELS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div className="field-row">
          <label htmlFor="language">Localized companion language</label>
          <select
            id="language"
            className="select"
            value={language}
            onChange={(event) => setLanguage(event.target.value as SupportedLanguage)}
          >
            {supportedLanguages.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="helper-row">
        {SAMPLE_QUESTIONS.map((sample) => (
          <button
            key={sample}
            className="sample-pill"
            type="button"
            onClick={() => setQuestion(sample)}
            disabled={loading}
          >
            {sample}
          </button>
        ))}
      </div>

      {error ? <div className="alert">{error}</div> : null}

      <div className="button-row">
        <button className="button" type="submit" disabled={loading}>
          {loading ? "Building lesson..." : "Teach this step by step"}
        </button>
        <button
          className="button-secondary soft-button"
          type="button"
          disabled={loading}
          onClick={() => {
            setQuestion("");
            setLanguage("hindi");
            setLevel("middle-school");
          }}
        >
          Clear
        </button>
      </div>

      <div className="safety-banner">
        <strong>Child-safety default</strong>
        <p>
          The assistant is designed to keep learning support inside the product
          instead of pushing students toward direct contact with unknown adults.
        </p>
      </div>
    </form>
  );
}
