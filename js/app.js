var _document = $(document);

var browser = {
  isRetinaDisplay: isRetinaDisplay(),
  isIe: msieversion(),
  isMobile: isMobile()
};

//use variable
const registerForm = $('#registr');
const reviewForm = $('#review_form');
const writeUs = $('#write-to-us-form');
const bestOffer = $('#best-offers');
const bestOfferFuter = $('#best-offer-futer');

function mailValid(e) {
  e.find('.mail-input').each(function () {
    $(this).rules('add', {
      required: true,
      email: true,
      messages: {
        required: 'Заполните поле',
        email: 'Некорректный email',
      }
    });
  });
}

function phoneValid(e) {
  e.find('.phone-valid').each(function () {
    $(this).rules('add', {
      required: true,
      mobileRU: true,
      messages: {
        required: 'Заполните поле',
      }
    });
  });
}

function requiredInput(e) {
  e.find('.require-field').each(function () {
    $(this).rules('add', {
      required: true,
      messages: {
        required: 'Заполните поле',
      }
    });
  });
}



var url = $(this).attr('action');

function sendAjaxForm(url,data,thnxModal) {
  $.ajax(url, {
    method: 'post',
    data: data,
    success: function () {
      $.fancybox.close();
      $.fancybox.open({
        src: thnxModal,
        opts: {
          afterLoad: function () {
            let fancyboxSlide = document.querySelectorAll('.fancybox-slide');
            fancyboxSlide.forEach(function (element) {
              bodyScrollLock.disableBodyScroll(element);
            });
          },
          beforeClose: function () {
            bodyScrollLock.clearAllBodyScrollLocks();
          }
        }
      }, {
        autoFocus: false,
        touch: false,
      });
    }
  });
}



// function revForm() {
//   reviewForm.validate({
//     submitHandler: function () {
//       $('.btn').on('click', function () {
//         $.ajax(url, {
//           method: 'post',
//           // data: data,
//           processData: false,
//           contentType: false,
//           success: function () {
//             $.fancybox.close();
//             $.fancybox.open({
//               src: '#feedback',
//               opts: {
//                 afterLoad: function () {
//                   let fancyboxSlide = document.querySelectorAll('.fancybox-slide');
//                   fancyboxSlide.forEach(function (element) {
//                     bodyScrollLock.disableBodyScroll(element);
//                   });
//                 },
//                 beforeClose: function () {
//                   bodyScrollLock.clearAllBodyScrollLocks();
//                 }
//               }
//             }, {
//               autoFocus: false,
//               touch: false,
//             });
//           }
//         });

//       });

//     },
//   });

//   mailValid(reviewForm);
//   phoneValid(reviewForm);
//   requiredInput(reviewForm);
// }



// revForm();


function revForm() {
  reviewForm.validate({
    submitHandler: function (form) {
      const _form = $(form);
      const url = _form.attr('action');
      const thnxModal = '#feedback';
      var data = _form.serialize();
      sendAjaxForm(url,data,thnxModal);
    },
  });

  mailValid(reviewForm);
  phoneValid(reviewForm);
  requiredInput(reviewForm);
}
revForm();

//Напишите нам модал
function letsWrite() {
  writeUs.validate({
    submitHandler: function (form) {
      const _form = $(form);
      const url = _form.attr('action');
      const thnxModal = '#feedback-write';
      var data = _form.serialize();
      sendAjaxForm(url,data,thnxModal);
    },
  });

  phoneValid(writeUs);
  requiredInput(writeUs);
}

letsWrite();
//Лучшие предложения

function theBestOffer() {
  bestOffer.validate({
    submitHandler: function (form) {
      const _form = $(form);
      const url = _form.attr('action');
      const thnxModal = '#subscribe-user';
      var data = _form.serialize();
      sendAjaxForm(url,data,thnxModal);
    },
  });

  phoneValid(bestOffer);
  requiredInput(bestOffer);
}

