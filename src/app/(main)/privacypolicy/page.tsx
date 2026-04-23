"use client";

import Link from "next/link";

const policySections = [
  {
    title: "Data Collection",
    body: "Salaah Times Botswana is an offline-first app and does not collect personal data from users.",
  },
  {
    title: "Data Storage",
    body: "We do not store personal user data on remote servers or in-app profiles because no account or cloud storage is required.",
  },
  {
    title: "Data Processing",
    body: "Prayer time functionality is based on pre-loaded and local app logic. We do not process personal user information to provide core features.",
  },
  {
    title: "User Data Protection",
    body: "Because no personal user data is collected or retained, there is no personal dataset used for profiling, selling, or third-party tracking.",
  },
  {
    title: "Policy Updates",
    body: "This policy may be updated to reflect product changes. Any updates will appear on this page with a revised effective date.",
  },
  {
    title: "Acknowledgement",
    body: "By using the app, you acknowledge you have read and understood this privacy policy.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="app-shell privacy-shell">
      <section className="privacy-hero">
        <div className="privacy-hero-bg" />
        <p className="pill">Privacy Policy</p>
        <h1>Your prayer routine stays private.</h1>
        <p className="lead">
          Salaah Times Botswana is designed as an offline-first experience with minimal data handling.
        </p>
      </section>

      <section className="content-wrap">
        <div className="privacy-card">
          {policySections.map((section) => (
            <article key={section.title} className="privacy-section">
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}

          <article className="privacy-section privacy-contact">
            <h2>Contact Us</h2>
            <p>
              For any privacy questions, email{" "}
              <a href="mailto:zaidhimran2000@gmail.com">zaidhimran2000@gmail.com</a>.
            </p>
          </article>

          <div className="privacy-footer-row">
            <span>Effective date: 22 June 2025</span>
            <Link href="/" className="text-link">Back to home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}