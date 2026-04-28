<template>
  <div
    class="min-h-screen w-full bg-slate-950 font-sans antialiased text-slate-200 selection:bg-blue-400/30 selection:text-blue-400"
  >
    <Header />
    <main class="w-full">
      <Main />
      <Info />
      <Education />
    </main>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";
import Info from "../components/Info.vue";
import Education from "../components/Education.vue";
</script>
