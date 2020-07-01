$(document).ready(function () {
    
    // 메뉴오버 서브메뉴 등장
    $('.gnb ul li').hover(function () {
        $(this).children('.submenu').show();
        $(this).children('.submenu').stop().animate({
            'top': '10px',
            'opacity': '1'
        });
    }, function () {
        $(this).children('ul').stop().animate({
            'top': '20px',
            'opacity': '0'
        }, function () {
            $(this).hide();
        });
    });
    
    // 마우스아이콘 클릭 이동
    $('.scroll').click(function(){
        var scroll = $('#menu2').offset().top;
        $('html, body').animate({scrollTop: (scroll)}, 800);
    })

    // 닷네비게이션 클릭 이동
    $('.icon ul li a').click(function () {
        var scroll = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop: (scroll)}, 800);       
    });

    // 닷 클릭 색변화
    $('.icon ul li:first a img').attr('src', 'images/common/btn_on.png');
    $('.icon ul li a img').click(function () {
        $('.icon ul li a img').attr('src', 'images/common/btn_off.png');
        $(this).attr('src', 'images/common/btn_on.png');
    });

    // 아이콘 스크롤 색상변경       
    $(window).scroll(function () {
        var top = $(this).scrollTop()
        var sec1 = $('#menu1').offset().top + 1
        var sec2 = $('#menu2').offset().top + 1
        var sec3 = $('#menu3').offset().top + 1
        var sec4 = $('#menu4').offset().top + 1
        if(top < sec1) {
            $('.icon ul li a img').attr('src', 'images/common/btn_off.png');
            $('.icon ul li a img:eq(0)').attr('src', 'images/common/btn_on.png');        
        } else if (top > sec1 && top < sec2) {
            $('.icon ul li a img').attr('src', 'images/common/btn_off.png');
            $('.icon ul li a img:eq(1)').attr('src', 'images/common/btn_on.png');
        } else if (top > sec2 && top < sec3) {            
            $('.icon ul li a img').attr('src', 'images/common/btn_off.png');
            $('.icon ul li a img:eq(2)').attr('src', 'images/common/btn_on.png');
        } else if (top > sec3 && top < sec4) {
            $('.icon ul li a img').attr('src', 'images/common/btn_off.png');
            $('.icon ul li a img:eq(3)').attr('src', 'images/common/btn_on.png');
        };        
    });

    // 2페이지 아이템 마우스 오버
    $('.item_wrap div').hover(function () {
        $(this).children('p').stop().fadeIn(300);
    }, function () {
        $(this).children('p').stop().fadeOut(300);
    });    
    
    
});

// 좌우 slide 텍스트 애니메이션
function slide() {
    $('.slide_banner li section:first').delay(2000).fadeOut(2000, function () {
        $(this).children('div').hide();
        $(this).parent('li').appendTo('.slide_banner');
    });
    $('.slide_banner li section:eq(1)').fadeIn(2000, function() {
        $($(this).children('div')).children('h1').animate({'top':'0','opacity':'1'})
    })
};
setInterval('slide()', 2000)



// 창 리사이즈
$( window ).resize(function() {  
    var height = $(window).height();
    console.log(height);
    $('html, body, .wrap , .container, .container section').css('height',height);
});


// 창 리사이즈 2차시도
/*
function resize() {
    var height = $(window).height();
    console.log(height);
    $('html, body, .wrap , .container, .container section').css('height',height);
}

setInterval('resize()', 1000)
*/







