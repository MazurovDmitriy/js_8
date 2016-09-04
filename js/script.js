
$(function(){

  $('.tabs .tabs__header a').on('click', function(e){
    e.preventDefault();
    var href = $(this).attr('href');
    $('.tabs .tabs__header a').removeClass('active');
    $(this).addClass('active');
    $('.tabs__content div').hide();
    $(href).fadeIn(700);
  })

  $('.form .form__input').on('mouseover focusin', function(e){
    $(this).siblings('.form__tooltip').stop().fadeIn(500);
  });

  $('.form .form__input').on('mouseout focusout', function(e){
    $(this).siblings('.form__tooltip').stop().fadeOut(500);
  });

  $('.form .form__button').on('click', function(e){
    $('.form .form__tooltip').stop().fadeToggle(500);
  })

})
