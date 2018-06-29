<template>
  <modal @before-open="getModalData" :adaptive="true" @closed="emptyAdditionalIngredients" name="add-ingredients">
            <div class="ingredients__container">
                <div v-for="ingredient in ingredients" :key="ingredient.id" class="check" >
                    <input v-model="ingredientsToAdd" :value="ingredient.id" class="check__input" type="checkbox" :id="'ingredient'+ingredient.id.toString()">
                    <label class="check__label" :for="'ingredient'+ingredient.id.toString()">
                        <span class="check__btn"></span>
                        {{ingredient.name}}
                    </label>
                    <span class="ingredient__price">- {{ingredient.price}} €</span>
                </div>
                <button @click="addIngredients()" class="add__btn">aggiungi</button>
            </div>
    </modal>
</template>
<script>
export default {
    data(){
        return{
            ingredientsToAdd:[],
            product: {},
        }
    },
    computed:{
        ingredients(){
            return this.$store.getters.getIngredients
        }
    },
    methods:{
        getModalData(event){
            this.product = event.params
        },
        emptyAdditionalIngredients(){
            this.ingredientsToAdd = []
        },
        addIngredients(){
            if(this.ingredientsToAdd.length){
                this.$store.dispatch('addIngredients',{
                    ingredientsToAdd: this.ingredientsToAdd,
                    productToUpgrade: this.product
                })
                this.$modal.hide('add-ingredients');
            }
               
            }
            
        }
    }
</script>

<style lang="scss">
    .ingredients__container{
        padding:3rem;
        height:100%;
        width:100%;
        overflow: auto;
        position: relative;
        
    }
    .add__btn{
        @include addButton($color-secondary)
    }
    .ingredient__price{
        color:$color-secondary
    }
    .check{
            display: inline-block;
            margin:2rem;
            &__btn{
                display: inline-block;
                width:2rem;
                height:2rem;
                border:3px solid $color-secondary;
                border-radius: $border-radius;
                position:absolute;
                left:0;
                top:-40%;
                cursor: pointer;
                &::after{
                    content:"";
                    width:1rem;
                    height:1rem;
                    display: block;
                    border-radius: $border-radius;
                    position:absolute;
                    top:50%;
                    left:50%;
                    transform: translate(-50%,-50%);
                    background: $color-secondary;
                    opacity:0;
                    transition: opacity .2s;
                }
            }
            &__label{
                text-transform:uppercase;
                font-size: 1rem;
                display: inline-block;
                position: relative;
                padding-left:2.5rem;
                letter-spacing: 1px;
                color:$color-secondary;
            }
            &__input{
                display: none;
            }

            &__input:checked ~ &__label &__btn::after{
                opacity:1
            }

        }
</style>


