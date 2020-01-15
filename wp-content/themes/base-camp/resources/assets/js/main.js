require('intersection-observer');

import $ from 'jquery';

//import js libraries
import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';
import smoothscroll from 'smoothscroll-polyfill';

//import vue components
import Vue from 'vue';
// import Parallax from "vue-parallaxy";
import carousel from 'vue-owl-carousel'

// import custom scripts
import { nav } from './nav.js';
import { accessibility } from './accessibility.js';
import { carousels } from './carousels.js';
import { sidebar } from './sidebar.js';
import { accordions } from './elements.js';
import { pageload } from './elements.js';
import { search } from './elements.js';
import { copyToClipboard } from './elements.js';
import { anchor } from './anchor.js';
import { scroll } from './scroll.js';

import YourComponent from './vue-components/YourComponent';

smoothscroll.polyfill();

// init scripts
accessibility();
sidebar();
carousels();
accordions();
search();
pageload();
copyToClipboard();
scroll();
anchor();
nav();
