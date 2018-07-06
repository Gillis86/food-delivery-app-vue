<template>
    <tr class="item__record">
      <td class="item__record--name">
          <span>{{data.name}}</span>
        <span v-if="recallWarning">aggiungi l'ordine</span>
    </td>
      <td v-if="data.ingredients" class="item__record--ingredients">
          <div><ingredient v-for="ingredient in data.ingredients" :key="ingredient" :ingredient="ingredient"></ingredient>   </div>
          <div class="add__ingredients item__record--addRemoveButtons" v-if="data.type==='pizza'">
            <button @click.stop="showIngredientsModal(data)">
                 <svg class="icon__ingredients">
                    <use xlink:href="#icon-plus"></use>
                </svg>
            </button>
          </div>  
      </td>
      <td class="item__record--price">{{data.price.toFixed(1)}} €</td>
      <td class="item__record--addRemoveButtons">
          <button  @click.stop="incrementQuantity(data)">
              <svg class="icon__item"><use xlink:href="#icon-plus"></use></svg>
          </button>
          
        <symbol id="icon-plus" viewBox="0 0 32 32">
            <title>plus</title>
            <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
        </symbol>
        <button @click.stop="decrementQuantity(data)">
            <svg class="icon__item" ><use xlink:href="#icon-minus"></use></svg>
        </button >
        
        <symbol id="icon-minus" viewBox="0 0 32 32">
            <title>minus</title>
            <path d="M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z"></path>
        </symbol>
      </td>
      <td class="item__record--quantity"><span>{{data.quantity}}</span></td>
      <td><button @click.stop="makeOrder(data)" class="item__record--btn">aggiungi</button></td> 
      <!-- <td class="item__record--recall">
          
      </td> -->
  </tr>

  
</template>

<script>
import Ingredient from "./Ingredient.vue"
export default {
   props: ["data"],
   data(){
       return{
           quantityModified: false,
           recallWarning: this.quantityModified && this.data.quantity!==0
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
          & span{
              background: $color-secondary;
          color:$color-white;
          border-radius: $border-radius;
          padding:.5rem;
          } 
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



</style>
