<template>
  <header
    class="fixed top-0 left-0 w-full h-20 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl flex items-center"
  >
    <div
      class="w-full max-w-7xl mx-auto px-6 flex justify-between items-center"
    >
      <div
        @click="handleLogoClick"
        class="flex items-center gap-3 cursor-pointer group"
      >
        <div
          class="p-2 bg-blue-400/10 rounded-lg group-hover:bg-blue-400/20 transition-all duration-300"
        >
          <Sparkles
            class="text-blue-400 group-hover:scale-110 transition-transform"
            :size="24"
          />
        </div>
        <span class="text-xl font-bold tracking-tight text-white">
          Şeffaf <span class="text-blue-400">Bakış</span>
        </span>
      </div>

      <nav
        class="hidden md:flex items-center gap-6"
        aria-label="Ana Navigasyon"
      >
        <button
          v-for="item in navItems"
          :key="item.id"
          @click="scrollToSection(item.id)"
          :aria-current="activeSection === item.id ? 'true' : undefined"
          :class="[
            'relative px-4 py-2 text-sm font-bold transition-all duration-300',
            activeSection === item.id
              ? 'text-white'
              : 'text-slate-400 hover:text-white',
          ]"
        >
          {{ item.name }}
          <span
            :class="[
              'absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-blue-400 rounded-full transition-all duration-300',
              activeSection === item.id
                ? 'w-full opacity-100'
                : 'w-0 opacity-0',
            ]"
            aria-hidden="true"
          />
        </button>

        <!-- Erişilebilirlik Butonu ve Paneli -->
        <div class="relative">
          <button
            @click="toggleAccessibilityMenu"
            class="p-2 bg-slate-900 border border-white/10 rounded-lg text-slate-400 hover:text-white hover:border-blue-400/50 transition-all flex items-center gap-1.5 font-semibold text-sm"
            aria-label="Erişilebilirlik Ayarları"
          >
            <Eye :size="18" />
            Görünüm
          </button>

          <!-- Dropdown Panel -->
          <div
            v-if="isAccessibilityMenuOpen"
            class="absolute right-0 mt-3 w-72 bg-slate-900 border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl z-[60] flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div
              class="flex items-center justify-between border-b border-white/5 pb-2"
            >
              <span
                class="text-sm font-bold text-white flex items-center gap-2"
              >
                <Sliders :size="16" class="text-blue-400" /> Erişilebilirlik
              </span>
              <button
                @click="resetSettings"
                class="text-xs text-blue-400 hover:underline"
              >
                Sıfırla
              </button>
            </div>

            <!-- Yazı Boyutu Ayarı -->
            <div class="flex flex-col gap-2">
              <span class="text-xs font-bold text-slate-400">Yazı Boyutu</span>
              <div
                class="grid grid-cols-3 gap-2 bg-slate-950 p-1 rounded-xl border border-white/5"
              >
                <button
                  @click="setTextSize('normal')"
                  :class="[
                    'py-1.5 text-xs font-bold rounded-lg transition-all',
                    textSize === 'normal'
                      ? 'bg-blue-400 text-slate-950'
                      : 'text-slate-400 hover:text-white',
                  ]"
                >
                  A
                </button>
                <button
                  @click="setTextSize('lg')"
                  :class="[
                    'py-1.5 text-sm font-bold rounded-lg transition-all',
                    textSize === 'lg'
                      ? 'bg-blue-400 text-slate-950'
                      : 'text-slate-400 hover:text-white',
                  ]"
                >
                  A+
                </button>
                <button
                  @click="setTextSize('xl')"
                  :class="[
                    'py-1.5 text-base font-bold rounded-lg transition-all',
                    textSize === 'xl'
                      ? 'bg-blue-400 text-slate-950'
                      : 'text-slate-400 hover:text-white',
                  ]"
                >
                  A++
                </button>
              </div>
            </div>

            <!-- Yüksek Kontrast Switch -->
            <div
              class="flex items-center justify-between bg-slate-950/50 p-3 rounded-xl border border-white/5"
            >
              <span class="text-xs font-bold text-slate-300"
                >Yüksek Kontrast (Saf Siyah)</span
              >
              <button
                @click="toggleHighContrast"
                :class="[
                  'w-10 h-6 flex items-center rounded-full p-1 transition-all duration-300',
                  isHighContrast
                    ? 'bg-blue-400 justify-end'
                    : 'bg-slate-800 justify-start',
                ]"
              >
                <span class="w-4 h-4 rounded-full bg-white shadow-md"></span>
              </button>
            </div>

            <!-- Disleksi Dostu Yazı Tipi Switch -->
            <div
              class="flex items-center justify-between bg-slate-950/50 p-3 rounded-xl border border-white/5"
            >
              <span class="text-xs font-bold text-slate-300"
                >Kolay Okunabilir Font</span
              >
              <button
                @click="toggleDyslexicFont"
                :class="[
                  'w-10 h-6 flex items-center rounded-full p-1 transition-all duration-300',
                  isDyslexicFont
                    ? 'bg-blue-400 justify-end'
                    : 'bg-slate-800 justify-start',
                ]"
              >
                <span class="w-4 h-4 rounded-full bg-white shadow-md"></span>
              </button>
            </div>
          </div>
        </div>

        <button
          @click="goToPlatform"
          :aria-current="isOnPlatform ? 'page' : undefined"
          :class="[
            'relative px-5 py-2 text-sm font-bold border rounded-lg transition-all duration-300',
            isOnPlatform
              ? 'bg-blue-400 text-slate-950 border-blue-400'
              : 'bg-blue-500/10 text-blue-400 border-blue-400/20 hover:bg-blue-400 hover:text-slate-950',
          ]"
        >
          Platform
          <span
            v-if="isOnPlatform"
            class="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-blue-300 rounded-full"
            aria-hidden="true"
          />
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { Sparkles, Eye, Sliders } from "lucide-vue-next";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const navItems = [
  { name: "Anasayfa", id: "anasayfa" },
  { name: "Bilgi Köşesi", id: "bilgi-kosesi" },
  { name: "Eğitim", id: "egitim" },
  { name: "S.S.S.", id: "sss" },
];

