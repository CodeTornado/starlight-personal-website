import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import NewArticle from '../views/new-article/NewArticle.vue'
import Note from '../views/note/Note.vue'
import Problem from '../views/problem/Problem.vue'
import Technology from '../views/technology/Technology.vue'
import Query from '../views/query/Query.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: NewArticle },
    { path: '/indexArticle', component: NewArticle },
    { path: '/problem', component: Problem },
    { path: '/technology', component: Technology },
    { path: '/note', component: Note },
    { path: '/query', component: Query }
  ]
})

export default router
