const themeToggle = document.querySelector(".case-theme-toggle");

const syncThemeButton = () => {
  const isDark = document.documentElement.dataset.theme === "dark";
  themeToggle?.setAttribute("aria-label", isDark ? "Açık temaya geç" : "Koyu temaya geç");
};

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("core-theme", nextTheme);
  syncThemeButton();
});
syncThemeButton();

const progressBar = document.querySelector(".reading-progress span");
const updateReadingProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  if (progressBar) progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
};
window.addEventListener("scroll", updateReadingProgress, { passive: true });
updateReadingProgress();

const revealObserver = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  }),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

const trackedSections = [...document.querySelectorAll("#problem, #showcase, #engineering, #quality")];
const sectionLinks = [...document.querySelectorAll(".case-nav nav a")];
const sectionObserver = new IntersectionObserver(
  (entries) => {
    const current = entries.find((entry) => entry.isIntersecting);
    if (!current) return;
    sectionLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${current.target.id}`));
  },
  { rootMargin: "-30% 0px -60%", threshold: 0 },
);
trackedSections.forEach((section) => sectionObserver.observe(section));

const galleryItems = [
  {
    src: "assets/izdeniz/home-light.webp",
    category: "core",
    thumb: "Ana ekran",
    title: "Sıradaki sefer, ilk bakışta",
    description: "Seçili iskele, rota, kalkış saati ve saniyelik geri sayım aynı karar alanında buluşuyor.",
    alt: "İzmir Deniz açık tema ana ekranı",
    points: ["Tek bakışta rota ve süre", "Sonraki seferlere hızlı erişim", "Yol tarifi ve favori eylemleri"],
  },
  {
    src: "assets/izdeniz/trip-detail.webp",
    category: "core",
    thumb: "Sefer detayı",
    title: "Rotayı gerektiğinde derinleştir",
    description: "Alt sayfa yapısı; kalkış, varış ve ara durak bilgisini ana akışı kaybetmeden gösteriyor.",
    alt: "Pasaport–Bostanlı sefer detay ekranı",
    points: ["Kalkış ve varış saatleri", "Ara durak zaman çizgisi", "Bağlamı koruyan alt sayfa"],
  },
  {
    src: "assets/izdeniz/notifications.webp",
    category: "core",
    thumb: "Hatırlatıcılar",
    title: "Yaklaşan seferleri unutma",
    description: "Kullanıcı hatırlatıcılarını tek alanda görür; kaydırma hareketiyle hızlıca silebilir.",
    alt: "İzmir Deniz bildirimler ekranı",
    points: ["Aktif hatırlatıcı listesi", "Kalkıştan önce bildirim", "Kaydırarak hızlı silme"],
  },
  {
    src: "assets/izdeniz/pier-selector.webp",
    category: "core",
    thumb: "İskele seçimi",
    title: "İskele değiştirirken akışı bölme",
    description: "Arama, favoriler, yakınlık ve arabalı vapur filtreleri aynı seçim yüzeyinde bir araya geliyor.",
    alt: "Koyu temada iskele seçim ekranı",
    points: ["İskele adına göre arama", "Favori ve yakın iskeleler", "Erişilebilirlik simgeleri"],
  },
  {
    src: "assets/izdeniz/gulf-map.webp",
    category: "map",
    thumb: "3D Körfez",
    title: "Tarifeyi mekânsal bir deneyime dönüştür",
    description: "Tahmini vapur hareketleri, iskele modelleri ve renk kodlu rotalar 2D/3D kamera seçenekleriyle gösteriliyor.",
    alt: "İzmir Körfezi 3D haritası",
    points: ["Sekiz iç körfez iskelesi", "Yolcu ve arabalı vapur filtresi", "Rota katmanı ve kamera kontrolleri"],
  },
  {
    src: "assets/izdeniz/onboarding-schedule.webp",
    category: "onboarding",
    thumb: "Seferleri bul",
    title: "Değeri ilk ekranda anlat",
    description: "Karşılama akışı, ürünün temel faydasını kısa metin ve güçlü görselle doğrudan tanıtıyor.",
    alt: "Seferini saniyeler içinde bul karşılama ekranı",
    points: ["Tek cümlelik fayda", "Atla veya devam et", "İlerleme göstergesi"],
  },
  {
    src: "assets/izdeniz/onboarding-nearest.webp",
    category: "onboarding",
    thumb: "Yakın iskele",
    title: "Konum izninin faydasını açıkla",
    description: "İzin talebi, teknik bir uyarı yerine kullanıcının kazanacağı kolaylık üzerinden anlatılıyor.",
    alt: "En yakın iskele ve rota karşılama ekranı",
    points: ["İzin öncesi bağlam", "Yakınlığa göre sıralama", "Kontrol kullanıcıda"],
  },
  {
    src: "assets/izdeniz/onboarding-car-ferry.webp",
    category: "onboarding",
    thumb: "Arabalı vapur",
    title: "Özel hattı ayrı bir değer olarak göster",
    description: "Bostanlı–Üçkuyular arabalı vapur deneyimi ilk kullanımda görünür hâle geliyor.",
    alt: "Bostanlı Üçkuyular arabalı vapur karşılama ekranı",
    points: ["Hat odaklı anlatım", "Yolcu ve araç bağlamı", "Kısa ve taranabilir metin"],
  },
  {
    src: "assets/izdeniz/onboarding-home-pier.webp",
    category: "onboarding",
    thumb: "Ana iskele",
    title: "Kişiselleştirmeyi başlangıca taşı",
    description: "Kullanıcı en sık kullandığı iskeleyi seçerek uygulamayı kendi günlük rutinine göre başlatıyor.",
    alt: "Ana iskele seçimi karşılama ekranı",
    points: ["Varsayılan iskele seçimi", "Hızlı değiştirme", "İlk kullanımın tamamlanması"],
  },
  {
    src: "assets/izdeniz/home-dark.webp",
    category: "theme",
    thumb: "Koyu tema",
    title: "Aynı hiyerarşi, farklı ışık koşulu",
    description: "Kalıcı tema tercihi, bilgi hiyerarşisini ve durum renklerini gece kullanımında da koruyor.",
    alt: "İzmir Deniz koyu tema ana ekranı",
    points: ["Sistem veya kullanıcı tercihi", "Kalıcı ayar", "Karanlıkta okunabilir kontrast"],
  },
];

let currentFilter = "core";
let filteredItems = galleryItems.filter((item) => item.category === currentFilter);
let activeIndex = 0;

const galleryImage = document.querySelector("#gallery-main-image");
const galleryTitle = document.querySelector("#gallery-title");
const galleryDescription = document.querySelector("#gallery-description");
const galleryPoints = document.querySelector("#gallery-points");
const galleryCount = document.querySelector("#gallery-count");
const galleryThumbs = document.querySelector("#gallery-thumbs");
const galleryProgress = document.querySelector(".gallery-progress i");

const renderGallery = () => {
  const item = filteredItems[activeIndex];
  if (!item) return;
  galleryImage.src = item.src;
  galleryImage.alt = item.alt;
  galleryTitle.textContent = item.title;
  galleryDescription.textContent = item.description;
  galleryPoints.innerHTML = item.points.map((point) => `<li>${point}</li>`).join("");
  galleryCount.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(filteredItems.length).padStart(2, "0")}`;
  galleryProgress.style.width = `${((activeIndex + 1) / filteredItems.length) * 100}%`;
  galleryThumbs.innerHTML = filteredItems.map((screen, index) => {
    const translatedThumb = window.coreI18n?.translate(screen.thumb) || screen.thumb;
    const thumbLabel = window.coreI18n?.language === "en" ? `Show ${translatedThumb}` : `${screen.thumb} ekranını göster`;
    return `
    <button class="gallery-thumb${index === activeIndex ? " active" : ""}" type="button" data-thumb-index="${index}" aria-label="${thumbLabel}" aria-pressed="${index === activeIndex}">
      <img src="${screen.src}" alt="" loading="lazy" />
      <span>${screen.thumb}</span>
    </button>
  `;
  }).join("");
  galleryThumbs.querySelectorAll(".gallery-thumb").forEach((button) => {
    button.addEventListener("click", () => {
      activeIndex = Number(button.dataset.thumbIndex);
      renderGallery();
    });
  });
};

document.querySelectorAll(".gallery-tab").forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.galleryFilter;
    filteredItems = galleryItems.filter((item) => item.category === currentFilter);
    activeIndex = 0;
    document.querySelectorAll(".gallery-tab").forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    renderGallery();
  });
});

