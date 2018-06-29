const state = {
    orders:[]
}

const getters = {
    getOrders: (state) =>{
        return state.orders
    }
}


const mutations = {
    'ADD_ORDER': (state,data) =>{
        let sameOrders = state.orders.filter( order => order.name === data.name )
        if(sameOrders.length && sameOrders[0].ingredients){
            let equal = sameOrders.find(order => order.ingredients.sort().compare(data.ingredients.sort()))
            if(equal){
                equal.quantity = data.quantity
            }else{
                state.orders.push(JSON.parse(JSON.stringify(data)))
                state.orders[state.orders.length-1].OrderID = Symbol()
            }
              
        } else if(sameOrders.length){
          sameOrders[0].quantity = data.quantity  
        } 
        else{
            state.orders.push(JSON.parse(JSON.stringify(data)))
            state.orders[state.orders.length-1].OrderID = Symbol()
        }
    },
    'REMOVE_ORDER': (state,order) =>{
        let orderToRemove = state.orders.find( el =>  el.OrderID === order.OrderID )
        orderToRemove.quantity--
        if(orderToRemove.quantity === 0){
            state.orders.splice(state.orders.indexOf(orderToRemove),1)
        }
        
    }
}


const actions = {
    addOrder({commit},order){
        if(order.quantity>0){
            commit("ADD_ORDER",order)
        }
        
    }
}


export default {
    state,
    getters,
    actions,
    mutations
  }

