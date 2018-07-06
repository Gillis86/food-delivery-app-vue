<template>
<tr class="order__checkout">
    <td v-if="orders.length" class="order__checkout--total">
      <h3 class="title">totale</h3>
      <div class="total"><span>{{calculateTotal}}€</span></div>
  </td>
  <td class="order__checkout--buy">
      <button @click="checkOrder">Acquista</button>
  </td>
</tr>
  
</template>

<script>
export default {
  props:['orders'],
 computed:{
      calculateTotal(){
          if(this.orders.length === 1){
              return (this.orders[0].price * this.orders[0].quantity)
          }else{
              return this.orders.map(order =>  order.price * order.quantity)
              .reduce((prev,curr) => { return prev + curr},0)
          }    
      }
  },
  methods:{
      checkOrder(){
          this.$modal.show('order-checkout');
      }
  }
 
}
</script>



<style lang="scss">
.order__checkout{

    &--buy{
        
        button{
           @include addButton($color-tertiary);
           padding:1rem 4rem !important;
        }
    }

    &--total{
    
    & .title{
        padding:1rem;
        text-transform:uppercase;
        margin-top:.5rem;
        font-size: 2rem;
    }
    & .total{
        padding:1rem;
        font-size:2rem;
    }

    }
}
</style>
