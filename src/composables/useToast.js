import { ref } from "vue";

const toasts = ref([]);
let nextId = 0;

export function useToast() {
  const add = ({ message, type = "info", duration = 3500, icon = null }) => {
    const id = ++nextId;
    toasts.value.push({ id, message, type, icon });

    setTimeout(() => {
      remove(id);
    }, duration);
  };

  const remove = (id) => {
    const index = toasts.value.findIndex((t) => t.id === id);
    if (index !== -1) toasts.value.splice(index, 1);
  };

  // Kısa yollar
  const success = (message, opts = {}) => add({ message, type: "success", ...opts });
  const info    = (message, opts = {}) => add({ message, type: "info",    ...opts });
  const warning = (message, opts = {}) => add({ message, type: "warning", ...opts });
  const error   = (message, opts = {}) => add({ message, type: "error",   ...opts });

  return { toasts, add, remove, success, info, warning, error };
}