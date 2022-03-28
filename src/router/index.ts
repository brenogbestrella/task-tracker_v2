import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Tarefas from "../views/Tarefas.vue"
import ProjetosTrack from "../views/ProjetosTrack.vue"

const rotas: RouteRecordRaw[] = [
  {
  path: '/',
  name: "Tarefas",
  component: Tarefas
  },
  {
  path: '/projetostrack',
  name: 'ProjetosTrack',
  component: ProjetosTrack
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: rotas
})




export default router;