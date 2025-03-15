import { createRouter, createWebHistory } from 'vue-router';
import Store from '../components/Store.vue';
import Gifts from '../components/Gifts.vue';
import Profile from '../components/Profile.vue';
import Leaderboard from '../components/Leaderboard.vue'; 
import Gift from '../components/Gift.vue'; 

const routes = [
    {
        path: '/',
        name: 'Store',
        component: Store,
    },
    {
        path: '/gifts',
        name: 'Gifts',
        component: Gifts,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/leaderboard',
        name: 'Leaderboard',
        component: Leaderboard,
    },
    {
        path: '/gift/:giftProps',
        name: 'Gift',
        component: Gift,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
