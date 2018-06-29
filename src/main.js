import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
import Vue from 'vue';
import App from './App.vue';
import store from './store/store.js';
import {TweenLite} from 'gsap';
import VModal from 'vue-js-modal';
import axios from 'axios';
import Vuelidate from 'vuelidate';
const assets = require.context('./assets',true,/\.(jpg|mp4|ogv|webvm)$/)

Array.prototype.compare = function(testArr) {
  if (this.length != testArr.length) return false;
  for (var i = 0; i < testArr.length; i++) {
      if (this[i].compare) { //To test values in nested arrays
          if (!this[i].compare(testArr[i])) return false;
      }
      else if (this[i] !== testArr[i]) return false;
  }
  return true;
}

Vue.use(VModal)
Vue.use(Vuelidate)


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
