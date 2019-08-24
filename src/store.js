import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";
import state from "@/store/state";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";
Vue.use(Vuex,Axios);








export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
