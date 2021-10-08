$(function () {

  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    responsive: [
      {
        breakpoint: 620,
        settings: "unslick"
      }
    ]
  });

  $('.surf__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
    asNavFor: '.slider-map',
    responsive: [
      {
        breakpoint: 1251,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      }
    ]
  });

  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf__slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      }
    ]
  });

  $('.holder__slider, .shop__slider').slick({
    fade: true,
    infinite: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
  });


  $('<div class="quantity-nav"><button class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></button><button class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></button></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.on('click', function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.on('click', function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  let summElems = document.querySelectorAll('.quantity-summ');
  let nightsElems = document.querySelectorAll('.nights');
  let guestsElems = document.querySelectorAll('.guests');
  for (let i = 0; i < summElems.length; i++) {
    let currentSumm = summElems[i];
    currentSumm.innerHTML = '$' + (nightsElems[i].value * currentSumm.dataset.nights + (guestsElems[i].value - 1) * currentSumm.dataset.guests - 1);
  }

  $('form').on('submit', function (event) {
    event.preventDefault();
  });

  $('.quantity').on('change', function (event) {
    let form = event.target.form;
    let summEl = form.querySelector('.quantity-summ');
    summEl.innerHTML = '$' + (form.nights.value * summEl.dataset.nights + (form.guests.value - 1) * summEl.dataset.guests - 1);
  });

  $('.surfboard-box__circle').on('click', function () {
    $(this.parentElement).toggleClass('surfboard-box--active');
  });

  $('.menu-btn').on('click', function (event) {
    $('.menu').toggleClass('menu--active');
  });
});