document.querySelector(".gallery-prev")?.addEventListener("click", () => {
  activeIndex = (activeIndex - 1 + filteredItems.length) % filteredItems.length;
  renderGallery();
});
document.querySelector(".gallery-next")?.addEventListener("click", () => {
  activeIndex = (activeIndex + 1) % filteredItems.length;
  renderGallery();
});
renderGallery();

window.addEventListener("corelanguagechange", () => {
  renderGallery();
  if (lightbox?.open) renderLightbox();
});

const lightbox = document.querySelector("#image-lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxCounter = document.querySelector("#lightbox-counter");
let lightboxIndex = 0;

const renderLightbox = () => {
  const item = galleryItems[lightboxIndex];
  lightboxImage.src = item.src;
  lightboxImage.alt = item.alt;
  lightboxTitle.textContent = item.thumb;
  lightboxCaption.textContent = item.title;
  lightboxCounter.textContent = `${String(lightboxIndex + 1).padStart(2, "0")} / ${String(galleryItems.length).padStart(2, "0")}`;
};

const openLightbox = (item) => {
  lightboxIndex = Math.max(0, galleryItems.indexOf(item));
  renderLightbox();
  lightbox.showModal();
};

document.querySelector(".gallery-device")?.addEventListener("click", () => openLightbox(filteredItems[activeIndex]));
document.querySelector(".map-shot")?.addEventListener("click", () => openLightbox(galleryItems[4]));
document.querySelector(".lightbox-close")?.addEventListener("click", () => lightbox.close());
document.querySelector(".lightbox-prev")?.addEventListener("click", () => {
  lightboxIndex = (lightboxIndex - 1 + galleryItems.length) % galleryItems.length;
  renderLightbox();
});
document.querySelector(".lightbox-next")?.addEventListener("click", () => {
  lightboxIndex = (lightboxIndex + 1) % galleryItems.length;
  renderLightbox();
});
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
document.addEventListener("keydown", (event) => {
  if (!lightbox?.open) return;
  if (event.key === "ArrowLeft") document.querySelector(".lightbox-prev")?.click();
  if (event.key === "ArrowRight") document.querySelector(".lightbox-next")?.click();
});
