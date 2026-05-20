<template>
  <header
    class="fixed top-0 left-0 w-full h-20 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl flex items-center"
  >
    <div
      class="w-full max-w-7xl mx-auto px-6 flex justify-between items-center"
    >
      <!-- Logo -->
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

      <!-- Nav -->
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

        <!-- Platform butonu -->
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
import { Sparkles } from "lucide-vue-next";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const navItems = [
  { name: "Anasayfa", id: "anasayfa" },
  { name: "Bilgi Köşesi", id: "bilgi-kosesi" },
  { name: "Eğitim", id: "egitim" },
];

const isOnPlatform = computed(() => route.path === "/edu-platform");
const activeSection = ref("anasayfa");

const updateActiveSection = () => {
  if (isOnPlatform.value) return;

  const scrollY = window.scrollY;
  const winHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;
  const headerOffset = 120;

  // Sayfanın en altına yaklaştık mı? → son section aktif
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
  updateActiveSection();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateActiveSection);
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
