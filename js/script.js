// HAMBURGER

$(document).ready(function(){

    $(".hamburger-nav").on("click", function(){
        $(".nav").animate({
          height: 'toggle'
        });

    });

});




// DROPDOWN

jQuery(document).ready(function (e) {
    function t(t) {
        e(t).bind("click", function (t) {
            t.preventDefault();
            e(this).parent().fadeOut()
        })
    }
    e(".dropdown__toggle").click(function () {
        var t = e(this).parents(".dropdown__button").children(".dropdown__menu").is(":hidden");
        e(".dropdown__button .dropdown__menu").hide();
        e(".dropdown__button .dropdown__toggle").removeClass("active");
        if (t) {
            e(this).parents(".dropdown__button").children(".dropdown__menu").toggle().parents(".dropdown__button").children(".dropdown__toggle").addClass("active")
        }
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("dropdown__button")) e(".dropdown__button .dropdown__menu").hide();
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("dropdown__button")) e(".dropdown__button .dropdown__toggle").removeClass("active");
    })
});
