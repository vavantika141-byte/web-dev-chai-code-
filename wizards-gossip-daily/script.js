document.addEventListener('DOMContentLoaded', () => {
  createStarfield(120);
  setupIntersectionReveal();
});

function createStarfield(count) {
  const container = document.querySelector('.starfield');
  if (!container) return;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const star = document.createElement('span');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = (Math.random() * 4).toFixed(2) + 's';
    star.style.transform = `scale(${(Math.random() * 0.8 + 0.6).toFixed(2)})`;
    frag.appendChild(star);
  }
  container.appendChild(frag);
}

function setupIntersectionReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  elements.forEach(el => observer.observe(el));
}