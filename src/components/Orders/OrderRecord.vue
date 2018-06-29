<template>
  <ul class="order__record">
      <li class="order__record--name">{{order.name}}</li>
      <li v-if="order.ingredients" class="order__record--ingredients">
        <span>{{order.ingredients.join('-')}}</span>
        </li>
      <li class="order__record--price">price : {{order.price}}€</li>
      <li class="order__record--quantity">quantity : x {{order.quantity}}</li>
      <li class="order__record--total">total price: {{(order.quantity * order.price).toFixed(1)}}€</li>
      <li @click="removeOrder(order)"><svg class="order__record--remove"><use xlink:href="#icon-minus"></use></svg></li>
      <symbol id="icon-minus" viewBox="0 0 32 32">
            <title>minus</title>
            <path d="M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z"></path>
        </symbol>
  </ul>
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
    background:$color-tertiary;
  }
  &--price{
    float:none;
    border:none;
  }
  &--total{
    font-size: 1.5rem;
    float:right;
  }
}

</style>