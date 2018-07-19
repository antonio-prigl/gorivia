// HAMBURGER
$('.hamburger').click(function() {
  $(".nav").toggleClass('active');
  $(".nav__item").toggleClass('active');
  $(".nav__item--active").toggleClass('active');
});


// DROPDOWNS
$(function(e) {

  function t(t) {
    e(t).bind("click", function(t) {
      t.preventDefault();
      e(this).parent().fadeOut()
    })
  }

  e(".dropdown__toggle").click(function() {
    var t = e(this).parents(".dropdown__button").children(".dropdown__menu").is(":hidden");
    e(".dropdown__button .dropdown__menu").hide();
    e(".dropdown__button .dropdown__toggle").removeClass("active");
    if (t) {
      e(this).parents(".dropdown__button").children(".dropdown__menu").toggle().parents(".dropdown__button").children(".dropdown__toggle").addClass("active")
    }
  });

  e(document).bind("click", function(t) {
    var n = e(t.target);
    if (!n.parents().hasClass("dropdown__button")) e(".dropdown__button .dropdown__menu").hide();
  });

  e(document).bind("click", function(t) {
    var n = e(t.target);
    if (!n.parents().hasClass("dropdown__button")) e(".dropdown__button .dropdown__toggle").removeClass("active");
  })
});


// SIDE MENUS
  $('.canvas-open__dropdowns a').click(function() {
    var transitionClass = $(this).data('transition');
    $('.canvas').addClass(transitionClass);
    $('.wrapper').toggleClass('left-canvas');
  });


  $('.canvas-open__buttons a').click(function() {
    var transitionClass = $(this).data('transition');
    $('.canvas').addClass(transitionClass);
    $('.wrapper').toggleClass('right-canvas');
  });


  $('.canvas-close__dropdowns a').click(function() {
    var transitionClass = $(this).data('transition');
    $('.canvas').removeClass(transitionClass);
    $('.wrapper').toggleClass('left-canvas');
  });


  $('.canvas-close__buttons a').click(function() {
    var transitionClass = $(this).data('transition');
    $('.canvas').removeClass(transitionClass);
    $('.wrapper').toggleClass('right-canvas');
  });


// MODALS
var benzinska = $('.overlay1, .modal1__close, .modal1__content, .modal1');

$('.modal-benzinska').click(function() {
  benzinska.addClass('active');
});

$('.modal1__close').click(function() {
  benzinska.removeClass('active');
});


var gorivo = $('.overlay2, .modal2__close, .modal2__content, .modal2');

$('.modal-gorivo').click(function() {
  gorivo.addClass('active');
});

$('.modal2__close').click(function() {
  gorivo.removeClass('active');
});


var edit = $('.overlay3, .modal3__close, .modal3__content, .modal3');

$('.modal-edit').click(function() {
  edit.addClass('active');
});

$('.modal3__close').click(function() {
  edit.removeClass('active');
});


var del = $('.overlay4, .modal4__close, .modal4__content, .modal4');

$('.modal-delete').click(function() {
  del.addClass('active');
});

$('.modal4__close').click(function() {
  del.removeClass('active');
});
