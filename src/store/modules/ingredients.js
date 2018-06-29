import axios from 'axios'
const state = {
    ingredients:null
    
}


const getters = {
    getIngredients: (state) =>{
        return state.ingredients
    }
}


const mutations = {
    'SET_INGREDIENTS'(state,ingredients){
        state.ingredients = ingredients
    },
    'ADD_INGREDIENTS': (state,data) => {
        data.ingredients.forEach(ingredient=>{
            if(!data.product.ingredients.includes(ingredient.name)){
                data.product.ingredients.push(ingredient.name)
                data.product.price += ingredient.price
            }
        })
    },
    'REMOVE_INGREDIENT': (state,payload) => {
        if (payload.item.ingredients.includes(payload.ingredient)){
            let ISadditionalIngredient = state.ingredients.find(ingredient => ingredient.name === payload.ingredient)
            if(ISadditionalIngredient){
                payload.item.price -= ISadditionalIngredient.price
            }
            payload.item.ingredients.splice(payload.item.ingredients.indexOf(payload.ingredient),1)
        }
    },
}


const actions = {
    addIngredients({commit,state},data){
        let ingredients = []
        data.ingredientsToAdd.forEach(ingredient=>{
        let ingr = state.ingredients.find(el => el.id === parseInt(ingredient))
            if(ingr){
                ingredients.push(ingr)
            }
        })
        commit('ADD_INGREDIENTS',{
            product: data.productToUpgrade,
            ingredients
            })
        },
    setIngredients({commit}){
        axios.get('https://test-dc313.firebaseio.com/Ingredients.json')
        .then(response => commit('SET_INGREDIENTS',response.data))
        .catch(error => console.log(error))
    } 
}


export default {
    state,
    getters,
    actions,
    mutations
  }