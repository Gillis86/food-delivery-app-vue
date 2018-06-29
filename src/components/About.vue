<template>
  <div class="about">
    <div class="about__content">
      <div class="about__inner">
        <image-slider></image-slider>
        <about-desc></about-desc>
      </div>
    </div>
  </div>
</template>

<script>
import ImageSlider from "./About/ImageSlider.vue"
import AboutDescription from "./About/AboutDescription.vue"
export default {
components:{
  imageSlider: ImageSlider,
  aboutDesc: AboutDescription
},


}
</script>

<style lang="scss">
.about{
  @include mainSection($color-primary);
    &__content{
      position: relative;
      width:85%;
      height:65%;
      margin: 0 auto;
      
    }
    &__inner{
      margin:2rem auto;
      width:100%;
      background: $color-white;
      padding:3rem;
      border-radius: $border-radius;
      overflow: auto;
    }
}
</style>