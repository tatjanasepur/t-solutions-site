(() => {
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];

  // Year in footer
  $$('#year').forEach(n => n.textContent = new Date().getFullYear());

  // Typewriter (sporije, elegantno)
  const tw = $('#typewriter');
  if (tw){
    const full = tw.dataset.type || 'T•Solutions';
    let i = 0;
    const SPEED = 70; // ms per char (povećaj broj za još sporije)
    const t = setInterval(() => {
      tw.textContent = full.slice(0, i++);
      if (i > full.length) clearInterval(t);
    }, SPEED);
  }

  // Scroll reveal
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e => {
      if (e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
    });
  }, {threshold:.12});
  $$('.reveal').forEach(el => io.observe(el));

  // Blagi tilt za kartice
  $$('.card[data-tilt]').forEach(card => {
    let rect;
    const onMove = (e) => {
      rect = rect || card.getBoundingClientRect();
      const x=(e.clientX-rect.left)/rect.width-.5;
      const y=(e.clientY-rect.top)/rect.height-.5;
      card.style.transform = `rotateX(${(-y*4).toFixed(2)}deg) rotateY(${(x*4).toFixed(2)}deg) translateY(-2px)`;
    };
    const reset = () => card.style.transform = '';
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', reset);
  });

  // I18n
  const dict = {
    en: {
      'nav.home':'Home','nav.services':'Services','nav.qr':'QR Menus','nav.websites':'Websites','nav.apps':'Business Apps','nav.about':'About',
      'hero.tagline':'Modern solutions that feel tailor-made for your business.',
      'pitch.title':'Need a modern solution for your business?','pitch.body':'You came to the right place. Find out more about our offers below.',
      'cards.qr.title':'QR Menus for Restaurants','cards.qr.body':'Contactless ordering per table with unique QR codes. Orders go straight to the bar/POS.',
      'cards.web.title':'Custom Websites','cards.web.body':'From landing pages to full sites: bookings, pricing, offers, and conversions.',
      'cards.apps.title':'Business Apps','cards.apps.body':'CRM, inventory, expenses, time tracking — built to your process, not the other way around.',
      'cards.learn':'Learn more',
      'contact.title':'Let’s talk','contact.desc':'Tell us about your idea. We’ll reply with a plan and timeline.','contact.email':'Your email','contact.message':'Message','contact.send':'Send','contact.hint':'(Messages go to tsolutionsdev@outlook.com.)',
      'footer.rights':'All rights reserved.',
      'qr.title':'QR Menus for Tables','qr.subtitle':'Unique QR per table → scan, order, and the POS gets the order instantly.','qr.how.title':'How it works',
      'qr.how.1':'Each table has a unique QR code with its table number.','qr.how.2':'Guests scan → see menu on their phone → place order.','qr.how.3':'Order appears on the bar/kitchen POS with the correct table.','qr.how.4':'Staff confirms/serves. No waiting, faster turnover.',
      'qr.why.title':'Why it’s great','qr.why.1':'Less walking for staff, more attention where it matters.','qr.why.2':'Guests order immediately — no waiting for a waiter.','qr.why.3':'Upsell with photos, combos, and specials.','qr.why.4':'Clean itemized bill by table for easy checkout.',
      'web.title':'Custom Websites that Convert','web.subtitle':'Show up with a beautiful, fast, mobile-first website tailored to your business.','web.examples.title':'Examples by niche',
      'web.examples.1':'Gym: bookings, schedule, trainers, pricing, locations.','web.examples.2':'Boutique: products, inventory, checkout, featured items.','web.examples.3':'Restaurant: menu, specials, delivery/pickup integrations.','web.examples.4':'Services: portfolio, contact, testimonials, lead forms.',
      'web.cta.title':'What you get','web.cta.1':'Design system (colors, type, components)','web.cta.2':'SEO & analytics ready','web.cta.3':'Fast hosting (GitHub Pages/Netlify)','web.cta.4':'Easy editing for you','web.cta.btn':'Get a quote',
      'apps.title':'Apps that fit your process','apps.subtitle':'Don’t adapt to tools — let tools adapt to your business.','apps.cards.1.title':'CRM & Sales','apps.cards.1.body':'Leads, pipeline, reminders, tasks, and reporting in one place.',
      'apps.cards.2.title':'Inventory & Orders','apps.cards.2.body':'Stock levels, QR/Barcodes, suppliers, and automatic invoices.','apps.cards.3.title':'Costs & Time','apps.cards.3.body':'Expenses, cost centers, time tracking, and leave management.',
      'apps.why.title':'Why hire T•Solutions?','apps.why.1':'We build exactly what you imagine — no bloat.','apps.why.2':'Data you can export any time.','apps.why.3':'Clear docs & training for your team.','apps.why.4':'Scales from 3 to 300 users.',
      'about.title':'Why T•Solutions','about.subtitle':'We avoid templates. We build what fits you and feels like you.','about.values.title':'Values',
      'about.values.1':'Unique design — no cookie-cutter.','about.values.2':'Performance & accessibility first.','about.values.3':'Clarity, docs, and handover.','about.values.4':'Iterate with you, not at you.',
      'about.for.title':'For whom','about.for.1':'Restaurants & cafés → QR menus + POS.','about.for.2':'Businesses that need a site that sells.','about.for.3':'Firms that need internal apps.'
    },
    sr: {
      'nav.home':'Početna','nav.services':'Usluge','nav.qr':'QR meniji','nav.websites':'Veb-sajtovi','nav.apps':'Poslovne aplikacije','nav.about':'O nama',
      'hero.tagline':'Moderna rešenja skrojena po meri vašeg biznisa.',
      'pitch.title':'Trebate moderno rešenje za vaš biznis?','pitch.body':'Na pravom ste mestu. Saznajte više o našim ponudama ispod.',
      'cards.qr.title':'QR meniji za restorane','cards.qr.body':'Poručivanje po stolu preko jedinstvenog QR koda. Nalog stiže direktno na POS.',
      'cards.web.title':'Prilagođeni veb-sajtovi','cards.web.body':'Od landing strane do kompletnog sajta: zakazivanje, cene, ponude i konverzije.',
      'cards.apps.title':'Poslovne aplikacije','cards.apps.body':'CRM, lager, troškovi, evidencija vremena — alat po vašem procesu.',
      'cards.learn':'Saznaj više',
      'contact.title':'Pišite nam','contact.desc':'Recite nam ideju. Odgovaramo planom i rokovima.','contact.email':'Vaš email','contact.message':'Poruka','contact.send':'Pošalji','contact.hint':'(Poruke stižu na tsolutionsdev@outlook.com.)',
      'footer.rights':'Sva prava zadržana.',
      'qr.title':'QR meniji po stolovima','qr.subtitle':'Jedinstven QR za svaki sto → skeniraj, poruči, POS dobija nalog odmah.','qr.how.title':'Kako radi',
      'qr.how.1':'Svaki sto ima QR kod sa svojim brojem.','qr.how.2':'Gosti skeniraju → vide meni na telefonu → poruče.','qr.how.3':'Nalog stiže na bar/kuhinju sa tačnim stolom.','qr.how.4':'Osoblje potvrđuje/služi. Manje čekanja, brža smena stolova.',
      'qr.why.title':'Zašto je odlično','qr.why.1':'Manje hodanja, više fokusa gde treba.','qr.why.2':'Gosti poručuju odmah — bez čekanja konobara.','qr.why.3':'Upsell kroz fotografije, kombo ponude i specijale.','qr.why.4':'Jasan račun po stolu za lako plaćanje.',
      'web.title':'Sajtovi koji konvertuju','web.subtitle':'Pojavite se sa lepim, brzim, mobile-first sajtom prilagođenim vašem biznisu.','web.examples.title':'Primeri po nišama',
      'web.examples.1':'Teretana: zakazivanje, raspored, treneri, cene, lokacije.','web.examples.2':'Butik: proizvodi, lager, kupovina, istaknute stavke.','web.examples.3':'Restoran: meni, specijali, dostava/preuzimanje integracije.','web.examples.4':'Usluge: portfolio, kontakt, utisci, lead forme.',
      'web.cta.title':'Šta dobijate','web.cta.1':'Dizajn sistem (boje, tipografija, komponente)','web.cta.2':'SEO i analitika spremni','web.cta.3':'Brz hosting (GitHub Pages/Netlify)','web.cta.4':'Jednostavno uređivanje','web.cta.btn':'Zatraži ponudu',
      'apps.title':'Aplikacije po vašem procesu','apps.subtitle':'Ne prilagođavajte se alatima — neka se alati prilagode vama.','apps.cards.1.title':'CRM i prodaja','apps.cards.1.body':'Leadovi, pipeline, podsetnici, zadaci i izveštaji na jednom mestu.',
      'apps.cards.2.title':'Lager i nalozi','apps.cards.2.body':'Stanje zaliha, QR/bar kodovi, dobavljači i automatske fakture.','apps.cards.3.title':'Troškovi i vreme','apps.cards.3.body':'Troškovi, centri troškova, evidencija vremena i odmori.',
      'apps.why.title':'Zašto T•Solutions?','apps.why.1':'Pravimo baš ono što vam treba — bez balasta.','apps.why.2':'Podaci su vaši — izvoz kad god želite.','apps.why.3':'Jasna dokumentacija i obuka tima.','apps.why.4':'Skalira od 3 do 300 korisnika.',
      'about.title':'Zašto T•Solutions','about.subtitle':'Bez šablona. Gradimo ono što vama odgovara i liči na vas.','about.values.title':'Vrednosti',
      'about.values.1':'Jedinstven dizajn — bez kalupa.','about.values.2':'Performanse i pristupačnost na prvom mestu.','about.values.3':'Jasnoća, dokumentacija i predaja.','about.values.4':'Iteriramo sa vama, ne mimo vas.',
      'about.for.title':'Za koga','about.for.1':'Restorani i kafići → QR meniji + POS.','about.for.2':'Biznisi kojima treba sajt koji prodaje.','about.for.3':'Firme kojima trebaju interne aplikacije.'
    }
  };

  const setLang = (lang) => {
    const strings = dict[lang] || dict.en;
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (strings[key]) el.textContent = strings[key];
    });
    localStorage.setItem('lang', lang);
    $$('.lang-switch button').forEach(b => b.classList.toggle('active', b.dataset.lang===lang));
  };
  setLang(localStorage.getItem('lang') || 'en');
  $$('.lang-switch button').forEach(b => b.addEventListener('click', ()=> setLang(b.dataset.lang)));

  // Theme toggle with memory + system default
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const getTheme = () => localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
  const applyTheme = (t) => {
    document.documentElement.setAttribute('data-theme', t);
    const btn = $('#themeToggle');
    if (btn) btn.textContent = (t === 'light') ? '🌙' : '☀️';
    localStorage.setItem('theme', t);
  };
  applyTheme(getTheme());
  const themeBtn = $('#themeToggle');
  if (themeBtn){
    themeBtn.addEventListener('click', () => {
      const next = (document.documentElement.getAttribute('data-theme') === 'light') ? 'dark' : 'light';
      applyTheme(next);
    });
  }

  // Contact form → serverless API (/api/contact)
  const form = $('#contactForm');
  if (form){
    const emailInput = form.querySelector('input[name="from_email"]');
    const msgInput   = form.querySelector('textarea[name="message"]');
    const sendBtn    = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const hp = form.querySelector('.hp'); // honeypot
      if (hp && hp.value) return;

      if (!emailInput.value || !msgInput.value) return;

      sendBtn.disabled = true;
      const original = sendBtn.textContent;
      sendBtn.textContent = (document.documentElement.lang==='sr') ? 'Šaljem…' : 'Sending…';

      try{
        const res = await fetch('/api/contact', {
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({ from_email: emailInput.value, message: msgInput.value })
        });
        if(!res.ok) throw new Error('Send failed');

        sendBtn.textContent = (document.documentElement.lang==='sr') ? 'Poslato ✔' : 'Sent ✔';
        msgInput.value = '';
      }catch(err){
        console.error(err);
        alert((document.documentElement.lang==='sr')?'Slanje nije uspelo. Pokušajte ponovo.':'Sending failed. Please try again.');
        sendBtn.textContent = (document.documentElement.lang==='sr')?'Pokušaj ponovo':'Try again';
      }finally{
        setTimeout(()=>{ sendBtn.disabled=false; sendBtn.textContent = original; }, 1500);
      }
    });
  }
})();
