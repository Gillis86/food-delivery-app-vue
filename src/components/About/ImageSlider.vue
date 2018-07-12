<template>
<div  class="image-slider">
    <transition @enter="enter" @leave="leave" :css="false" mode="out-in">
        <div class="slide__container" v-for="number in [currentNumber]" :key="number">
            <div @mouseover="stopRotation()" @mouseout="startRotation()" class="image-slider--slide" 
                :style="{ backgroundImage: 'url(' + images[Math.abs(currentNumber) % images.length] + ')' }">
                <h1 class="heading">{{titles[Math.abs(currentNumber) % images.length]}}</h1>
            </div>
        </div>
    </transition>   
</div> 
</template>

<script>

export default {
data(){
  return{
    currentNumber: 0,
    timer: null,
    images:[
      {src:'dist/assets/food-slide-1.jpg',index:0},
      {src:'dist/assets/food-slide-2.jpg',index:1},
      {src:'dist/assets/food-slide-3.jpg',index:2},
      {src:'dist/assets/food-slide-4.jpg',index:3},
      {src:'dist/assets/food-slide-5.jpg',index:4},
    ],
    titles:[
        'VueJS',
        'Vuex',
        'Webpack',
        'Firebase',
        'axios',
        
    ]
  }
},
methods:{
    startRotation() {
            this.timer = setInterval(this.next, 5000);
        },
    
    stopRotation() {
            clearTimeout(this.timer);
            this.timer = null;
        },
    next() {
            this.currentNumber += 1
        },
    enter(el,done){
            TweenLite.from(el,2,{scale:".8",autoAlpha:0,
                          ease:Sine.easeIn,
                          onComplete:done})
        },
    leave(el,done){
             TweenLite.to(el,2,{autoAlpha:0,
                            scale:".8",
                          ease:Sine.easeOut,
                          onComplete:done})
        }
},
mounted() {
        this.startRotation();
    },
}
</script>

<style lang="scss">
    .image-slider{
        border-radius: $border-radius;
        width:100%;
        overflow: hidden;
        margin: 0 auto;
       .heading{
           font-size: 3rem;
           color:#fff;
           font-weight: 900;
           position:relative;
           left:0;
           top:50%;
           padding:3rem;
           background: $color-primary;
           width:30%;
           border-radius: $border-radius;
       } 
        
        &--slide{
            width:100%;
            height:30rem;
            background-position: 50%  50%;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: $border-radius;
            border-bottom: 1rem solid rgba($color-primary,.95);
            border-top: 1rem solid rgba($color-primary,.95);
            
            
        }
    }

.slide__container{
    width:100%;
    height:100%;
}

</style>