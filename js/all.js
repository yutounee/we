$('#HeaderBtnBars').click(function(){
    $('#HeaderBody').fadeIn();
    // $('body').css('overflow', 'hidden');
    $('body').addClass('we-no-scroll');
});


$('#HeaderBtnXmark').click(function(){
    $('#HeaderBody').fadeOut();
    // $('body').css('overflow', 'visible');
    $('body').removeClass();
});