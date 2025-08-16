/* Scroll reveal */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* Simple parallax for the badge */
const badge = document.querySelector('.parallax');
if (badge) {
  window.addEventListener('mousemove', (e) => {
    const { innerWidth: w, innerHeight: h } = window;
    const x = (e.clientX - w/2) / w;   // -0.5 .. 0.5
    const y = (e.clientY - h/2) / h;
    badge.style.transform = `translate(${x * 14}px, ${y * 14}px)`;
  });
}
