// Parallax za bedž (malko prati miša)
const badge = document.querySelector('.badge-float');
if (badge) {
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    badge.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// Scroll-reveal animacije
const io = new IntersectionObserver((entries) => {
  entries.forEach(ent => {
    if (ent.isIntersecting) {
      ent.target.classList.add('revealed');
      io.unobserve(ent.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal-up').forEach(el => io.observe(el));

// Contact forma – otvori mailtto sa pre-popunjenim subject/body
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const project = data.get('project') || 'General';
    const message = data.get('message') || '';

    const subject = encodeURIComponent(`New inquiry — ${project}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject: ${project}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:tsolutionsdev@outlook.com?subject=${subject}&body=${body}`;
  });
}
