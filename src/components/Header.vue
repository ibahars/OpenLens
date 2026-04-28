<template>
  <header class="fixed top-0 left-0 w-full h-20 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl flex items-center">
    <div class="w-full max-w-7xl mx-auto px-6 flex justify-between items-center">

      <!-- Logo -->
      <div @click="scrollToSection('anasayfa')" class="flex items-center gap-3 cursor-pointer group">
        <div class="p-2 bg-blue-400/10 rounded-lg group-hover:bg-blue-400/20 transition-all duration-300">
          <Sparkles class="text-blue-400 group-hover:scale-110 transition-transform" :size="24" />
        </div>
        <span class="text-xl font-bold tracking-tight text-white">
          Şeffaf <span class="text-blue-400">Bakış</span>
        </span>
      </div>

      <!-- Navbar -->
      <nav class="hidden md:flex items-center gap-6">
        <button
          v-for="item in navItems"
          :key="item.id"
          @click="scrollToSection(item.id)"
          class="px-4 py-2 text-sm font-bold text-blue-400
          hover:text-white transition-all duration-300"
        >
          {{ item.name }}
        </button>
      </nav>

    </div>
  </header>
</template>

<script setup>
import { Sparkles } from 'lucide-vue-next';

const navItems = [
  { name: 'Anasayfa', id: 'anasayfa' },
  { name: 'Bilgi Köşesi', id: 'bilgi-kosesi' },
  { name: 'Eğitim', id: 'egitim' }
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};
</script>