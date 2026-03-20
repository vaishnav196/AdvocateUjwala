// ===========================
// SMOOTH SCROLL (all nav links + CTA buttons)
// ===========================
$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    if ($(target).length) {
        $('html, body').animate({
            scrollTop: $(target).offset().top - 70
        }, 800);
    }
    // Close mobile nav if open
    closeMobileNav();
});

// ===========================
// STICKY NAVBAR
// ===========================
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $('.custom-navbar').css({
            'padding': '10px 0',
            'box-shadow': '0 5px 15px rgba(0,0,0,0.1)'
        });
    } else {
        $('.custom-navbar').css({
            'padding': '18px 0',
            'box-shadow': '0 2px 10px rgba(0,0,0,0.05)'
        });
    }
});

// ===========================
// HAMBURGER TOGGLE (fullscreen nav)
// ===========================
function openMobileNav() {
    $('#menu-toggle').addClass('active');
    $('#navbarContent').addClass('show');
    $('body').css('overflow', 'hidden');
}

function closeMobileNav() {
    $('#menu-toggle').removeClass('active');
    $('#navbarContent').removeClass('show');
    $('body').css('overflow', '');
}

$('#menu-toggle').click(function () {
    if ($(this).hasClass('active')) {
        closeMobileNav();
    } else {
        openMobileNav();
    }
});

// Close via X button inside nav
$('#nav-close').click(function () {
    closeMobileNav();
});

// ===========================
// SCROLL ANIMATIONS (Intersection Observer)
// ===========================
$(document).ready(function () {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                setTimeout(function () {
                    $(entry.target).addClass('visible');
                }, parseFloat($(entry.target).css('animation-delay') || 0) * 1000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    $('.animate-on-scroll').each(function () {
        observer.observe(this);
    });
});
