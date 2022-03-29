import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Tarefas from "../views/Tarefas.vue"
import ProjetosTrack from "../views/ProjetosTrack.vue"
import FormularioTrack from "../views/Projetos/FormularioTrack.vue"
import ListaTrack from "../views/Projetos/ListaTrack.vue"

const rotas: RouteRecordRaw[] = [
  {
  path: '/',
  name: "Tarefas",
  component: Tarefas
  },
  {
    path: '/projetostrack',
    component: ProjetosTrack,
    children: [
      {
        path: '',
        name: 'ProjetosTrack',
        component: ListaTrack
      },
      {
        path: 'novo',
        name: 'Novo ProjetosTrack',
        component: FormularioTrack
      },
      {
        path: ':id',
        name: 'Editar ProjetosTrack',
        component: FormularioTrack,
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: rotas
})




export default router;