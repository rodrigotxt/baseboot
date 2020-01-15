import Vue from 'vue';
import carousel from 'vue-owl-carousel'
import $ from 'jquery';

export function carousels() {

  if ($('#carousel-gallery-1').length) {
    new Vue({
      el: '#carousel-gallery-1',
      components: {
        carousel
      },
    });
  }

  if ($('#carousel-gallery-2').length) {
    new Vue({
      el: '#carousel-gallery-2',
      components: {
        carousel
      },
    });
  }

  if ($('#carousel-gallery-3').length) {
    new Vue({
      el: '#carousel-gallery-3',
      components: {
        carousel
      },
    });
  }

  if ($('#carousel-gallery-4').length) {
    new Vue({
      el: '#carousel-gallery-4',
      components: {
        carousel
      },
    });
  }

  if ($('#carousel-gallery-5').length) {
    new Vue({
      el: '#carousel-gallery-5',
      components: {
        carousel
      },
    });
  }

  if ($('#carousel-gallery-6').length) {
    new Vue({
      el: '#carousel-gallery-6',
      components: {
        carousel
      },
    });
  }

  if ($('#carousel-gallery-7').length) {
    new Vue({
      el: '#carousel-gallery-7',
      components: {
        carousel
      },
    });
  }

  if ($('#carousel-gallery-8').length) {
    new Vue({
      el: '#carousel-gallery-8',
      components: {
        carousel
      },
    });
  }

  if ($('#carousel-gallery-9').length) {
    new Vue({
      el: '#carousel-gallery-9',
      components: {
        carousel
      },
    });
  }

  if ($('#carousel-gallery-10').length) {
    new Vue({
      el: '#carousel-gallery-10',
      components: {
        carousel
      },
    });
  }
  if ($('#carousel-gallery-11').length) {
    new Vue({
      el: '#carousel-gallery-11',
      components: {
        carousel
      },
    });
  }
  if ($('#carousel-gallery-12').length) {
    new Vue({
      el: '#carousel-gallery-12',
      components: {
        carousel
      },
    });
  }
  if ($('#carousel-gallery-13').length) {
    new Vue({
      el: '#carousel-gallery-13',
      components: {
        carousel
      },
    });
  }
  if ($('#carousel-gallery-14').length) {
    new Vue({
      el: '#carousel-gallery-14',
      components: {
        carousel
      },
    });
  }
  if ($('#carousel-gallery-15').length) {
    new Vue({
      el: '#carousel-gallery-15',
      components: {
        carousel
      },
    });
  }
  if ($('#carousel-gallery-16').length) {
    new Vue({
      el: '#carousel-gallery-16',
      components: {
        carousel
      },
    });
  }
  if ($('#carousel-gallery-17').length) {
    new Vue({
      el: '#carousel-gallery-17',
      components: {
        carousel
      },
    });
  }
  if ($('#carousel-gallery-18').length) {
    new Vue({
      el: '#carousel-gallery-18',
      components: {
        carousel
      },
    });
  }
  if ($('#carousel-gallery-19').length) {
    new Vue({
      el: '#carousel-gallery-19',
      components: {
        carousel
      },
    });
  }
  if ($('#carousel-gallery-20').length) {
    new Vue({
      el: '#carousel-gallery-20',
      components: {
        carousel
      },
    });
  }

  if ($('#publication-block').length) {
    new Vue({
      el: '#publication-block',
      components: {
        carousel
      },
    });
  }

  if ($('#publication-infographic-gallery').length) {
    new Vue({
      el: '#publication-infographic-gallery',
      components: {
        carousel
      },
    });
  }

  if ($('#publication-video-gallery').length) {
    new Vue({
      el: '#publication-video-gallery',
      components: {
        carousel
      },
    });
  }
  if ($('#publication-related-gallery').length) {
    new Vue({
      el: '#publication-related-gallery',
      components: {
        carousel
      },
    });
  }
  if ($('#carousel-casestudies').length) {
    new Vue({
      el: '#carousel-casestudies',
      components: {
        carousel
      },
    });
  }


  var amount = $(".red").length;
  $('button.owl-dot').attr('aria-label', 'Carousel Navigation + amount');
  $('button.pswp__button').attr('aria-label', 'Fullscreen Carousel Navigation + amount');

}