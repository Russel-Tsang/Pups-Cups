$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('#navigation').css('background', 'rgba(0, 0, 0, 0.05)');
        $('.nav-link').css('color', '#9ac8ed');
    } else{
        $('#navigation').css('background', 'rgba(0, 0, 0, .6)');
        $('.nav-link').css('color', 'white');
    }
});