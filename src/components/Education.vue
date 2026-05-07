<template>
  <section
    id="egitim"
    class="w-full py-24 bg-slate-950 border-t border-white/5"
  >
    <div class="max-w-7xl mx-auto px-6">
      <div
        class="flex flex-col md:flex-row items-center justify-between gap-12"
      >
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-6 text-blue-400">
            <GraduationCap :size="32" />
            <span class="text-sm font-bold tracking-widest uppercase"
              >Eğitim Bölümü</span
            >
          </div>

          <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
            Bilgi Güçtür, <br />
            <span class="text-blue-400">Şeffaflık</span> Özgürlüktür.
          </h2>

          <p class="text-slate-400 text-lg leading-relaxed mb-8">
            Şeffaf Bakış platformu sadece bir araç değil, aynı zamanda bir
            öğrenme merkezidir. Bütçe okuryazarlığı, vatandaşlık hakları ve
            denetleme mekanizmaları hakkında hazırladığımız özel eğitim
            materyallerine platformumuz üzerinden ulaşabilirsiniz.
          </p>

          <button
            @click="goToPlatform"
            class="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-blue-400 hover:text-slate-950 transition-all duration-300"
          >
            <span>Eğitim Platformuna Git</span>
            <ArrowRight
              :size="20"
              class="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        <!-- Görsel veya İkonik bir alan -->
        <div class="flex-1 w-full flex justify-center">
          <div class="relative">
            <div
              class="absolute inset-0 bg-blue-400/20 blur-[100px] rounded-full"
            ></div>
            <div
              class="relative bg-slate-900 border border-white/10 p-12 rounded-3xl shadow-2xl"
            >
              <BookOpen class="text-blue-400" :size="120" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { GraduationCap, ArrowRight, BookOpen } from "lucide-vue-next";
import { useRouter } from "vue-router";

const router = useRouter();

const goToPlatform = () => {
  router.push("/edu-platform");
};
</script>
