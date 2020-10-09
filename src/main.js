import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    { path: '/teams', component: TeamsList },
    { path: '/teams/:teamId', component: TeamMembers, props: true },
    { path: '/users', component: UsersList }
  ],
  linkActiveClass: 'active'
});
const app = createApp(App);

app.use(router);

app.mount('#app');