theBestOffer();

//Лучшие предложения футеры

function theBestOfferFooter() {
  bestOfferFuter.validate({
    submitHandler: function (form) {
      const _form = $(form);
      const url = _form.attr('action');
      const thnxModal = '#subscribe-user';
      var data = _form.serialize();
      sendAjaxForm(url,data,thnxModal);
    },
  });

  phoneValid(bestOfferFuter);
  requiredInput(bestOfferFuter);
}

theBestOfferFooter();

$(document).ready(function(){
  var swiper = new Swiper('.swiper-articles', {
    slidesPerView: 4,
    spaceBetween: 20,
    slideVisibleClass: 'none',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        watchSlidesVisibility: true,
        spaceBetween: 8
      },
      // when window width is <= 480px
      500: {
        slidesPerView: 1,
        watchSlidesVisibility: true,
        spaceBetween: 8
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is <= 640px
      756: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is <= 640px
      991: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
});

_document.ready(function () {

  //   $('#name_user').on('keypress', function() {
  //     $(this).val($(this).val().replace(/ '\D [^0-9]'/, ''));

  // });
  //FANCYBOX
  function clearForm(form) {
    form.trigger('reset');
  }

  function clearField(form) {
    form.find('.input__item').removeClass('error');
  }

  function clearText(form) {
    form.find('.error').hide();
  }

  function disBtn(form) {
    form.find('.btn').attr('disabled', true);
  }

  $('[data-src]').fancybox({
    toolbar: false,
    smallBtn: true,
    touch: false,
    autoFocus: false,

    //modalwindow
    afterLoad: function () {
      var fancyboxSlide = document.querySelectorAll('.fancybox-slide');
      fancyboxSlide.forEach(function (element) {
        bodyScrollLock.disableBodyScroll(element);

      });
    },
    beforeClose: function () {
      clearForm($(this.src).find('.general-form'));
      clearField($(this.src).find('.general-form'));
      clearText($(this.src).find('.general-form'));
      disBtn($(this.src).find('.general-form'));
      if ($('.fancybox-slide').length == 1) {
        bodyScrollLock.clearAllBodyScrollLocks();

      }
    },
  });
  //mask


  // validate





  $.validator.addMethod("mobileRU", function (phone_number, element) {
    var ruPhone_number = phone_number.replace(/\(|\)|\s+|-/g, "");
    return this.optional(element) || ruPhone_number.length > 9 && /^((\+7|7|8)+([0-9]){10})$/.test(ruPhone_number);
  }, "Номер телефона указан не корректно!");

  //Отзыв о товаре модал


  //show-code-number

  $('.flex.phone-block').on('click', '.link-s', function () {
    if ($('.input__item-tel').hasClass('valid')) {
      $('.code-mob').fadeIn(300);
    } else {

    }
  });

  //disabled button
  $('.checkbox-general').on('change', function () {
    let check = $(this).is(':checked');
    let btn = $(this).closest('.general-form').find('.btn');

    if (check) {
      btn.removeAttr('disabled');
    } else {
      btn.attr('disabled', true)
    }
  });

  //Показать все характеристики
  let showLink = $('.all-link');

  showLink.on('click', function (e) {
    e.preventDefault();

    $(this).closest('.common__specif').find('.table-item-hide').toggleClass('hide');

    if ($('.table-item-hide').hasClass('hide')) {
      showLink.html('Показать все параметры');
    } else {
      showLink.html("Скрыть все параметры")
    }
  });

  //   function clearField(form){
  //     form.find('.input-field').removeClass('error');
  //   }

  //   // send form 

  //  $('form').on('submit', function(){
  //    //отправка

  //    clearForm($(this));
  //  })

  //click check

  $('.input__item').on('focus', function () {

    if ($(this).hasClass('error')) {
      $(this).closest('.focused').addClass('non-border');
    } else {
      $(this).closest('.focused').addClass('have-border');
    }
  });

  $('.input__item').on('focusout', function () {
    $(this).closest('.focused').removeClass('have-border');
  });


  // validate


  registerForm.validate({

    submitHandler: function () {
      if (registerForm.valid()) {
        registerForm.trigger('reset');
        $.fancybox.open({
          src: '#checkmail',
          type: 'inline',
          opts: {
            afterLoad: function () {
              var fancyboxSlide = document.querySelectorAll('.fancybox-slide');
              fancyboxSlide.forEach(function (element) {
                bodyScrollLock.disableBodyScroll(element);
              });
            },
            beforeClose: function () {
              if ($('.fancybox-slide').length == 1) {
                bodyScrollLock.clearAllBodyScrollLocks();
              }
            },
          }
        }, {
          touch: false,
        });
      }
    },
  });

  mailValid(registerForm);
  phoneValid(registerForm);

  registerForm.find('.first-pass').each(function () {
    $(this).rules('add', {
      required: true,
      minlength: 6,
      messages: {
        required: 'Заполните поле',
        minlength: 'Пароль должен содержать не менее 6 символов',
      }
    });
  });

  registerForm.find('.second-pass').each(function () {
    $(this).rules('add', {
      required: true,
      minlength: 6,
      equalTo: "#pass_reg",
      messages: {
        required: 'Заполните поле',
        minlength: 'Пароль должен содержать не менее 6 символов',
        equalTo: 'Пароли не совпадают',
      }
    });
  });

  registerForm.find('.code-mobile').each(function () {
    $(this).rules('add', {
      required: true,
      messages: {
        required: 'Заполните поле',
      }
    });
  });


  var cStars = function (starsBlock, nowPos) {
    // У всех убираем active
    starsBlock.find('.stars-item').removeClass('star-hover');
    for (var i = 0; nowPos + 1 > i; i++) {
      starsBlock.find('.stars-item').eq(i).toggleClass('star-hover');
    }
  }

  $('.stars-star').on('click', '.stars-item', function () {
    const indx = $(this).index();
    const starsBlock = $(this).parent();
    cStars(starsBlock, indx);
  });


  if ($(window).width() < 991) {
    var swiperView = new Swiper('.swiper-view', {
      slidesPerView: 3,
      spaceBetween: 8,
      slideVisibleClass: 'none',
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        // when window width is <= 480px
        500: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is <= 640px
        756: {
          slidesPerView: 3,
          spaceBetween: 8
        },
        // when window width is <= 640px
        991: {
          slidesPerView: 3,
          spaceBetween: 8
        }
      }
    });

    $('ul.crumbs__ul').scrollLeft(1000);
  }
  $('.content__block .photo__block .right .img img').hover(function () {
    var img = $(this).attr('src');
    $('.content__block .photo__block .left img').prop('src', img);
  })

  $('.read-full').on('click', function () {
    $('.content__block').toggleClass('show-p');
  });

  var swiper_tabs = new Swiper('.swiper-tabs', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    history: {
      key: 'slide',
    },
  });

  var swiper_banner = new Swiper('.banner-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var about_project_slider = new Swiper('.about-project-slider', {
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });



  var swiper = new Swiper('.swiper-articles1', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    slideVisibleClass: 'none',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      // when window width is <= 480px
      500: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      // when window width is <= 640px
      756: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window width is <= 640px
      991: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  initSliders();

  function initSliders() {

    var swiper = new Swiper('.swiper-articles2', {
      on: {
        init: function () {
          hideOverlay();
        },
      },
      slidesPerView: 3,
      spaceBetween: 14,
      loop: false,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 8
        },
        // when window width is <= 480px
        500: {
          slidesPerView: 1,
          spaceBetween: 8,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
        },
        600: {
          slidesPerView: 1,
          spaceBetween: 8
        },
        // when window width is <= 640px
        756: {
          slidesPerView: 2,
          spaceBetween: 20

        },
        // when window width is <= 640px
        991: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    });

    var swiper12 = new Swiper('.product-corusel', {
      observer: true,
      observeParents: true,

      pagination: {
        el: '.swiper-pagination',
      },
    });

    // var swiper12 = document.querySelector('.product-corusel').swiper

  }

  var swiperComments = new Swiper('.swiper-comments', {
    slidesPerView: 4,
    spaceBetween: 20,
    slideVisibleClass: 'none',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is <= 480px
      500: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is <= 640px
      756: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is <= 640px
      991: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is <= 640px
      1250: {
        slidesPerView: 3,
        spaceBetween: 22
      }
    }
  });

  var swiperSales = new Swiper('.swiper-sales', {
    pagination: {
      el: '.swiper-pagination',
    },
  });

  $('.fancybox-img').on('click', function () {
    setTimeout(function () {
      $('button.fancybox-button.fancybox-button--thumbs').trigger('click')
    }, 100);
  });

  $('#filter_open').on('click', function () {
    $('.filters__form').toggleClass('show-i');
  });

  $("a[data-scroll]").on('click', function () {
    var btn = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $('div' + btn).offset().top - 100
    }, 1000);
    return false;
  });

  $('.filters__form__tabs .tabs-tab').on('click', function () {
    var tab_id = $(this).attr('data-tab');

    $('.filters__form__tabs .tabs-tab').removeClass('active');
    $('.tab-filter').removeClass('active');
    $('.tab-filter').addClass('none');

    $(this).addClass('active');
    $("#" + tab_id + "s").removeClass('none').addClass('active');
  })

  // $(window).resize(function () {
  //   swiperUpdate();
  // });



  function hideOverlay() {
    $('#overlay').hide();
  }


});

