// 1- fonctionnalite de changement de theme
let themeBtn = $('.fonctionnalite button:first-child');
themeBtn.click(function() {
    $('body').toggleClass('dark-mode');
});

// 2- fonctionnalite d'impression
let printBtn = $('.fonctionnalite button:eq(1)');
printBtn.click(function() {
    window.print();
});

//3- fonctionnalité de l'effet parallaxe sur la photo de profil et l'entete
$(window).scroll(function() {
    let scrollPosition = $(this).scrollTop();
    $('.presentation img').css('transform', 'translateY(' + scrollPosition * 0.3 + 'px)');
});



