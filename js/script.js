$(document).ready(function () {
    
    // 로고 초기화
    $('.menu1_1>div>h1, .menu1_1>div>p, .menu1_1>div>h3, .menu1_1>div>h2, .menu1_1>div>input').css({'top':'50px','opacity':'0'})
    $('.menu1_2>div>h1, .menu1_2>div>p, .menu1_2>div>h3, .menu1_2>div>h2, .menu1_2>div>input').css({'top':'50px','opacity':'0'})
    $('.menu1_3>div>h1, .menu1_3>div>p, .menu1_3>div>h3, .menu1_3>div>h2, .menu1_3>div>input').css({'top':'50px','opacity':'0'})
        
    // 로고 등장
    $('.menu1_1').children('div').children('h1').delay(500).animate({'top':'0','opacity':'1'})
    $('.menu1_1').children('div').children('h1').delay(500).animate({'top':'0','opacity':'1'})
    $('.menu1_1').children('div').children('p').delay(1000).animate({'top':'0','opacity':'1'})
    $('.menu1_1').children('div').children('h3').delay(1500).animate({'top':'0','opacity':'1'})
    $('.menu1_1').children('div').children('h2').delay(2000).animate({'top':'0','opacity':'1'})
    $('.menu1_1').children('div').children('input').delay(2000).animate({'top':'0','opacity':'1'})
    
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

    // 스크롤 닷 색상변경       
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

    // #menu2 아이템 마우스 오버
    $('.item_wrap div').hover(function () {
        $(this).children('p').stop().fadeIn(300);
    }, function () {
        $(this).children('p').stop().fadeOut(300);
    });     
});

// 좌우 slide + 텍스트 애니메이션
function slide() {
    $('.slide_banner li section:first').delay(2000).fadeOut(2000, function () {      
        $(this).parent('li').appendTo('.slide_banner');
        $(this).children('div').children('h1').css({'top':'50px','opacity':'0'})
        $(this).children('div').children('p').css({'top':'50px','opacity':'0'})
        $(this).children('div').children('h3').css({'top':'50px','opacity':'0'})
        $(this).children('div').children('h2').css({'top':'50px','opacity':'0'})
        $(this).children('div').children('input').css({'top':'50px','opacity':'0'})
    });
    $('.slide_banner li section:eq(1)').fadeIn(2000, function() {
        $(this).children('div').children('h1').delay(500).animate({'top':'0','opacity':'1'})
        $(this).children('div').children('p').delay(1000).animate({'top':'0','opacity':'1'})
        $(this).children('div').children('h3').delay(1500).animate({'top':'0','opacity':'1'})
        $(this).children('div').children('h2').delay(2000).animate({'top':'0','opacity':'1'})
        $(this).children('div').children('input').delay(2000).animate({'top':'0','opacity':'1'})
    })
};
setInterval('slide()', 4000) 
/*첫번째에서 두번째로 넘어가는 시간 4000*/
/*그 뒤로는 페이드효과 때문에 조금 더 길어짐*/
/*delay랑 fade 시간 더한 값을 넣어주면 자연스러움*/

// 창 리사이즈
// 마우스 휠(오토스크롤) 플러그인이 첫 창의 height를 입력받기 때문에 리사이즈 해줘야함. css cover만으로 안됨.
$( window ).resize(function() {  
    var height = $(window).height();
    console.log(height);
    $('html, body, .wrap , .container, .container section').css('height',height);
});

// 창 리사이즈 크기 늘릴때 화면 올라가는거 리셋
/*
$( window ).resize(function() {  
    var height = $(window).height();
    console.log(height);
    
    $('html').animate({scrollTo: +}, 800);
});
*/
