$('.menu__btn').on('click', function() {
    event.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('.menu__element').toggleClass('menu__element_active');
  
  })
  