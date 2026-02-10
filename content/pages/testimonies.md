---
layout: raw.njk
title: "Testimonies"
permalink: /testimonies.html
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
        <h1>Testimonies of Transformation</h1>
        <p class="sermon-hero-sub">
          Celebrate the stories of healing, provision, and breakthrough happening across our community.
        </p>
        <div class="sermon-hero-actions">
          <a class="play sermon-primary" href="#testimony-library">View Testimonies</a>
          <a class="ghost-btn sermon-secondary" href="/submit-testimony.html">Share Yours</a>
        </div>
        <div class="sermon-hero-meta">
          <div class="sermon-avatars">
            <span class="sermon-avatar"></span>
            <span class="sermon-avatar"></span>
            <span class="sermon-avatar"></span>
          </div>
          <div class="sermon-meta-text">
            Faith stories • Lives restored
          </div>
        </div>
      </div>
      <div class="sermon-hero-image">
        <img src="/desert.jpeg" alt="Testimony gathering">
      </div>
    </div>

    <div class="sermon-latest" id="testimony-library">
      <div class="sermon-latest-head">
        <div class="sermon-latest-title">
          <span class="sermon-latest-icon">★</span>
          Latest Testimonies
        </div>
      </div>
      <div class="sermon-latest-row">
        {% for item in collections.testimonies | reverse %}
        <a class="sermon-latest-card" href="{{ item.url }}">
          {% if item.data.thumbnail %}
          <img src="{{ item.data.thumbnail }}" alt="{{ item.data.title }}">
          {% endif %}
          <div class="sermon-latest-meta">
            <h3>{{ item.data.title }}</h3>
            <p>{{ item.data.category or "Testimony" }} • {{ item.date | year }}</p>
          </div>
        </a>
        {% endfor %}
      </div>
    </div>
  </div>
</section>
