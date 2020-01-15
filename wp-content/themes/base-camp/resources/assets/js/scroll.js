import $ from 'jquery';

export function scroll() {

  var html = $('html');
  var navbar = $('nav.navbar');
  var didScroll;
  var lastScrollTop = 0;
  var delta = 15;
  var heroheight = $('.hero').height();
  var wrapHeight = $('.header-wrap').outerHeight();

  $(window).scroll(function(event){

    didScroll = true;

  });

  // https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
  function hasScrolled() {

    var st = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);

    // console.log( st );


    // add background color after leaving top of page
    if (st <= 50) {
      $(".sticky-header").removeClass('not-top');
    } else {
      $(".sticky-header").addClass('not-top');
    }

    if (Math.abs(lastScrollTop - st) <= delta)

      return;

    if (st > lastScrollTop && st > heroheight) {

      html.removeClass('fixnav').addClass('unfixnav');

    } else {

      if (st + $(window).height() < $(document).height()) {

        html.addClass('fixnav').removeClass('unfixnav');

      }

    }

    lastScrollTop = st;

  }

  setInterval(function() {

    if (didScroll) {

      hasScrolled();

      didScroll = false;

      $('.dropdown-menu').removeClass("is-active");

      // $(".sticky-header").addClass('not-top');
    }

  }, 250);

  // https://codepen.io/BoyWithSilverWings/pen/MJgQqR
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top - 61;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return  elementTop < viewportTop;
  };


  // control scroll up subnav anchor
  $('.sub-nav-item a').click(function(){
    $('.sticky-header, .subnav').addClass('anchor-active');
  })

  // subnav anchor links
  $(window).on('resize scroll', function() {
    $('.flex-blocks').not('.not-header').each(function(i) {
      if ($(this).isInViewport()) {
      } else {
        $('.jump-to').html('Jump to section ...');
      }
    });
  });

  $(window).on('resize scroll', function() {

    var currentTop = $(window).scrollTop();
    var elems = $('.flex-blocks').not('.not-header');

    elems.each(function(){

      var elemTop     = $(this).offset().top;
      var elemBottom  = elemTop + $(this).height();
      var id          = $(this).attr('scrollname');
      var navElem     = $('.jump-to');

      if(currentTop >= elemTop && currentTop <= elemBottom){

        navElem.html(id);

      }

    })

  });



  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 0
        }, 350, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



};