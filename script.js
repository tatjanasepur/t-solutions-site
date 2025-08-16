// Year in footer
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();

// Scroll reveal za kartice (čisto i moderno)
const services = document.querySelectorAll('.card.service');
if (services.length){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if (e.isIntersecting){ e.target.classList.add('reveal-in'); obs.unobserve(e.target); }
    });
  }, { threshold: .15 });
  services.forEach(el=>obs.observe(el));
}
