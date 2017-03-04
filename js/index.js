$(document).ready(function() {
    // top scroller
    $(window).scroll(function(e) {
        var y = $(this).scrollTop();
        if (y >= 360) {
            $("#topBtn").removeClass("off");
        } else {
            $("#topBtn").addClass("off");
        }
    });
    $("[id*='Btn']").stop(true).on('click', function(e) { e.preventDefault(); $(this).scrolld(); });
    // cover
    $('.cover>img').addClass('animated fadeIn');
    $('.cover>h1').textillate({
        //   selector: '.texts',
        loop: false,
        minDisplayTime: 2000,
        initialDelay: 700,
        autoStart: true,
        in: {
            effect: 'bounceInUp',
            delayScale: .5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
            callback: function () { }
        },
        callback: function () { },
        type: 'char'
    });
    $('nav>button').click(function(e){
        $('nav>button').toggleClass('open')
    });
});