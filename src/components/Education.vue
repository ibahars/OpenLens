<template>
  <section
    id="egitim"
    class="relative w-full min-h-screen bg-slate-950 pt-16 pb-32 px-6 overflow-hidden"
  >
    <div
      class="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"
    ></div>
    <div
      class="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"
    ></div>

    <div class="w-full max-w-7xl mx-auto flex flex-col items-center">
      <div
        class="flex items-center gap-2 px-5 py-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full mb-10"
      >
        <GraduationCap class="text-blue-400" :size="18" />
        <span
          class="text-xs font-black text-blue-400 uppercase tracking-[0.2em]"
          >Eğitim</span
        >
      </div>

      <div class="text-center mb-24">
        <h2
          class="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
        >
          Eğitim Materyalleri
        </h2>
        <p
          class="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed"
        >
          Haklarınızı kullanmak ve şeffaflığı artırmak için ihtiyacınız olan
          kaynaklar
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        <div
          class="group relative bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-10 transition-all duration-500 hover:border-blue-400/40 hover:bg-slate-900/80 hover:-translate-y-3"
        >
          <div
            class="mb-10 w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-400 group-hover:text-slate-950 transition-all duration-500"
          >
            <ClipboardList :size="32" />
          </div>
          <h3 class="text-2xl font-extrabold text-white mb-4">
            Zihin Haritası
          </h3>
          <p class="text-slate-500 text-base leading-relaxed mb-12">
            Konunun genel hatlarını takip edebileceğiniz zihin haritası
          </p>
          <button
            @click="openFile(zihinHaritasi)"
            class="mt-auto flex items-center gap-2 text-blue-400 font-bold cursor-pointer hover:text-blue-200 transition-colors bg-transparent border-none outline-none"
          >
            <Download :size="20" />
            <span>Göz At</span>
          </button>
        </div>

        <div
          class="group relative bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-10 transition-all duration-500 hover:border-rose-500/40 hover:bg-slate-900/80 hover:-translate-y-3"
        >
          <div
            class="mb-10 w-16 h-16 flex items-center justify-center rounded-2xl bg-rose-500/10 text-rose-500 group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all duration-500"
          >
            <PlayCircle :size="32" />
          </div>
          <h3 class="text-2xl font-extrabold text-white mb-4">
            Eğitim Videosu
          </h3>
          <p class="text-slate-500 text-base leading-relaxed mb-12">
            Bütçe şeffalığı hakkında karikatür eğitim videosu
          </p>
          <div
            class="mt-auto flex items-center gap-2 text-rose-500/50 font-bold cursor-not-allowed"
          >
            <Play :size="20" />
            <span>Pek Yakında</span>
          </div>
        </div>

        <div
          class="group relative bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-10 transition-all duration-500 hover:border-emerald-400/40 hover:bg-slate-900/80 hover:-translate-y-3"
        >
          <div
            class="mb-10 w-16 h-16 flex items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-400 group-hover:text-slate-950 transition-all duration-500"
          >
            <BookOpen :size="32" />
          </div>
          <h3 class="text-2xl font-extrabold text-white mb-4">İçerik Yazısı</h3>
          <p class="text-slate-500 text-base leading-relaxed mb-12">
            Konuyu detaylıca öğrenebileceğiniz belgeler
          </p>
          <button
            @click="openFile(belgePdf)"
            class="mt-auto flex items-center gap-2 text-emerald-400 font-bold cursor-pointer hover:text-emerald-200 transition-colors bg-transparent border-none outline-none"
          >
            <Search :size="20" />
            <span>İncele</span>
          </button>
        </div>

        <div
          class="group relative bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-10 transition-all duration-500 hover:border-amber-400/40 hover:bg-slate-900/80 hover:-translate-y-3"
        >
          <div
            class="mb-10 w-16 h-16 flex items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-500"
          >
            <Layout :size="32" />
          </div>
          <h3 class="text-2xl font-extrabold text-white mb-4">İnfografik</h3>
          <p class="text-slate-500 text-base leading-relaxed mb-12">
            Temel konuları özetle görebileceğiniz infografik
          </p>
          <button
            @click="openFile(infografikPdf)"
            class="mt-auto flex items-center gap-2 text-amber-400 font-bold cursor-pointer hover:text-amber-200 transition-colors bg-transparent border-none outline-none"
          >
            <ExternalLink :size="20" />
            <span>Bağlantı</span>
          </button>
        </div>
      </div>

      <div class="mt-20 flex flex-col items-center group cursor-pointer">
        <router-link
          to="/edu-platform"
          class="mt-20 flex flex-col items-center group cursor-pointer"
        >
          <div
            class="flex items-center gap-3 text-slate-500 group-hover:text-blue-400 transition-all duration-300"
          >
            <span class="text-lg font-bold tracking-wide"
              >Tüm Kaynakları Gör</span
            >
            <ArrowRight
              :size="20"
              class="group-hover:translate-x-2 transition-transform duration-300"
            />
          </div>
          <div
            class="h-[2px] w-12 bg-blue-400/20 mt-2 group-hover:w-40 group-hover:bg-blue-400 transition-all duration-500"
          ></div>
        </router-link>
        <div
          class="h-[2px] w-12 bg-blue-400/20 mt-2 group-hover:w-40 group-hover:bg-blue-400 transition-all duration-500"
        ></div>
      </div>
    </div>

    <div
      v-if="activeFile"
      class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
    >
      <div
        class="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
        @click="closeFile"
      ></div>
      <div
        class="relative w-full h-full max-w-6xl bg-slate-900 rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300"
      >
        <div
          class="p-4 border-b border-white/5 flex justify-end items-center bg-slate-900/50"
        >
          <button
            @click="closeFile"
            class="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-all"
          >
            <X :size="28" />
          </button>
        </div>
        <div class="flex-1 w-full h-full bg-white overflow-auto">
          <iframe
            v-if="activeFile.toLowerCase().endsWith('.pdf')"
            :src="activeFile"
            class="w-full h-full border-none"
          ></iframe>
          <div
            v-else
            class="w-full h-full flex items-center justify-center bg-slate-950 p-4"
          >
            <img
              :src="activeFile"
              class="max-w-full max-h-full object-contain shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import {
  GraduationCap,
  ClipboardList,
  Download,
  PlayCircle,
  Play,
  BookOpen,
  Search,
  Layout,
  ExternalLink,
  ArrowRight,
  X,
} from "lucide-vue-next";

import zihinHaritasi from "../assets/zihin-haritasi.png";
import belgePdf from "../assets/Belge.pdf";
import infografikPdf from "../assets/infografik.pdf";

const activeFile = ref(null);

const openFile = (file) => {
  activeFile.value = file;
  document.body.style.overflow = "hidden";
};

const closeFile = () => {
  activeFile.value = null;
  document.body.style.overflow = "auto";
};
</script>
