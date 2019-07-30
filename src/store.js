import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        vConfig: {}
    },
    mutations: {
        setVConfig(state, data) {
            state.vConfig = data;
        },

    },
    actions: {
        fetchVConfig(context, data) {
            context.commit("setVConfig", data);
        },
    },
    getters: {
        getVConfig(state) {
            return state.vConfig
        }
    }
})
