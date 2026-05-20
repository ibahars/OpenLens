<template>
  <section
    id="sss"
    class="max-w-7xl mx-auto px-6 py-24 border-t border-white/5 flex flex-col items-center justify-center"
  >
    <div class="flex items-center gap-4 mb-12 justify-center w-full">
      <HelpCircle class="text-blue-400" :size="32" />
      <h2 class="text-3xl font-bold text-center">Sıkça Sorulan Sorular</h2>
    </div>

    <div class="space-y-4 w-full max-w-4xl mx-auto">
      <div
        v-for="(item, index) in faqItems"
        :key="index"
        class="bg-slate-900/40 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
        :class="{
          'border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.03)]':
            openIndex === index,
        }"
      >
        <button
          @click="toggleFaq(index)"
          class="w-full p-6 flex justify-between items-center hover:bg-white/5 text-left transition-colors"
        >
          <span class="text-lg font-semibold text-slate-200">{{
            item.question
          }}</span>
          <ChevronDown
            :size="20"
            class="text-slate-500 shrink-0 ml-4 transition-transform duration-300"
            :class="{ 'rotate-180 text-blue-400': openIndex === index }"
          />
        </button>

        <div
          v-show="openIndex === index"
          class="p-6 border-t border-white/5 bg-slate-950/30 text-slate-400 leading-relaxed text-sm md:text-base"
        >
          {{ item.answer }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { HelpCircle, ChevronDown } from "lucide-vue-next";

const openIndex = ref(null);

const faqItems = [
  {
    question: "Şeffaf Bakış Platformu nedir ve amacı ne?",
    answer:
      "Şeffaf Bakış, kamu bütçesi süreçlerini, vatandaşlık haklarını ve şeffaflık kavramlarını herkes için anlaşılır kılmayı amaçlayan dijital bir eğitim platformudur. Karmaşık yasal ve mali süreçleri animasyonlar, infografikler ve zihin haritaları ile basitleştirerek toplumsal farkındalığı artırmayı hedefler.",
  },
  {
    question:
      "Eğitim materyallerine erişim ücretli mi ya da üyelik gerekiyor mu?",
    answer:
      "Hayır, platformumuzdaki tüm eğitim videoları, PDF belgeleri, infografikler ve kavramsal zihin haritaları tamamen ücretsizdir ve herkesin erişimine açıktır. Herhangi bir üyelik oluşturmadan tüm kütüphaneyi inceleyebilir veya indirebilirsiniz.",
  },
  {
    question:
      "Platformdaki belgeleri bilgisayarıma veya telefonuma indirebilir miyim?",
    answer:
      "Evet. Belge kütüphanesinde yer alan kılavuzları ve görsel özetleri sayfa içerisindeki tarayıcı modali üzerinden inceleyebileceğiniz gibi, kendi cihazlarınıza indirerek çevrimdışı olarak da kaynaklardan faydalanabilirsiniz.",
  },
  {
    question: "Eğitim videoları neleri kapsıyor, hangi sırayla izlemeliyim?",
    answer:
      "Videolarımız temel olarak şeffaf bütçe süreçlerini, karikatür destekli anlatımları ve platformun genel kullanım özelliklerini içerir. İlk kez geldiyseniz öncelikle 'Platform Tanıtım Videosu'nu, ardından bütçe süreçlerini eğlenceli dille anlatan 'Şeffaf Bütçe Karikatür Eğitimi'ni izlemenizi öneririz.",
  },
];

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>