function isRetinaDisplay() {
  if (window.matchMedia) {
    var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
    return mq && mq.matches || window.devicePixelRatio > 1;
  }
}

function msieversion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    return true;
  } else {
    return false;
  }
}

function isMobile() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }
}

var swiper_list_2 = new Swiper('.two-container', {
  pagination: {
    el: '.swiper-pagination',
  },
});

var swiperMainPage = new Swiper('.slide-main-page', {
  observer: true,
  observeParents: true,
  watchOverflow: true,
  slidesPerView: 11,
  slideVisibleClass: 'none',

  breakpoints: {
    1250: {
      slidesPerView: 9,
    },
    1024: {
      slidesPerView: 7,
    },
    991: {
      slidesPerView: 5,
    },
    756: {
      slidesPerView: 4,
    },
    589: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 2.5,
    },
  }

});

// grid toggler

_document.on('blur', '.input-block input', function () {
  if ($(this).val() !== '') {
    $(this).parent().addClass('not-empty').removeClass('empty').removeClass('focused')
  } else {
    $(this).parent().addClass('empty').removeClass('not-empty').removeClass('focused')
  }
})

$('.input-block input').focus(function () {
  $(this).parent().addClass('focused')
})

_document.on('click', '[js-show-grid]', function () {
  $(this).toggleClass('is-active');
  $('.demo-grid').fadeToggle();
});

