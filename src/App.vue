<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': modoEscuroAtivo }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>

    <div class="column is-three-quarter conteudo">
      <NotificacoesSistema />
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import NotificacoesSistema from "./components/NotificacoesSistema.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    NotificacoesSistema,
  },

  data() {
    return {
      modoEscuroAtivo: false,
    };
  },

  methods: {
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    },
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
main {
  --bg-primario: #f0f0f0;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #3a2b42;
  --texto-primario: #ddd;
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>
