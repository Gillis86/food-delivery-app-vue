<template>
  <div class="orders">
      <table :style="{height:setHeight}" class="orders__container">
        <tr>
          <td>
            <div class="orders__container--title">
                <h3 v-if="orders.length">il tuo ordine</h3>
                <h3 v-else>il tuo carrello è vuoto</h3>
          </div>
          </td>
        </tr>
        <order-record v-for="order in orders" :key="order.orderID" :order="order"></order-record>
        <order-checkin v-if="orders.length" :orders="orders"></order-checkin>
      </table>
      
      <order-checkout></order-checkout>
  </div>
</template>

<script>
import OrderRecord from './Orders/OrderRecord.vue'
import OrderCheckIn from './Orders/OrderCheckIn.vue'
import OrderCheckOut from './Orders/OrderCheckOut.vue'
export default {
  computed:{
    setHeight(){
      return this.orders.length < 3 ? "auto" : "60%"
    },
    orders(){
      return this.$store.getters.getOrders
    }
  },
  components:{
    orderRecord: OrderRecord,
    orderCheckin:OrderCheckIn,
    orderCheckout: OrderCheckOut
  },
  deactivated(){
    this.$modal.hide('order-checkout');
  }

}
</script>

<style lang="scss">
.orders{
    @include mainSection($color-tertiary);
    overflow: hidden;
    &__container{
      background: $color-white;
      position:absolute;
      width:70%;
      border-collapse: separate;
      border-spacing:2rem;
      top:45%;
      left:50%;
      transform: translate(-50%,-50%);
      padding:3rem;
      border-radius:$border-radius;
      overflow:auto;
      &--title{
        font-size: 2rem;
        text-transform: uppercase;
        margin-bottom:2rem;
        color:$color-tertiary;
      }


    }
 
}
</style>