_document.on('click', '#burger', function () {
  $('body').toggleClass('menu-open');
});

_document.on('click', '.tab', function () {
  $('.tab').removeClass('active');
  $(this).addClass('active');
});


// LAZY LOAD
//////////


function initLazyLoad() {
  var $lazy = _document.find('[js-lazy]');

  if ($lazy.length === 0) {
    ieFixPictures();
    return;
  }

  var fadeTimeout = 250;
  $lazy.Lazy({
    threshold: 400,
    //Amount of pixels below the viewport, in which all images gets loaded before the user sees them.
    enableThrottle: true,
    throttle: 100,
    scrollDirection: 'vertical',
    // effect: 'fadeIn',
    // effectTime: fadeTimeout,
    // visibleOnly: true,
    onError: function onError(element) {
      console.log('error loading ' + element.data('src'));

      try {
        element.attr('src', element.data('src'));
      } catch (e) {
        console.log('eroor appending src', e);
      }
    },
    beforeLoad: function beforeLoad(element) { // element.attr('style', '')
    },
    afterLoad: function afterLoad(element) {
      animateLazy(element);
    },
    onFinishedAll: function onFinishedAll() {
      ieFixPictures();
    }
  });

  function ieFixPictures() {
    if (browser.isIe) {
      // ie pollyfils
      picturefill();
      window.fitie.init();
    }
  }
} ////////////////////////////////


