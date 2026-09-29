const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

function updateThemeLabel() {
  const isDark = root.dataset.theme === "dark";
  themeToggle.setAttribute("aria-label", isDark ? "Açık temaya geç" : "Koyu temaya geç");
  themeMeta.setAttribute("content", isDark ? "#0b0f18" : "#f7f8fc");
}

themeToggle.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("core-theme", root.dataset.theme);
  updateThemeLabel();
});
updateThemeLabel();

document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", `${location.pathname}${location.search}`);
  });
});

menuToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Menüyü kapat" : "Menüyü aç");
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Menüyü aç");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const navLinks = [...document.querySelectorAll(".desktop-nav a")];
const trackedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const active = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!active) return;
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${active.target.id}`;
      link.classList.toggle("active", isActive);
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  },
  { rootMargin: "-30% 0px -58%", threshold: [0.01, 0.25] },
);
trackedSections.forEach((section) => sectionObserver.observe(section));

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const projectGrid = document.querySelector(".project-grid");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    projectCards.forEach((card) => {
      const matches = filter === "all" || card.dataset.category.split(" ").includes(filter);
      card.classList.toggle("hidden", !matches);
    });
    const visibleCount = [...projectCards].filter((card) => !card.classList.contains("hidden")).length;
    projectGrid.classList.toggle("single-result", visibleCount === 1);
  });
});

const demoProjects = {
  transit: {
    title: "İzmir Deniz Ulaşımı · Demo Galerisi",
    screens: [
      { type: "transit-ops", title: "Canlı operasyon merkezi", description: "Filo durumu, rota ve sefer metriklerinin masaüstü görünümü." },
      { type: "transit-mobile", title: "Mobil yolculuk ekranı", description: "Yolcu için canlı rota, kalkış süresi ve deniz koşulları." },
      { type: "transit-analytics", title: "Performans analitiği", description: "Sefer düzeni ve filo performansını izleyen karar ekranı." },
    ],
  },
  context: {
    title: "Context OS · Demo Galerisi",
    screens: [
      { type: "context-chat", title: "Kaynaklı yapay zekâ asistanı", description: "Yanıt, kaynak ve güven skorunu aynı çalışma alanında birleştirir." },
      { type: "context-sources", title: "Bilgi kaynakları", description: "Belgeleri durumları ve indeks bilgileriyle birlikte yönetir." },
      { type: "context-pipeline", title: "RAG işlem hattı", description: "Belgeden güvenilir yanıta uzanan sürecin gözlemlenebilir görünümü." },
    ],
  },
  guard: {
    title: "FormGuard · Demo Galerisi",
    screens: [
      { type: "guard-suite", title: "Test koşusu", description: "Kritik kullanıcı akışlarının anlık sonuçlarını gösterir." },
      { type: "guard-diff", title: "Görsel fark inceleme", description: "Referans ve güncel ekranı yan yana karşılaştırır." },
      { type: "guard-history", title: "Regresyon geçmişi", description: "Sürüm bazında başarı oranı ve çalışma sürelerini izler." },
    ],
  },
};

function windowBar(path) {
  return `<div class="mock-windowbar"><i></i><i></i><i></i><span>${path}</span><b>KONSEPT DEMO</b></div>`;
}

function sidebar(active = "Genel Bakış") {
  return `<aside class="mock-sidebar"><div class="mock-logo"><i>EN</i> EDA LAB</div><div class="mock-nav"><span class="active">${active}</span><span>Analitik</span><span>Akışlar</span><span>Ayarlar</span></div></aside>`;
}

function transitOpsDemo() {
  return `${windowBar("demo.local / transit / operations")}<div class="mock-layout">${sidebar("Filo Görünümü")}<main class="mock-main"><div class="mock-head"><div><small>OPERASYON MERKEZİ</small><strong>Günaydın, İzmir</strong></div><span class="mock-action">+ Sefer planla</span></div><div class="mock-cards"><div class="mock-metric"><span>Aktif sefer</span><strong>18</strong></div><div class="mock-metric"><span>Zamanında</span><strong>%96</strong></div><div class="mock-metric"><span>Ort. hız</span><strong>13.2 kn</strong></div></div><div class="mock-map"><i class="mock-route"></i><span class="mock-pin one">➤</span><span class="mock-pin two">➤</span><div class="mock-float"><span>KD–1402 · Konak</span><b>09 dk · CANLI</b></div></div></main></div>`;
}

function transitMobileDemo() {
  return `${windowBar("demo.local / transit / mobile")}<div class="mobile-showcase"><div class="device-note left"><span>GPS doğruluğu</span><b>± 4.2 m</b></div><div class="demo-phone"><div class="demo-phone-screen"><div class="demo-phone-top"><span>09:41</span><span>5G · 87%</span></div><div class="demo-phone-title"><span>Günaydın</span><strong>Şehir şimdi nasıl?</strong></div><div class="demo-phone-map"></div><div class="demo-phone-trip">Konak → Karşıyaka <b>09 dk</b></div></div></div><div class="device-note right"><span>Dalga yüksekliği</span><b>0.42 m · Sakin</b></div></div>`;
}

function transitAnalyticsDemo() {
  return `${windowBar("demo.local / transit / analytics")}<div class="mock-layout">${sidebar("Analitik")}<main class="mock-main"><div class="mock-head"><div><small>SON 7 GÜN</small><strong>Filo performansı</strong></div><span class="mock-action">Raporu dışa aktar</span></div><div class="mock-cards"><div class="mock-metric"><span>Tamamlanan</span><strong>1,284</strong></div><div class="mock-metric"><span>Doluluk</span><strong>%72</strong></div><div class="mock-metric"><span>Gecikme</span><strong>−8%</strong></div></div><div class="analytics-grid"><div class="chart-panel"><div class="panel-label"><span>Sefer hacmi</span><span>Gerçek / Tahmin</span></div><svg class="line-chart" viewBox="0 0 500 160"><path d="M0 128C58 100 68 132 116 87s88 13 132-34 87 21 129-13 74-4 123-44"/><path d="M0 142c60-19 75-2 119-35s82-6 128-23 94-17 135-8 67-17 118-28"/></svg></div><div class="list-panel"><div class="panel-label"><span>Yoğun hatlar</span></div><span>Konak–Karşıyaka <b>%88</b></span><span>Bostanlı–Üçkuyular <b>%76</b></span><span>Pasaport–Alsancak <b>%64</b></span></div></div></main></div>`;
}

function contextChatDemo() {
  return `${windowBar("demo.local / context-os / workspace")}<div class="chat-layout"><aside class="chat-sources"><span class="mock-section-label">ÇALIŞMA ALANLARI</span><div class="source-mini"><span class="active">Ürün Belgeleri</span><span>Teknik Kararlar</span><span>Müşteri Notları</span><span>Araştırmalar</span></div></aside><main class="chat-center"><div class="mock-head"><div><small>CONTEXT OS</small><strong>Bilgi Asistanı</strong></div></div><div class="chat-query">Yeni ödeme akışındaki ana karar neydi?</div><div class="chat-answer"><b>Karar özeti</b>Ödeme akışı üç adıma indirildi ve misafir ödeme seçeneği korundu.<span class="citation">[1] product-decision-024.md</span></div><div class="chat-input">Bir takip sorusu sorun…</div></main><aside class="chat-inspector"><span class="mock-section-label">KAYNAK DENETÇİSİ</span><div class="inspector-score">confidence: 0.94</div><div class="inspector-lines"><i></i><i></i><i></i></div><div class="source-mini"><span>3 kaynak eşleşti</span><span>Son indeks: 4 dk önce</span></div></aside></div>`;
}

function contextSourcesDemo() {
  return `${windowBar("demo.local / context-os / sources")}<div class="mock-layout">${sidebar("Kaynaklar")}<main class="mock-main"><div class="mock-head"><div><small>BİLGİ TABANI</small><strong>Kaynaklar</strong></div><span class="mock-action">+ Kaynak ekle</span></div><div class="mock-cards"><div class="mock-metric"><span>Toplam kaynak</span><strong>184</strong></div><div class="mock-metric"><span>İndekslendi</span><strong>181</strong></div><div class="mock-metric"><span>Parça sayısı</span><strong>4.2K</strong></div></div><div class="docs-grid" style="margin-top:3%"><div class="doc-card"><i></i><strong>Ürün Kararları</strong><span>38 belge · Markdown</span><small>GÜNCEL</small></div><div class="doc-card"><i></i><strong>Teknik Belgeler</strong><span>76 belge · PDF</span><small>GÜNCEL</small></div><div class="doc-card"><i></i><strong>Müşteri Notları</strong><span>70 belge · Docs</span><small>İŞLENİYOR</small></div></div></main></div>`;
}

function contextPipelineDemo() {
  return `${windowBar("demo.local / context-os / pipeline")}<div class="mock-layout">${sidebar("İşlem Hattı")}<main class="mock-main"><div class="mock-head"><div><small>GÖZLEMLENEBİLİR RAG</small><strong>İşlem hattı</strong></div><span class="mock-action">Test sorgusu</span></div><div class="pipeline"><div class="pipe-node"><i>01</i><b>Belge Alımı</b><span>184 kaynak</span></div><div class="pipe-node"><i>02</i><b>Parçalama</b><span>4,218 parça</span></div><div class="pipe-node"><i>03</i><b>Vektörleme</b><span>768 boyut</span></div><div class="pipe-node"><i>04</i><b>Yanıt</b><span>0.94 güven</span></div></div><div class="mock-cards"><div class="mock-metric"><span>Ort. gecikme</span><strong>680 ms</strong></div><div class="mock-metric"><span>Kaynak isabeti</span><strong>%91</strong></div><div class="mock-metric"><span>Durum</span><strong>Sağlıklı</strong></div></div></main></div>`;
}

function guardSuiteDemo() {
  return `${windowBar("demo.local / formguard / runs / 1842")}<div class="mock-layout">${sidebar("Test Koşuları")}<main class="mock-main"><div class="mock-head"><div><small>RUN #1842 · MAIN</small><strong>Regresyon paketi</strong></div><span class="mock-action">Yeniden çalıştır</span></div><div class="mock-cards"><div class="mock-metric"><span>Başarılı</span><strong>126</strong></div><div class="mock-metric"><span>Başarısız</span><strong>0</strong></div><div class="mock-metric"><span>Süre</span><strong>02:18</strong></div></div><div class="test-suite" style="margin-top:3%"><div class="test-row"><i>✓</i>Kimlik doğrulama<span>chromium</span><b>1.8 s</b></div><div class="test-row"><i>✓</i>Misafir ödeme akışı<span>webkit</span><b>2.4 s</b></div><div class="test-row"><i>✓</i>Profil güncelleme<span>firefox</span><b>1.3 s</b></div><div class="test-row"><i>✓</i>Görsel regresyon<span>3 viewport</span><b>0 fark</b></div><div class="test-row"><i>✓</i>Erişilebilirlik taraması<span>axe-core</span><b>0 hata</b></div></div></main></div>`;
}

