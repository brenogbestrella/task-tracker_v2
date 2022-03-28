<template>
  <FormularioTrack @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <TarefaTask
      v-for="(tarefa, index) in tarefas"
      :key="index"
      :tarefa="tarefa"
    />
    <BoxTask v-if="listaEstaVazia"> Nenhuma tarefa registrada </BoxTask>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormularioTrack from "../components/FormularioTrack.vue";
import TarefaTask from "../components/TarefaTask.vue";
import BoxTask from "../components/BoxTask.vue";
import ITarefa from "../interfaces/ITarefa";

export default defineComponent({
  name: "App",
  components: {
    FormularioTrack,
    TarefaTask,
    BoxTask,
  },

  data() {
    return {
      tarefas: [] as ITarefa[],
    };
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },

  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
  },
});
</script>
