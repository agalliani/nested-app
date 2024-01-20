import { createRouter, createWebHistory } from "vue-router";
import About from "../components/AboutComponent.vue";
import Counter from "../components/CounterComponent.vue";

const router = createRouter({
  history: createWebHistory("/nested-app/"),
  routes: [
    {
      path: "/about",
      name: "About",
      component: About,
      meta: { title: "About" },
    },

    {
      path: "/",
      name: "Counter",
      component: Counter,
      meta: { title: "counter" },
    },
  ],
});

export default router;
