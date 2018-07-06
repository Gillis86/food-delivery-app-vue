<template>
  <tr class="order__record">
      <td class="order__record--name">{{order.name}}</td>
      <td v-if="order.ingredients" class="order__record--ingredients">
        <span>{{order.ingredients.join('-')}}</span>
        </td>
      <td class="order__record--price">price : {{order.price}}€</td>
      <td class="order__record--quantity">quantity : x {{order.quantity}}</td>
      <td class="order__record--total">total price: {{(order.quantity * order.price).toFixed(1)}}€</td>
      <td @click="removeOrder(order)" class="order__record--addRemoveButtons">
        <button >
          <svg class="order__record--remove"><use xlink:href="#icon-minus"></use></svg>
        </button>
        </td>
        <symbol id="icon-minus" viewBox="0 0 32 32">
            <title>minus</title>
            <path d="M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z"></path>
        </symbol>
  </tr>
</template>

<script>

export default {
  props:['order'],
  methods:{
    removeOrder(order){
      this.$store.dispatch('decrementOverallQuantity',order)
    }
  }
  
  
}
</script>

<style lang="scss">
.order__record{
  @include itemRecord($color-tertiary);
  &--remove{
    @include icon($color-white);
    
  }
  &--price{

  }
  &--total{
    font-size: 1.5rem;
  }
}

</style>