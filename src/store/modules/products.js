import axios from 'axios'

const state = {
    products:null,
}


const getters = {
    getProduct: (state) => (obj) => {
        return state.products[obj]
    },

    getRecord: (state) => (id,obj) => {
        let searchRecords = (needle, haystack, found = []) => {
            Object.keys(haystack).forEach((key) => {
              if(key === needle){
                found.push(...haystack[key]);
                return found;
              }
              if(typeof haystack[key] === 'object'){
                searchRecords(needle, haystack[key], found);
              }
            });
            return found;
          };
        return searchRecords("data",state[obj]).find(rec => rec.id === id ) 
    },
}


const mutations = {

    'SET_PRODUCTS'(state,products){
        state.products = products
    },



    'INCREMENT_QUANTITY': (state,data) =>{    
        data.quantity++
        if(data.quantity>=data.inventory){
            data.quantity = data.inventory
        }
        
        
    },
    'DECREMENT_QUANTITY': (state,data) =>{
        data.quantity--
        if(data.quantity < 0 ){
            data.quantity = 0
        }  
    },
}

const actions = {
    setProducts({commit}){
        axios.get('https://test-dc313.firebaseio.com/Products.json')
        .then(response => commit('SET_PRODUCTS',response.data))
        .catch(error => console.log(error))
    },
    incrementQuantity({commit},data){
        commit('INCREMENT_QUANTITY',data)
       
    },
    decrementQuantity({commit},data){
        commit('DECREMENT_QUANTITY',data)      
    },
    
}


export default {
    state,
    getters,
    actions,
    mutations
  }