<template>
  <div class="contacts">
    <div class="contacts__container">
      <h3>coming soon</h3>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
.contacts{
  @include mainSection($color-quaternary);
  width:100%;
  position:relative;
  height:100%;
  &__container{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    background: $color-white;
  }
}
</style>