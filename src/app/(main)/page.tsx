"use client";

import Link from "next/link";

function StoreCTAs() {
  return (
    <div className="store-cta-row">
      <a
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
        className="store-cta-button app-store"
      >
        <img
          src="/images/store-badges/apple-app-store-icon.svg"
          alt="App Store icon"
          className="store-cta-icon"
          width={40}
          height={40}
        />
        <span>App Store</span>
      </a>
      <a
        href="https://play.google.com/store/apps"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
        className="store-cta-button google-play"
      >
        <img
          src="/images/store-badges/google-play-store-icon.svg"
          alt="Google Play icon"
          className="store-cta-icon"
          width={40}
          height={40}
        />
        <span>Google Play</span>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div className="app-shell">
      <section className="hero-onboarding">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="pill">Salaah Times Botswana</p>
          <h1>Enhance your prayer journey.</h1>
          <p className="lead">
            Select your city, and pray on time with Ja'maah
          </p>
          <h2>Download the app now</h2>
          <StoreCTAs />
        </div>
      </section>

      <section className="content-wrap" id="features">
        {/* <h2 className="section-title">Build your daily routine around your prayers</h2> */}
        <div className="card-grid">
          <article className="glass-card">
            <h2>Accurate Daily Timings</h2>
            <p>Get clear prayer times for your city with a calm and readable experience.</p>
          </article>
          <article className="glass-card">
            <h2>Pray 5 times a day with Jam'aah</h2>
            <p>Find nearby masaajid and plan to join ja&apos;maah before the iqaamah.</p>
          </article>
          <article className="glass-card">
            <h2>Zero Data Usage</h2>
            <p>Have access to prayer times, fully off-line, wherever you are.</p>
          </article>
        </div>
      </section>

      <section className="content-wrap">
        
          <Link href="/privacypolicy" className="text-link">Read privacy policy</Link>
      </section>
    </div>
  );
}
