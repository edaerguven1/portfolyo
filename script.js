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
  { rootMargin: "-20% 0px -40%", threshold: [0.05, 0.2] },
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
      const matches = filter === "all" || card.dataset.category.split(/\s+/).includes(filter);
      card.classList.toggle("hidden", !matches);
    });
    const visibleCount = [...projectCards].filter((card) => !card.classList.contains("hidden")).length;
    projectGrid.classList.toggle("single-result", visibleCount === 1);
  });
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
    stack: ["React", "Node.js", "MongoDB", "PostgreSQL"],
    core: "FULL<br>STACK",
    nodes: ["UI", "API", "NoSQL", "SQL"],
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
    nodes: ["iOS", "Android", "UX", "SYNC"],
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
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(resizeCanvas, 150);
});

const toast = document.querySelector("#toast");
const copyButton = document.querySelector("#copy-email");
let toastTimer;
copyButton.addEventListener("click", async () => {
  const email = copyButton.dataset.email;
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      console.error("Clipboard write failed:", err);
    }
  } else {
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