function guardDiffDemo() {
  return `${windowBar("demo.local / formguard / visual-diff")}<div class="mock-layout">${sidebar("Görsel Fark")}<main class="mock-main"><div class="mock-head"><div><small>CHECKOUT · 1440 × 900</small><strong>Görsel karşılaştırma</strong></div><span class="mock-action">Değişikliği onayla</span></div><div class="diff-layout"><div class="diff-pane"><span>REFERANS · main</span><div class="diff-page"><header></header><main><i></i><i></i></main></div></div><div class="diff-pane changed"><span>GÜNCEL · feature/checkout</span><div class="diff-page"><header></header><main><i></i><i></i></main></div></div></div></main></div>`;
}

function guardHistoryDemo() {
  return `${windowBar("demo.local / formguard / history")}<div class="mock-layout">${sidebar("Geçmiş")}<main class="mock-main"><div class="mock-head"><div><small>SON 14 GÜN</small><strong>Test sağlığı</strong></div><span class="mock-action">Filtrele</span></div><div class="mock-cards"><div class="mock-metric"><span>Başarı oranı</span><strong>%99.2</strong></div><div class="mock-metric"><span>Kararsız test</span><strong>2</strong></div><div class="mock-metric"><span>Ort. süre</span><strong>2m 14s</strong></div></div><div class="history-layout" style="margin-top:3%"><div class="history-chart"><div class="panel-label"><span>Koşu süresi</span><span>14 gün</span></div><div class="history-bars"><i style="height:58%"></i><i style="height:78%"></i><i style="height:65%"></i><i style="height:92%"></i><i style="height:70%"></i><i style="height:88%"></i><i style="height:61%"></i></div></div><div class="run-list"><span><i></i>main · #1842<b>02:18</b></span><span><i></i>main · #1841<b>02:11</b></span><span><i></i>release · #1840<b>02:32</b></span><span><i></i>main · #1839<b>02:07</b></span></div></div></main></div>`;
}

