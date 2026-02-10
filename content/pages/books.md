---
layout: raw.njk
title: "Books"
permalink: /books.html
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
        <a class="sermon-pill active" href="/books.html">Books</a>
      </nav>
      <a class="sermon-shell-cta" href="#">Donate</a>
    </div>

    <div class="sermon-hero-grid">
      <div class="sermon-hero-text">
        <p class="sermon-hero-eyebrow">Impact City Church</p>
        <h1>Books to Keep the Fire Burning</h1>
        <p class="sermon-hero-sub">
          Explore resources written to inspire prayer, ignite purpose, and equip you for consistent spiritual growth.
        </p>
        <div class="sermon-hero-actions">
          <a class="play sermon-primary" href="#book-library">Browse Books</a>
          <a class="ghost-btn sermon-secondary" href="/sermons.html">Watch Sermons</a>
        </div>
        <div class="sermon-hero-meta">
          <div class="sermon-avatars">
            <span class="sermon-avatar"></span>
            <span class="sermon-avatar"></span>
            <span class="sermon-avatar"></span>
          </div>
          <div class="sermon-meta-text">
            Devotionals • Leadership • Kingdom culture
          </div>
        </div>
      </div>
      <div class="sermon-hero-image">
        <img src="/keep the fire.jpg" alt="Keep the Fire">
      </div>
    </div>

    <div class="sermon-latest" id="book-library">
      <div class="sermon-latest-head">
        <div class="sermon-latest-title">
          <span class="sermon-latest-icon">★</span>
          Featured Books
        </div>
      </div>
      <div class="sermon-latest-row">
        {% for item in collections.books | reverse %}
        <a class="sermon-latest-card" href="{{ item.url }}">
          {% if item.data.cover %}
          <img src="{{ item.data.cover }}" alt="{{ item.data.title }}">
          {% endif %}
          <div class="sermon-latest-meta">
            <h3>{{ item.data.title }}</h3>
            <p>{{ item.data.format or "Book" }} • {{ item.date | year }}</p>
          </div>
        </a>
        {% endfor %}
      </div>
    </div>
  </div>
</section>
