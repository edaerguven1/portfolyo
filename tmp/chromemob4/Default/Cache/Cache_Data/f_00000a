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
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

const trackedSections = [...document.querySelectorAll("#overview, #planner, #screens, #technology")];
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
    category: "discover",
    thumb: { tr: "Ana ekran", en: "Home" },
    eyebrow: { tr: "KEŞİF", en: "DISCOVERY" },
    title: { tr: "Ana ekran: yukarıdan aşağıya keşif", en: "Home: discovery from top to bottom" },
    description: { tr: "Karşılama, yapay zekâ ile plan oluşturma, arama, kategori ve popüler destinasyonlar tek kaydırma akışında.", en: "Greeting, AI planning, search, categories, and popular destinations live in one continuous scroll." },
    points: { tr: ["Üst ve alt akış birlikte", "Kategori ve şehir karuselleri", "Planlamaya güçlü geçiş"], en: ["Top and bottom flow together", "Category and city carousels", "Strong path into planning"] },
    images: [
      { src: "assets/wayra/home-top.png", alt: { tr: "Wayra ana ekranının üst bölümü", en: "Top section of the Wayra home screen" } },
      { src: "assets/wayra/home-bottom.png", alt: { tr: "Wayra ana ekranının alt keşif bölümü", en: "Lower discovery section of the Wayra home screen" } },
    ],
  },
  {
    category: "discover",
    thumb: { tr: "Şehirleri keşfet", en: "Explore cities" },
    eyebrow: { tr: "KEŞİF", en: "DISCOVERY" },
    title: { tr: "Şehirden etkinliğe ilerleyen keşif", en: "Discovery that moves from city to event" },
    description: { tr: "Şehir kartları mevcut etkinlik yoğunluğunu gösteriyor; şehir detayı katılımcı, kontenjan ve zaman bilgisini bir araya getiriyor.", en: "City cards show activity density; city detail combines participant, capacity, and time information." },
    points: { tr: ["Şehir ve tarih filtreleri", "Etkinlik / yol arkadaşı sekmeleri", "Kaydet ve katıl eylemleri"], en: ["City and date filters", "Event / companion tabs", "Save and join actions"] },
    images: [
      { src: "assets/wayra/explore.png", alt: { tr: "Wayra keşfet şehir listesi", en: "Wayra explore city list" } },
      { src: "assets/wayra/explore-city.png", alt: { tr: "Wayra Muğla etkinlik detayı", en: "Wayra Muğla event detail" } },
    ],
  },
  {
    category: "discover",
    thumb: { tr: "Rota detayı", en: "Route detail" },
    eyebrow: { tr: "HARİTA", en: "MAP" },
    title: { tr: "Yapay zekâ çıktısını düzenlenebilir kıl", en: "Make AI output editable" },
    description: { tr: "Gün sekmeleri, harita rotası ve zaman çizelgesi aynı yüzeyde. Kullanıcı durağı silebilir, taşıyabilir veya araya yeni durak ekleyebilir.", en: "Day tabs, map route, and timeline share one surface. Users can delete, reorder, or insert stops." },
    points: { tr: ["Gün bazlı rota", "Durak ve geçiş süreleri", "Değişiklikleri kaydet"], en: ["Day-based route", "Stops and transfer times", "Save changes"] },
    images: [{ src: "assets/wayra/route-detail.png", alt: { tr: "Wayra düzenlenebilir rota detay ekranı", en: "Wayra editable route detail screen" } }],
  },
  {
    category: "planner",
    thumb: { tr: "Adımlar 1–4", en: "Steps 1–4" },
    eyebrow: { tr: "PLANLAMA · 1/2", en: "PLANNING · 1/2" },
    title: { tr: "Rotanın bağlamını kur", en: "Build the route context" },
    description: { tr: "Şehir, tarih, başlangıç noktası ve seyahat grubu; önerinin nerede, ne zaman ve kimler için üretileceğini belirliyor.", en: "City, dates, start point, and travel group define where, when, and for whom the route is generated." },
    points: { tr: ["Her ekranda tek karar", "Sekiz parçalı ilerleme", "Mevcut konumu kullanma"], en: ["One decision per screen", "Eight-part progress", "Use current location"] },
    images: [1, 2, 3, 4].map((step) => ({ src: `assets/wayra/plan-step-${step}.png`, alt: { tr: `Wayra planlama adımı ${step}`, en: `Wayra planning step ${step}` } })),
  },
  {
    category: "planner",
    thumb: { tr: "Adımlar 5–8", en: "Steps 5–8" },
    eyebrow: { tr: "PLANLAMA · 2/2", en: "PLANNING · 2/2" },
    title: { tr: "Rotayı kişiselleştir", en: "Personalize the route" },
    description: { tr: "Ulaşım, bütçe, ruh hâli, günlük saat aralığı, gizlilik ve ilgi alanları rotanın karakterini belirliyor.", en: "Transport, budget, mood, daily hours, privacy, and interests shape the route's character." },
    points: { tr: ["Lojistik kısıtlar", "Bütçe ve duygu bağlamı", "Çoklu ilgi alanı seçimi"], en: ["Logistics constraints", "Budget and mood context", "Multi-interest selection"] },
    images: [5, 6, 7, 8].map((step) => ({ src: `assets/wayra/plan-step-${step}.png`, alt: { tr: `Wayra planlama adımı ${step}`, en: `Wayra planning step ${step}` } })),
  },
  {
    category: "social",
    thumb: { tr: "Planlar", en: "Plans" },
    eyebrow: { tr: "PLAN YÖNETİMİ", en: "PLAN MANAGEMENT" },
    title: { tr: "Kişisel ve ortak planları ayır", en: "Separate personal and shared plans" },
    description: { tr: "Kişisel rotalar düzenleme ve arkadaş bulma eylemlerini; ortak planlar ise birlikte devam etme durumunu öne çıkarıyor.", en: "Personal routes emphasize editing and finding companions; shared plans highlight continuing together." },
    points: { tr: ["Kişisel / ortak sekmeleri", "Rota ve etkinlik planları", "Durum bilgisi"], en: ["Personal / shared tabs", "Route and event plans", "Status information"] },
    images: [
      { src: "assets/wayra/plans-personal.png", alt: { tr: "Wayra kişisel plan kartı", en: "Wayra personal plan card" } },
      { src: "assets/wayra/plans-shared.png", alt: { tr: "Wayra ortak rota planı", en: "Wayra shared route plan" } },
      { src: "assets/wayra/plans-event.png", alt: { tr: "Wayra ortak etkinlik planı", en: "Wayra shared event plan" } },
    ],
  },
  {
    category: "social",
    thumb: { tr: "Gezi onayı", en: "Trip approval" },
    eyebrow: { tr: "SOHBET DURUMLARI", en: "CHAT STATES" },
    title: { tr: "Beklemeden onaya: görünür durum yönetimi", en: "From waiting to approved: visible state management" },
    description: { tr: "Aynı gezi kartı; alıcı, gönderen ve onaylanmış durumlarda değişiyor. Böylece kimin aksiyon alması gerektiği sohbet içinde anlaşılır kalıyor.", en: "The same trip card changes for recipient, sender, and approved states, keeping the next action clear in chat." },
    points: { tr: ["Alıcı için onay eylemi", "Gönderen için bekleme durumu", "Ortak plana otomatik ekleme"], en: ["Approval action for recipient", "Waiting state for sender", "Automatic addition to shared plans"] },
    images: [
      { src: "assets/wayra/event-chat-accept.png", alt: { tr: "Gezi onay kartını kabul etme durumu", en: "Trip approval card accept state" } },
      { src: "assets/wayra/event-chat-waiting.png", alt: { tr: "Karşı tarafın onayının beklendiği durum", en: "Waiting for the other party's approval" } },
      { src: "assets/wayra/event-chat-approved.png", alt: { tr: "Onaylanmış ortak gezi durumu", en: "Approved shared trip state" } },
    ],
  },
  {
    category: "social",
    thumb: { tr: "MergeWay", en: "MergeWay" },
    eyebrow: { tr: "ORTAK ROTA", en: "SHARED ROUTE" },
    title: { tr: "İki farklı planı harmanla", en: "Blend two different plans" },
    description: { tr: "MergeWay ön izlemesi, iki tarafın onayını ayrı ayrı gösteriyor ve ortak rotayı sohbet bağlamında incelemeye açıyor.", en: "MergeWay preview shows each party's approval separately and opens the shared route within chat context." },
    points: { tr: ["Çakışan günleri bulma", "Tercihleri dengeleme", "Çift taraflı onay"], en: ["Find overlapping days", "Balance preferences", "Two-sided approval"] },
    images: [{ src: "assets/wayra/mergeway-chat.png", alt: { tr: "Wayra MergeWay rota ön izleme ekranı", en: "Wayra MergeWay route preview screen" } }],
  },
  {
    category: "social",
    thumb: { tr: "Yol arkadaşı", en: "Companion" },
    eyebrow: { tr: "PAYLAŞIM", en: "SHARING" },
    title: { tr: "Kontenjanı paylaşmadan önce belirle", en: "Set capacity before sharing" },
    description: { tr: "Plan kartı üzerindeki arkadaş bul eylemi, seyahat grubunun toplam kapasitesini belirleyen odaklı bir modal açıyor.", en: "The find-a-companion action opens a focused modal to set total travel-group capacity." },
    points: { tr: ["Adım adım kişi sayısı", "Arka planda bağlamı koruma", "Tek eylemle paylaşım"], en: ["Step-by-step group size", "Preserved background context", "Share in one action"] },
    images: [{ src: "assets/wayra/travel-companion-modal.png", alt: { tr: "Wayra yol arkadaşı kontenjanı modalı", en: "Wayra travel companion capacity modal" } }],
  },
  {
    category: "social",
    thumb: { tr: "Kaydedilenler", en: "Saved" },
    eyebrow: { tr: "KAYDET & KATIL", en: "SAVE & JOIN" },
    title: { tr: "Kaydedilen keşfi yeniden eyleme dönüştür", en: "Turn a saved discovery back into action" },
    description: { tr: "Kaydedilen etkinlik; mekân, kontenjan, boş yer ve plan gününü tek kartta koruyor.", en: "A saved event preserves place, capacity, open spots, and plan day in one card." },
    points: { tr: ["Kontenjan görünürlüğü", "Plan günü bağlantısı", "Doğrudan katılım"], en: ["Visible capacity", "Plan-day link", "Direct join"] },
    images: [{ src: "assets/wayra/saved-discoveries.png", alt: { tr: "Wayra kaydedilen keşif kartı", en: "Wayra saved discovery card" } }],
  },
  {
    category: "social",
    thumb: { tr: "Gelen istek", en: "Incoming request" },
    eyebrow: { tr: "BİLDİRİM", en: "NOTIFICATION" },
    title: { tr: "Katılım isteğine hızlı yanıt ver", en: "Respond quickly to a join request" },
    description: { tr: "Gelen istek ekranı, hangi etkinlik için kimden istek geldiğini ve kabul / reddet eylemlerini yalın bir kartta sunuyor.", en: "Incoming requests show who wants to join which event, with clear accept and decline actions." },
    points: { tr: ["Bağlamı açık istek", "Kabul ve reddet", "Bildirimden eyleme"], en: ["Context-rich request", "Accept and decline", "Notification to action"] },
    images: [{ src: "assets/wayra/request-notification.png", alt: { tr: "Wayra gelen katılım isteği", en: "Wayra incoming join request" } }],
  },
  {
    category: "profile",
    thumb: { tr: "Profil akışı", en: "Profile flow" },
    eyebrow: { tr: "PROFİL", en: "PROFILE" },
    title: { tr: "Seyahat geçmişini kişisel bir arşive dönüştür", en: "Turn travel history into a personal archive" },
    description: { tr: "Profilin üst ve alt kaydırma görüntüleri tek akışta: sayaçlar, yaklaşan gezi, geçmiş rotalar, harita ve yardımcı menüler.", en: "Top and lower profile captures in one flow: stats, upcoming trip, history, map, and utilities." },
    points: { tr: ["Üst ve alt akış birlikte", "Gezilen / planlanan yer haritası", "Ayar ve kaydedilenlere erişim"], en: ["Top and lower flow together", "Visited / planned map", "Access to settings and saved items"] },
    images: [
      { src: "assets/wayra/profile-top.png", alt: { tr: "Wayra profil ekranının üst bölümü", en: "Top section of the Wayra profile" } },
      { src: "assets/wayra/profile-bottom.png", alt: { tr: "Wayra profil ekranının alt bölümü", en: "Lower section of the Wayra profile" } },
    ],
  },
  {
    category: "profile",
    thumb: { tr: "Seyahat karnesi", en: "Travel report" },
    eyebrow: { tr: "İÇGÖRÜ", en: "INSIGHTS" },
    title: { tr: "Geçmişi anlamlı bir seyahat karnesine çevir", en: "Turn history into a meaningful travel report" },
    description: { tr: "Harita, toplam mesafe, favori şehir ve tema dağılımı kullanıcının seyahat DNA'sını özetliyor.", en: "Map, total distance, favorite city, and theme distribution summarize the user's travel DNA." },
    points: { tr: ["Ziyaret edilen şehirler", "Mesafe ve favori şehir", "Tema bazlı dağılım"], en: ["Visited cities", "Distance and favorite city", "Theme distribution"] },
    images: [{ src: "assets/wayra/travel-report.png", alt: { tr: "Wayra seyahat karnesi ekranı", en: "Wayra travel report screen" } }],
  },
  {
    category: "profile",
    thumb: { tr: "Ayarlar", en: "Settings" },
    eyebrow: { tr: "TERCİHLER", en: "PREFERENCES" },
    title: { tr: "Koyu mod ve bildirim kontrolünü görünür tut", en: "Keep dark mode and notifications visible" },
    description: { tr: "Güvenlik, tema, bildirim ve gizlilik seçenekleri kısa bir ayar hiyerarşisinde toplanıyor.", en: "Security, theme, notifications, and privacy are organized in a concise settings hierarchy." },
    points: { tr: ["Koyu mod anahtarı", "Bildirim tercihleri", "Gizlilik politikası"], en: ["Dark mode toggle", "Notification preferences", "Privacy policy"] },
    images: [{ src: "assets/wayra/settings.png", alt: { tr: "Wayra ayarlar ekranı", en: "Wayra settings screen" } }],
  },
  {
    category: "onboarding",
    thumb: { tr: "Karşılama", en: "Welcome" },
    eyebrow: { tr: "MARKA", en: "BRAND" },
    title: { tr: "Markayı ilk saniyede tanıt", en: "Introduce the brand in the first second" },
    description: { tr: "Wayra'nın rota çizgilerini çağrıştıran işareti, koyu mor zemin ve turuncu-mor renk sistemiyle açılış deneyimini kuruyor.", en: "Wayra's route-inspired mark establishes the opening experience with a deep purple and orange-violet system." },
    points: { tr: ["Rota metaforlu işaret", "Tutarlı koyu tema", "Kısa marka anı"], en: ["Route-inspired mark", "Consistent dark theme", "Concise brand moment"] },
    images: [{ src: "assets/wayra/splash.png", alt: { tr: "Wayra açılış ekranı", en: "Wayra splash screen" } }],
  },
  {
    category: "onboarding",
    thumb: { tr: "Giriş", en: "Sign in" },
    eyebrow: { tr: "KİMLİK", en: "IDENTITY" },
    title: { tr: "Düşük sürtünmeli giriş", en: "Low-friction sign in" },
    description: { tr: "E-posta ve şifreyi tek ekranda tutan giriş akışı, kayıt ol bağlantısını ana eylemin altında görünür bırakıyor.", en: "The sign-in flow keeps email and password on one screen and leaves registration visible below the primary action." },
    points: { tr: ["İki alanlı yalın form", "Net birincil eylem", "Kayıt ol geçişi"], en: ["Simple two-field form", "Clear primary action", "Path to registration"] },
    images: [{ src: "assets/wayra/login.png", alt: { tr: "Wayra giriş ekranı", en: "Wayra sign-in screen" } }],
  },
  {
    category: "onboarding",
    thumb: { tr: "Kayıt", en: "Register" },
    eyebrow: { tr: "KİMLİK", en: "IDENTITY" },
    title: { tr: "Profil bağlamını hesapla birlikte kur", en: "Build profile context with the account" },
    description: { tr: "Kullanıcı adı, e-posta ve şifreye ek olarak cinsiyet ve doğum tarihi bilgileri aynı kayıt akışında toplanıyor.", en: "Username, email, password, gender, and birth date are collected in the same registration flow." },
    points: { tr: ["Tutarlı alan dili", "Profil başlangıç verisi", "Tek sayfalık kayıt"], en: ["Consistent field language", "Initial profile data", "Single-page registration"] },
    images: [{ src: "assets/wayra/register.png", alt: { tr: "Wayra kayıt ol ekranı", en: "Wayra registration screen" } }],
  },
];