const demoRenderers = {
  "transit-ops": transitOpsDemo,
  "transit-mobile": transitMobileDemo,
  "transit-analytics": transitAnalyticsDemo,
  "context-chat": contextChatDemo,
  "context-sources": contextSourcesDemo,
  "context-pipeline": contextPipelineDemo,
  "guard-suite": guardSuiteDemo,
  "guard-diff": guardDiffDemo,
  "guard-history": guardHistoryDemo,
};

const demoDialog = document.querySelector("#project-demo");
const demoStage = document.querySelector("#demo-stage");
const demoThumbnails = document.querySelector("#demo-thumbnails");
const demoPrev = document.querySelector(".demo-prev");
const demoNext = document.querySelector(".demo-next");
const demoClose = document.querySelector(".demo-close");
let activeDemoProject = "transit";
let activeDemoScreen = 0;

function renderDemoGallery() {
  const project = demoProjects[activeDemoProject];
  const screen = project.screens[activeDemoScreen];
  document.querySelector("#demo-title").textContent = project.title;
  document.querySelector("#demo-screen-title").textContent = screen.title;
  document.querySelector("#demo-screen-description").textContent = screen.description;
  document.querySelector("#demo-current").textContent = String(activeDemoScreen + 1).padStart(2, "0");
  document.querySelector("#demo-total").textContent = String(project.screens.length).padStart(2, "0");
  demoStage.setAttribute("role", "img");
  demoStage.setAttribute("aria-label", `${project.title}: ${screen.title}`);
  demoStage.innerHTML = `<div class="demo-artboard ${screen.type}">${demoRenderers[screen.type]()}</div>`;
  demoThumbnails.replaceChildren(
    ...project.screens.map((item, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `demo-thumb${index === activeDemoScreen ? " active" : ""}`;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-selected", String(index === activeDemoScreen));
      button.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span><strong>${item.title}</strong>`;
      button.addEventListener("click", () => {
        activeDemoScreen = index;
        renderDemoGallery();
      });
      return button;
    }),
  );
}

document.querySelectorAll(".demo-button[data-demo]").forEach((button) => {
  button.addEventListener("click", () => {
    activeDemoProject = button.dataset.demo;
    activeDemoScreen = 0;
    renderDemoGallery();
    demoDialog.showModal();
  });
});
demoPrev.addEventListener("click", () => {
  const length = demoProjects[activeDemoProject].screens.length;
  activeDemoScreen = (activeDemoScreen - 1 + length) % length;
  renderDemoGallery();
});
demoNext.addEventListener("click", () => {
  const length = demoProjects[activeDemoProject].screens.length;
  activeDemoScreen = (activeDemoScreen + 1) % length;
  renderDemoGallery();
});
demoClose.addEventListener("click", () => demoDialog.close());
demoDialog.addEventListener("click", (event) => {
  if (event.target === demoDialog) demoDialog.close();
});
demoDialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") demoNext.click();
  if (event.key === "ArrowLeft") demoPrev.click();
});

const roleProfiles = {
  fullstack: {
    code: "FULL_STACK",
    overline: "ÜRÜNÜ UÇTAN UCA SAHİPLENME",
    title: "Fikirden çalışan ürüne kadar tek akış.",
    description: "Arayüz, API ve veri katmanını birlikte düşünerek ekipler arasındaki boşlukları azaltan, ölçülebilir ve bakımı kolay ürünler geliştiririm.",
    points: [
      "Arayüz ile servis sözleşmesini birlikte tasarlarım.",
      "Test edilebilir, okunabilir yapı kurarım.",
      "Kullanıcı ihtiyacını teknik kararlara bağlarım.",
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL"],
    core: "FULL<br>STACK",
    nodes: ["UI", "API", "DATA", "TEST"],
  },
  mobile: {
    code: "MOBILE_DEV",
    overline: "CEBİN İÇİNDE AKICI ÜRÜN DENEYİMİ",
    title: "Platform hissini koruyan mobil deneyimler.",
    description: "Performans, dokunma davranışları ve çevrimdışı senaryoları birlikte ele alarak iOS ve Android üzerinde doğal hissettiren ürünler geliştiririm.",
    points: [
      "Mobil öncelikli kullanıcı akışları tasarlarım.",
      "Render ve ağ maliyetlerini gözlemlerim.",
      "Tek kod tabanında platform detaylarını korurum.",
    ],
    stack: ["React Native", "Flutter", "REST", "Firebase"],
    core: "MOBILE<br>DEV",
    nodes: ["iOS", "DROID", "UX", "SYNC"],
  },
  frontend: {
    code: "FRONTEND",
    overline: "DETAY, PERFORMANS VE ERİŞİLEBİLİRLİK",
    title: "Karmaşıklığı sakin arayüzlere dönüştürmek.",
    description: "Tasarım sistemlerini sağlam bileşen mimarisiyle birleştirir; hızlı, erişilebilir ve farklı ekranlarda tutarlı deneyimler üretirim.",
    points: [
      "Tasarımı yeniden kullanılabilir bileşenlere ayırırım.",
      "Erişilebilirliği geliştirme sürecine dahil ederim.",
      "Animasyonu anlamı ve geri bildirimi güçlendirmek için kullanırım.",
    ],
    stack: ["React", "Vite", "CSS", "Playwright"],
    core: "FRONT<br>END",
    nodes: ["A11Y", "UI", "MOTION", "E2E"],
  },
};

const fitTabs = document.querySelectorAll(".fit-tab");
const fitPanel = document.querySelector("#fit-panel");
const fitFields = {
  code: document.querySelector("#fit-code"),
  overline: document.querySelector("#fit-overline"),
  title: document.querySelector("#fit-role-title"),
  description: document.querySelector("#fit-description"),
  points: document.querySelector("#fit-points"),
  stack: document.querySelector("#fit-stack"),
  core: document.querySelector("#orbit-core-label"),
  nodes: ["#orbit-node-one", "#orbit-node-two", "#orbit-node-three", "#orbit-node-four"].map((selector) => document.querySelector(selector)),
};

function renderRole(roleKey) {
  const profile = roleProfiles[roleKey];
  fitPanel.classList.add("is-updating");
  window.setTimeout(() => {
    fitFields.code.textContent = profile.code;
    fitFields.overline.textContent = profile.overline;
    fitFields.title.textContent = profile.title;
    fitFields.description.textContent = profile.description;
    fitFields.points.replaceChildren(
      ...profile.points.map((point, index) => {
        const row = document.createElement("span");
        const number = document.createElement("i");
        number.textContent = String(index + 1).padStart(2, "0");
        row.append(number, document.createTextNode(point));
        return row;
      }),
    );
    fitFields.stack.replaceChildren(
      ...profile.stack.map((technology) => {
        const tag = document.createElement("span");
        tag.textContent = technology;
        return tag;
      }),
    );
    fitFields.core.innerHTML = profile.core;
    fitFields.nodes.forEach((node, index) => { node.textContent = profile.nodes[index]; });
    fitPanel.classList.remove("is-updating");
  }, 130);
}

fitTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    fitTabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    fitPanel.setAttribute("aria-labelledby", tab.id);
    renderRole(tab.dataset.role);
  });
});

document.querySelectorAll(".project-card, .capability-card, .lab-card").forEach((surface) => {
  surface.classList.add("interactive-surface");
});

document.querySelectorAll(".interactive-surface").forEach((surface) => {
  surface.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    const bounds = surface.getBoundingClientRect();
    surface.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
    surface.style.setProperty("--my", `${event.clientY - bounds.top}px`);
  });
});

const tourSlides = [
  {
    code: "PROFILE.INIT()",
    kicker: "KISACA BEN",
    title: "Bilgisayar Mühendisliği mezunu full-stack & mobil geliştirici.",
    description: "Web ve mobil arayüzleri; backend servisleri, veritabanları ve kullanıcı ihtiyacı etrafında birleştiriyorum.",
    points: ["React, Node.js ve veritabanı geliştirme", "Flutter ve React Native ile mobil ürünler", "GenAI, harita servisleri ve E2E testler"],
  },
  {
    code: "PROJECTS.LOAD()",
    kicker: "NE ÜRETTİM?",
    title: "Gerçek ihtiyaçları çalışan web ve mobil ürünlere çevirdim.",
    description: "Akıllı ulaşım, seyahat planlama ve full-stack web problemlerini çalışan projelere dönüştürdüm.",
    points: ["İzmir Deniz sefer asistanı", "Wayra Travel mobil seyahat uygulaması", "Lezz.io MERN web platformu"],
  },
  {
    code: "WORKFLOW.RUN()",
    kicker: "NASIL ÇALIŞIRIM?",
    title: "Önce problemi netleştirir, sonra küçük ve güvenilir adımlarla ilerlerim.",
    description: "Tasarım ve mühendisliği ayrı kutular olarak değil, aynı kullanıcı sonucuna hizmet eden tek süreç olarak ele alıyorum.",
    points: ["Okunabilir ve test edilebilir kod", "Performans ve erişilebilirlik odağı", "Geri bildirime açık, meraklı çalışma biçimi"],
  },
  {
    code: "TEAM.CONNECT()",
    kicker: "BİRLİKTE ÇALIŞALIM",
    title: "Öğrenme hızımı ve üretme enerjimi ekibinize taşımaya hazırım.",
    description: "Full-stack, mobil veya frontend rollerinde sorumluluk alabileceğim bir ekip arıyorum.",
    points: ["Uzaktan ve hibrit rollere açığım", "Şanlıurfa, Türkiye'deyim", "Projelerimi ve yaklaşımımı konuşmaya hazırım"],
  },
];

const tourDialog = document.querySelector("#portfolio-tour");
const tourOpen = document.querySelector("#tour-open");
const tourClose = document.querySelector(".tour-close");
const tourBack = document.querySelector(".tour-back");
const tourNext = document.querySelector(".tour-next");
const tourProgress = [...document.querySelectorAll(".tour-progress i")];
let tourIndex = 0;

function renderTour() {
  const slide = tourSlides[tourIndex];
  document.querySelector("#tour-step-number").textContent = String(tourIndex + 1).padStart(2, "0");
  document.querySelector("#tour-code-label").textContent = slide.code;
  document.querySelector("#tour-kicker").textContent = slide.kicker;
  document.querySelector("#tour-title").textContent = slide.title;
  document.querySelector("#tour-description").textContent = slide.description;
  document.querySelector("#tour-points").replaceChildren(
    ...slide.points.map((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      return item;
    }),
  );
  tourProgress.forEach((dot, index) => dot.classList.toggle("active", index === tourIndex));
  tourBack.disabled = tourIndex === 0;
  tourNext.innerHTML = tourIndex === tourSlides.length - 1 ? "İletişime geç <span>→</span>" : "Devam <span>→</span>";
}

tourOpen.addEventListener("click", () => {
  tourIndex = 0;
  renderTour();
  tourDialog.showModal();
});
tourClose.addEventListener("click", () => tourDialog.close());
tourBack.addEventListener("click", () => {
  if (tourIndex > 0) {
    tourIndex -= 1;
    renderTour();
  }
});
tourNext.addEventListener("click", () => {
  if (tourIndex < tourSlides.length - 1) {
    tourIndex += 1;
    renderTour();
  } else {
    tourDialog.close();
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth", block: "center" });
  }
});
tourDialog.addEventListener("click", (event) => {
  if (event.target === tourDialog) tourDialog.close();
});
tourDialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") tourNext.click();
  if (event.key === "ArrowLeft" && !tourBack.disabled) tourBack.click();
});

const springButton = document.querySelector("#spring-button");
const clickCount = document.querySelector("#click-count");
let triggerCount = 0;
springButton.addEventListener("click", () => {
  triggerCount += 1;
  const isEnglish = window.coreI18n?.language === "en";
  clickCount.textContent = `${triggerCount} ${isEnglish ? "TRIGGERS" : "TETİKLEME"}`;
  springButton.classList.add("pressed");
  springButton.querySelector("span").textContent = isEnglish ? "Done" : "Tamamlandı";
  window.setTimeout(() => {
    springButton.classList.remove("pressed");
    springButton.querySelector("span").textContent = window.coreI18n?.language === "en" ? "Run" : "Çalıştır";
  }, 380);
});

window.addEventListener("corelanguagechange", () => {
  clickCount.textContent = `${triggerCount} ${window.coreI18n?.language === "en" ? "TRIGGERS" : "TETİKLEME"}`;
});

const meshRange = document.querySelector("#mesh-range");
const meshOutput = document.querySelector("#mesh-output");
const meshDemo = document.querySelector(".mesh-demo");
meshRange.addEventListener("input", () => {
  const value = Number(meshRange.value);
  meshOutput.value = `${value}%`;
  const size = 34 - value * 0.18;
  meshDemo.style.backgroundSize = `${size}px ${size * 1.74}px`;
});

const canvas = document.querySelector("#wave-canvas");
const context = canvas.getContext("2d");
const fpsValue = document.querySelector("#fps-value");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let phase = 0;
let lastFrame = performance.now();
let sampledFps = 60;

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = rect.width * ratio;
  canvas.height = rect.height * ratio;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function drawWave(now = performance.now()) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  context.clearRect(0, 0, width, height);
  const gradient = context.createLinearGradient(0, 0, width, 0);
  gradient.addColorStop(0, "#6f8cff");
  gradient.addColorStop(0.5, "#a57dff");
  gradient.addColorStop(1, "#55d9ad");

  for (let layer = 0; layer < 3; layer += 1) {
    context.beginPath();
    context.strokeStyle = gradient;
    context.globalAlpha = 0.78 - layer * 0.2;
    context.lineWidth = 2 - layer * 0.35;
    for (let x = 0; x <= width; x += 3) {
      const y = height * 0.56 + Math.sin(x * (0.022 + layer * 0.003) + phase + layer) * (28 - layer * 5) + Math.sin(x * 0.008 - phase) * 11;
      if (x === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
    context.stroke();
  }
  context.globalAlpha = 1;
  const elapsed = now - lastFrame;
  sampledFps = sampledFps * 0.92 + (1000 / Math.max(elapsed, 1)) * 0.08;
  fpsValue.textContent = String(Math.min(60, Math.round(sampledFps)));
  lastFrame = now;
  phase += 0.018;
  if (!reducedMotion) requestAnimationFrame(drawWave);
}

resizeCanvas();
drawWave();
window.addEventListener("resize", resizeCanvas);

const toast = document.querySelector("#toast");
const copyButton = document.querySelector("#copy-email");
let toastTimer;
copyButton.addEventListener("click", async () => {
  const email = copyButton.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
  } catch {
    const temporaryInput = document.createElement("textarea");
    temporaryInput.value = email;
    temporaryInput.style.position = "fixed";
    temporaryInput.style.opacity = "0";
    document.body.appendChild(temporaryInput);
    temporaryInput.select();
    document.execCommand("copy");
    temporaryInput.remove();
  }
  copyButton.querySelector("b").textContent = "Kopyalandı";
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
    copyButton.querySelector("b").textContent = "Kopyala";
  }, 2200);
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
