document.addEventListener('DOMContentLoaded', function() {
  run();
});

function run() {
  var slider = document.querySelector('.js-carousel');
  lory(slider, {
    infinite:4,
    enableMouseEvents: true,
    classNameFrame: 'js-carousel__frame',
    classNameSlideContainer: 'js-carousel__slides',
    classNamePrevCtrl: 'js-carousel__prev',
    classNameNextCtrl: 'js-carousel__next',
  });
}
$(function() {
    scrolllinks = $("a[href^=#]"),
    scrolllinks.click(function(e){
      var shref = $(this).attr("href"),
          offTop = shref === "#" ? 0 : $(shref).offset().top;
      $('html, body').stop().animate({ 
          scrollTop: offTop
      }, 1500);
      e.preventDefault();
    });
});
$(function () {
    $('.menu_icon').click(function () {
        $('.menu_mobile').addClass('show');
        $('.button_close').addClass('show');
    });
});
$(document).ready(function(){
    $('.button_close').click(function(){
        if($(this).hasClass('show')){
          $(this).parents('.navbar').children('.menu_mobile').removeClass('show');
        } 
    });
});
$(document).ready(function(){
    $('.menu_item a').click(function(){
        if($(this).parents('.navbar').children('.menu_mobile').hasClass('show')){
          $(this).parents('.navbar').children('.menu_mobile').removeClass('show');
        } 
    });
});