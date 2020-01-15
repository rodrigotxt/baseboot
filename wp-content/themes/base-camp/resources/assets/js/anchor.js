import $ from 'jquery';

export function anchor() {

  // direct browser to top right away https://stackoverflow.com/questions/44899008/how-to-navigate-to-another-page-with-a-smooth-scroll-on-a-specific-id
  // direct browser to top right away
  if (window.location.hash)
      scroll(0,0);
  // takes care of some browsers issue
  setTimeout(function(){scroll(0,0);},1);

  $(function(){
  //your current click function
  $('.scroll').on('click',function(e){
      e.preventDefault();
      $('html,body').animate({
          scrollTop:$($(this).attr('href')).offset().top + 'px'
      },1000,'swing');
  });

  // if we have anchor on the url (calling from other page)
  if(window.location.hash){
      // smooth scroll to the anchor id
      $('html,body').animate({
          scrollTop:$(window.location.hash).offset().top + 'px'
          },1000,'swing');
      }
  });

};