$(document).ready(function() {


    var animationTime = 1000;





    var docHeight = $(document).height();
    var winHeight = $(window).height();

    var welcText = document.getElementById("welcText");
    var welcImage = document.getElementById("welc-image");

    console.log(welcText);

    var offset = 0;

    var fadeStart = 100;
    var fadeUntil = 200;
    var fading = $('.center');
    var opacity = 0;

    $("#arrowToSec2").click(function() {
        $('html, body').animate({
            scrollTop: $("#sec-2").offset().top
        }, animationTime);
    });

    $(document).on('scroll', function() {

        //Paralax
        offset = document.documentElement.scrollTop;
        
        
        welcText.style.webkitTransform = 'translate(0px, ' + String(-0.4 * offset) + 'px)';
        welcImage.style.webkitTransform = 'translate(0px, ' + String(-0.4 * offset) + 'px)';
        

        // Welcome im+text opacity
        if (offset <= fadeStart) {
            opacity = 1;
        } else if (offset <= fadeUntil) {
            opacity = 1 - offset / fadeUntil;
        } else {
            opacity = 0;
        }

        fading.css('opacity', opacity);
        
        
        var pixs = Math.min(offset / 100, 3.0);
        $("#sec-1 #bg").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" }) 
        
    })
})
