---
layout: raw.njk
title: "Submit Testimony"
permalink: /submit-testimony.html
main_class: sermon-page
---

<section class="sermon-ui">
  <div class="sermon-shell">
    <div class="sermon-shell-nav">
      <div class="sermon-shell-brand">
        <span class="sermon-brand-dot"></span>
      </div>
      <nav class="sermon-shell-links">
        <a class="sermon-pill" href="/sermons.html">Home</a>
        <a class="sermon-pill" href="/sermons.html#sermon-library">Sermons</a>
        <a class="sermon-pill" href="/teachings.html">Teachings</a>
        <a class="sermon-pill" href="/live.html">Live</a>
        <a class="sermon-pill" href="/books.html">Books</a>
      </nav>
      <a class="sermon-shell-cta" href="#">Donate</a>
    </div>

    <div class="sermon-hero-grid">
      <div class="sermon-hero-text">
        <p class="sermon-hero-eyebrow">Impact City Church</p>
        <h1>Submit Your Testimony</h1>
        <p class="sermon-hero-sub">
          Share what God has done in your life. Your story can strengthen someone else’s faith.
        </p>
        <div class="sermon-hero-actions">
          <a class="play sermon-primary" href="#testimony-form">Start Here</a>
          <a class="ghost-btn sermon-secondary" href="/testimonies.html">View Testimonies</a>
        </div>
        <div class="sermon-hero-meta">
          <div class="sermon-avatars">
            <span class="sermon-avatar"></span>
            <span class="sermon-avatar"></span>
            <span class="sermon-avatar"></span>
          </div>
          <div class="sermon-meta-text">
            We review every submission
          </div>
        </div>
      </div>
      <div class="sermon-hero-image">
        <img src="/hero.jpg" alt="Submit your testimony">
      </div>
    </div>

    <div class="sermon-latest" id="testimony-form">
      <div class="sermon-latest-head">
        <div class="sermon-latest-title">
          <span class="sermon-latest-icon">✚</span>
          Testimony Form
        </div>
      </div>
      <form class="sermon-form" action="#" method="post">
        <div class="sermon-form-grid">
          <label class="sermon-field">
            <span>Full Name</span>
            <input type="text" name="name" placeholder="Your name">
          </label>
          <label class="sermon-field">
            <span>Email</span>
            <input type="email" name="email" placeholder="you@example.com">
          </label>
          <label class="sermon-field">
            <span>Phone</span>
            <input type="tel" name="phone" placeholder="Optional">
          </label>
          <label class="sermon-field">
            <span>Location</span>
            <input type="text" name="location" placeholder="City, State">
          </label>
        </div>
        <label class="sermon-field">
          <span>Your Testimony</span>
          <textarea name="testimony" rows="6" placeholder="Share your testimony in detail..."></textarea>
        </label>
        <label class="sermon-check">
          <input type="checkbox" name="consent">
          <span>I give permission to share this testimony publicly.</span>
        </label>
        <button class="play sermon-primary" type="submit">Submit Testimony</button>
        <p class="sermon-form-note">You can replace this form action with your preferred form provider.</p>
      </form>
    </div>
  </div>
</section>
