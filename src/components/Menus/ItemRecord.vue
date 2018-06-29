<template>
    <ul class="item__record">
      <li class="item__record--name">{{data.name}}</li>
      <li v-if="data.ingredients" class="item__record--ingredients">
          <div><ingredient v-for="ingredient in data.ingredients" :key="ingredient" :ingredient="ingredient"></ingredient>   </div>
          <div class="add__ingredients" v-if="data.type==='pizza'">
            <span @click.stop="showIngredientsModal(data)">
                 <svg class="icon__ingredients">
                    <use xlink:href="#icon-plus"></use>
                </svg>
            </span>
          </div>  
      </li>
      <li class="item__record--price">{{data.price.toFixed(1)}} €</li>
      <li><svg @click.stop="incrementQuantity(data)" class="icon__item"><use xlink:href="#icon-plus"></use></svg>
        <symbol id="icon-plus" viewBox="0 0 32 32">
            <title>plus</title>
            <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
        </symbol>
        <svg @click.stop="decrementQuantity(data)" class="icon__item"><use xlink:href="#icon-minus"></use></svg>
        <symbol id="icon-minus" viewBox="0 0 32 32">
            <title>minus</title>
            <path d="M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z"></path>
        </symbol>
      </li>
      <li class="item__record--quantity"><span>{{data.quantity}}</span></li>
      <li><button @click.stop="makeOrder(data)" class="item__record--btn">aggiungi</button></li> 
      <li class="item__record--recall" v-if="quantityModified && data.quantity!==0">aggiungi l'ordine</li>
  </ul>

  
</template>

<script>
import Ingredient from "./Ingredient.vue"
export default {
   props: ["data"],
   data(){
       return{
           quantityModified: false
       }
   },
   components:{
       ingredient:Ingredient
   },
   methods:{
       makeOrder(data){
               this.$store.dispatch('addOrder',data)
                    
       },
       incrementQuantity(data){
           this.$store.dispatch('incrementQuantity',data)
           this.quantityModified = true
     
       },
       decrementQuantity(data){
           this.$store.dispatch('decrementQuantity',data)
           this.quantityModified = true          
       },
       showIngredientsModal(data){
           this.$modal.show('add-ingredients',data);
       },
   },
   created(){
       this.$on('ingredientToRemove', ingredient => 
       this.$store.commit('REMOVE_INGREDIENT',{item:this.data,ingredient}))
   }
}
</script>

<style lang="scss">
  .item__record{
    @include itemRecord($color-secondary);

      
      &--quantity{
          font-size: 1.4rem;
          background: $color-secondary;
          color:$color-white;
          border-radius: $border-radius; 
      }
      &--recall{
          color:$color-secondary;
          font-weight: 700;
      }
  }
.icon__item, .icon__ingredients {
  @include icon($color-white);
  background: $color-secondary;
  
 

}
.icon__ingredients{
    margin-right: .8rem;
    
}
.icon__item{
    margin-right:.8rem;
}


</style>
