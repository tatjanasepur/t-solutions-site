// Scroll-reveal: nežno pojavljuje elemente dok skroluješ
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Ako želiš aktivan link u nav-u (po stranici), već stavljamo .active u HTML-u.
// Ovo ostavljam kao fallback ako budeš router-ovala u budućnosti:
// const path = location.pathname.split('/').pop() || 'index.html';
// document.querySelectorAll('.main-nav .nav-link').forEach(a => {
//   if (a.getAttribute('href') === path) a.classList.add('active');
// });
