// variables
var $header_top = $('.header');
var $nav = $('.header__nav');

// toggle menu
$header_top.find('a').on('click', function () {
  $(this).parent().toggleClass('open-menu');
});

// fullpage customization
$('#fullpage').fullpage({
  sectionSelector: '.section',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['welcome', 'about', 'compound', 'takein', 'questions'],
  menu: '#menu',
  responsive: true,
  responsiveHeight: 800,
  onLeave: function (index, nextIndex, direction) {
    $('.navbar__nav').removeClass('open');
    console.log(index);
  },
});
$('.section__compound .owl-carousel').owlCarousel({
  items: 4,
  margin: 20,
  nav: true,
  dots: false,
  responsiveRefreshRate: 100,
  responsive: {
    0: { items: 1 },
    640: { items: 2 },
    1000: { items: 3 },
    1200: { items: 4 },
  },
  navText: [
    '<svg class="icon"><use xlink:href="assets/img/sprite.svg?#prev"></use></svg>',
    '<svg class="icon"><use xlink:href="assets/img/sprite.svg?#next"></use></svg>',
  ],
});
$('.compound__item a').magnificPopup({
  type: 'inline',
  fixedBgPos: true,
  fixedContentPos: true,
  overflowY: 'scroll',
});
$('.navbar__toggle').click(function () {
  $('.navbar__nav').toggleClass('open');
});
$('.navbar__nav a').click(function () {
  //$('.navbar__nav').removeClass('open');
});
