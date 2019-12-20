// swipper_feedback

var swiper = new Swiper('.feedback .swiper-container', {
  spaceBetween: 20,
  slidesPerView: 3,
  navigation: {
    nextEl: '.feedback__control-right',
    prevEl: '.feedback__control-left',
  },
  breakpoints: {
   767: {
    slidesPerView: 2,
    spaceBetween: 20,
   },
   600: {
    slidesPerView: 1,
    spaceBetween: 20,
   },
  }
});

// swipper_clients

var swiper = new Swiper('.clients .swiper-container', {
  spaceBetween: 10,
  slidesPerView: 4,
  navigation: {
   nextEl: '.clients__control-right',
   prevEl: '.clients__control-left',
  },
  breakpoints: {
   1023: {
    slidesPerView: 3,
    spaceBetween: 10,
   },
   767: {
    slidesPerView: 2,
    spaceBetween: 10,
   },
   500: {
    slidesPerView: 1,
    spaceBetween: 10,
   },
  }
});

// industry_clients

var swiper = new Swiper('.industry-content .swiper-container', {
  spaceBetween: 10,
  slidesPerView: 4,
  navigation: {
   nextEl: '.industry__control-right',
   prevEl: '.industry__control-left',
  },
  breakpoints: {
   1023: {
    slidesPerView: 3,
    spaceBetween: 10,
   },
   767: {
    slidesPerView: 2,
    spaceBetween: 10,
   },
   500: {
    slidesPerView: 1,
    spaceBetween: 10,
   },
  }
});

// popup //

$(document).ready(function(){

 $('.header__link, .order_btn').on("click", function(){
  $('.popup').show()
 });
 $('.popup-connect__cross').on("click", function(){
  $('.popup').hide()
 });

 $('.header__contacts-img').on("click", function(){
  $('.header__contacts_display-none').show()
 });
 $('.header__contacts__cross').on("click", function(){
  $('.header__contacts_display-none').hide()
 });

 $('.header__menu-icon').on("click", function(){
  $('.header__menu_display-none').show()
 });
 $('.header__menu__cross').on("click", function(){
  $('.header__menu_display-none').hide()
 });

});

/* text */

$('.read-more').readmore({
 speed: 300,
 maxHeight: 190,
 heightMargin: 16,
 moreLink: '<a class="read-link" href="#">Читать все</a>',
 lessLink: '<a class="read-link" href="#">Скрыть</a>'
});















