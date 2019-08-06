import $ from 'jquery';
//import vue components
import Vue from 'vue';
import Parallax from "vue-parallaxy";
// import custom scripts
import { nav } from './nav.js';
import { pageload } from './elements.js';

import YourComponent from './vue-components/YourComponent';

new Vue({
  el: '#app',
  components: {
    YourComponent,
  },
});

new Vue({
  el: '#parallax',
  components: {
    Parallax
  }
});


// init scripts
nav();
pageload();