$(window).on("load", function () {
  $('#barba-wrapper').addClass('is-preloaded');
  // preloaderDone();
  initLazyLoad();


});


$('.sidebar__dropdown > span').on('click', function () {
  $(this).parent().toggleClass('open')
  $(this).siblings().slideToggle()
})

$('.has-child > span:not(.quantity)').on('click', function () {
  $(this).parent().toggleClass('open')
  $(this).siblings('ul').slideToggle()
})

$('.show-other-comments').on('click', function () {
  let val = $(this).attr('value')

  if ($(this).text() == 'Скрыть комментарии') {
    $(this).text('Показать ' + val + ' комментарии');
  } else {
    $(this).text('Скрыть комментарии')
  }

  $(this).parent().siblings('.additional-comments').slideToggle()
})

_document.ready(function () {
  var mySwiper = new Swiper('.news-article__slider', {
    loop: false,
    // centeredSlides: true,
    // slidesPerView: 4,
    initialSlide: 2,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      500: {
        slidesPerView: 1,
        initialSlide: 0
      },
      756: {
        slidesPerView: 2
      }
    }
  })
  var mySwiper1 = new Swiper('.news-article__items-slider', {
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 8
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 8
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      756: {
        slidesPerView: 3,
        spaceBetween: 8
      }
    }
  })
  var mySwiper2 = new Swiper('.more-articles__items', {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: false,
    breakpoints: {
      515: {
        slidesPerView: 1,
        spaceBetween: 8
      },
      755: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      990: {
        slidesPerView: 3,
        spaceBetween: 8
      }
    }
  })

  $('.banner__wrapper .swiper-button-next').removeClass('swiper-button-disabled');

  let overlay = $('#overlay');

  $(".intro-filter, .header__center-search, #search").on("click", function () {
    $(overlay).fadeIn(300);
    bodyScrollLock.disableBodyScroll(overlay);

  });

  $("body").on("click", ".overlay-logo__close", function (e) {
    e.preventDefault();
    bodyScrollLock.clearAllBodyScrollLocks();

    $(overlay).hide();
    $('#search-fld').trigger('reset');;
  });


  $('html').on('keydown', function (e) {
    if (e.keyCode == 27) {
      if ($(overlay).css('display') == 'block') {
        $(overlay).hide();
        bodyScrollLock.clearAllBodyScrollLocks();
      }
    }

  });

});


// _document.on('click', 'a.all-link', function () {
//   event.preventDefault();
//   $('.common__specif').addClass('active-table');
// });


$('[popup], .not_cl').on('click', function () {
  let popupAttr = $(this).attr('popup');
  $('.' + popupAttr).addClass('open');
  input_update();
})

_document.on('click', '.popup-close', function () {
  $('.popup').removeClass('open')
})

_document.on('click', function (e) {
  if (!$(e.target).is('.popup *, .popup-btn, [ajax-popup], [ajax-popup] *, [popup], [popup] *, .not_cl, .not_cl *')) {
    $('.popup').removeClass('open')
  }
})

