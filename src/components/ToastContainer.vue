<template>
  <teleport to="body">
    <div
      class="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none"
      aria-live="polite"
      aria-atomic="false"
    >
      <transition-group name="toast" tag="div" class="flex flex-col gap-3">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          role="status"
          :class="[
            'pointer-events-auto flex items-start gap-3 px-4 py-3 rounded-2xl border shadow-2xl backdrop-blur-xl min-w-[280px] max-w-[360px]',
            typeStyles[toast.type].container,
          ]"
        >
          <div
            :class="[
              'mt-0.5 shrink-0 w-5 h-5 flex items-center justify-center',
              typeStyles[toast.type].icon,
            ]"
          >
            <component :is="resolveIcon(toast)" :size="16" />
          </div>

          <p
            :class="[
              'text-sm font-semibold leading-snug flex-1',
              typeStyles[toast.type].text,
            ]"
          >
            {{ toast.message }}
          </p>

          <button
            @click="remove(toast.id)"
            :class="[
              'shrink-0 opacity-50 hover:opacity-100 transition-opacity',
              typeStyles[toast.type].text,
            ]"
            aria-label="Bildirimi kapat"
          >
            <X :size="14" />
          </button>
        </div>
      </transition-group>
    </div>
  </teleport>
</template>

<script setup>
import { CheckCircle2, Info, AlertTriangle, XCircle, X } from "lucide-vue-next";
import { useToast } from "../composables/useToast.js";

const { toasts, remove } = useToast();

const typeStyles = {
  success: {
    container: "bg-emerald-950/90 border-emerald-500/30",
    icon: "text-emerald-400",
    text: "text-emerald-100",
  },
  info: {
    container: "bg-slate-900/95 border-blue-400/20",
    icon: "text-blue-400",
    text: "text-slate-100",
  },
  warning: {
    container: "bg-amber-950/90 border-amber-400/30",
    icon: "text-amber-400",
    text: "text-amber-100",
  },
  error: {
    container: "bg-rose-950/90 border-rose-500/30",
    icon: "text-rose-400",
    text: "text-rose-100",
  },
};

const defaultIcons = {
  success: CheckCircle2,
  info: Info,
  warning: AlertTriangle,
  error: XCircle,
};

const resolveIcon = (toast) => {
  if (toast.icon) return toast.icon;
  return defaultIcons[toast.type] ?? Info;
};
</script>

<style scoped>
.toast-enter-active {
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.toast-leave-active {
  transition: all 0.25s ease-in;
}
.toast-enter-from {
  opacity: 0;
  transform: translateX(110%) scale(0.92);
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(110%) scale(0.88);
}
.toast-move {
  transition: transform 0.3s ease;
}
</style>
