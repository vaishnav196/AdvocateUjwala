$(document).ready(function () {

    /* ── HAMBURGER → X toggle ── */
    $('#menu-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('#navbarContent').toggleClass('show');
    });

    // Close menu when a nav link is clicked
    $('.nav-link').on('click', function () {
        $('#menu-toggle').removeClass('active');
        $('#navbarContent').removeClass('show');
    });


    /* ── SCROLL ANIMATIONS (hero + about only) ── */
    function triggerAnims() {
        var bottom = $(window).scrollTop() + $(window).height();

        $('.anim-left, .anim-right').each(function () {
            if (bottom > $(this).offset().top + 60) {
                $(this).addClass('show');
            }
        });
    }

    // Hero is already in view on load
    triggerAnims();

    // About triggers when scrolled into view
    $(window).on('scroll', triggerAnims);

});
