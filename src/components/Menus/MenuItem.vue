<template>
    <div class="menu__item" @click="selectMenu(menu.data)">
      <div :style="{ backgroundImage: 'url(' + menu.img + ')' }" class="menu__item--img"></div>
      <div class="menu__item--title">{{menu.title}}</div>
    </div>
</template>

<script>

export default {
props:['menu'],
methods:{
  selectMenu(data){
    this.$parent.$emit('changeMenu',data)
    sessionStorage.setItem('currentDataLoad',data.type)
  }
}
}
</script>

<style lang="scss">
  .menu__item{
    width:100%;
    padding:1rem;
    background: $color-white;
    border-radius: $border-radius;
    position: relative;
    display:table;
    cursor:pointer;
    &:not(:last-child){
      margin-bottom:2rem;
    }
    
    
    & > *{
      display: table-cell;
    }
    &--img{
      width:12rem;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
      height: 9rem;
      border: 3px solid $color-secondary;
      border-radius: $border-radius;
    }
    &--title{
      font-size: 1.5rem;
      text-transform: uppercase;
      padding:1rem;
      vertical-align: middle;
      text-align: left;
    }
  }
</style>