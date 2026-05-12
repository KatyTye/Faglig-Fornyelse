<script lang="ts">
import { createMemoryHistory, createRouter } from 'vue-router';

import HomePage from "./components/pages/Home.vue"
import ContactPage from "./components/pages/Contact.vue"
import FooterComponent from "./components/pages/Contact.vue"
import Header from './components/Header.vue';

const routes = [
  {
    path: "/", component: HomePage
  },
  {
    path: "/kontakt", component: ContactPage
  }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default {
	components: {
		Header,
	}
}
</script>

<template>
  <Header />
  <RouterView />
</template>