const isOnPlatform = computed(() => route.path === "/edu-platform");
const activeSection = ref("anasayfa");

// Erişilebilirlik State'leri
const isAccessibilityMenuOpen = ref(false);
const textSize = ref("normal");
const isHighContrast = ref(false);
const isDyslexicFont = ref(false);

const toggleAccessibilityMenu = () => {
  isAccessibilityMenuOpen.value = !isAccessibilityMenuOpen.value;
};

// Sayfaya Sınıf Ekleme/Çıkarma İşlemleri
const setTextSize = (size) => {
  textSize.value = size;
  document.documentElement.classList.remove("text-lg-active", "text-xl-active");
  if (size === "lg") document.documentElement.classList.add("text-lg-active");
  if (size === "xl") document.documentElement.classList.add("text-xl-active");
};

const toggleHighContrast = () => {
  isHighContrast.value = !isHighContrast.value;
  if (isHighContrast.value) {
    document.documentElement.classList.add("high-contrast-active");
  } else {
    document.documentElement.classList.remove("high-contrast-active");
  }
};

const toggleDyslexicFont = () => {
  isDyslexicFont.value = !isDyslexicFont.value;
  if (isDyslexicFont.value) {
    document.documentElement.classList.add("dyslexic-font-active");
  } else {
    document.documentElement.classList.remove("dyslexic-font-active");
  }
};

const resetSettings = () => {
  setTextSize("normal");
  isHighContrast.value = false;
  isDyslexicFont.value = false;
  document.documentElement.classList.remove(
    "high-contrast-active",
    "dyslexic-font-active",
  );
};

// Panel Dışına Tıklayınca Kapatma Mantığı
const closeMenuOnOutsideClick = (event) => {
  if (isAccessibilityMenuOpen.value && !event.target.closest(".relative")) {
    isAccessibilityMenuOpen.value = false;
  }
};

const updateActiveSection = () => {
  if (isOnPlatform.value) return;

  const scrollY = window.scrollY;
  const winHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;
  const headerOffset = 120;

  if (scrollY + winHeight >= docHeight - 80) {
    activeSection.value = navItems[navItems.length - 1].id;
    return;
  }

  let current = navItems[0].id;
  for (const item of navItems) {
    const el = document.getElementById(item.id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top + scrollY - headerOffset;
    if (scrollY >= top) current = item.id;
  }

  activeSection.value = current;
};

watch(
  () => route.path,
  (newPath) => {
    if (newPath === "/") setTimeout(updateActiveSection, 150);
  },
);

onMounted(() => {
  window.addEventListener("scroll", updateActiveSection, { passive: true });
  window.addEventListener("click", closeMenuOnOutsideClick);
  updateActiveSection();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateActiveSection);
  window.removeEventListener("click", closeMenuOnOutsideClick);
});

const goToPlatform = () => router.push("/edu-platform");

const handleLogoClick = () => {
  if (isOnPlatform.value) router.push("/");
  else scrollToSection("anasayfa");
};

const scrollToSection = (id) => {
  if (isOnPlatform.value) {
    router.push("/").then(() => setTimeout(() => scrollTo(id), 150));
    return;
  }
  scrollTo(id);
};

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
  activeSection.value = id;
};
</script>
