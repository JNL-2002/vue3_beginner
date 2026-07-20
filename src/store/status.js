import { defineStore } from 'pinia'

export const useStatusStore = defineStore('status', {
    state: () => ({
        isLoggedIn: ''
    }),

    getters: {
        getIsLoggedIn: (state) => state.isLoggedIn
    },

    actions: {
        setIsLoggedIn(value) {
            this.isLoggedIn = value;
        }
    }
});