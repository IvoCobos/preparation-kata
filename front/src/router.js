import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Dogs from './components/Dogs.vue';
import Cats from './components/Cats.vue';
const Home = {
    template: `<div>home</div>`,
}

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/dogs', component: Dogs },
        { path: '/cats', component: Cats },
    ],
})

export default router