import '../css/style.css';

import $ from 'jquery';
import 'slick-carousel';

import "jquery.validate";
import 'imports-loader?define=>false,module.exports=>false!jquery-validation';

import "jquery.maskedinput";
import 'jquery.inputmask';
// Add extensions as necessary make sure you remember to add the corresponding aliases in the webpack config
import 'inputmask.numeric.extensions';

import 'ymaps';

var btn = $('.button-top');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

$(document).ready(function () {
  $('#button__modal').click(function () {
    modal.classList.add('modal_active');
  });

  $('#close').click(function () {
    modal.classList.remove('modal_active');
  });
})

$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 9000,
  });
});


$(document).ready(function () {
  $('#request__fields').validate({
    rules: {
      user: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      mobile: {
        required: true
      }
    },
    messages: {
      user: {
        required: "Укажите имя",
        minlength: jQuery.validator.format("Минимальное кол-во знаков: {0} "),
        maxlength: jQuery.validator.format("Максимальное кол-во знаков - 15 ")
      },
      mobile: {
        required: "Укажите номер телефона"
      }
    },
    focusInvalid: "true",
    errorClass: "invalid",
  }),
    $('#modal__fields').validate({
      rules: {
        modal__user: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        modal__mobile: {
          required: true
        }
      },
      messages: {
        modal__user: {
          required: "Укажите имя",
          minlength: jQuery.validator.format("Минимальное кол-во знаков: {0} "),
          maxlength: jQuery.validator.format("Максимальное кол-во знаков - 15 ")
        },
        modal__mobile: {
          required: "Укажите номер телефона"
        }
      },
      focusInvalid: "true",
      errorClass: "invalid",
    })
})

jQuery(function($) {
  $('.phone1').inputmask('+7 (999) 999-99-99');
  $('.mobile').inputmask('+7 (999) 999-99-99');
});

$('.menu__btn').on('click', function () {
  event.preventDefault();
  $('.menu').toggleClass('menu_active');
  $('.menu__element').toggleClass('menu__element_active');
})

var button = document.querySelector('#callme');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click', function () {
  modal.classList.add('modal_active');
});

close.addEventListener('click', function () {
  modal.classList.remove('modal_active');
});

ymaps.ready(init);

function init() {
  var myMap;
  $('#map').click(function () {
    if (!myMap) {
      myMap = new ymaps.Map('map', {
        center: [55.798652, 37.765875],
        zoom: 13
      }, {
        searchControlProvider: 'yandex#search'
      });
      var MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),


        myPlacemarkWithContent = new ymaps.Placemark([55.798652, 37.765875], {
          hintContent: 'Infosanteh',
          balloonContent: 'г. Москва, ул. Советская 48 корп.3',

        },
          {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/map-sign.png',
            iconImageSize: [100, 100],
            iconImageOffset: [-30, -30],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout
          });

      myMap.behaviors.disable('scrollZoom');
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        myMap.behaviors.disable('drag');
      }
      myMap.geoObjects
        .add(myPlacemarkWithContent);
    }
  });
}
