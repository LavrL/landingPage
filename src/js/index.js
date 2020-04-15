import '../css/style.css';

import $ from 'jquery';
import 'jquery.validate';
import 'jquery.maskedinput';
import 'jquery.inputmask';

import 'slick-carousel';
import 'imports-loader?define=>false,module.exports=>false!jquery-validation';
import 'inputmask.numeric.extensions';

import './modal';
import './map';

// slider and main validation
$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('form').each(function () {
    $(this).validate({
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
    });
  });

  $('.mobile').inputmask('+7 (999) 999-99-99');

  $('.menu__btn').on('click', function () {
    event.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('.menu__element').toggleClass('menu__element_active');
  })
})
