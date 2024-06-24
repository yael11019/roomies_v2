import { defineStore } from 'pinia';

export default defineStore('profile', {
    state: () => ({
        id: 1,
        username: 'yael.hurtado2',
        avatar: '/avatars/avatar.jpg',
        status: 'active'
    })
})