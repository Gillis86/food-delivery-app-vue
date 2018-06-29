<template>
  <div class="home">
      <div class="home__heading">
        <h1 class="home__title">food delivery app</h1>
      </div>
  </div>
</template>

<script>

export default {
  
}
</script>

<style lang="scss">
  .home{
    @include mainSection;
    &__heading{
      position: absolute;
      top:20%;
      left:20%;
      transform: translate(-50%,-50%);
      
    }
    &__title{
    font-size: 6rem;
    text-transform: uppercase;
    color: $color-white;
    }
  }


</style>