export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>GyaanSetu</strong>
        <p>Teaching-first AI for learners across India.</p>
      </div>
      <div className="footer-links">
        <a href="/docs/architecture" aria-disabled>
          Architecture
        </a>
        <a href="/docs/api" aria-disabled>
          API
        </a>
        <a href="/docs/safety" aria-disabled>
          Safety
        </a>
      </div>
    </footer>
  );
}
