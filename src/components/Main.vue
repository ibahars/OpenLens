<template>
  <section
    id="anasayfa"
    class="relative w-full min-h-screen bg-slate-950 flex flex-col items-center pt-32 px-6 overflow-hidden"
  >
    <div
      class="flex items-center gap-2 px-6 py-2 bg-slate-900/50 border border-white/10 rounded-full mb-10"
    >
      <Scale class="text-slate-400" :size="16" />
      <span class="text-sm font-medium text-slate-400"
        >Hesap Verebilirlik Platformu</span
      >
    </div>
    //test change
    <div class="text-center max-w-7xl mx-auto">
      <h1
        class="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      >
        Geleceğin
        <span class="text-blue-400">Senin</span> Kararlarınla<br />

        <span
          class="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent animate-gradient"
        >
          Şekilleniyor
        </span>
      </h1>

      <p class="text-2xl md:text-3xl text-slate-200 font-medium mb-6">
        Sormaya hakkın var: Paramız nereye gidiyor?
      </p>

      <div class="max-w-3xl mx-auto mb-12">
        <p class="text-lg md:text-xl text-slate-500 leading-relaxed">
          Şeffaf ve hesap verebilirlik, demokrasinin temel taşlarıdır. Her
          vatandaşın bilgi edinme hakkı vardır ve bu hak, güçlü bir toplumun
          anahtarıdır.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-5">
        <button
          @click="scrollToSection('egitim')"
          class="flex items-center gap-3 px-10 py-4 bg-blue-400 text-slate-950 font-bold rounded-xl shadow-[0_0_40px_rgba(56,189,248,0.5)] transition-all duration-300 hover:bg-blue-300 hover:shadow-[0_0_60px_rgba(56,189,248,0.8)] hover:scale-105 active:scale-95"
        >
          <Eye :size="20" />
          <span>Keşfetmeye Başla</span>
        </button>

        <button
          @click="scrollToSection('bilgi-kosesi')"
          class="flex items-center gap-3 px-10 py-4 bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-white/10 rounded-xl transition-all font-bold active:scale-95"
        >
          <FileText :size="20" />
          <span>Haklarını Öğren</span>
        </button>
      </div>
    </div>

    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10"
    >
      <div
        class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full"
      ></div>
      <div
        class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { Scale, Eye, FileText } from "lucide-vue-next";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
</script>

<style>
@keyframes gradientMove {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 200%;
  }
}

.animate-gradient {
  background-size: 200%;
  animation: gradientMove 4s linear infinite;
}
</style>