function input_update() {
  var $input = $(".input");

  function inputActive() {
    $input.find("input").focus(function () {
      $(this).parents(".input").toggleClass("input-active");
    });
    $input.find("input").focusout(function () {
      $(this).parents(".input").toggleClass("input-active");
    });
    $input.find("textarea").focus(function () {
      $(this).parents(".input").toggleClass("input-active");
    });
    $input.find("textarea").focusout(function () {
      $(this).parents(".input").toggleClass("input-active");
    });
  }

  function inputFilled() {
    var $i = $input.find("input");
    var $ta = $input.find("textarea");

    $i.keyup(function () {
      $t = $(this);
      if ($t.val().length >= 2) {
        $t.parents(".input").addClass("input-filled");
      } else {
        $t.parents(".input").removeClass("input-filled");
      }
    });

    $ta.keyup(function () {
      $t = $(this);
      if ($t.val().length >= 2) {
        $t.parents(".input").addClass("input-filled");
      } else {
        $t.parents(".input").removeClass("input-filled");
      }
    });
  }

  var $input = $(".input");

  for (let i = 0; i < $input.length; i++) {
    var $t = $input.eq(i).find('input, textarea');
    if ($t.val().length >= 2) {
      $t.parents(".input").addClass("input-filled");
    }
  }

  if ($input.length >= 2) {
    inputActive();
    inputFilled();
  }

  inputActive();
  inputFilled();
}
input_update();

function initSelectric() {
  $('select').selectric({
    disableOnMobile: false,
    nativeOnMobile: false
  });
}

function initSalonList() {

  var $sContainThumb = $('.gallery-thumbss'),
    $sContain = $('.gallery-topp'),
    $this,
    $this1;


  $sContain.each(function () {
    var $thumbs = $(".gallery-thumbs" + $(this).data("id"));
    $this1 = new Swiper($thumbs, {
      spaceBetween: 12,
      slidesPerView: 5,
      freeMode: true,
      direction: 'vertical',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      touchRatio: 0
    });
    $this = new Swiper(this, {
      spaceBetween: 25,
      thumbs: {
        swiper: $this1
      },
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        // when window width is <= 640px
        756: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      }
    });

  });

};
var $keypress0 = $("#file-upload");

if ($keypress0.length > 0) {
  (function () {
    function Init() {
      var fileSelect = document.getElementById('file-upload'),
        fileDrag = document.getElementById('file-drag'),
        submitButton = document.getElementById('submit-button');

      fileSelect.addEventListener('change', fileSelectHandler, false);

      // Is XHR2 available?
      var xhr = new XMLHttpRequest();
      if (xhr.upload) {
        // File Drop
        fileDrag.addEventListener('dragover', fileDragHover, false);
        fileDrag.addEventListener('dragleave', fileDragHover, false);
        fileDrag.addEventListener('drop', fileSelectHandler, false);
      }
    }

    function fileDragHover(e) {
      var fileDrag = document.getElementById('file-drag');

      e.stopPropagation();
      e.preventDefault();

    }

    function fileSelectHandler(e) {
      // Fetch FileList object
      var files = e.target.files || e.dataTransfer.files;

      // Cancel event and hover styling
      fileDragHover(e);

      // Process all File objects
      for (var i = 0, f; f = files[i]; i++) {
        parseFile(f);
        uploadFile(f);
      }
    }

    function output(msg) {
      var m = document.getElementById('messages');
      m.innerHTML = msg;
    }

    function parseFile(file) {
      output(
        '<div class="file-name_">' + encodeURI(file.name) + '</div>'
      );
    }

    function uploadFile(file) {

      var xhr = new XMLHttpRequest(),
        fileInput = document.getElementById('class-roster-file'),
        fileSizeLimit = 1024; // In MB
      if (xhr.upload) {
        // Check if file is less than x MB
        if (file.size <= fileSizeLimit * 1024 * 1024) {
          // File received / failed
          xhr.onreadystatechange = function (e) {
            if (xhr.readyState == 4) {
              // Everything is good!

              // progress.className = (xhr.status == 200 ? "success" : "failure");
              // document.location.reload(true);
            }
          };

          // Start upload
          xhr.open('POST', document.getElementById('file-upload-form').action, true);
          xhr.setRequestHeader('X-File-Name', file.name);
          xhr.setRequestHeader('X-File-Size', file.size);
          xhr.setRequestHeader('Content-Type', 'multipart/form-data');
          xhr.send(file);
        } else {
          output('Please upload a smaller file (< ' + fileSizeLimit + ' MB).');
        }
      }
    }

    // Check for the various File API support.
    if (window.File && window.FileList && window.FileReader) {
      Init();
    } else {
      document.getElementById('file-drag').style.display = 'none';
    }
  })();
}


