document.addEventListener("DOMContentLoaded", () => {
 
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");

  function applyTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
      root.setAttribute("data-theme", "dark");
    }
    localStorage.setItem("tsolutions-theme", theme);
  }


  const savedTheme = localStorage.getItem("tsolutions-theme") || "dark";
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current =
        root.getAttribute("data-theme") === "light" ? "light" : "dark";
      const next = current === "light" ? "dark" : "light";
      applyTheme(next);
    });
  }

  
  const translations = {
    en: {
      // NAV
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.qr": "QR Menus",
      "nav.websites": "Websites",
      "nav.apps": "Business Apps",
      "nav.about": "About",

      // FOOTER
      "footer.rights": "All rights reserved.",

      // INDEX (home)
      "hero.tagline": "We turn your ideas into practical digital products.",
      "pitch.title": "Ready to grow your business online?",
      "pitch.body":
        "Let’s make your website, app or digital system simple, modern and effective.",
      "cards.qr.title": "QR Menus for Restaurants",
      "cards.qr.body":
        "Simple digital menus your guests love — scan, order and enjoy.",
      "cards.web.title": "Custom Websites",
      "cards.web.body":
        "Fast, modern websites that attract customers and build trust.",
      "cards.apps.title": "Business Apps",
      "cards.apps.body":
        "Smart apps that save time and keep your business organized.",
      "cards.learn": "Learn more",

      "contact.title": "Let’s talk",
      "contact.desc": "Tell us your idea. We’ll turn it into a solution.",
      "contact.name": "Your name",
      "contact.email": "Your email",
      "contact.message": "Message",
      "contact.send": "Send",

      // ABOUT
      "about.title": "Why T•Solutions",
      "about.subtitle":
        "We don’t just build websites — we build confidence in your brand. Every project is unique, fast, and designed to impress at first sight.",
      "about.values.title": "Solutions",
      "about.values.1":
        "Custom digital experiences tailored to your vision and business goals.",
      "about.values.2":
        "Elegant web design and smart business apps that simplify your workflow.",
      "about.values.3":
        "Fast, reliable, and designed to leave a lasting impression on every user.",
      "about.values.4":
        "Your success is our process — we grow together, not apart.",
      "about.for.title": "For whom",
      "about.for.1":
        "Restaurants and cafés that want to modernize with QR menus and digital style.",
      "about.for.2":
        "Growing brands that need a recognizable digital identity and higher sales.",
      "about.for.3":
        "Companies that need applications that bring efficiency, accuracy, and less stress to their business.",
      "about.social.title": "Find us on social media",

      // QR PAGE
      "qr.metaTitle": "QR Menus — T•Solutions",
      "qr.title": "QR menus for restaurants and cafés",
      "qr.subtitle":
        "A simple digital menu — scan, order, enjoy. No installation.",

      "qr.how.heading": "How it works",
      "qr.how.1.t": "Scan",
      "qr.how.1": "Guest scans the QR code and opens the menu.",
      "qr.how.2.t": "Choose",
      "qr.how.2": "Adds items to the cart and leaves a note for the kitchen.",
      "qr.how.3.t": "Order",
      "qr.how.3": "The order arrives to staff in real time.",
      "qr.how.4.t": "Enjoy",
      "qr.how.4": "Preparation and service are faster.",
      "qr.how.5.t": "Bill",
      "qr.how.5": "Guest chooses payment method and asks for the bill.",

      "qr.why.heading": "Why choose T•Solutions QR menus",
      "qr.benefits.1.t": "Autonomy",
      "qr.benefits.1.d":
        "Guests build their own order and see the total — fewer mistakes.",
      "qr.benefits.2.t": "Comfort",
      "qr.benefits.2.d":
        "Ordering, asking for the bill and calling the waiter in a few taps.",
      "qr.benefits.3.t": "Speed",
      "qr.benefits.3.d":
        "Orders arrive in real time — faster preparation and service.",
      "qr.benefits.4.t": "Detailed info",
      "qr.benefits.4.d":
        "Photos, descriptions and notes for every menu item.",
      "qr.benefits.5.t": "Flexibility",
      "qr.benefits.5.d":
        "Live menu changes; hide unavailable items with one click.",
      "qr.benefits.6.t": "Multi-language",
      "qr.benefits.6.d":
        "Menu in multiple languages, staff receives messages in their native language.",

      "qr.guests.title": "FEATURES for GUESTS",
      "qr.guests.1": "Open the menu by scanning a QR code.",
      "qr.guests.2": "Choose the menu language.",
      "qr.guests.3": "Browse, add to cart and leave notes for the kitchen.",
      "qr.guests.4":
        "Send orders with table / room / location number.",
      "qr.guests.5": "Call the waiter and send additional requests.",
      "qr.guests.6": "Ask for the bill and choose payment method.",

      "qr.staff.title": "FEATURES for STAFF",
      "qr.staff.1":
        "Edit categories, items and prices in real time.",
      "qr.staff.2":
        "Photos, descriptions and promotions visible to guests instantly.",
      "qr.staff.3": "Hide unavailable items with a single click.",
      "qr.staff.4":
        "Receive orders without walking to the table every time.",
      "qr.staff.5":
        "Multi-language — messages arrive in staff’s native language.",
      "qr.staff.6": "Faster work and fewer mistakes.",

      "qr.kit.title": "Turnkey package",
      "qr.kit.1": "Software ready to use + hosting.",
      "qr.kit.2": "QR codes ready for print.",
      "qr.kit.3": "PDF guide and priority support.",
      "qr.kit.4": "Optional translations and branded stands.",

      "qr.cta.title": "Ready for a demo?",
      "qr.cta.body":
        "Send us a message — we’ll reply with a plan and delivery timeline.",
      "qr.cta.btn": "Book a call",

      // WEBSITES PAGE
      "web.hero.kicker": "Websites",
      "web.hero.title": "Websites for ambitious<br />local businesses",
      "web.hero.subtitle":
        "I design and code modern, fast, mobile-friendly sites that look professional and drive action – whether you want more calls, bookings or sales.",
      "web.hero.list.1":
        "Clear focus on your goals (more inquiries, sales, reservations).",
      "web.hero.list.2":
        "Mobile-first layout – your site looks great on phone, tablet and desktop.",
      "web.hero.list.3":
        "Technically set up SEO and integration with Google Analytics tools.",
      "web.hero.list.4":
        "Fast loading and simple maintenance without a bloated CMS.",

      "web.section.what.title":
        "What your website can actually do",
      "web.section.what.lead":
        "Every business is different, so I don’t use generic templates. I adapt structure, content and features to what your customers really need.",
      "web.section.what.1":
        "<strong>Gyms / studios</strong> – schedule, bookings, trainers, memberships.",
      "web.section.what.2":
        "<strong>Restaurants / cafés</strong> – menu, specials, reservations, QR menu.",
      "web.section.what.3":
        "<strong>Boutiques / brands</strong> – collections, featured products, order form.",
      "web.section.what.4":
        "<strong>Service businesses</strong> – portfolio, testimonials, contact and inquiry forms.",

      "web.section.get.title": "What exactly you get",
      "web.section.get.1":
        "Complete design system (colors, typography, components).",
      "web.section.get.2":
        "Organized page and content structure.",
      "web.section.get.3":
        "On-page SEO basics + technical setup.",
      "web.section.get.4":
        "Integration with Google Analytics and other basic tools.",
      "web.section.get.5":
        "Hosting setup (GitHub Pages / Netlify / by agreement).",
      "web.section.get.6":
        "Video guide or short online walkthrough so you can edit text yourself.",

      "web.why.pill": "Why T•Solutions",
      "web.why.title":
        "I respect your time, budget and real-world needs",
      "web.why.lead":
        "I don’t push things you don’t need. The goal is a clean, functional site that goes live quickly and doesn’t drain your nerves every time you want a small change.",
      "web.why.1.title": "UX/UI design",
      "web.why.1.body":
        "Focus on clarity – visitors immediately see what you offer, where to click and how to contact you.",
      "web.why.2.title": "Structure & content",
      "web.why.2.body":
        "I help you arrange pages and sections so your story has a clear flow and leads to conversion.",
      "web.why.3.title": "Clean front-end code",
      "web.why.3.body":
        "Hand-coded HTML/CSS/JS – without unnecessary plugins that slow the site down. Easier maintenance, faster loading.",
      "web.why.4.title": "SEO basics included",
      "web.why.4.body":
        "Proper heading structure, meta data, alt texts and internal linking – a base for more advanced SEO.",
      "web.why.5.title": "Speed and performance",
      "web.why.5.body":
        "Optimized images, compression and lazy-load where it makes sense, so the site runs smoothly even on weaker devices.",
      "web.why.6.title": "Post-launch support",
      "web.why.6.body":
        "I don’t disappear after launch – we can agree on further updates, maintenance or new features.",

      "web.process.pill": "Process",
      "web.process.title":
        "How collaboration looks – from first email to live website",
      "web.process.1.title": "Intro call and mini brief",
      "web.process.1.body":
        "Short call or more detailed email where we go through goals, target audience, examples of sites you like and budget range.",
      "web.process.2.title": "Structure and wireframe",
      "web.process.2.body":
        "I propose page structure (Home, About, Services, Gallery, Contact…) and section layout. Once that’s confirmed, we move on to design.",
      "web.process.3.title": "Design and visual direction",
      "web.process.3.body":
        "I align colors, typography, photos and micro-details so the site looks like a serious presentation of your brand, not a generic template.",
      "web.process.4.title": "Development and testing",
      "web.process.4.body":
        "I code the site, connect the contact form, check how it looks on multiple screens and test speed and basic SEO.",
      "web.process.5.title": "Launch and short walkthrough",
      "web.process.5.body":
        "Deployment to hosting + a short walkthrough on how to edit content, add new sections or later expand the site.",

      "web.pricing.pill": "Reference offers",
      "web.pricing.title":
        "Packages we can adapt to your project",
      "web.pricing.lead":
        "Prices are indicative – the point is to give you a sense of the range. After you describe your project, I suggest an option that matches your budget and goals.",

      "web.pricing.start.label": "Start",
      "web.pricing.start.title": "Small business landing",
      "web.pricing.start.price": "from €150",
      "web.pricing.start.1":
        "One-page landing with all key information.",
      "web.pricing.start.2": "Contact form and map.",
      "web.pricing.start.3":
        "Basic SEO and Google Analytics setup.",
      "web.pricing.start.4":
        "Ideal for hairdressers, salons, trainers, small venues.",

      "web.pricing.growth.label": "Growth",
      "web.pricing.growth.title": "Full website",
      "web.pricing.growth.price": "from €250–400",
      "web.pricing.growth.1":
        "Up to ~6–8 pages (Home, About, Services, Gallery, Blog, Contact…).",
      "web.pricing.growth.2":
        "More advanced sections (FAQ, case studies, galleries, forms…).",
      "web.pricing.growth.3":
        "SEO basics + better performance and speed optimization.",
      "web.pricing.growth.4":
        "Recommended for more serious local businesses and brands.",

      "web.pricing.custom.label": "Custom",
      "web.pricing.custom.title": "Advanced or specific project",
      "web.pricing.custom.price": "by agreement",
      "web.pricing.custom.1":
        "Specific features (memberships, sign-ups, multi-language, blog…).",
      "web.pricing.custom.2":
        "Integrations with other systems or applications.",
      "web.pricing.custom.3":
        "More detailed design and more iterations.",
      "web.pricing.custom.4":
        "Option for long-term collaboration and maintenance.",

      "web.faq.title": "Frequently asked questions",
      "web.faq.1.q": "How long does it take to build a website?",
      "web.faq.1.a":
        "A simple landing page usually takes 7–10 days; a more complete site takes 2–4 weeks, depending on content and how quickly we align on design.",
      "web.faq.2.q": "Do you include hosting and domain?",
      "web.faq.2.a":
        "I can recommend and set up hosting/domain or work with what you already have. For small sites I often use GitHub Pages or Netlify.",
      "web.faq.3.q": "Can I edit the text later myself?",
      "web.faq.3.a":
        "Yes. You get a short guide on how to change basic text and images, or you can contact me for occasional updates.",
      "web.faq.4.q": "Do you also build online stores?",
      "web.faq.4.a":
        "Yes, but I treat that as a separate project (WooCommerce / custom solutions). If you have an e-commerce idea, describe it briefly in your inquiry.",
      "web.faq.5.q": "What if I don’t have content ready yet?",
      "web.faq.5.a":
        "We can start from structure. I help you define which sections and texts you really need and what can come later.",
      "web.faq.6.q": "Do you offer maintenance?",
      "web.faq.6.a":
        "We can agree on monthly maintenance or a block of hours you can use whenever you need changes.",

      "web.contact.title": "Let’s launch your website",
      "web.contact.lead":
        "Tell me what you do, what you want from the site and an approximate budget. I’ll come back with a concrete proposal and next steps.",

      // APPS PAGE
      "apps.metaTitle": "Business Apps — T•Solutions",

      "apps.hero.title": "Business apps that fit your process",
      "apps.hero.lead":
        "You don’t twist your business around tools – you shape tools around your business. I build small, focused applications that solve concrete problems in your company.",

      "apps.cards.crm.title": "CRM & Sales",
      "apps.cards.crm.body":
        "Leads, quotes, negotiations and closed deals in one place. Reminders, tasks and basic reporting.",
      "apps.cards.inventory.title": "Inventory & Orders",
      "apps.cards.inventory.body":
        "Stock levels, QR/barcodes, purchase and sales orders, suppliers, and automatic issue notes.",
      "apps.cards.costs.title": "Costs & Time",
      "apps.cards.costs.body":
        "Your internal versions of “All Hours” and an expense tracker — time tracking, costs, cost centers and approvals.",

      "apps.mini.title": "Mini CRM demo (concept)",
      "apps.mini.lead":
        "An example of how an internal CRM can look when it’s tailored to your team – without extra screens and menus nobody uses. Focus is on the pipeline, key companies and concrete tasks.",
      "apps.mini.list.1":
        "Overview of the sales funnel by stage (Lead, Qualification, Proposal, Won).",
      "apps.mini.list.2":
        "Company list with status, owner and next step.",
      "apps.mini.list.3":
        "Tasks linked to leads/companies, with clear deadlines.",
      "apps.mini.list.4":
        "Possible export to Excel / Google Sheets or integration with your existing system.",
      "apps.mini.note":
        "This is a visual prototype – in a real app, data would be from your company and process, not a generic template.",

      "apps.types.title": "Which apps I most often build for companies",
      "apps.types.lead":
        "In practice, most internal apps fall into a few groups. Each one is adapted to your company – we start from the process you already have, not from a generic template.",
      "apps.types.crm.title": "CRM & sales",
      "apps.types.crm.body":
        "Leads, quotes, negotiation flow, contracts, communication history. Focus on practical screens the team actually uses.",
      "apps.types.warehouse.title": "Warehouse & production",
      "apps.types.warehouse.body":
        "Stock levels, in/out flows, serial numbers, QR codes for faster work in the shop floor or warehouse.",
      "apps.types.costs.title": "Costs & approvals",
      "apps.types.costs.body":
        "Purchase requests, travel expenses, cost centers, approval workflow and export for accounting.",
      "apps.types.time.title": "Work time & field work",
      "apps.types.time.body":
        "Attendance tracking, shifts, field work, task statuses and locations (e.g. service interventions).",
      "apps.types.hr.title": "HR mini systems",
      "apps.types.hr.body":
        "Onboarding, vacations, sick leave, 1-on-1 talks, simple HR dashboards.",
      "apps.types.custom.title": "Custom internal tools",
      "apps.types.custom.body":
        "Everything you’re missing between Excel and a big ERP – calculators, checklists, planners, specific workflows.",

      "apps.process.pill": "Process",
      "apps.process.title": "What collaboration around a business app looks like",
      "apps.process.1.title": "Short conversation about your process",
      "apps.process.1.body":
        "We go through how you work now (Excel, paper, other software) and where time or nerves are wasted.",
      "apps.process.2.title": "Screen & flow sketch",
      "apps.process.2.body":
        "I draw simple wireframes: which screens the app has, what is visible where and in what order people go through the process.",
      "apps.process.3.title": "Development & testing with the team",
      "apps.process.3.body":
        "We build the first working prototype, you test it with 2–3 people from the team, we collect feedback and polish details.",
      "apps.process.4.title": "Launch and short training",
      "apps.process.4.body":
        "Deployment to server / hosting plus a short online walkthrough (video or call) on how to use the app and best practices.",

      "apps.cta.title": "Have an idea for an internal app?",
      "apps.cta.lead":
        "Write briefly what you want to automate or simplify (CRM, warehouse, costs, time...). I’ll send you a proposal and a ballpark price.",
      "apps.cta.btn": "Send an inquiry via contact form",
    },

    sr: {
      // NAV
      "nav.home": "Početna",
      "nav.services": "Usluge",
      "nav.qr": "QR meniji",
      "nav.websites": "Veb-sajtovi",
      "nav.apps": "Poslovne aplikacije",
      "nav.about": "O nama",

      // FOOTER
      "footer.rights": "Sva prava zadržana.",

      // INDEX
      "hero.tagline": "Pretvaramo tvoje ideje u praktična digitalna rešenja.",
      "pitch.title": "Spreman si da unaprediš biznis online?",
      "pitch.body":
        "Mi ćemo učiniti da tvoj sajt, aplikacija ili sistem budu jednostavni, moderni i efikasni.",
      "cards.qr.title": "QR meniji za restorane",
      "cards.qr.body":
        "Jednostavni digitalni meniji koje gosti vole — skeniraj, poruči i uživaj.",
      "cards.web.title": "Prilagođeni sajtovi",
      "cards.web.body":
        "Brzi, moderni sajtovi koji privlače kupce i stvaraju poverenje.",
      "cards.apps.title": "Poslovne aplikacije",
      "cards.apps.body":
        "Pametne aplikacije koje štede vreme i drže posao pod kontrolom.",
      "cards.learn": "Saznaj više",

      "contact.title": "Kontaktirajte nas",
      "contact.desc": "Napiši ideju, a mi je pretvaramo u konkretno rešenje.",
      "contact.name": "Vaše ime",
      "contact.email": "Vaš email",
      "contact.message": "Poruka",
      "contact.send": "Pošalji",

      // ABOUT
      "about.title": "Zašto T•Solutions",
      "about.subtitle":
        "Ne pravimo samo sajtove — gradimo poverenje u tvoj brend. Svaki projekat je unikatan, brz i dizajniran da oduševi na prvi pogled.",
      "about.values.title": "Rešenja",
      "about.values.1":
        "Prilagođena digitalna iskustva koja odgovaraju tvojoj viziji i ciljevima.",
      "about.values.2":
        "Elegantan web dizajn i pametne poslovne aplikacije koje pojednostavljuju rad.",
      "about.values.3":
        "Brza, pouzdana rešenja koja ostavljaju jak utisak na svakog korisnika.",
      "about.values.4":
        "Tvoj uspeh je naš proces — rastemo zajedno, ne odvojeno.",
      "about.for.title": "Za koga",
      "about.for.1":
        "Restorane i kafiće koji žele moderan QR meni i digitalni štih.",
      "about.for.2":
        "Brendove u razvoju kojima treba prepoznatljiv digitalni identitet i više prodaje.",
      "about.for.3":
        "Kompanije kojima trebaju aplikacije koje donose efikasnost, tačnost i manje stresa.",
      "about.social.title": "Pronađi nas na društvenim mrežama",

      // QR PAGE
      "qr.metaTitle": "QR meniji — T•Solutions",
      "qr.title": "QR meniji za restorane i kafiće",
      "qr.subtitle":
        "Jednostavan digitalni meni — skeniraj, poruči, uživaj. Bez instalacije.",

      "qr.how.heading": "Kako funkcioniše",
      "qr.how.1.t": "Skeniraj",
      "qr.how.1": "Gost skenira QR kod i otvara meni.",
      "qr.how.2.t": "Izaberi",
      "qr.how.2": "Dodaje artikle u korpu i ostavlja napomenu.",
      "qr.how.3.t": "Naruči",
      "qr.how.3": "Porudžbina stiže osoblju u realnom vremenu.",
      "qr.how.4.t": "Uživaj",
      "qr.how.4": "Priprema i usluga su brži.",
      "qr.how.5.t": "Račun",
      "qr.how.5": "Gost bira način plaćanja i traži račun.",

      "qr.why.heading": "Zašto izabrati T•Solutions QR menije",
      "qr.benefits.1.t": "Autonomija",
      "qr.benefits.1.d":
        "Gosti sami sklapaju porudžbinu i vide ukupno — manje grešaka.",
      "qr.benefits.2.t": "Udobnost",
      "qr.benefits.2.d":
        "Poručivanje, zahtev za račun i poziv konobara u par dodira.",
      "qr.benefits.3.t": "Brzina",
      "qr.benefits.3.d":
        "Nalozi stižu u realnom vremenu — brža priprema i usluga.",
      "qr.benefits.4.t": "Detaljne informacije",
      "qr.benefits.4.d": "Fotografije, opisi i napomene za svaki artikal.",
      "qr.benefits.5.t": "Fleksibilnost",
      "qr.benefits.5.d":
        "Žive izmene menija; sakrivanje nedostupnih stavki jednim klikom.",
      "qr.benefits.6.t": "Multijezično",
      "qr.benefits.6.d":
        "Meni na više jezika, osoblje dobija poruke na maternjem.",

      "qr.guests.title": "FUNKCIONALNOSTI za GOSTE",
      "qr.guests.1": "Otvaranje menija skeniranjem QR koda.",
      "qr.guests.2": "Odabir jezika menija.",
      "qr.guests.3":
        "Pregled, dodavanje u korpu i napomene za kuhinju.",
      "qr.guests.4":
        "Slanje narudžbina sa brojem stola/sobe/lokacije.",
      "qr.guests.5": "Poziv konobara i dodatni zahtevi.",
      "qr.guests.6": "Zahtev za račun i izbor načina plaćanja.",

      "qr.staff.title": "FUNKCIONALNOSTI za OSOBLJE",
      "qr.staff.1":
        "Uređivanje kategorija, artikala i cena u realnom vremenu.",
      "qr.staff.2":
        "Fotografije, opisi i akcije vidljivi odmah gostima.",
      "qr.staff.3": "Sakrivanje nedostupnih stavki jednim klikom.",
      "qr.staff.4":
        "Primanje narudžbina bez odlaska do stola.",
      "qr.staff.5":
        "Multijezičnost — poruke stižu na maternjem jeziku.",
      "qr.staff.6": "Brži rad i manje grešaka.",

      "qr.kit.title": "Paket „ključ u ruke“",
      "qr.kit.1": "Softver spreman za rad + hosting.",
      "qr.kit.2": "QR kodovi spremni za štampu.",
      "qr.kit.3": "PDF uputstvo i prioritetna podrška.",
      "qr.kit.4": "Opcioni prevodi i brendirani stalci.",

      "qr.cta.title": "Spremni za demo?",
      "qr.cta.body":
        "Pošaljite nam poruku — odgovaramo sa planom i rokom isporuke.",
      "qr.cta.btn": "Zakaži razgovor",

      // WEBSITES PAGE
      "web.hero.kicker": "Veb-sajtovi",
      "web.hero.title": "Sajtovi za ambiciozne<br />lokalne biznise",
      "web.hero.subtitle":
        "Dizajniram i kodiram moderne, brze i mobilne sajtove koji izgledaju ozbiljno i dovode ljude do akcije – bilo da želiš više poziva, rezervacija ili prodaja.",
      "web.hero.list.1":
        "Jasan fokus na tvojim ciljevima (više upita, prodaje, rezervacija).",
      "web.hero.list.2":
        "Mobile-first layout – sajt izgleda odlično na telefonu, tabletu i desktopu.",
      "web.hero.list.3":
        "Tehnički sređen SEO i povezivanje sa Google Analytics alatima.",
      "web.hero.list.4":
        "Brzo učitavanje i jednostavno održavanje bez komplikovanog CMS-a.",

      "web.section.what.title": "Šta sve može tvoj sajt da radi",
      "web.section.what.lead":
        "Svaki biznis je drugačiji, zato ne radim generičke templejte. Prilagođavam strukturu, sadržaj i funkcionalnosti onome što zaista treba tvojim kupcima.",
      "web.section.what.1":
        "<strong>Teretane / studiji</strong> – raspored treninga, zakazivanje, treneri, članarine.",
      "web.section.what.2":
        "<strong>Restorani / kafići</strong> – meni, specijalne ponude, rezervacije, QR meni.",
      "web.section.what.3":
        "<strong>Butici / brendovi</strong> – kolekcije, istaknuti proizvodi, formular za porudžbine.",
      "web.section.what.4":
        "<strong>Uslužne delatnosti</strong> – portfolio, iskustva klijenata, kontakt i upit formulari.",

      "web.section.get.title": "Šta tačno dobijaš",
      "web.section.get.1":
        "Kompletan dizajn sistem (boje, tipografija, komponente).",
      "web.section.get.2":
        "Organizovanu strukturu stranica i sadržaja.",
      "web.section.get.3":
        "On-page SEO osnove + tehničko sređivanje.",
      "web.section.get.4":
        "Povezivanje sa Google Analytics i osnovnim alatima.",
      "web.section.get.5":
        "Hosting rešenje (GitHub Pages / Netlify / po dogovoru).",
      "web.section.get.6":
        "Video uputstvo ili kratko online vođenje kako da samostalno menjaš tekstove.",

      "web.why.pill": "Zašto baš T•Solutions",
      "web.why.title":
        "Poštujem tvoje vreme, budžet i realne potrebe",
      "web.why.lead":
        "Ne guram stvari koje ti ne trebaju. Cilj je čist, funkcionalan sajt koji se brzo podiže i koji te ne košta živaca svaki put kad želiš malu izmenu.",
      "web.why.1.title": "UX/UI dizajn",
      "web.why.1.body":
        "Fokus na jasnoći – korisnik odmah vidi šta nudite, gde da klikne i kako da vas kontaktira.",
      "web.why.2.title": "Struktura & sadržaj",
      "web.why.2.body":
        "Pomažem da složimo stranice i sekcije tako da priča o tvom biznisu ima glavu i rep i vodi ka konverziji.",
      "web.why.3.title": "Čist front-end kod",
      "web.why.3.body":
        "Ručno rađen HTML/CSS/JS – bez bespotrebnih plug-inova koji usporavaju sajt. Lakše održavanje, brže učitavanje.",
      "web.why.4.title": "SEO osnove uključene",
      "web.why.4.body":
        "Pravilne H-oznake, meta podaci, alt tekstovi i interno linkovanje – baza za ozbiljniji SEO rad.",
      "web.why.5.title": "Brzina i performanse",
      "web.why.5.body":
        "Optimizovane slike, kompresija i lazy-load gde ima smisla, da sajt radi glatko i na slabijim uređajima.",
      "web.why.6.title": "Podrška nakon izrade",
      "web.why.6.body":
        "Posle lansiranja ne “nestajem” – možemo da dogovorimo dodatne izmene, održavanje ili dalji razvoj.",

      "web.process.pill": "Proces",
      "web.process.title":
        "Kako izgleda saradnja – od prvog mejla do gotovog sajta",
      "web.process.1.title": "Uvodni razgovor i mini brif",
      "web.process.1.body":
        "Kratak poziv ili detaljniji mejl gde prolazimo kroz ciljeve sajta, ciljnu grupu, primere sajtova koji ti se dopadaju i okvirni budžet.",
      "web.process.2.title": "Struktura i wireframe",
      "web.process.2.body":
        "Predlažem strukturu stranica (Početna, O nama, Usluge, Galerija, Kontakt…) i raspored sekcija. Kad to potvrdimo, prelazimo na dizajn.",
      "web.process.3.title": "Dizajn i vizuelni pravac",
      "web.process.3.body":
        "Usklađujem boje, tipografiju, fotografije i mikro-detalje da sajt izgleda kao ozbiljna prezentacija tvog brenda, ne generički template.",
      "web.process.4.title": "Razvoj i testiranje",
      "web.process.4.body":
        "Kodiram sajt, povezujem kontakt formu, proveravam izgled na više ekrana i testiram brzinu učitavanja i osnovni SEO.",
      "web.process.5.title": "Puštanje u rad i kratko vođenje",
      "web.process.5.body":
        "Postavljanje na hosting + kratko vođenje kako da menjaš sadržaj, dodaješ nove sekcije ili kasnije proširiš sajt.",

      "web.pricing.pill": "Okvirne ponude",
      "web.pricing.title":
        "Paketi koje možemo da prilagodimo tvom projektu",
      "web.pricing.lead":
        "Cene su orijentacione – cilj je da stekneš utisak o rangu. Nakon što opišeš projekat, predložiću opciju koja ima smisla za tvoj budžet i ciljeve.",

      "web.pricing.start.label": "Start",
      "web.pricing.start.title": "Mali biznis landing",
      "web.pricing.start.price": "od 150€",
      "web.pricing.start.1":
        "Jedna stranica (landing) sa svim ključnim informacijama.",
      "web.pricing.start.2": "Kontakt forma i mapa lokacije.",
      "web.pricing.start.3":
        "Osnovni SEO i povezivanje sa Google Analytics.",
      "web.pricing.start.4":
        "Idealno za frizere, salone, trenere, male lokale.",

      "web.pricing.growth.label": "Growth",
      "web.pricing.growth.title": "Kompletan web sajt",
      "web.pricing.growth.price": "od 250–400€",
      "web.pricing.growth.1":
        "Do ~6–8 stranica (Početna, O nama, Usluge, Galerija, Blog, Kontakt…).",
      "web.pricing.growth.2":
        "Naprednije sekcije (FAQ, studije slučaja, galerije, forme…).",
      "web.pricing.growth.3":
        "SEO osnove + bolje performanse i optimizacija brzine.",
      "web.pricing.growth.4":
        "Preporučeno za ozbiljnije lokalne biznise i brendove.",

      "web.pricing.custom.label": "Custom",
      "web.pricing.custom.title": "Napredan ili specifičan projekat",
      "web.pricing.custom.price": "po dogovoru",
      "web.pricing.custom.1":
        "Specifične funkcionalnosti (članstvo, prijave, više jezika, blog…).",
      "web.pricing.custom.2":
        "Integracije sa drugim sistemima ili aplikacijama.",
      "web.pricing.custom.3":
        "Detaljniji dizajn i više iteracija.",
      "web.pricing.custom.4":
        "Mogućnost dugoročne saradnje i održavanja.",

      "web.faq.title": "Česta pitanja",
      "web.faq.1.q": "Koliko traje izrada sajta?",
      "web.faq.1.a":
        "Za jednostavan landing obično 7–10 dana, za kompletniji sajt 2–4 nedelje, u zavisnosti od sadržaja i brzine dogovora oko dizajna.",
      "web.faq.2.q": "Da li uključuješ hosting i domen?",
      "web.faq.2.a":
        "Mogu da preporučim i podesim hosting/domen ili da radimo na onome što već imaš. Za male sajtove često koristim GitHub Pages ili Netlify.",
      "web.faq.3.q": "Da li mogu kasnije sama da menjam tekst?",
      "web.faq.3.a":
        "Da. Dobijaš kratko uputstvo kako da izmeniš osnovne tekstove i slike, ili mi se javljaš za povremene izmene.",
      "web.faq.4.q": "Radite li i online prodavnice?",
      "web.faq.4.a":
        "Da, ali to tretiram kao poseban projekat (WooCommerce / custom rešenja). Ako imaš e-commerce ideju, opiši je ukratko u upitu.",
      "web.faq.5.q": "Šta ako još nemam spreman sadržaj?",
      "web.faq.5.a":
        "Možemo da krenemo od osnovne strukture. Pomažem ti da definišeš koje sekcije i tekstovi su ti zaista potrebni i šta može da ostane za kasnije.",
      "web.faq.6.q": "Da li nudite održavanje?",
      "web.faq.6.a":
        "Možemo da dogovorimo mesečno održavanje ili paket sati koje koristiš kad god ti zatrebaju izmene.",

      "web.contact.title": "Hajde da pokrenemo tvoj sajt",
      "web.contact.lead":
        "Napiši ukratko čime se baviš, šta želiš od sajta i približan budžet. Javljam se sa konkretnim predlogom i narednim koracima.",

      // APPS PAGE
      "apps.metaTitle": "Poslovne aplikacije — T•Solutions",

      "apps.hero.title": "Aplikacije koje prate tvoj proces",
      "apps.hero.lead":
        "Ne prilagođavaš biznis alatima – već alate prilagođavaš svom biznisu. Pravim male, fokusirane aplikacije koje rešavaju konkretne probleme u firmi.",

      "apps.cards.crm.title": "CRM & prodaja",
      "apps.cards.crm.body":
        "Leadovi, ponude, pregovori i zaključeni poslovi na jednom mestu. Podsetnici, taskovi i osnovni reporting.",
      "apps.cards.inventory.title": "Magacin & narudžbine",
      "apps.cards.inventory.body":
        "Stanje robe, QR/bar-kodovi, ulazne i izlazne fakture, dobavljači i automatske izlaznice / reversi.",
      "apps.cards.costs.title": "Troškovi & vreme",
      "apps.cards.costs.body":
        "Tvoje interne verzije “All Hours” i “expense trackera” – evidencija vremena, troškova, centara troška i odobravanja.",

      "apps.mini.title": "Mini CRM demo (koncept)",
      "apps.mini.lead":
        "Primer kako može da izgleda interni CRM skrojen za tvoj tim – bez viška ekrana i menija koje niko ne koristi. Fokus je na pipeline-u, ključnim kompanijama i konkretnim taskovima.",
      "apps.mini.list.1":
        "Pregled prodajnog levka po fazama (Lead, Qualification, Proposal, Won).",
      "apps.mini.list.2":
        "Lista kompanija sa statusom, odgovornom osobom i sledećim korakom.",
      "apps.mini.list.3":
        "Taskovi koji se vežu za leadove/kompanije, sa jasnim rokovima.",
      "apps.mini.list.4":
        "Moguć export u Excel / Google Sheets ili integracija sa postojećim sistemom.",
      "apps.mini.note":
        "Ovo je vizuelni prototip – u pravoj aplikaciji bi podaci bili iz tvoje firme i procesa, ne generički template.",

      "apps.types.title": "Koje aplikacije najčešće pravim za firme",
      "apps.types.lead":
        "U praksi, većina internih aplikacija spada u nekoliko grupa. Svaka se prilagođava tvojoj firmi – polazimo od procesa koji već postoji, a ne od generičkog šablona.",
      "apps.types.crm.title": "CRM & prodaja",
      "apps.types.crm.body":
        "Leadovi, ponude, tok pregovora, ugovori, istorija komunikacije. Fokus na praktičnim ekranima koje tim stvarno koristi.",
      "apps.types.warehouse.title": "Magacin & proizvodnja",
      "apps.types.warehouse.body":
        "Stanja na lageru, ulazi/izlazi, serijski brojevi, QR kodovi za brži rad u hali ili magacinu.",
      "apps.types.costs.title": "Troškovi & odobravanja",
      "apps.types.costs.body":
        "Zahtevi za nabavku, putni troškovi, centri troška, workflow odobravanja i export za knjigovodstvo.",
      "apps.types.time.title": "Radno vreme & terenski rad",
      "apps.types.time.body":
        "Evidencija prisustva, smene, rad na terenu, statusi zadataka i lokacije (npr. servisne intervencije).",
      "apps.types.hr.title": "HR mini sistemi",
      "apps.types.hr.body":
        "Onboarding, godišnji odmori, bolovanja, razgovori 1-na-1, jednostavni HR dashboardi.",
      "apps.types.custom.title": "Custom interne alatke",
      "apps.types.custom.body":
        "Sve što ti nedostaje između Excela i velikog ERP-a – kalkulatori, checkliste, planeri, specifični workflow-ovi.",

      "apps.process.pill": "Proces",
      "apps.process.title": "Kako izgleda saradnja oko business aplikacije",
      "apps.process.1.title": "Kratak razgovor o procesu",
      "apps.process.1.body":
        "Prolazimo kroz to kako sada radiš (Excel, papiri, drugi softveri) i gde nastaje gubljenje vremena ili nerviranja.",
      "apps.process.2.title": "Skica ekrana i toka",
      "apps.process.2.body":
        "Crtam jednostavne wireframe-ove: koje ekrane ima aplikacija, šta se gde vidi i kojim redosledom ljudi prolaze kroz proces.",
      "apps.process.3.title": "Razvoj & testiranje sa timom",
      "apps.process.3.body":
        "Pravimo prvi radni prototip, testiraš ga sa 2–3 osobe iz tima, skupljamo feedback i doterujemo detalje.",
      "apps.process.4.title": "Puštanje u rad i kratka obuka",
      "apps.process.4.body":
        "Postavljanje na server / hosting + kratko online vođenje (video ili poziv) kako da koristite aplikaciju i koje su najbolje prakse.",

      "apps.cta.title": "Imaš ideju za internu aplikaciju?",
      "apps.cta.lead":
        "Napiši mi ukratko šta želiš da automatizuješ ili pojednostaviš (CRM, magacin, troškovi, vreme...). Poslaću ti predlog rešenja i okvirnu cenu.",
      "apps.cta.btn": "Pošalji upit preko kontakt forme",
    },
  };

  function updateOnlyLang(lang) {
    const showSr = lang === "sr";
    document.querySelectorAll(".only-sr").forEach((el) => {
      el.style.display = showSr ? "" : "none";
    });
    document.querySelectorAll(".only-en").forEach((el) => {
      el.style.display = showSr ? "none" : "";
    });
  }

  function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const value = dict[key];
      if (!value) return;

      
      if (el.tagName === "TITLE") {
        document.title = value;
        return;
      }

     
      el.innerHTML = value;
    });
  }

  
  const langButtons = document.querySelectorAll(".lang-switch button");

  function setLang(lang) {
   
    document.documentElement.lang = lang;

  
    langButtons.forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle("active", isActive);
    });

    
    updateOnlyLang(lang);

    
    applyTranslations(lang);

    
    localStorage.setItem("tsolutions-lang", lang);
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang || "sr";
      setLang(lang);
    });
  });

  
  const savedLang = localStorage.getItem("tsolutions-lang") || "sr";
  setLang(savedLang);

  
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => io.observe(el));
  } else {
    
    revealEls.forEach((el) => el.classList.add("show"));
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("typewriter");
  if (!titleEl) return;

  
  const text = titleEl.dataset.type || "T•Solutions";
  let index = 0;

  function type() {
    if (index < text.length) {
      titleEl.textContent = text.slice(0, index + 1);
      index++;
      setTimeout(type, 120); 
    }
  }

  
  if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/"
  ) {
    titleEl.textContent = ""; 
    setTimeout(type, 300); 
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const phone = document.getElementById("qrDemoPhone");
  if (!phone) return;

  const tabs = phone.querySelectorAll(".qr-demo-tabs button");
  const views = {
    mainCats: phone.querySelector('.qr-demo-view--categories[data-menu="main"]'),
    barCats: phone.querySelector('.qr-demo-view--categories[data-menu="bar"]'),
    items: phone.querySelector(".qr-demo-view--items"),
    order: phone.querySelector(".qr-demo-view--order"),
  };

  const state = {
    menu: "main",
    category: null,
    cart: {}, 
  };

  function getCurrentLang() {
    return (
      localStorage.getItem("tsolutions-lang") ||
      document.documentElement.lang ||
      "sr"
    );
  }

  
  const demoData = {
    main: {
      categories: [
        {
          id: "breakfast",
          title: "BREAKFASTS",
          note: "(8 AM – 11 AM)",
          img: "https://images.pexels.com/photos/531446/pexels-photo-531446.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: "meals",
          title: "HOT MEALS",
          note: "Burgers, pasta & more",
          img: "https://images.pexels.com/photos/2233703/pexels-photo-2233703.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: "desserts",
          title: "DESSERTS",
          note: "Cakes & sweets",
          img: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      ],
      items: {
        breakfast: [
          {
            id: "eng-breakfast",
            name: "English breakfast",
            desc: "Eggs, sausage, bacon, beans, toast",
            price: 890,
          },
          {
            id: "pancakes",
            name: "Fluffy pancakes",
            desc: "Maple syrup & berries",
            price: 620,
          },
          {
            id: "granola",
            name: "Granola bowl",
            desc: "Yogurt, fruit, honey",
            price: 550,
          },
        ],
        meals: [
          {
            id: "cheeseburger",
            name: "Cheeseburger",
            desc: "Beef, cheddar, fries",
            price: 980,
          },
          {
            id: "pasta",
            name: "Pasta al pomodoro",
            desc: "Tomato, basil, parmesan",
            price: 840,
          },
        ],
        desserts: [
          {
            id: "choco-cake",
            name: "Chocolate cake",
            desc: "Rich dark chocolate",
            price: 520,
          },
          {
            id: "cheesecake",
            name: "New York cheesecake",
            desc: "Vanilla & berries",
            price: 560,
          },
        ],
      },
    },
    bar: {
      categories: [
        {
          id: "cocktails",
          title: "COCKTAILS",
          note: "Margarita, Spritz...",
          img: "https://images.pexels.com/photos/5531529/pexels-photo-5531529.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: "wine",
          title: "WINE & BEER",
          note: "House wine & draft",
          img: "https://images.pexels.com/photos/5531551/pexels-photo-5531551.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      ],
      items: {
        cocktails: [
          {
            id: "margarita",
            name: "Margarita",
            desc: "Tequila, lime, salt",
            price: 780,
          },
          {
            id: "aperol",
            name: "Aperol Spritz",
            desc: "Aperol, prosecco, soda",
            price: 720,
          },
          {
            id: "bloody-mary",
            name: "Bloody Mary",
            desc: "Vodka, tomato, spices",
            price: 760,
          },
        ],
        wine: [
          {
            id: "house-white",
            name: "House white wine",
            desc: "Glass 0.15 l",
            price: 420,
          },
          {
            id: "draft-beer",
            name: "Draft lager",
            desc: "0.5 l",
            price: 390,
          },
        ],
      },
    },
  };

  
  function formatRsd(v) {
    return v.toLocaleString("sr-RS") + " RSD";
  }

  function getActiveCategoriesView() {
    return state.menu === "main" ? views.mainCats : views.barCats;
  }

  function showView(name) {
    Object.values(views).forEach((v) => {
      v.hidden = true;
    });

    if (name === "categories") {
      getActiveCategoriesView().hidden = false;
    } else if (name === "items") {
      views.items.hidden = false;
    } else if (name === "order") {
      views.order.hidden = false;
    }
  }

  
  function renderCategories() {
    const mainView = views.mainCats;
    const barView = views.barCats;

    function buildCategories(menuKey, target) {
      const cfg = demoData[menuKey];
      const wrap = document.createElement("div");
      wrap.className = "qr-demo-category-list";

      cfg.categories.forEach((cat) => {
        const card = document.createElement("div");
        card.className = "qr-demo-category";
        card.dataset.menu = menuKey;
        card.dataset.categoryId = cat.id;

        card.innerHTML = `
          <div class="qr-demo-category-bg" style="background-image:url('${cat.img}')"></div>
          <div class="qr-demo-category-overlay"></div>
          <div class="qr-demo-category-label">
            <p class="qr-demo-category-title">${cat.title}</p>
            <p class="qr-demo-category-note">${cat.note}</p>
          </div>
        `;

        wrap.appendChild(card);
      });

      target.innerHTML = "";
      target.appendChild(wrap);
    }

    buildCategories("main", mainView);
    buildCategories("bar", barView);
  }


  function renderItems() {
    const cfg = demoData[state.menu];
    if (!cfg || !state.category) return;

    const items = cfg.items[state.category] || [];
    const catInfo = cfg.categories.find((c) => c.id === state.category);
    const lang = getCurrentLang();
    const isSr = lang === "sr";

    const backLabel = isSr ? "← Nazad" : "← Back";
    const emptyLabel = isSr ? "Korpa je prazna" : "Cart is empty";
    const totalLabel = isSr ? "Ukupno: " : "Total: ";
    const showOrderLabel = isSr
      ? "Prikaži porudžbinu"
      : "Show my order";

    let html = `
      <div class="qr-demo-items-header">
        <button class="qr-demo-back" data-action="back-to-categories">${backLabel}</button>
        <div class="qr-demo-items-title">${
          catInfo ? catInfo.title : "Items"
        }</div>
      </div>
      <div class="qr-demo-item-list">
    `;

    items.forEach((item) => {
      const qty = state.cart[item.id]?.qty || 0;
      html += `
        <div class="qr-demo-item" data-item-id="${item.id}">
          <div class="qr-demo-item-main">
            <h4>${item.name}</h4>
            <p>${item.desc}</p>
          </div>
          <div class="qr-demo-item-qty">
            <div class="qr-demo-price">${formatRsd(item.price)}</div>
            <div class="qr-demo-qty-controls">
              <button class="qr-demo-qty-btn" data-action="dec">−</button>
              <span class="qr-demo-qty-value">${qty}</span>
              <button class="qr-demo-qty-btn" data-action="inc">+</button>
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;

    const total = calcTotal();
    html += `
      <div class="qr-demo-items-footer">
        <span class="qr-demo-total">${
          total > 0 ? totalLabel + formatRsd(total) : emptyLabel
        }</span>
        <button class="qr-demo-show-order" data-action="show-order" ${
          total === 0 ? "disabled" : ""
        }>
          ${showOrderLabel}
        </button>
      </div>
    `;

    views.items.innerHTML = html;
  }

  
  function renderOrder() {
    const items = Object.values(state.cart).filter((x) => x.qty > 0);
    const total = calcTotal();
    const lang = getCurrentLang();
    const isSr = lang === "sr";

    const backLabel = isSr ? "← Nazad" : "← Back";
    const titleLabel = isSr ? "Moja porudžbina" : "My order";
    const emptyText = isSr
      ? "Još nema stavki u korpi."
      : "You don't have any items yet.";
    const totalLabel = isSr ? "Ukupno:" : "Total:";

    if (!items.length) {
      views.order.innerHTML = `
        <div class="qr-demo-items-header">
          <button class="qr-demo-back" data-action="back-to-items">${backLabel}</button>
          <div class="qr-demo-items-title">${titleLabel}</div>
        </div>
        <p style="font-size:12px;margin:4px 0 0;">${emptyText}</p>
      `;
      return;
    }

    let html = `
      <div class="qr-demo-items-header">
        <button class="qr-demo-back" data-action="back-to-items">${backLabel}</button>
        <div class="qr-demo-items-title">${titleLabel}</div>
      </div>
      <div class="qr-demo-order-list">
    `;

    items.forEach((it) => {
      html += `
        <div class="qr-demo-order-item">
          <span>${it.qty}× ${it.name}</span>
          <span>${formatRsd(it.price * it.qty)}</span>
        </div>
      `;
    });

    html += `</div>
      <div class="qr-demo-order-footer">
        <span>${totalLabel}</span>
        <span>${formatRsd(total)}</span>
      </div>
    `;

    views.order.innerHTML = html;
  }

  function calcTotal() {
    return Object.values(state.cart).reduce(
      (sum, it) => sum + it.price * it.qty,
      0
    );
  }

 
  renderCategories();
  showView("categories");

  
  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const menu = btn.dataset.menu;
      if (!menu || menu === state.menu) return;
      state.menu = menu;
      state.category = null;

      tabs.forEach((b) => b.classList.toggle("active", b === btn));
      showView("categories");
    });
  });

 
  phone.addEventListener("click", (e) => {
    const catEl = e.target.closest(".qr-demo-category");
    if (catEl) {
      state.menu = catEl.dataset.menu;
      state.category = catEl.dataset.categoryId;
      renderItems();
      showView("items");
      return;
    }

    const backBtn = e.target.closest(".qr-demo-back");
    if (backBtn) {
      const action = backBtn.dataset.action;
      if (action === "back-to-categories") {
        state.category = null;
        showView("categories");
      } else if (action === "back-to-items") {
        showView("items");
      }
      return;
    }

    const qtyBtn = e.target.closest(".qr-demo-qty-btn");
    if (qtyBtn) {
      const card = qtyBtn.closest(".qr-demo-item");
      if (!card) return;
      const itemId = card.dataset.itemId;
      const action = qtyBtn.dataset.action;
      const cfg = demoData[state.menu];
      const allItems = cfg ? cfg.items[state.category] || [] : [];
      const item = allItems.find((i) => i.id === itemId);
      if (!item) return;

      if (!state.cart[itemId]) {
        state.cart[itemId] = { name: item.name, price: item.price, qty: 0 };
      }

      if (action === "inc") {
        state.cart[itemId].qty++;
      } else if (action === "dec" && state.cart[itemId].qty > 0) {
        state.cart[itemId].qty--;
      }

      renderItems();
      return;
    }

    const showOrderBtn = e.target.closest("[data-action='show-order']");
    if (showOrderBtn && !showOrderBtn.disabled) {
      renderOrder();
      showView("order");
      return;
    }
  });
});
