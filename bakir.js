(() => {
  "use strict";

  const translations = {
    "İçeriğe geç": "Skip to content",
    "Portföydeki projelere dön": "Back to portfolio projects",
    "Projelere dön": "Back to projects",
    "Vaka analizi bölümleri": "Case study sections",
    "Ürün": "Product",
    "Katalog": "Catalog",
    "Deneyim": "Experience",
    "Teknoloji": "Technology",
    "Dil seçimi": "Language selection",
    "Açık temaya geç": "Switch to light theme",
    "Koyu temaya geç": "Switch to dark theme",
    "Temayı değiştir": "Change theme",
    "KURUMSAL WEB · ÜRÜN KATALOĞU · RESPONSIVE": "CORPORATE WEB · PRODUCT CATALOG · RESPONSIVE",
    "Profesyonel kozmetiği dijital bir": "Turn professional cosmetics into a digital",
    "satış deneyimine": "sales experience",
    "dönüştürmek.": "that converts.",
    "Bakır Cosmetic; 147 ürünü, 23 markayı, salon tasarımı hizmetini ve doğrudan iletişim kanallarını aynı kurumsal deneyimde birleştiren responsive web platformu.": "Bakır Cosmetic is a responsive web platform that brings 147 products, 23 brands, salon design services and direct contact channels into one cohesive brand experience.",
    "Ekranları incele": "Explore the screens",
    "GitHub deposu ↗": "GitHub repository ↗",
    "Bakır Cosmetic ana sayfa ve altı slaytlı ürün vitrini": "Bakır Cosmetic homepage and six-slide product showcase",
    "Bakır Cosmetic ana sayfa ekranını büyüt": "Enlarge the Bakır Cosmetic homepage screen",
    "Büyüt ↗": "Enlarge ↗",
    "ÜRÜN VERİTABANI": "PRODUCT DATABASE",
    "ürün": "products",
    "MARKA FİLTRESİ": "BRAND FILTER",
    "marka": "brands",
    "Proje özeti": "Project summary",
    "Rolüm": "My role",
    "Ürün tasarımı · frontend geliştirme": "Product design · frontend development",
    "Durum": "Status",
    "Tamamlanan kurumsal web sitesi": "Completed corporate website",
    "Platform": "Platform",
    "Responsive web · masaüstü & mobil": "Responsive web · desktop & mobile",
    "Proje metrikleri": "Project metrics",
    "KATALOG": "CATALOG",
    "147 ürün · 23 marka": "147 products · 23 brands",
    "KEŞİF": "DISCOVERY",
    "Arama · filtre · sayfalama": "Search · filter · pagination",
    "DÖNÜŞÜM": "CONVERSION",
    "Ürüne özel WhatsApp akışı": "Product-specific WhatsApp flow",
    "PERFORMANS": "PERFORMANCE",
    "Görsellerde %81,5 küçülme": "81.5% image reduction",
    "01 / ÜRÜN HEDEFİ": "01 / PRODUCT GOAL",
    "Katalog göstermekten fazlası: keşiften iletişime kesintisiz yolculuk.": "More than a catalog: a seamless journey from discovery to contact.",
    "Proje, mağazadaki profesyonel ürün çeşitliliğini dijitale taşırken müşterinin doğru ürünü bulmasını, ayrıntısını incelemesini ve ek form doldurmadan sipariş hattına geçmesini amaçlıyor.": "The project brings the store's professional product range online, helping customers find the right product, inspect its details and continue directly to the order line without another form.",
    "Hızlı ürün keşfi": "Fast product discovery",
    "Metin araması, kategori ve marka filtreleri; geniş kataloğu tek bir anlaşılır keşif yüzeyine dönüştürüyor.": "Text search plus category and brand filters turn a broad catalog into one clear discovery surface.",
    "Doğrudan dönüşüm": "Direct conversion",
    "Dinamik ürün detayından ürüne özel hazırlanmış WhatsApp mesajına geçiş, çevrim içi keşfi gerçek satış görüşmesine bağlıyor.": "A product-specific WhatsApp message from the dynamic detail page connects online discovery to a real sales conversation.",
    "Tek marka deneyimi": "One brand experience",
    "Ürün kataloğu, salon mimarisi, kurumsal hikâye, PDF kataloglar ve mağaza iletişimi aynı görsel sistemde birleşiyor.": "The product catalog, salon architecture, corporate story, PDF catalogs and store contact points share the same visual system.",
    "Bakır Cosmetic kullanıcı yolculuğu": "Bakır Cosmetic user journey",
    "01 · KEŞFET": "01 · DISCOVER",
    "Ürünleri tara": "Browse products",
    "02 · DARALT": "02 · NARROW",
    "Ara ve filtrele": "Search and filter",
    "03 · İNCELE": "03 · INSPECT",
    "Detayı aç": "Open details",
    "04 · İLETİŞİM": "04 · CONTACT",
    "WhatsApp'tan sor": "Ask via WhatsApp",
    "02 / KATALOG DENEYİMİ": "02 / CATALOG EXPERIENCE",
    "147 ürünü sakin, taranabilir ve eyleme dönük tutmak.": "Keeping 147 products calm, scannable and actionable.",
    "Koleksiyon yüzeyi geniş ürün veri tabanını arama, hiyerarşik kategori, marka filtresi ve sayfalama ile yönetiyor. Ürün detayları URL parametresiyle aynı şablonda dinamik olarak kuruluyor.": "The collection manages a large product database with search, hierarchical categories, brand filters and pagination. Product details are generated dynamically in one template from URL parameters.",
    "Arama, kategori ve marka filtreli ürün koleksiyonu": "Product collection with search, category and brand filters",
    "Koleksiyon ekranını büyüt": "Enlarge the collection screen",
    "Koleksiyon görünümü ↗": "Collection view ↗",
    "Üç katmanlı filtreleme": "Three-layer filtering",
    "Arama ifadesi, kategori ve marka aynı ürün listesi üzerinde birlikte çalışıyor; Türkçe karakterler normalize edilerek daha dayanıklı eşleşme sağlanıyor.": "Search terms, categories and brands work together on the same product list; Turkish characters are normalized for more resilient matching.",
    "Sayfalanmış sonuçlar": "Paginated results",
    "Sonuç sayısı ve erişilebilir sayfa kontrolleri, katalog büyürken tarama maliyetini kontrol altında tutuyor.": "Result counts and accessible page controls keep browsing manageable as the catalog grows.",
    "Mobil filtre çekmecesi": "Mobile filter drawer",
    "Dar ekranda aynı filtre sistemi dışarı tıklama, kapatma düğmesi ve doğru aria durumlarıyla çekmeceye dönüşüyor.": "On narrow screens the same filter system becomes a drawer with outside-click dismissal, a close button and correct ARIA states.",
    "ÜRÜN DETAYI": "PRODUCT DETAIL",
    "Her ürün için ayrı sayfa üretmeden dinamik detay.": "Dynamic details without creating a separate page for every product.",
    "Ürün kimliği URL'den okunuyor, veri tabanındaki karşılığı bulunuyor ve başlık, açıklama, marka, görsel ile sipariş mesajı aynı şablona işleniyor.": "The product ID is read from the URL, matched in the database, and its title, description, brand, image and order message are rendered into one template.",
    "URL parametresi ve hash desteği": "URL parameter and hash support",
    "Dinamik sayfa başlığı": "Dynamic page title",
    "Ürüne özel WhatsApp mesajı": "Product-specific WhatsApp message",
    "Eksik ürün için güvenli geri dönüş": "Safe fallback for missing products",
    "Dinamik ürün detayı ve WhatsApp sipariş çağrısı": "Dynamic product detail and WhatsApp order call-to-action",
    "Ürün detay ekranını büyüt": "Enlarge the product detail screen",
    "Ürün detayını büyüt ↗": "Enlarge product detail ↗",
    "03 / MARKA DENEYİMİ": "03 / BRAND EXPERIENCE",
    "Ürünün yanında hizmeti ve güveni de görünür kılan yapı.": "A structure that makes services and trust visible alongside the product.",
    "Site yalnızca ürün listesi değil; mağazanın hikâyesini, çalıştığı markaları, salon tasarımı sürecini ve fiziksel iletişim noktalarını da dijital ürünün parçası yapıyor.": "The site is more than a product list: it makes the store story, partner brands, salon design process and physical contact points part of the digital product.",
    "Kurumsal hikâye ve mağaza deneyimi": "Corporate story and store experience",
    "Kurumsal sayfayı büyüt": "Enlarge the corporate page",
    "Bakır Cosmetic kurumsal sayfası": "Bakır Cosmetic corporate page",
    "01 · KURUMSAL": "01 · CORPORATE",
    "Hikâye ve marka güveni": "Story and brand trust",
    "Mağaza geçmişi, değerler ve çalışılan profesyonel markalar tek kurumsal anlatıda birleşiyor.": "Store history, values and professional partner brands come together in one corporate narrative.",
    "Salon tasarımı hizmeti ve dört adımlı kurumsal süreç": "Salon design service and four-step corporate process",
    "Salon tasarımı sayfasını büyüt": "Enlarge the salon design page",
    "Bakır Cosmetic salon tasarımı hizmet sayfası": "Bakır Cosmetic salon design service page",
    "02 · STUDIO BAKIR": "02 · STUDIO BAKIR",
    "Hizmeti görselleştir": "Visualize the service",
    "Dört adımlı salon yenileme süreci ve klavyeyle kullanılabilen proje carousel'i hizmeti somutlaştırıyor.": "A four-step salon renovation process and keyboard-operable project carousel make the service tangible.",
    "Adres, harita, çalışma saatleri ve hızlı iletişim kanalları": "Address, map, opening hours and quick contact channels",
    "İletişim sayfasını büyüt": "Enlarge the contact page",
    "Bakır Cosmetic iletişim ve konum sayfası": "Bakır Cosmetic contact and location page",
    "03 · İLETİŞİM": "03 · CONTACT",
    "Dijitalden mağazaya": "From digital to store",
    "Adres, telefon, WhatsApp, Instagram, çalışma saatleri ve harita aynı dönüşüm yüzeyinde sunuluyor.": "Address, phone, WhatsApp, Instagram, opening hours and the map are presented on one conversion surface.",
    "MOBİL UYARLAMA": "MOBILE ADAPTATION",
    "Aynı marka dili, daha odaklı bir mobil yolculuk.": "The same brand language, with a more focused mobile journey.",
    "Masaüstündeki geniş vitrin; mobil menü, merkezlenmiş ürün mesajı, dokunmatik slider kontrolleri ve sabit hızlı iletişim eylemleriyle dar ekrana yeniden düzenleniyor.": "The wide desktop showcase is reorganized for narrow screens with a mobile menu, centered product messaging, touch slider controls and fixed quick-contact actions.",
    "Hamburger menü ve doğru aria durumları": "Hamburger menu with correct ARIA states",
    "Dokunmatik hero slider": "Touch-enabled hero slider",
    "WhatsApp ve arama için hızlı iletişim barı": "Quick contact bar for WhatsApp and calls",
    "Mobil filtre çekmecesi ve dışarı tıklamayla kapatma": "Mobile filter drawer with outside-click dismissal",
    "04 / TEKNİK YAKLAŞIM": "04 / TECHNICAL APPROACH",
    "Derleme gerektirmeyen, veri odaklı ve kolay yayınlanabilir frontend mimarisi.": "A data-driven, easily deployable frontend architecture with no build step.",
    "GitHub deposundaki proje; semantik HTML, sayfa bazlı CSS/JavaScript, statik ürün veri tabanı ve yeniden kullanılan etkileşim modülleriyle kurulmuş.": "The GitHub project uses semantic HTML, page-level CSS and JavaScript, a static product database and reusable interaction modules.",
    "Bakır Cosmetic teknik mimarisi": "Bakır Cosmetic technical architecture",
    "SUNUM": "PRESENTATION",
    "Semantik HTML": "Semantic HTML",
    "Sekiz yayın sayfası, doğru başlık ve landmark yapısı": "Eight published pages with correct headings and landmark structure",
    "ETKİLEŞİM": "INTERACTION",
    "Slider, filtre, sayfalama, modal ve carousel davranışları": "Slider, filter, pagination, modal and carousel behaviors",
    "VERİ": "DATA",
    "Statik ürün DB": "Static product DB",
    "147 ürünün tek kaynak üzerinden katalog ve detaya aktarılması": "147 products supplied to catalog and detail pages from one source",
    "WhatsApp + Maps": "WhatsApp + Maps",
    "Ürün sorgusu, mağaza iletişimi ve yol tarifi bağlantıları": "Product inquiries, store contact and directions links",
    "Veri odaklı katalog": "Data-driven catalog",
    "Ürün kartları ve detay sayfası aynı JavaScript veri kaynağından besleniyor; marka adları normalize edilerek filtre tutarlılığı korunuyor.": "Product cards and the detail page share one JavaScript data source; brand names are normalized to preserve filtering consistency.",
    "Erişilebilir etkileşimler": "Accessible interactions",
    "Mobil menü aria durumları, KVKK modal odak döngüsü, klavye kontrollü carousel ve içerik atlama bağlantısı temel akışlarda erişilebilirlik sağlıyor.": "Mobile-menu ARIA states, a focus-trapped privacy modal, keyboard-controlled carousel and skip link support accessibility in core flows.",
    "Performans disiplini": "Performance discipline",
    "Görseller WebP'e dönüştürüldü; ekran dışı içerikler lazy loading ve async decoding ile yüklendi.": "Images were converted to WebP; off-screen content uses lazy loading and asynchronous decoding.",
    "GÖRSEL KLASÖRÜ": "IMAGE FOLDER",
    "önce": "before",
    "Görsel klasöründe yüzde 81,5 küçülme": "81.5 percent reduction in the image folder",
    "OPTİMİZE BOYUT": "OPTIMIZED SIZE",
    "sonra": "after",
    "DOĞRULANAN TEKNOLOJİLER": "VERIFIED TECHNOLOGIES",
    "Teknik anlatım, GitHub deposundaki kaynak kod, ürün veri tabanı ve yayın kontrol belgeleri üzerinden hazırlanmıştır.": "The technical narrative is based on the source code, product database and release-check documents in the GitHub repository.",
    "Kaynak kodu incele ↗": "Review the source code ↗",
    "Ürün, hizmet ve fiziksel mağazayı aynı dijital vitrinde buluşturan kurumsal deneyim.": "A corporate experience that unites products, services and the physical store in one digital showcase.",
    "147 ürün, 23 marka, dinamik detay sayfaları ve satışa bağlanan iletişim akışları; ölçeklenebilir bir statik web mimarisinde bir araya geliyor.": "147 products, 23 brands, dynamic detail pages and sales-connected contact flows come together in a scalable static web architecture.",
    "Diğer projelere dön": "Back to other projects",
    "Eda Nur Ergüven portföy ana sayfası": "Eda Nur Ergüven portfolio homepage",
    "Bakır Cosmetic · Ürün ve frontend vaka analizi": "Bakır Cosmetic · Product and frontend case study",
    "Yukarı dön ↑": "Back to top ↑",
    "BAKIR COSMETIC · GERÇEK EKRAN": "BAKIR COSMETIC · REAL SCREEN",
    "Ekran önizlemesi": "Screen preview",
    "Önizlemeyi kapat": "Close preview",
    "Önceki ekran": "Previous screen",
    "Sonraki ekran": "Next screen",
    "Bakır Cosmetic: 147 ürünlük profesyonel kozmetik kataloğu, dinamik ürün detayları ve salon tasarımı hizmetlerini birleştiren responsive web sitesi vaka analizi.": "Bakır Cosmetic case study: a responsive website combining a 147-product professional cosmetics catalog, dynamic product details and salon design services.",
    "Profesyonel kozmetik kataloğu ve salon hizmetlerini dijital satış deneyiminde birleştiren responsive web projesi.": "A responsive web project combining a professional cosmetics catalog and salon services in a digital sales experience."
  };

  const reverseTranslations = Object.fromEntries(Object.entries(translations).map(([tr, en]) => [en, tr]));
  const languageButtons = [...document.querySelectorAll("[data-language]")];
  const themeButton = document.querySelector(".case-theme-toggle");
  let currentLanguage = localStorage.getItem("core-language") === "en" ? "en" : "tr";

  const translateValue = (value, language) => {
    const table = language === "en" ? translations : reverseTranslations;
    const trimmed = value.trim();
    const translated = table[trimmed];
    return translated ? value.replace(trimmed, translated) : value;
  };

  const translatePage = (language) => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (["SCRIPT", "STYLE", "CODE"].includes(node.parentElement?.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => { node.nodeValue = translateValue(node.nodeValue, language); });

    document.querySelectorAll("[aria-label], [title], [alt], [content], [data-caption]").forEach((element) => {
      ["aria-label", "title", "alt", "content", "data-caption"].forEach((attribute) => {
        if (element.hasAttribute(attribute)) {
          element.setAttribute(attribute, translateValue(element.getAttribute(attribute), language));
        }
      });
    });

    currentLanguage = language;
    document.documentElement.lang = language;
    localStorage.setItem("core-language", language);
    languageButtons.forEach((button) => {
      const active = button.dataset.language === language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    updateThemeLabel();
    if (lightbox?.open) updateLightbox(activeMediaIndex);
  };

  const updateThemeLabel = () => {
    if (!themeButton) return;
    const isDark = document.documentElement.dataset.theme === "dark";
    const label = currentLanguage === "en"
      ? (isDark ? "Switch to light theme" : "Switch to dark theme")
      : (isDark ? "Açık temaya geç" : "Koyu temaya geç");
    themeButton.setAttribute("aria-label", label);
    themeButton.setAttribute("title", currentLanguage === "en" ? "Change theme" : "Temayı değiştir");
  };

  languageButtons.forEach((button) => button.addEventListener("click", () => translatePage(button.dataset.language)));
  themeButton?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("core-theme", nextTheme);
    updateThemeLabel();
  });

  const progressBar = document.querySelector(".reading-progress span");
  const updateProgress = () => {
    if (!progressBar) return;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }

  const sectionLinks = [...document.querySelectorAll(".case-nav nav a")];
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    }, { rootMargin: "-28% 0px -58%", threshold: 0 });
    document.querySelectorAll("#overview, #catalog, #experience, #technology").forEach((section) => sectionObserver.observe(section));
  }

  const mediaButtons = [...document.querySelectorAll(".media-open")];
  const lightbox = document.querySelector("#image-lightbox");
  const lightboxImage = document.querySelector("#lightbox-image");
  const lightboxCaption = document.querySelector("#lightbox-caption");
  const lightboxCounter = document.querySelector("#lightbox-counter");
  let activeMediaIndex = 0;

  const updateLightbox = (index) => {
    if (!mediaButtons.length || !lightboxImage) return;
    activeMediaIndex = (index + mediaButtons.length) % mediaButtons.length;
    const item = mediaButtons[activeMediaIndex];
    const caption = item.dataset.caption || item.querySelector("img")?.alt || "Bakır Cosmetic";
    lightboxImage.src = item.dataset.image;
    lightboxImage.alt = caption;
    lightboxCaption.textContent = caption;
    lightboxCounter.textContent = `${activeMediaIndex + 1} / ${mediaButtons.length}`;
  };

  const openLightbox = (index) => {
    if (!lightbox) return;
    updateLightbox(index);
    if (typeof lightbox.showModal === "function") lightbox.showModal();
    else lightbox.setAttribute("open", "");
  };

  mediaButtons.forEach((button, index) => button.addEventListener("click", () => openLightbox(index)));
  document.querySelector(".lightbox-close")?.addEventListener("click", () => lightbox?.close());
  document.querySelector(".lightbox-prev")?.addEventListener("click", () => updateLightbox(activeMediaIndex - 1));
  document.querySelector(".lightbox-next")?.addEventListener("click", () => updateLightbox(activeMediaIndex + 1));
  lightbox?.addEventListener("click", (event) => { if (event.target === lightbox) lightbox.close(); });
  lightbox?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") updateLightbox(activeMediaIndex - 1);
    if (event.key === "ArrowRight") updateLightbox(activeMediaIndex + 1);
  });

  translatePage(currentLanguage);
})();
