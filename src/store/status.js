import { defineStore } from 'pinia'

export const useStatusStore = defineStore('status', {
    state: () => ({
        isLoggedIn: false,
        loginUser: '',
        loginPassword: ''
    }),

    getters: {
        getIsLoggedIn: (state) => state.isLoggedIn,
        getLoginUser: (state) => state.loginUser,
        getLoginPassword: (state) => state.loginPassword
    },

    actions: {
        setIsLoggedIn(value) {
            this.isLoggedIn = value;
        },
        setLoginUser(value) {
            this.loginUser = value;
        },
        setLoginPassword(value) {
            this.loginPassword = value;
        }
    }
});