<template>
  <section
    id="anasayfa"
    class="relative w-full min-h-screen bg-slate-950 flex flex-col items-center pt-32 px-6 overflow-hidden"
  >
    <!-- Badge: Amacı netleştiriyoruz -->
    <div
      class="flex items-center gap-2 px-6 py-2 bg-blue-400/10 border border-blue-400/20 rounded-full mb-10"
    >
      <GraduationCap class="text-blue-400" :size="16" />
      <span class="text-sm font-bold text-blue-400 uppercase tracking-widest">
        Dijital Eğitim ve Farkındalık Platformu
      </span>
    </div>

    <!-- Ana İçerik -->
    <div class="text-center max-w-7xl mx-auto">
      <h1
        class="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-8"
      >
        Haklarını <span class="text-blue-400">Öğren</span>,<br />
        Bütçeni
        <span
          class="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent animate-gradient"
        >
          Denetle
        </span>
      </h1>

      <p class="text-2xl md:text-3xl text-slate-200 font-semibold mb-6">
        Şeffaf Bakış ile Vatandaşlık Bilincini Geliştirin.
      </p>

      <div class="max-w-3xl mx-auto mb-12">
        <p class="text-lg md:text-xl text-slate-400 leading-relaxed">
          Kamu kaynaklarının kullanımını anlamak ve bütçe süreçlerini takip
          etmek her vatandaşın hakkıdır.
          <span class="text-white">Eğitim portalımızdaki</span> interaktif
          materyallerle şeffaflık kültürünü birlikte inşa ediyoruz.
        </p>
      </div>

      <!-- Butonlar: Aksiyon odaklı -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-5">
        <button
          @click="goToPlatform"
          class="flex items-center gap-3 px-10 py-4 bg-blue-400 text-slate-950 font-bold rounded-xl shadow-[0_0_40px_rgba(56,189,248,0.4)] transition-all duration-300 hover:bg-blue-300 hover:scale-105 active:scale-95"
        >
          <PlayCircle :size="20" />
          <span>Eğitime Hemen Başla</span>
        </button>

        <button
          @click="scrollToSection('bilgi-kosesi')"
          class="flex items-center gap-3 px-10 py-4 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-white/10 rounded-xl transition-all font-bold active:scale-95"
        >
          <BookOpen :size="20" />
          <span>Platformu Tanı</span>
        </button>
      </div>
    </div>

    <!-- Arka plan efektleri aynı kalabilir -->
  </section>
</template>

<script setup>
import { GraduationCap, PlayCircle, BookOpen } from "lucide-vue-next";
import { useRouter } from "vue-router";

const router = useRouter();

const goToPlatform = () => {
  router.push("/edu-platform");
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: "smooth",
    });
  }
};
</script>
