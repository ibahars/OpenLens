<template>
  <section
    id="bilgi-kosesi"
    class="w-full min-h-screen bg-slate-950 px-6 py-24 flex flex-col items-center"
  >
    <div class="mb-6">
      <span
        class="px-4 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full font-medium"
      >
        Bilgi Köşesi
      </span>
    </div>

    <h2 class="text-4xl md:text-5xl font-bold text-white text-center mb-4">
      Biliyor muydunuz?
    </h2>

    <p class="text-slate-400 text-center max-w-2xl mb-16">
      Vatandaşlık haklarınız ve şeffaflık konusunda bilmeniz gerekenler
    </p>

    <div class="grid md:grid-cols-3 gap-8 w-full max-w-7xl">
      <div
        class="group bg-slate-900/60 border border-white/5 rounded-2xl p-6 hover:border-blue-400/30 hover:bg-slate-900 transition-all duration-300"
      >
        <div
          class="mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10"
        >
          <FileText class="text-blue-400" :size="22" />
        </div>

        <h3 class="text-white font-semibold text-lg mb-3">
          Anayasal hakkın: Bilgi edinme hakkı nedir?
        </h3>

        <p class="text-slate-400 text-sm leading-relaxed mb-6">
          Türkiye Cumhuriyeti Anayasası'nın 74. maddesi, her vatandaşın bilgi
          edinme hakkını güvence altına alır. Bu hak, kamu kurumlarının
          faaliyetlerine ilişkin bilgileri talep etme ve alma özgürlüğüdür.
        </p>
      </div>

      <div
        class="group bg-slate-900/60 border border-white/5 rounded-2xl p-6 hover:border-blue-400/30 hover:bg-slate-900 transition-all duration-300"
      >
        <div
          class="mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-500/10"
        >
          <Coins class="text-yellow-400" :size="22" />
        </div>

        <h3 class="text-white font-semibold text-lg mb-3">
          Vergi veren her vatandaşın bütçe hakkı vardır.
        </h3>

        <p class="text-slate-400 text-sm leading-relaxed mb-6">
          Ödediğiniz her kuruş verginin nereye gittiğini öğrenme hakkınız
          vardır. Belediye bütçeleri, kamu harcamaları ve ihaleler kamuoyuna
          açık olmalıdır.
        </p>
      </div>

      <div
        class="group bg-slate-900/60 border border-white/5 rounded-2xl p-6 hover:border-blue-400/30 hover:bg-slate-900 transition-all duration-300"
      >
        <div
          class="mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/10"
        >
          <Shield class="text-emerald-400" :size="22" />
        </div>

        <h3 class="text-white font-semibold text-lg mb-3">
          Şeffaflık, yolsuzluğu önleyen en güçlü kalkandır.
        </h3>

        <p class="text-slate-400 text-sm leading-relaxed mb-6">
          Açık ve şeffaf yönetim, kötüye kullanımı ve kayırmacılığı önler. Kamu
          kaynaklarının adil dağıtımı, ancak şeffaf süreçlerle mümkündür.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { FileText, Coins, Shield } from "lucide-vue-next";
</script>
