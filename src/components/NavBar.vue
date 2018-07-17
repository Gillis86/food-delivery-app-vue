<template>
  <nav class="navbar">
    <div @click="changeView('appAbout')" class="navbar__item">
      <h3 class="navbar__title">about</h3>
    </div>
    <div @click="changeView('appMenus')"  class="navbar__item">
      <h3 class="navbar__title">menu</h3>
    </div>
    <div @click="changeView('appOrders')"  class="navbar__item">
      <h3 class="navbar__title">your order</h3>
      <span>{{orders}}</span>
    </div>
    <!-- <div @click="changeView('appContacts')" class="navbar__item">
      <h3 class="navbar__title">contacts</h3>
    </div> -->
  </nav>
</template>

<script>

export default {
  computed:{
    orders(){
      return this.$store.getters.getOrders.length
    }
  },
  methods:{
  changeView(component){
    this.$parent.$emit('changeView',component)
    sessionStorage.setItem("currentView",component)
    
    }
  }
}

</script>

<style lang="scss">
.navbar{
  @include clearfix;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index: 3000;
  &__item{
    float:left;
    width:33.33333333%;
    padding:2rem;
    @media screen and (max-width:600px){
            padding:1.5rem;
        }
    display: block;
    text-transform: uppercase;
    cursor: pointer;
    
    &:first-child{
      background: $color-primary;
      &:hover{
        background: darken($color-primary,5%)
      }
      
    }
    &:nth-child(2){
      background: $color-secondary;
      &:hover{
        background: darken($color-secondary,5%)
      }
    }
    &:nth-child(3){
      background: $color-tertiary;
      display: flex;
      justify-content: center;
      & span{
        margin-left:1rem;
        font-size:1rem;
        border-radius:50%;
        color:$color-white;
        padding:.4rem 1rem;
        background-color: darken($color-tertiary,5%);
        border:2px solid $color-white;
      }
      &:hover{
        background: darken($color-tertiary,5%);
        & span{
          background: $color-tertiary;
        }
      }
    }
    /* &:nth-child(4){
      background: $color-quaternary;
      &:hover{
        background: darken($color-quaternary,5%)
      }
    } */
  }
  &__title{
    font-size: 2rem;
    color:$color-white;
    text-align: center;
     @media screen and (max-width:600px){
            font-size:1.5rem;
        }
         @media screen and (max-width:408px){
            font-size:1rem;
        }
         @media screen and (max-width:333px){
            font-size:.6rem;
        }
  }
}


</style>