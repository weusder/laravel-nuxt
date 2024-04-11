import { defineStore } from "pinia";

export const useSidebar = defineStore("sidebar", () => {
  const expand = ref(false);

  function toggle() {
    expand.value = !expand.value;
  }

  return { expand, toggle };
});
