import {createRouter, createWebHashHistory} from 'vue-router'

import BienvenidaPage from '../modules/pokemon/pages/BienvenidaPage'
import JuegoPage from '../modules/pokemon/pages/JuegoPage'
import PremiosPage from '../modules/pokemon/pages/PremiosPage'
import PokemonPages from '../modules/pokemon/pages/PokemonPages'
import NoEncontradaPage from '../modules/pokemon/pages/NoEncontradaPage'

const routes = [
    {
        path: "/",
        //component: BienvenidaPage
        component: () => import('../modules/pokemon/pages/BienvenidaPage') 
    },
    {
        path: "/juego",
        //component: JuegoPage
        component: () => import('../modules/pokemon/pages/JuegoPage')
    },
    {
        path: "/premios",
        //component: PremiosPage
        component: () => import('../modules/pokemon/pages/PremiosPage')
    },
    {
        path: "/pokemon",
        //component: PokemonPages
        component: () => import('../modules/pokemon/pages/PokemonPages')
    },
    {
        path: "/:pathMatch(.*)*",
        //component: NoEncontradaPage
        component: () => import('../modules/pokemon/pages/NoEncontradaPage')
    }

]

const router=createRouter({
    history: createWebHashHistory(),
    routes
})

export default router