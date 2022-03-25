<template>
  <div class="box has-text-weight-bold" :style="estilos">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoxTask",
  data() {
    return {
      estilos: {
        background: "#FDF3FF",
      },
    };
  },
});
</script>
