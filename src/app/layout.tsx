import "@/app/globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "GyaanSetu | Teaching-first AI for learners",
  description:
    "GyaanSetu is an educational MVP that reframes student questions, teaches prerequisites, and explains concepts like a human tutor.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
