$(document).ready(function() {
    $('.header-container li a').click(function() {
        // event.preventDefault();
        $('.header-container li a').removeClass('active');
        $(this).addClass('active');
    });
});

