// Smooth Scroll

$('a.nav-link').click(function(e){

e.preventDefault();

var target = $(this).attr("href");

$('html, body').animate({
scrollTop: $(target).offset().top - 70
},800);

});



// Sticky Navbar Effect

$(window).scroll(function(){

if($(window).scrollTop() > 50){
$('.custom-navbar').css({
'padding':'10px 0',
'box-shadow':'0 5px 15px rgba(0,0,0,0.1)'
});
}

else{
$('.custom-navbar').css({
'padding':'18px 0',
'box-shadow':'0 2px 10px rgba(0,0,0,0.05)'
});
}

});


$("#menu-toggle").click(function(){

$(this).toggleClass("active");

$("#navbarContent").toggleClass("show");

});