import $ from 'jquery';

export function pageload() {

  // Hide Page Loader when DOM and images are ready
  $(window).on('load', () => $('.pageloader').removeClass('is-active'));

};