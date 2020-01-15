import $ from 'jquery';

import Vue from 'vue';
import { BulmaAccordion, BulmaAccordionItem } from "vue-bulma-accordion";
import sal from 'sal.js'



export function search() {
  $('input.input.search').on("keypress", function(){
    $('.show-if-focus').removeClass('d-none');
    $('.hide-if-focus').addClass('d-none');
  })

  $('input.input.search').on("focusout", function(){
    $('.show-if-focus').addClass('d-none');
    $('.hide-if-focus').removeClass('d-none');
  })
}



export function pageload() {

  var salAnimation = sal({
    threshold: .05,
  });

  $(window).on('load', function () {

    $('.pageloader').removeClass('is-active')

    var $top = $(".sticky-header").get(0).getBoundingClientRect();

    // console.log( $top );

    if ($top.top != 0) {
      // $(".sticky-header, .subnav").addClass('not-top');
      // $("html").addClass('fixnav').removeClass('unfixnav');
      salAnimation.disable()
    } else {
      salAnimation.enable()
    }

  });


  // button dropdown
  var button = $('.button-dropdown');
  var dropdown = $('.dropdown-menu');

  button.on( 'click', function(e) {
    dropdown.toggleClass("is-active");
  });


  // read more
  $('a.read-more').on('click', function () {
    $(this).parent().find('.readmore').toggleClass('d-inline');
    $(this).parent().find('.elipsis').toggleClass('d-none');
    $(this).toggleClass('reveal');
    if($(this).hasClass('reveal')){
      $(this).text('Read Less');
    } else {
      $(this).text('Read More');
    }
  })


  // add close quote
  $(".wysiwyg").find("blockquote p").append("<span>”</span>");

  // show caption
  $('a.show-caption').on('mouseenter', function() {
    $(this).find('.info').removeClass('opacity-100').addClass('opacity-0');
    $(this).find('.caption').removeClass('opacity-0').addClass('opacity-100');
  });
  $('a.show-caption').on('mouseleave', function() {
    $(this).find('.info').removeClass('opacity-0').addClass('opacity-100');
    $(this).find('.caption').removeClass('opacity-100').addClass('opacity-0');
  });
  // add element for caption
  $('.wp-caption-text').parent().append( "<div class='captioninfo'>i</div>" )

  $('.captioninfo').on('mouseenter', function() {
    $(this).addClass('hide');
    $(this).parent().find('p.wp-caption-text').addClass('active');
  })
  $('.captioninfo').on('mouseleave', function() {
    $(this).removeClass('hide');
    $(this).parent().find('p.wp-caption-text').removeClass('active');
  })

  // activate bkg img class
  // $('a.bkg-img-link').on('mouseenter', function() {
  //   $(this).parentsUntil().find('.bkg-img').addClass('active');
  // });
  // $('a.bkg-img-link').on('mouseleave', function() {
  //   $(this).parentsUntil().find('.bkg-img').removeClass('active');
  // });


  // add lazy load to image in wysiwyg
  $('.wysiwyg img, iframe').addClass('lazyload');

  // add bulma style to table
  $('.tablepress, table').addClass('table is-bordered is-striped is-narrow is-hoverable is-fullwidth');

  $('#articles').on('click', '#load-older-posts', function(e) {
      // prevent new page load
      e.preventDefault();
      // store next page number
      var next_page = $(this).attr('href');
      // remove older posts button from DOM
      $(this).remove();
      // ajax older posts below existing posts
      $('#articles').append( $('<section />').load(next_page + ' #articles') );
  });

};

export function accordions() {

  if ($('#bulma-accordion-1').length) {
    new Vue({
      el: '#bulma-accordion-1',
      components: {
        BulmaAccordion,
        BulmaAccordionItem
      }
    });
  }

  if ($('#bulma-accordion-2').length) {
    new Vue({
      el: '#bulma-accordion-2',
      components: {
        BulmaAccordion,
        BulmaAccordionItem
      }
    });
  }

  if ($('#bulma-accordion-3').length) {
    new Vue({
      el: '#bulma-accordion-3',
      components: {
        BulmaAccordion,
        BulmaAccordionItem
      }
    });
  }

  if ($('#bulma-accordion-4').length) {
    new Vue({
      el: '#bulma-accordion-4',
      components: {
        BulmaAccordion,
        BulmaAccordionItem
      }
    });
  }

  if ($('#bulma-accordion-5').length) {
    new Vue({
      el: '#bulma-accordion-5',
      components: {
        BulmaAccordion,
        BulmaAccordionItem
      }
    });
  }
}



export function copyToClipboard() {


    $("button.clicktocopy").click(function(event){
    var $tempElement = $("<input>");
        $("body").append($tempElement);
        $tempElement.val($(this).find("span.copythis").text()).select();
        document.execCommand("Copy");
        $tempElement.remove();
        alert('copied anchor link to clipboard! this will help you create the main menu nav')
    });

};