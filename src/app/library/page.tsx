"use client";

import { mockLibrary } from "@/lib/mock/lesson";
import Link from "next/link";

export default function LibraryPage() {
  return (
    <div className="panel">
      <div className="panel-header">
        <span className="section-tag">Saved lessons</span>
        <strong className="section-title">Your knowledge library</strong>
      </div>
      <p className="section-copy">Saved lessons are stored locally for now. Add persistence later.</p>

      <div className="filter-row">
        <input className="input" placeholder="Search saved lessons (mock)" />
        <select className="select">
          <option>All languages</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Kannada</option>
        </select>
      </div>

      <div className="library-grid">
        {mockLibrary.map((item) => (
          <article key={item.id} className="library-card">
            <div>
              <strong>{item.title}</strong>
              <p className="muted">{item.summary}</p>
              <div className="pill-row">
                <span className="pill">{item.language}</span>
                <span className="pill">Saved {item.savedAt}</span>
              </div>
            </div>
            <div className="button-row">
              <Link className="button-secondary" href={`/answer?lesson=${item.id}`}>
                Open
              </Link>
              <button className="button-secondary soft-button" type="button">
                Remove
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
