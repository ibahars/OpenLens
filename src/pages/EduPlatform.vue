<template>
  <div
    class="min-h-screen w-full bg-slate-950 text-white selection:bg-blue-400/30"
  >
    <nav
      class="sticky top-0 z-50 p-6 bg-slate-950/80 backdrop-blur-md border-b border-white/5"
    >
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <router-link
          to="/"
          class="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-white/10 rounded-xl text-blue-400 font-bold hover:bg-slate-800 hover:text-white transition-all group"
        >
          <ArrowLeft
            :size="20"
            class="group-hover:-translate-x-1 transition-transform"
          />
          Anasayfaya Dön
        </router-link>
        <div class="flex items-center gap-2 text-slate-400">
          <GraduationCap :size="20" />
          <span class="text-sm font-bold tracking-widest uppercase"
            >Eğitim Platformu</span
          >
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto px-6 py-16">
      <div class="mb-20">
        <h1 class="text-4xl md:text-6xl font-black mb-6">Eğitim Portalı</h1>
        <p class="text-slate-400 text-xl max-w-3xl">
          Şeffaf Bakış projelerinin tüm materyallerine buradan ulaşabilirsiniz.
          Belgeleri sayfa içinde inceleyebilir veya indirebilirsiniz.
        </p>
      </div>

      <section class="mb-24">
        <div class="flex items-center gap-4 mb-10">
          <PlayCircle class="text-rose-500" :size="32" />
          <h2 class="text-3xl font-bold">Eğitim Videoları</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            @click="openFile(dijitalOykuVideo)"
            class="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-rose-500/50 transition-all cursor-pointer"
          >
            <div
              class="aspect-video bg-slate-800 flex items-center justify-center relative"
            >
              <Play
                :size="48"
                class="text-rose-500 group-hover:scale-110 transition-transform"
              />
              <div class="absolute inset-0 bg-rose-500/5"></div>
              <span
                class="absolute bottom-4 right-4 bg-rose-500 px-3 py-1 rounded-md text-xs font-bold text-white shadow-lg"
                >İZLE</span
              >
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">
                Şeffaf Bütçe Karikatür Eğitimi
              </h3>
              <p class="text-slate-500 text-sm italic">
                Bütçe süreçlerini eğlenceli ve basit bir dille anlatan
                animasyon.
              </p>
            </div>
          </div>

          <div
            @click="openFile(sunumVideo)"
            class="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all cursor-pointer"
          >
            <div
              class="aspect-video bg-slate-800 flex items-center justify-center relative"
            >
              <Sparkles
                :size="48"
                class="text-blue-400 group-hover:scale-110 transition-transform"
              />
              <div class="absolute inset-0 bg-blue-400/5"></div>
              <span
                class="absolute bottom-4 right-4 bg-blue-400 px-3 py-1 rounded-md text-xs font-bold text-white shadow-lg"
                >İZLE</span
              >
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Platform Tanıtım Videosu</h3>
              <p class="text-slate-500 text-sm italic">
                Şeffaf Bakış platformunun özelliklerini keşfedin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="flex items-center gap-4 mb-10">
          <BookOpen class="text-emerald-400" :size="32" />
          <h2 class="text-3xl font-bold">Belge Kütüphanesi</h2>
        </div>

        <div class="space-y-4">
          <div
            class="bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
            :class="{
              'border-emerald-400/20 shadow-[0_0_30px_rgba(52,211,153,0.05)]':
                openPanel === 1,
            }"
          >
            <button
              @click="togglePanel(1)"
              class="w-full p-6 flex justify-between items-center hover:bg-white/5 transition-colors"
            >
              <div class="flex items-center gap-4 text-left">
                <FileText class="text-emerald-400" :size="24" />
                <span class="text-lg font-bold"
                  >Temel Eğitim Belgesi (PDF)</span
                >
              </div>
              <ChevronDown
                :size="24"
                class="text-slate-500 transition-transform duration-300"
                :class="{ 'rotate-180 text-emerald-400': openPanel === 1 }"
              />
            </button>
            <div
              v-show="openPanel === 1"
              class="p-6 border-t border-white/5 bg-slate-950/50"
            >
              <p class="text-slate-400 mb-6 italic">
                Konuyu detaylıca öğrenebileceğiniz okumalar ve hukuki bilgiler.
              </p>
              <button
                @click="openFile(belgePdf)"
                class="flex items-center gap-2 px-6 py-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl font-bold hover:bg-emerald-500 hover:text-slate-950 transition-all"
              >
                <Eye :size="18" /> Belgeyi Görüntüle
              </button>
            </div>
          </div>

          <div
            class="bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
            :class="{
              'border-amber-400/20 shadow-[0_0_30px_rgba(251,191,36,0.05)]':
                openPanel === 2,
            }"
          >
            <button
              @click="togglePanel(2)"
              class="w-full p-6 flex justify-between items-center hover:bg-white/5 transition-colors"
            >
              <div class="flex items-center gap-4 text-left">
                <Layout class="text-amber-400" :size="24" />
                <span class="text-lg font-bold">Özet İnfografik</span>
              </div>
              <ChevronDown
                :size="24"
                class="text-slate-500 transition-transform duration-300"
                :class="{ 'rotate-180 text-amber-400': openPanel === 2 }"
              />
            </button>
            <div
              v-show="openPanel === 2"
              class="p-6 border-t border-white/5 bg-slate-950/50"
            >
              <p class="text-slate-400 mb-6 italic">
                Temel konuları tek bakışta anlayabileceğiniz görsel özet
                materyali.
              </p>
              <button
                @click="openFile(infografikPdf)"
                class="flex items-center gap-2 px-6 py-3 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-xl font-bold hover:bg-amber-500 hover:text-slate-950 transition-all"
              >
                <Eye :size="18" /> İncele
              </button>
            </div>
          </div>

          <div
            class="bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
            :class="{
              'border-blue-400/20 shadow-[0_0_30px_rgba(96,165,250,0.05)]':
                openPanel === 3,
            }"
          >
            <button
              @click="togglePanel(3)"
              class="w-full p-6 flex justify-between items-center hover:bg-white/5 transition-colors"
            >
              <div class="flex items-center gap-4 text-left">
                <ClipboardList class="text-blue-400" :size="24" />
                <span class="text-lg font-bold">Kavramsal Zihin Haritası</span>
              </div>
              <ChevronDown
                :size="24"
                class="text-slate-500 transition-transform duration-300"
                :class="{ 'rotate-180 text-blue-400': openPanel === 3 }"
              />
            </button>
            <div
              v-show="openPanel === 3"
              class="p-6 border-t border-white/5 bg-slate-950/50"
            >
              <p class="text-slate-400 mb-6 italic">
                Haklarınız ve şeffaflık kavramları arasındaki ilişkileri
                gösteren yapı.
              </p>
              <button
                @click="openFile(zihinHaritasi)"
                class="flex items-center gap-2 px-6 py-3 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl font-bold hover:bg-blue-500 hover:text-slate-950 transition-all"
              >
                <Eye :size="18" /> Göz At
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <div
      v-if="activeFile"
      class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
    >
      <div
        class="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
        @click="closeFile"
      ></div>
      <div
        class="relative w-full h-full max-w-6xl bg-slate-900 rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden"
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
        <div class="flex-1 w-full h-full overflow-hidden bg-black">
          <iframe
            v-if="activeFile.toLowerCase().endsWith('.pdf')"
            :src="activeFile"
            class="w-full h-full border-none bg-white"
          ></iframe>

          <video
            v-else-if="activeFile.toLowerCase().endsWith('.mp4')"
            :src="activeFile"
            controls
            autoplay
            class="w-full h-full object-contain"
          ></video>

          <div
            v-else
            class="w-full h-full flex items-center justify-center p-4"
          >
            <img
              :src="activeFile"
              class="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  ArrowLeft,
  GraduationCap,
  PlayCircle,
  Play,
  Sparkles,
  BookOpen,
  ChevronDown,
  Eye,
  X,
  FileText,
  Layout,
  ClipboardList,
} from "lucide-vue-next";

// Varlıkları (Assets) İçeri Aktarma
import belgePdf from "../assets/Belge.pdf";
import infografikPdf from "../assets/infografik.pdf";
import zihinHaritasi from "../assets/zihin-haritasi.png";

// Videoları İçeri Aktarma
import dijitalOykuVideo from "../assets/dijital_öykü.mp4";
import sunumVideo from "../assets/sunum.mp4";

const openPanel = ref(1);
const activeFile = ref(null);

const togglePanel = (index) => {
  openPanel.value = openPanel.value === index ? null : index;
};

const openFile = (file) => {
  activeFile.value = file;
  document.body.style.overflow = "hidden";
};

const closeFile = () => {
  activeFile.value = null;
  document.body.style.overflow = "auto";
};
</script>
