(() => {
  const $  = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];

  // Footer year
  const y = new Date().getFullYear();
  $$('#year').forEach(n => n.textContent = y);

  // Typewriter (hero T•Solutions)
  const tw = $('#typewriter');
  if (tw){
    const full = tw.dataset.type || 'T•Solutions';
    let i = 0;
    const step = () => {
      tw.textContent = full.slice(0, i++);
      if (i <= full.length) requestAnimationFrame(step);
    };
    setTimeout(step, 300);
  }

  // Scroll reveal
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e => {
      if (e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
    });
  }, {threshold: .12});
  $$('.reveal').forEach(el => io.observe(el));

  // Tiny glass tilt on hover
  $$('.card[data-tilt]').forEach(card => {
    let rect;
    const onMove = (e) => {
      rect = rect || card.getBoundingClientRect();
      const x = (e.clientX - rect.left)/rect.width - .5;
      const y = (e.clientY - rect.top)/rect.height - .5;
      card.style.transform =
        `rotateX(${(-y*4).toFixed(2)}deg) rotateY(${(x*4).toFixed(2)}deg) translateY(-2px)`;
    };
    const reset = () => card.style.transform = '';
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', reset);
  });

  // Minimal i18n (EN/SR). Svi tekstovi su mapirani preko data-i18n ključeva u HTML-u.
  const dict = {
    en: {
      'nav.services':'Services','nav.qr':'QR Menus','nav.websites':'Websites','nav.apps':'Business Apps',
      'nav.about':'About','nav.contact':'Contact',
      'hero.tagline':'Modern solutions that feel tailor-made for your business.',
      'pitch.title':'Need a modern solution for your business?',
      'pitch.body':'You came to the right place. Find out more about our offers below.',
      'cards.qr.title':'QR Menus for Restaurants',
      'cards.qr.body':'Contactless ordering per table with unique QR codes. Orders go straight to the bar/POS.',
      'cards.web.title':'Custom Websites',
      'cards.web.body':'From landing pages to full sites: bookings, pricing, offers, and conversions.',
      'cards.apps.title':'Business Apps',
      'cards.apps.body':'CRM, inventory, expenses, time tracking — built to your process, not the other way around.',
      'cards.learn':'Learn more',
      'contact.title':'Let’s talk','contact.desc':'Tell us about your idea. We’ll reply with a plan and timeline.',
      'contact.email':'Your email','contact.message':'Message','contact.send':'Send',
      'contact.hint':'(API hookup to tsolutionsdev@outlook.com coming next.)',
      'footer.rights':'All rights reserved.'
    },
    sr: {
      'nav.services':'Usluge','nav.qr':'QR Meniji','nav.websites':'Veb-sajtovi','nav.apps':'Poslovne aplikacije',
      'nav.about':'O nama','nav.contact':'Kontakt',
      'hero.tagline':'Moderna rešenja skrojena po meri vašeg biznisa.',
      'pitch.title':'Trebate moderno rešenje za vaš biznis?',
      'pitch.body':'Na pravom ste mestu. Saznajte više o našim ponudama ispod.',
      'cards.qr.title':'QR meniji za restorane',
      'cards.qr.body':'Poručivanje po stolu preko jedinstvenog QR koda. Nalog stiže direktno na POS.',
      'cards.web.title':'Prilagođeni veb-sajtovi',
      'cards.web.body':'Od landing strane do kompletnog sajta: zakazivanje, cene, ponude i konverzije.',
      'cards.apps.title':'Poslovne aplikacije',
      'cards.apps.body':'CRM, lager, troškovi, evidencija vremena — alat po vašem procesu.',
      'cards.learn':'Saznaj više',
      'contact.title':'Pišite nam','contact.desc':'Recite nam ideju. Odgovaramo planom i rokovima.',
      'contact.email':'Vaš email','contact.message':'Poruka','contact.send':'Pošalji',
      'contact.hint':'(Povezivanje sa tsolutionsdev@outlook.com stiže u sledećem koraku.)',
      'footer.rights':'Sva prava zadržana.'
    }
  };

  const setLang = (lang) => {
    const strings = dict[lang] || dict.en;
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    $$('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (strings[key]) el.textContent = strings[key];
    });
    localStorage.setItem('lang', lang);
    $$('.lang-switch button').forEach(b => {
      const active = b.dataset.lang === lang;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  };

  const saved = localStorage.getItem('lang') || 'en';
  setLang(saved);
  $$('.lang-switch button').forEach(b => b.addEventListener('click', ()=> setLang(b.dataset.lang)));
})();
