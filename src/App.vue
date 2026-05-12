<script setup lang="ts">
import { createMemoryHistory, createRouter } from 'vue-router';
import ContactPage from "./components/pages/Contact.vue"
import HomePage from "./components/pages/Home.vue"
import Header from './components/Header.vue';
</script>

<script lang="ts">
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
		Header
	}
}
</script>

<template>
  <Header />
  <RouterView />
</template>