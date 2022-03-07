import Vue from "vue";

class Store {
    constructor(options) {
        // 响应式state
        this.vm = new Vue({
            data: {
                state: options.state
            }
        })

        // getter
        const getters = options.getter || {};
        this.getters = {}
        Object.keys(getters).forEach(getterName => {
            Object.defineProperty(this.getters, getterName, {
                get: () => {
                    return getters[getterName](this.state)
                }
            })
        })

        // mutations
        const mutations = options.mutations || {};
        this.mutations = {};
        Object.keys(mutations).forEach(mutationName => {
            this.mutations[mutationName] = (arg) => {
                mutations[mutationName](this.state, arg);
            }
        })

        // actions
        const actions = options.actions || {};
        this.actions = {};
        Object.keys(actions).forEach(actionName => {
            this.actions[actionName] = (arg) => {
                actions[actionName](this, arg)
            }
        })
    }

    // dispatch actions
    dispatch(method, arg) {
        this.actions[method](arg)
    }

    // commit mutations
    commit(method, arg) {
        this.mutations[method](arg);
    }
    
    // 响应式state
    get state() {
        return this.vm.state
    }
}

const install = function(Vue) {
    Vue.mixin({ // 将mixin的内容混合到Vue的初始参数options中
        beforeCreate() {
            if (this.$options && this.$options.store) { // 如果是根组件
                this.$store = this.$options.store;
            } else { // 如果是子组件
                this.$store = this.$parent && this.$parent.$store;
            }
        }
    })
}

let Vuex = {
    Store,
    install
}

export default Vuex;