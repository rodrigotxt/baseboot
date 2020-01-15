import $ from 'jquery';
import ScrollOut from "scroll-out";

export function nav() {


  const hero = $('.hero');
  const heroHeight = hero.height();
  const wrapHeight = $('.header-wrap').height();
  const stickyHeader = $('.sticky-header');

  const stickyHeaderHeight = stickyHeader.height();

  const scrollHeight = heroHeight - stickyHeaderHeight;


  ScrollOut({
    /* options */
    targets: $('.sticky-header, .subnav'),
    offset: scrollHeight,
    // cssProps: {
    //   scrollPercentY: true,
    // },
  });

  const topofDiv = hero.offset().top; //gets offset of header
  const height = hero.outerHeight(); //gets height of header

  $(window).scroll(function(){
    if($(window).scrollTop() > (heroHeight)){
      stickyHeader.addClass('past-hero')
      $('button.go-top').addClass('is-active');
    }
    else{
      stickyHeader.removeClass('past-hero')
      $('button.go-top').removeClass('is-active');
    }
    if($(window).scrollTop() < (heroHeight - wrapHeight)){
      $('.sticky-header, .subnav').addClass('inside-hero');
      $('.sticky-header, .subnav').removeClass('anchor-active');
    } else {
      $('.sticky-header, .subnav').removeClass('inside-hero');
    }
    if ($(window).scrollTop() > (scrollHeight) && ($(window).scrollTop() < (heroHeight)) ){
      stickyHeader.addClass('disable-nav');
      $('html').removeClass('fixnav-init');
    } else {
      stickyHeader.removeClass('disable-nav');
    }
  });

  $.extend($.expr[':'], {
    'off-top': function(el) {
      return $(el).offset().top < $(window).scrollTop();
    },
    'off-right': function(el) {
      return $(el).offset().left + $(el).outerWidth() - $(window).scrollLeft() > $(window).width();
    },
    'off-bottom': function(el) {
      return $(el).offset().top + $(el).outerHeight() - $(window).scrollTop() > $(window).height();
    },
    'off-left': function(el) {
      return $(el).offset().left < $(window).scrollLeft();
    },
    'off-screen': function(el) {
      return $(el).is(':off-top, :off-right, :off-bottom, :off-left');
    }
  });

  const htmlBody = $('html, body');
  const navbarMenu = $('.navbar-menu ul');
  const navDrop = $('ul.nav-drop');
  const navMainLink = $('a.nav-main-link');
  const searchInputMain = $('input[name="s"]');
  const navbarBurger = $('.navbar-burger');
  const mobileMenu = $('ul.mobile-menu');

  $(window).scroll(function(){
     stickyHeader.removeClass('show-search');
     navbarMenu.removeClass('hide-search')
     navDrop.removeClass('is-active');
     navMainLink.removeClass('is-active');
     searchInputMain.parent().find('.icon-close').addClass('icon-search').removeClass('icon-close button-close-search');
  });

  function clickSearchIcon() {
    stickyHeader.toggleClass('show-search')
    searchInputMain.focus();
    searchInputMain.parent().find('.icon-search').removeClass('icon-search').addClass('icon-close button-close-search');
    navbarMenu.addClass('hide-search')
  }

  $('.close-topic').on('click', function (e) {
    e.preventDefault();
    $('.search-topic-menu').removeClass('menu-active');
    $('.navbar-menu').removeClass('menu-topic');
    htmlBody.removeClass('overflow-y-hidden');
    htmlBody.removeClass('overflow-hidden');
  });

  $('.close-state').on('click', function (e) {
    e.preventDefault();
    $('.search-region-menu').removeClass('menu-active');
    $('.navbar-menu').removeClass('menu-region');
    htmlBody.removeClass('overflow-y-hidden');
    htmlBody.removeClass('overflow-hidden');
  });


  function openMenu() {
    $('.navbar-burger, .navbar-menu').addClass('is-active');
    mobileMenu.addClass('menu-active');
    stickyHeader.addClass('menu-active');
    htmlBody.css({
       'overflow-y' : 'hidden'
    });
  }

  function closeMenu() {
    $('.navbar-burger, .navbar-menu').removeClass('is-active');
    mobileMenu.removeClass('menu-active');
    stickyHeader.removeClass('menu-active');
    htmlBody.css({
       'overflow-y' : 'scroll'
    });
  }


  $('a.search-icon-btf').on('click', function () {
    clickSearchIcon();
  });

  $('span.icon.search-close').on('click', function () {
    clickSearchIcon();
    navbarMenu.removeClass('hide-search')
  });


  // Toggle mobile menu
  navbarBurger.on('click', function (e) {
    e.preventDefault();
    $('.search-region-menu, .search-topic-menu').toggleClass('closed-by-mainmenu').removeClass('menu-active');
    var clicks = $(this).data('clicks');
    if (clicks) {
      closeMenu();
    } else {
      openMenu();
    }
    $(this).data("clicks", !clicks);
  });

  var width = $(window).width();
  $(window).on('resize', function() {
    if ($(this).width() != width) {
      closeMenu();
    }
  });


  navMainLink.on('mouseover touchstart focus', function (e) {
    if($(this).parent().find('ul.nav-drop').hasClass('is-active')){
    } else {
      $('a.nav-main-link.is-active').toggleClass('is-active');
      $('ul.nav-drop.is-active').toggleClass('is-active');
      $(this).parent().find('ul.nav-drop').toggleClass('is-active');
      $(this).toggleClass('is-active');
      var f = $('ul.nav-drop');
      if( f.is(':off-right') ) {
        $(this).parent().find('ul.nav-drop').addClass('offscreen');
      }
    }
  });


  // when click outside nav this closes it
  $(document).on('click', function (e) {
    if ($(e.target).closest("span.navwrap").length === 0) {
      $('ul.nav-drop, a.nav-main-link').removeClass('is-active');
    }
  });

  $('.search-region').on('click', function (e) {
    e.preventDefault();
    $('.navbar-menu').toggleClass('menu-region');
    $('.navbar-menu').removeClass('menu-topic');
    htmlBody.toggleClass('overflow-y-hidden');
    htmlBody.removeClass('overflow-hidden');
    $('.search-region-menu').toggleClass('menu-active');
    $('.search-topic-menu').removeClass('menu-active');
  });

  $('.search-topic').on('click', function (e) {
    e.preventDefault();
    $('.navbar-menu').toggleClass('menu-topic');
    $('.navbar-menu').removeClass('menu-region');
    htmlBody.toggleClass('overflow-hidden');
    htmlBody.removeClass('overflow-y-hidden');
    $('.search-topic-menu').toggleClass('menu-active');
    $('.search-region-menu').removeClass('menu-active');
  });

  //mobile accordion
  var allPanels = $('ul.accordion-content');

  allPanels.hide()

  $('a.toggle-shelf').on('click', function (e) {
    e.preventDefault();
    var targetContent = $(this).parent().parent().find('ul.accordion-content');

    var clicks = $(this).data('clicks');
    if (clicks) {
     targetContent.removeClass('active').slideUp();
     $(this).removeClass('active');
    } else {
     targetContent.addClass('active').slideDown(); // open this accordion
     $(this).addClass('active');
    }
    $(this).data("clicks", !clicks);

    return false;
  });


};