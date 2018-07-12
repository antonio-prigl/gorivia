// HAMBURGER
$('.hamburger-nav').click(function() {
  $(".nav").toggleClass('active-nav');
  $(".nav__item").toggleClass('active-nav');
  $(".nav__item--active").toggleClass('active-nav');
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
  $('.dropdowns-mobile a').click(function() {
    var transitionClass = $(this).data('transition');
    $('#site-canvas').addClass(transitionClass);
    $('#site-wrapper').toggleClass('show-nav');
  });


  $('.dropdowns-mobile2 a').click(function() {
    var transitionClass = $(this).data('transition');
    $('#site-canvas').addClass(transitionClass);
    $('#site-wrapper').toggleClass('show-nav2');
  });


  $('.dropdowns-mobile-exit a').click(function() {
    var transitionClass = $(this).data('transition');
    $('#site-canvas').removeClass();
    $('#site-wrapper').toggleClass('show-nav');
  });


  $('.dropdowns-mobile2-exit a').click(function() {
    var transitionClass = $(this).data('transition');
    $('#site-canvas').removeClass();
    $('#site-wrapper').toggleClass('show-nav2');
  });


// MODALS
var benzinska = $('.modal-overlay, .modal');

$('.modal-benzinska').click(function() {
  benzinska.addClass('active');
});

$('.close-modal').click(function() {
  benzinska.removeClass('active');
});


var gorivo = $('.modal-overlay2, .modal2');

$('.modal-gorivo').click(function() {
  gorivo.addClass('active');
});

$('.close-modal').click(function() {
  gorivo.removeClass('active');
});


var edit = $('.modal-overlay3, .modal3');

$('.modal-edit').click(function() {
  edit.addClass('active');
});

$('.close-modal').click(function() {
  edit.removeClass('active');
});


var del = $('.modal-overlay4, .modal4');

$('.modal-delete').click(function() {
  del.addClass('active');
});

$('.close-modal').click(function() {
  del.removeClass('active');
});