function initSalonPage() {
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 12,
    slidesPerView: 5,
    freeMode: true,
    direction: 'vertical',
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchRatio: 0
  });

  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs
    },
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is <= 640px
      756: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });
};

$('.add-phone').click(function () {
  let copy_block = $('.copy-block').html();
  $('.add-phone-block').append('<div class="lk__left-flex">' + copy_block + '</div>');
})

$('.close-message').click(function () {
  $(this).parent('.message').hide();
});

_document.on('click', '.more__detall ul li.share a, a.share', function (e) {
  event.preventDefault();
  var copytext = $(this).attr('href');
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(copytext).select();
  document.execCommand("copy");
  $temp.remove();
  $(this).append('<span class="tooltip">Ссылка скопирована</span>');
  setTimeout(function () {
    $('.tooltip').remove()
  }, 1500);

});




function initNoUiSlider() {
  if ($('#input-price-keypress-0').length > 0) {
    var stepsSlider = document.getElementById('price');
    var input0 = document.getElementById('input-price-keypress-0');
    var input1 = document.getElementById('input-price-keypress-1');
    var inputs = [input0, input1];

    var minVal = parseInt(input0.value);
    var maxVal = parseInt(input1.value);


    noUiSlider.create(stepsSlider, {
      start: [minVal, maxVal],
      connect: true,
      step: 1,
      range: {
        'min': [minVal],
        'max': [maxVal]
      },
    });
    stepsSlider.noUiSlider.on('update', function (values, handle, unencoded) {
      inputs[handle].value = parseInt(unencoded[handle]);
    });
    stepsSlider.noUiSlider.on('end', function (values, handle, unencoded) {
      $('#catalogFilter').submit();
    });
  }
};

_document.on('click', '.popup.being-finalized-popup  .btn.btn-red', function (e) {
  $(this).parents('.popup__wrapper').children('.popup-close').trigger('click');
});

_document.on('click', '.show__all', function (e) {
  $('.tab-filter.active').toggleClass('show__all_');
});

_document.on('click', '.popup__close', function (e) {
  $('.popup-close').trigger('click');
});




$('.category-toggle-top').on('click', '.tab-1:not(.active)', function () {
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('.category-toggle').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});




function MaskedPhone() {
  const inputPhones = document.querySelectorAll('.mask-validate');
  inputPhones.forEach(function (element) {
    var phoneMask = IMask(
      element, {
        mask: '+{7}(000)000-00-00'
      });
  });
}
MaskedPhone();


initSlid();

function initSlid() {

  if ($(window).width() <= 756) {
    var swiperMainPageSecond = new Swiper('.second-main-slide', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 8,
      slideVisibleClass: 'none',
      loop: false,
      breakpoints: {
        756: {
          slidesPerView: 3,
          spaceBetween: 8,

        },
        480: {
          slidesPerView: 1,
          spaceBetween: 8,

        },
        320: {
          slidesPerView: 2,
          spaceBetween: 8,

        },
      }
    });

    var slide16 = document.querySelector('.second-main-slide').swiper
    slide16.update()
  }

}

$(window).resize(function () {
  initSlid();
});



initSalonList();
initSelectric();
initSalonPage();