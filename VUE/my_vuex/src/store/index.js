import Vue from 'vue';
import Vuex from './myVuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        num: 0
    },
    getter: {
        getNum: (state) => {
            return state.num
        }
    },
    mutations: {
        incre(state, arg) {
            state.num += arg;
        }
    },
    actions: {
        asyncIncre({commit}, arg) { // 对store实例的解构
            setTimeout(() => {
                commit('incre', arg)
            }, 1000)
        }
    },
    modules: {

    }
})