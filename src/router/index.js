import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Work from '../views/Work.vue';
import Contact from '../views/Contact.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/work",
            name: "work",
            component: Work
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        }
    ]
});

export default router