let currentFilter = "discover";
let filteredItems = galleryItems.filter((item) => item.category === currentFilter);
let activeIndex = 0;

const getLanguage = () => window.coreI18n?.language || "tr";
const localize = (value) => value?.[getLanguage()] || value?.tr || "";
const galleryStage = document.querySelector("#gallery-stage");
const galleryTitle = document.querySelector("#gallery-title");
const galleryEyebrow = document.querySelector("#gallery-eyebrow");
const galleryDescription = document.querySelector("#gallery-description");
const galleryPoints = document.querySelector("#gallery-points");
const galleryCount = document.querySelector("#gallery-count");
const galleryThumbs = document.querySelector("#gallery-thumbs");
const galleryProgress = document.querySelector(".gallery-progress i");

const renderGallery = () => {
  const item = filteredItems[activeIndex];
  if (!item) return;
  galleryEyebrow.textContent = localize(item.eyebrow);
  galleryTitle.textContent = localize(item.title);
  galleryDescription.textContent = localize(item.description);
  galleryPoints.innerHTML = item.points[getLanguage()].map((point) => `<li>${point}</li>`).join("");
  galleryCount.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(filteredItems.length).padStart(2, "0")}`;
  galleryProgress.style.width = `${((activeIndex + 1) / filteredItems.length) * 100}%`;
  const visibleImages = item.images.length > 3 ? item.images.filter((_, index) => index === 0 || index === Math.ceil(item.images.length / 2) || index === item.images.length - 1) : item.images;
  galleryStage.innerHTML = visibleImages.map((image, index) => `<button class="screen-device" type="button" data-src="${image.src}" data-title="${localize(item.title)}" data-caption="${localize(image.alt)}" aria-label="${localize(image.alt)}"><img src="${image.src}" alt="${localize(image.alt)}" loading="lazy" /></button>`).join("");
  galleryThumbs.innerHTML = filteredItems.map((screen, index) => `<button class="gallery-thumb${index === activeIndex ? " active" : ""}" type="button" data-thumb-index="${index}" aria-pressed="${index === activeIndex}"><img src="${screen.images[0].src}" alt="" loading="lazy" /><span>${localize(screen.thumb)}</span></button>`).join("");
  galleryThumbs.querySelectorAll(".gallery-thumb").forEach((button) => button.addEventListener("click", () => {
    activeIndex = Number(button.dataset.thumbIndex);
    renderGallery();
  }));
};

document.querySelectorAll(".gallery-tab").forEach((button) => button.addEventListener("click", () => {
  currentFilter = button.dataset.galleryFilter;
  filteredItems = galleryItems.filter((item) => item.category === currentFilter);
  activeIndex = 0;
  document.querySelectorAll(".gallery-tab").forEach((tab) => {
    const active = tab === button;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  renderGallery();
}));

document.querySelector(".gallery-prev")?.addEventListener("click", () => {
  activeIndex = (activeIndex - 1 + filteredItems.length) % filteredItems.length;
  renderGallery();
});
document.querySelector(".gallery-next")?.addEventListener("click", () => {
  activeIndex = (activeIndex + 1) % filteredItems.length;
  renderGallery();
});

const lightbox = document.querySelector("#image-lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxCounter = document.querySelector("#lightbox-counter");
const allScreens = galleryItems.flatMap((item) => item.images.map((image) => ({ ...image, title: item.title })));
let lightboxIndex = 0;

const renderLightbox = () => {
  const screen = allScreens[lightboxIndex];
  lightboxImage.src = screen.src;
  lightboxImage.alt = localize(screen.alt);
  lightboxTitle.textContent = localize(screen.title);
  lightboxCaption.textContent = localize(screen.alt);
  lightboxCounter.textContent = `${String(lightboxIndex + 1).padStart(2, "0")} / ${String(allScreens.length).padStart(2, "0")}`;
};

galleryStage?.addEventListener("click", (event) => {
  const device = event.target.closest(".screen-device");
  if (!device) return;
  lightboxIndex = allScreens.findIndex((screen) => screen.src === device.dataset.src);
  renderLightbox();
  lightbox.showModal();
});
document.querySelector(".lightbox-close")?.addEventListener("click", () => lightbox.close());
document.querySelector(".lightbox-prev")?.addEventListener("click", () => {
  lightboxIndex = (lightboxIndex - 1 + allScreens.length) % allScreens.length;
  renderLightbox();
});
document.querySelector(".lightbox-next")?.addEventListener("click", () => {
  lightboxIndex = (lightboxIndex + 1) % allScreens.length;
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

window.addEventListener("corelanguagechange", () => {
  renderGallery();
  if (lightbox?.open) renderLightbox();
});
renderGallery();
