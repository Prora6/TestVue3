import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home/index.vue';
import Posts from '../pages/Posts/index.vue';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: Home
    },
    {
        path: '/posts',
        name: 'PostsPage',
        component: Posts
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;