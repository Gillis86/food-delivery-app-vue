<template>
  <div id="app">
    <app-nav></app-nav>
    <video-bg :sources="sources" img='dist/assdist/avo-eg'>
    <transition mode="out-in"  @enter="enter">
      <keep-alive>
        <component :style="{marginTop: navBarWidth + 'px'}" :is="currentComponent"></component>
      </keep-alive>   
    </transition> 
  </video-bg>
  </div>
</template>

<script>
import VideoBg from 'vue-videobg'
import Title from './components/Title.vue'
import NavBar from './components/NavBar.vue'
import About from './components/About.vue'
import Menus from './components/Menus.vue'
import Orders from './components/Orders.vue'
import Contacts from './components/Contacts.vue'
export default {
  data(){
    return{
      navBarWidth: null,
      currentComponent: "appTitle",
      sources: [
        'dist/assets/avo-egg.mp4',
        'dist/assets/avo-egg.ogv',
        'dist/assets/avo-egg.webm'
      ]
    }
  },
  created(){
    console.log(sessionStorage)
    console.log(this.$store.state.products)
    this.$store.dispatch('setProducts')
    this.$store.dispatch('setIngredients')
    
  },
  mounted(){
    this.navBarWidth = this.$children[0].$el.getBoundingClientRect().height;
    window.addEventListener('resize',() =>{
      this.navBarWidth = this.$children[0].$el.getBoundingClientRect().height;
    })
    if(sessionStorage["currentView"]){
      this.currentComponent = sessionStorage["currentView"]
    }
    this.$on('changeView',(data)=>{
      this.currentComponent = data

    })
  },
  methods:{
    enter(el,done){
      TweenLite.from(el,.5,{bottom:"100%",
                          ease:Sine.easeIn,
                          onComplete:done})
      
    },
  },
  components:{
    'video-bg': VideoBg,
    appTitle: Title,
    appNav: NavBar,
    appAbout: About,
    appMenus: Menus,
    appOrders: Orders,
    appContacts: Contacts
  }

}
</script>
