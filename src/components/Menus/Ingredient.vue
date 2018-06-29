<template>
    <div class="ingredient__container">
        <div @click="removeIngredient(ingredient)" @mouseover="toEliminate = !toEliminate" @mouseout="toEliminate = !toEliminate" class="ingredient__item">{{ingredient}}
            <span :class="[toEliminate ? 'active' : 'inactive']">
                <span><svg class="icon__remove"><use xlink:href="#icon-minus"></use></svg></span>
            </span>
        </div>
    </div>
 
</template>

<script>
export default {
    props:["ingredient"],
    data(){
        return{
            toEliminate:false
        }
    },
    methods:{
        removeIngredient(ingredient){
           this.$parent.$emit('ingredientToRemove',ingredient)
       }
    }
  
}
</script>

<style lang="scss">
.ingredient__container{
    display: inline-block;
}
.ingredient__item{
    margin:0 .2rem;
    position:relative;
    cursor: pointer;

}

.inactive{
    position:absolute;
    top:0;
    left:0;
    opacity:0
}

.active{
    position:absolute;
    top:0;
    left:40%;
    transform: translateY(-15px);
}

.icon__remove{
    width:1.3rem;
    height:1.3rem;
    fill:$color-white;
    background: $color-secondary;
    padding:.3rem;
    border-radius: $border-radius
}

</style>
