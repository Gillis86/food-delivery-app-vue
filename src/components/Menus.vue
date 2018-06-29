<template>
  <div class="menu">
    <div class="menu__select">
      <menu-item v-for="menu in menus" :key="menu.id" :menu="menu"></menu-item>
    </div>
    <div v-if="menuData !== null" class="menu__selected">
      <div class="is-active">
        <div class="menu__container">
          <div class="menu__container--box" v-for="(item, key) in menuList" :key="key">
              <div class="title">{{item.title}}</div>
                  <item-record v-for="data in item.data" 
                          :key="data.id" :data="data"></item-record>
              </div>
            </div> 
        </div>
    </div>
    <div v-else class="menu__logo">
        <symbol id="icon-spoon-knife" viewBox="0 0 32 32">
          <title>spoon-knife</title>
          <path d="M7 0c-3.314 0-6 3.134-6 7 0 3.31 1.969 6.083 4.616 6.812l-0.993 16.191c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.993-16.191c2.646-0.729 4.616-3.502 4.616-6.812 0-3.866-2.686-7-6-7zM27.167 0l-1.667 10h-1.25l-0.833-10h-0.833l-0.833 10h-1.25l-1.667-10h-0.833v13c0 0.552 0.448 1 1 1h2.604l-0.982 16.004c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.982-16.004h2.604c0.552 0 1-0.448 1-1v-13h-0.833z"></path>
        </symbol>
        <svg class="icon-spoon-knife"><use xlink:href="#icon-spoon-knife"></use></svg>
        <h3 class="menu__logo--call">Fai il tuo ordine</h3>
      </div>
    <ingredients-modal></ingredients-modal>
  </div> 
</template>

<script>
import MenuItem from "./Menus/MenuItem.vue"
import ItemRecord from './Menus/ItemRecord.vue'
import Ingredients from './Menus/Ingredients.vue'
export default {
  data(){
    return{
      menuData:null,
    }
  },
  computed:{
    menus(){
      return [
        {id:1,img:'dist/assets/pizza.jpg',title:'Pizze',data: this.$store.getters.getProduct('pizze')},
        {id:2,img:'dist/assets/pasta.jpg',title:'Primi Piatti',data:this.$store.getters.getProduct('primiPiatti')},
        {id:3,img:'dist/assets/carne.jpg',title:'Secondi Piatti',data:this.$store.getters.getProduct('secondiPiatti')},
        {id:4,img:'dist/assets/dolci.jpg',title:'Dolci',data:this.$store.getters.getProduct('dolci')},
        {id:5,img:'dist/assets/bevande.jpg',title:'bevande'},
      ]
    },
    menuList() {
    return Object.keys(this.menuData)
      .filter(key => key !== 'type')
      .reduce((res, key) => (res[key] = this.menuData[key], res), {});
    }
  },

  created(){
    if(sessionStorage['currentDataLoad']){
      this.menuData = this.$store.getters.getProduct(sessionStorage['currentDataLoad'])
    }
      this.$on('changeMenu', data =>  this.menuData = data )
  },
  components:{
    menuItem: MenuItem,
    itemRecord: ItemRecord,
    ingredientsModal:Ingredients
  }
}
</script>

<style lang="scss">
.menu{
 @include mainSection($color-secondary);
 @include clearfix;
 &__select{
   float: left;
   margin: 2rem 0 2rem 3rem;
   @media screen and (max-width:600px){
     width:100%;
     margin: 2rem auto;
     padding:3rem;
     float:none;
     height:auto
   }
 }
 &__selected{
   margin: 2rem 0 0 3rem;
   width:auto;
   overflow: hidden;
   height:90%;
   padding:3rem;
   @media screen and (max-width:600px){
     width:100%;
     margin: 2rem auto;
     padding:3rem;
     overflow: auto;
     height:auto;
     margin-bottom: 6rem;
   }

   & > .is-active{
    background: $color-white;
    padding:3rem;
    border-radius: .3rem;
    width:100%;
    height:90%;
    margin:0 auto;
    overflow-y: auto;
   }
   
 }
}
.menu__logo{
  position:absolute;
  top:20%;
  left:35%;
  width:50%;
  height:50%;
  border-radius:$border-radius;
  padding:3rem;
  text-align: center;
  &--call{
    font-size: 3rem;
    margin-top:1rem;
    color:$color-white;
    font-weight: 800;
    text-transform: uppercase;

  
  }
}
 .menu__container{
          display: block;
          margin: 0 auto;
          width:90%;
      & > *{
          padding:0 2rem;
          
      }
      &--box{
        &:not(:last-child){
          margin-bottom: 4rem;
        }
      }
      & .title{
              font-size: 2rem;
              margin-bottom: 1rem;
              padding:1rem;
              text-transform:uppercase;
              color:$color-secondary;
              
          }
  }
  
.icon-spoon-knife{
  display: inline-block;
  width: 30em;
  height: 30em;
  stroke-width: 0;
  line-height: 0;
  stroke: $color-white;
  fill: $color-white;
}
  
</style>