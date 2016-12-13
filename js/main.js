$(document).ready(function() {

    var animationTime = 1000;
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var offset = document.documentElement.scrollTop;
    var fadeStart = 200;
    var fadeUntil = 400;
    var opacity = 0;

    updateElements();

    $("#arrowToSec2").click(function() {
        console.log($("#arrowToSec2").height());

        $('html, body').animate({
            scrollTop: $("#sec-2").offset().top
        }, animationTime);
    });

    $(document).on('scroll', function() {
        if (offset > document.documentElement.scrollTop)
            console.log("up");
        else
            console.log("down");
        offset = document.documentElement.scrollTop;
        updateElements();
    })

    function updateElements() {
        parallax($("#welcText"), offset, -0.4);
        parallax($("#welc-image"), offset, -0.4);
        oppacity($('.center'), 0, 400, offset);
        blur($("#sec-1 #bg"), offset);
    }






    function blur(element, offset) {
        var pixs = Math.min(offset / 50, 4.0);
        element.css({
            "-webkit-filter": "blur(" + pixs + "px)",
            "filter": "blur(" + pixs + "px)",
            "filter": "blur(" + pixs + "px)",
            "filter": "blur(" + pixs + "px)"


        })
    }

    function oppacity(element, fadeStart, fadeUntil, off) {
        if (offset <= fadeStart) {
            opacity = 1;
        } else if (offset <= fadeUntil) {
            opacity = 1 - offset / fadeUntil;
        } else {
            opacity = 0;
        }
        element.css('opacity', opacity);
    }

    function parallax(element, off, speed) {
        element.css({
            "-webkit-transform": 'translate(0px, ' + String(speed * off) + 'px)',
            "-ms-transform": 'translate(0px, ' + String(speed * off) + 'px)',
            "transform": 'translate(0px, ' + String(speed * off) + 'px)'

        })
    }
})
