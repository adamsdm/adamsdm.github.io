$(document).ready(function() {


    var animationTime = 1000;

    $("#arrowToSec2").click(function() {
        $('html, body').animate({
            scrollTop: $("#sec-2").offset().top
        }, animationTime);
    });



    var docHeight = $(document).height();
    var winHeight = $(window).height();

    var welcText = document.getElementById("welcText");
    var welcImage = document.getElementById("welc-image");

    console.log(welcText);

    var offset = 0;

    var fadeStart = 100;
    var fadeUntil = 400;
    var fading = $('.center');
    var opacity = 0;

    $(document).on('scroll', function() {

        //Paralax
        offset = document.documentElement.scrollTop;
        console.log(offset);
        welcText.style.webkitTransform = 'translate(0px, ' + String(-0.2 * offset) + 'px)';
        welcImage.style.webkitTransform = 'translate(0px, ' + String(-0.2 * offset) + 'px)';

 
        if (offset <= fadeStart) {
            opacity = 1;
        } else if (offset <= fadeUntil) {
            opacity = 1 - offset / fadeUntil;
        }
        fading.css('opacity', opacity);

    })
})
