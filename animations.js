document.documentElement.classList.add("js-enabled");

const revealGroups = [
  ".hero-content",
  ".sermon-hero-text"
];

const revealSelectors = "h1, h2, p, .sermon-hero-actions, .sermon-hero-meta, .hero-controls, .play, .ghost-btn, .app-btn";

const revealElements = [];

revealGroups.forEach((selector) => {
  const group = document.querySelector(selector);
  if (!group) return;

  const items = group.querySelectorAll(revealSelectors);
  items.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.transitionDelay = `${index * 80}ms`;
    revealElements.push(item);
  });
});

requestAnimationFrame(() => {
  revealElements.forEach((el) => el.classList.add("is-visible"));
});
