var header = $('.header'),
    header_note = $('.header-note'),
    scrollPrev = 0;

var resize_scroll = function(e) {
  var scrolled = $(window).scrollTop();

  if(header_note.length > 0) {
    if (scrolled > header_note.height()) {
  		header.addClass('is-scrolled');
  	}
  } else {
    if (scrolled > 0) {
  		header.addClass('is-scrolled');
  	}
  }

  if (scrolled == 0) {
		header.removeClass('is-scrolled');
	}

	scrollPrev = scrolled;
};

$(document).ready(function() {
  resize_scroll();

  $('.js-slots-slider').each(function(index, el) {
    var slider = el.children[0];

    new Swiper(slider, {
      loop: true,
      spaceBetween: 20,
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },

        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
        1280: {
          slidesPerView: 4,
          slidesPerGroup: 4
        }
      },

      navigation: {
        nextEl: '.js-slots-slider-next[data-slider="'+slider.dataset.slider+'"]',
        prevEl: '.js-slots-slider-prev[data-slider="'+slider.dataset.slider+'"]',
      }
    });
  });
});

$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

function mobileMenuOpen() {
  $('body').addClass('is-overflow');
  $('.js-main-menu-toggler').addClass('is-active');
  $('.js-main-menu-toggler').find('use').attr('xlink:href', 'images/sprite.svg#close_icon');
  $('.main-menu').addClass('is-active');
}

function mobileMenuClose() {
  $('body').removeClass('is-overflow');
  $('.js-main-menu-toggler').removeClass('is-active');
  $('.js-main-menu-toggler').find('use').attr('xlink:href', 'images/sprite.svg#burger_icon');
  $('.main-menu').removeClass('is-active');
}

function mobileSearchOpen() {
  $('body').addClass('is-overflow');
  $('.js-search-toggler').addClass('is-active');
  $('.js-search-toggler').find('use').attr('xlink:href', 'images/sprite.svg#close_icon');
  $('.search-form').addClass('is-active');
}

function mobileSearchClose() {
  $('body').removeClass('is-overflow');
  $('.js-search-toggler').removeClass('is-active');
  $('.js-search-toggler').find('use').attr('xlink:href', 'images/sprite.svg#search_icon');
  $('.search-form').removeClass('is-active');
}

//тогглер мобильного меню
$(document).on('click', '.js-main-menu-toggler', function () {
  if(!$(this).hasClass('is-active')) {
    mobileSearchClose();
    mobileMenuOpen();
  } else {
    mobileMenuClose();
  }
  return false;
});

//тогглер поиска
$(document).on('click', '.js-search-toggler', function () {
  if(!$(this).hasClass('is-active')) {
    mobileMenuClose();
    mobileSearchOpen();
  } else {
    mobileSearchClose();
  }
  return false;
});

//аккордеон
$(document).on('click', '.js-accordion-toggler', function () {
  if(!$(this).hasClass('is-active')) {
    $(this).addClass('is-active');
    $(this).closest('.accordion').find('.accordion__body').slideDown();
  } else {
    $(this).removeClass('is-active');
    $(this).closest('.accordion').find('.accordion__body').slideUp();
  }
  return false;
});
