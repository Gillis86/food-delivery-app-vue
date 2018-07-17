<template>
    <div class="description">
        <img class="description__image" src="dist/assets/vue-logo.png" alt="vue">
        <img class="description__image" src="dist/assets/webpack.png" alt="webpack">
        <img class="description__image" src="dist/assets/firebase.png" alt="firebase">  
    </div>
</template>

<script>

export default {

}
</script>
<style lang="scss">
    .description{
        width:100%;
        height:100%;
        //margin-top:5rem;
        padding:2rem;
        text-align:center;
        

        &__image{
            width:20rem;
            height:auto;
            //float:left;
            margin:1rem;
            padding-right:2rem;
            display: inline-block;
        }
    }
</style>
