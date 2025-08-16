// Year in footer
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();

// Scroll reveal
const reveal = document.querySelectorAll('.reveal');
if (reveal.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  reveal.forEach(el => io.observe(el));
}

// Blaga parallax reakcija na miša za badge
const badge = document.querySelector('.badge-float');
if (badge) {
  const parent = badge.parentElement;
  parent.addEventListener('mousemove', (e) => {
    const rect = parent.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    badge.style.transform = `translate(${x*10}px, ${-6 + y*-6}px)`;
  });
  parent.addEventListener('mouseleave', () => {
    badge.style.transform = 'translate(0, 0)';
  });
}
