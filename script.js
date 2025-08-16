// ===== Year in footer
const yEl = document.getElementById('y');
if (yEl) yEl.textContent = new Date().getFullYear();

// ===== Parallax for logo
const hero = document.querySelector('.hero');
const heroLogo = document.querySelector('.hero-logo');

let targetX = 0, targetY = 0, curX = 0, curY = 0;
const lerp = (a,b,t)=>a+(b-a)*t;

if (hero && heroLogo){
  hero.addEventListener('mousemove', (e)=>{
    const r = hero.getBoundingClientRect();
    const nx = (e.clientX - r.left)/r.width - 0.5;
    const ny = (e.clientY - r.top)/r.height - 0.5;
    targetX = nx * 70;
    targetY = ny * 70;
  });
  (function tick(){
    curX = lerp(curX, targetX, 0.08);
    curY = lerp(curY, targetY, 0.08);
    heroLogo.style.transform = `translate3d(${curX}px,${curY}px,0)`;
    requestAnimationFrame(tick);
  })();
}

// ===== Typing effect
const phrases = [
  "Need a responsive personalized website?",
  "Need a custom app?",
  "Need a game or AI solution?"
];
const headline = document.getElementById('typing-headline');

if (headline){
  let p=0, i=0, del=false;
  const typeSpeed=50, delSpeed=32, holdType=1200, holdDel=300;

  function tick(){
    const full = phrases[p];
    if (!del){
      i=Math.min(i+1, full.length);
      headline.textContent=full.slice(0,i);
      if (i===full.length){
        setTimeout(()=>{ del=true; requestAnimationFrame(tick); }, holdType);
        return;
      }
      setTimeout(()=>requestAnimationFrame(tick), typeSpeed);
    } else {
      i=Math.max(i-1, 0);
      headline.textContent=full.slice(0,i);
      if (i===0){
        del=false; p=(p+1)%phrases.length;
        setTimeout(()=>requestAnimationFrame(tick), holdDel);
        return;
      }
      setTimeout(()=>requestAnimationFrame(tick), delSpeed);
    }
  }
  tick();
}

// ===== Scroll reveal for services
const services = document.querySelectorAll('.card.service');
if (services.length){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('reveal-in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold:0.15 });
  services.forEach(el=>obs.observe(el));
}
