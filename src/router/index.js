import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import HomeView from '../views/Dashboard.vue'
import AboutView from '../views/AboutView.vue'
import ResearchView from '../views/ResearchView.vue'
import QuizApplication from '../views/QuizApplication.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
      path: '/basicMath',
      name: 'basicMath',
      component: BasicMathView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/research',
      name: 'research',
      component: ResearchView
    },
    {
      path: '/quizapplication',
      name: 'quizapplication',
      component: QuizApplication
    }

  ]
})

export default router
