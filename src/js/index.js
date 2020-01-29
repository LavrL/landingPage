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

//JQuery валидация
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

$(document).ready(function () {
  $('.phone1').mask('+7 (999) 999-99-99');
  $('.mobile').mask('+7 (999) 999-99-99');
});

$('.menu__btn').on('click', function () {
  event.preventDefault();
  $('.menu').toggleClass('menu_active');
  $('.menu__element').toggleClass('menu__element_active');
})

var button = document.querySelector('#callme');
var modal = document.querySelector('#modal');
var close= document.querySelector('#close');

button.addEventListener('click', function() {
    modal.classList.add('modal_active');
});

close.addEventListener('click', function(){
    modal.classList.remove('modal_active');
});
