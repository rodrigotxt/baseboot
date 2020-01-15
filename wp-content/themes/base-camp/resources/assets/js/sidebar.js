import $ from 'jquery';

export function sidebar() {

  var $window = $(window);

  function sidebar() {
    var $this = $(window);
    var scrollTop = $this.scrollTop();
    var $sidebarWrapper = $('.sidebar-wrapper');
    var $sidebar = $('.sidebar-menu', $sidebarWrapper);
    var top = $sidebarWrapper.offset().top;
    if ($this.width() > 991) {
      if (scrollTop > $('footer').offset().top - $('.sidebar-menu').outerHeight(true) - 200) {
        $sidebar.removeClass('fixed');
        $sidebar.addClass('bottom');
      } else if (scrollTop > (top - 200)) {
        $sidebar.addClass('fixed');
        $sidebar.removeClass('bottom');
      } else {
        $sidebar.removeClass('fixed');
        $sidebar.removeClass('bottom');
      }
    }
  }
  function scrollListener() {
    if ($('.sidebar-wrapper .sidebar-menu').outerHeight(true) + 100 > $('.content-body').outerHeight(true)) {
      $('.sidebar-wrapper .sidebar-menu').addClass('needs-fit');
      $('.sidebar-wrapper').addClass('needs-fit');
      return;
    }
    $window.on('scroll', function () {
      sidebar();
    });
  }
  function init() {
    if (!$('.sidebar-wrapper').length) {
      return;
    }
    sidebar();
    scrollListener();
  }
  init();

};