<template>
  <button class="button" @click="eventoClicado" :disabled="desabilitado">
    <span class="icon">
      <i :class="iconeBotao"></i>
    </span>
    <span>{{ descricao }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BotaoTask",
  emits: ["eventoClicado"],
  props: {
    desabilitado: {
      type: Boolean,
    },
    iconeBotao: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
  },

  methods: {
    eventoClicado(): void {
      this.$emit("eventoClicado");
    },
  },
});
</script>
