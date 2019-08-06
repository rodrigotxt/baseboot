import $ from 'jquery';

export function nav() {

  // Toggle mobile menu
  $('.navbar-burger').on('click', () => $('.navbar-burger, .navbar-menu').toggleClass('is-active'));

  // Toggle mobile menu
  $('.navbar-burger').on('click', function (e) {
    e.preventDefault();
    // $('.navbar-burger, .navbar-menu').toggleClass('is-active');
    // $('.navbar').toggleClass('menu-active');
    var clicks = $(this).data('clicks');
    if (clicks) {
      $('ul.mobile-menu').removeClass('menu-active');
      $('html, body').css({
         'overflow-y' : 'scroll'
      });
    } else {
      $('ul.mobile-menu').addClass('menu-active');
      $('html, body').css({
         'overflow-y' : 'hidden'
      });
    }
    $(this).data("clicks", !clicks);
  });

};