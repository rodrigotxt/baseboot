import $ from 'jquery';
//import vue components
import Vue from 'vue';
import Parallax from "vue-parallaxy";
// import custom scripts
import { nav } from './nav.js';
import { accessibility } from './accessibility.js';
import { sidebar } from './sidebar.js';
import { pageload } from './elements.js';

import YourComponent from './vue-components/YourComponent';

import ScrollOut from "scroll-out";

ScrollOut({
  /* options */
  targets: ".sticky-header",
  offset: 400
});

// new Vue({
//   el: '#app',
//   components: {
//     YourComponent,
//   },
// });

// new Vue({
//   el: '#parallax',
//   components: {
//     Parallax
//   }
// });


// init scripts
nav();
accessibility();
sidebar();
pageload();