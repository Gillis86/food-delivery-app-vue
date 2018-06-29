import Vue from 'vue';
import Vuex from 'vuex';
import vuejsStorage from 'vuejs-storage'
import orders from './modules/orders.js'
import products from './modules/products.js'
import ingredients from './modules/ingredients.js'


Vue.use(Vuex)
Vue.use(vuejsStorage)


export default new Vuex.Store({
    modules:{
        products,
        orders,
        ingredients
    },
    actions:{
        decrementOverallQuantity({commit,getters},order){
            let product = getters.getRecord(order.id,'products')
            commit('REMOVE_ORDER',order)
            commit('DECREMENT_QUANTITY',product)
        }
    },
    plugins:[
        vuejsStorage({
            keys: ['products',"ingredients","orders"], 
            namespace: 'state',
            storage: window.sessionStorage 
          })
    ]
})