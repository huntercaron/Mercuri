$(function () { // wait for document ready

    var played = false;
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
        duration: 3100
    })
    .setPin("#top-stick")
    .addTo(controller);

    var scene = new ScrollMagic.Scene({ triggerElement: "#wand-intro-1", offset: -400, duration: 1800 })
    .setTween(".phone-box", {y: 60, ease: "ease", boxShadow:"0 14px 35px -4px rgba(0, 21, 64, 0.14)"})
    .addTo(controller);

    var scene = new ScrollMagic.Scene({ triggerElement: "#wand-intro-1", offset: -400, duration: 1800  })
    .setTween(".wand-box", {y: -60, ease: "ease", boxShadow:"0 14px 35px -4px rgba(0, 21, 64, 0.14)"})
    .addTo(controller);

    var scene = new ScrollMagic.Scene({ triggerElement: "#wand-intro-1", offset: -400, duration: 1800  })
    .setTween(".wand-shadow", {boxShadow:"0 14px 35px -4px rgba(0, 21, 64, 0.14)"})
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#wand-intro-1",
        offset: 200,
        duration: 1200
    })
    .setTween("#top-stick", 0.5, {scale: 1})
    .setClassToggle("#wand-intro-1", "show")
    .setPin("#wand-intro-1")
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#wand-intro-2",
        offset: 200,
        duration: 1000
    })
    //.setTween("#top-stick", 0.5, {scale: 1})
    .setClassToggle("#wand-intro-2", "show")
    .setPin("#wand-intro-2")
    .addTo(controller);


    $(".play-button").click(function() {
        $(".video").fadeIn();
        $(".video").css("display", "flex")
    });

    $(".video").click(function() {
        $(".video").fadeOut();
    });

    $("#sign-up").click(function() {
        $("html, body").animate({ scrollTop: $('#email-input').offset().top }, 1000);
    });

    $("#learn-more").click(function() {
        $("html, body").animate({ scrollTop: $('.wand-intro').offset().top }, 1000);
    });

    if (!played) {
        window.addEventListener('scroll', function(e) {
            if (window.pageYOffset >= 5646 && !played) {
    		          document.querySelector(".inventory-video").play();
                      console.log("play");
                      played = true;
            }
        });
    }

});
