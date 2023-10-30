import { defineStore } from 'pinia';

export const usePorfolioStore = defineStore('portfolio', {
    state: () => ({
        isShowNavSpan1: false,
        isShowNavSpan2: false,
        isShowNavSpan3: false,

        showContactPage: false,
        showProjectPage: false
    }),

    getters: {},

    actions: {}
});