import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import boardDetails from '../views/board-details.vue'
import boardList from '../views/board-list.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // { //TODO: change to board id
    //   path: '/board/:id',
    //   name: 'board-details',
    //   component: boardDetails,
    // },
    {
      path: '/board/',
      name: 'board-list',
      component: boardList,
    },
    {
      path: '/board/:id',
      name: 'board-details',
      component: boardDetails,
    },
  ],
})

export default router
