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
        var el = $("#sec-2 .container");
        var elOffset = el.offset().top;
        var elHeight = el.height();
        var scrollTo;

        if (elHeight < winHeight) {
            scrollTo = $("#sec-2").offset().top;
        } else {
            scrollTo = elOffset;
        }

        $('html, body').animate({
            scrollTop: scrollTo
        }, animationTime);
    });

    $(document).on('scroll', function() {
        offset = $(document).scrollTop();
        updateElements();

        var mountains = $('#mountains-sec-3');
        var pStart = mountains.offset().top+mountains.height()-winHeight;

        if(offset >= pStart){
            var newOff = offset-pStart;     
        } else {
            newOff = 0;
        }

        $('#bg').css({
                "-webkit-transform": 'translate(0px, ' + String(-0.4 * newOff) + 'px)',
                    "-ms-transform": 'translate(0px, ' + String(-0.4 * newOff) + 'px)',
                        "transform": 'translate(-50%, ' + String(-0.4 * newOff) + 'px)'
            })

    })

    function updateElements() {
        parallax($("#welcText"), offset, -0.4);
        parallax($("#welc-image"), offset, -0.4);
        oppacity($('.center'), 0, 400, offset);
        blur($("#bg"), offset);
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
