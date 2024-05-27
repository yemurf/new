$(function(){    
    $('#btn-toggle-nav').click(function(){
        $('#nav').slideToggle(300);
        $('.header').toggleClass('active');        
    })
    
    $(window).resize(function(){
        if($(this).width()<768){
            $('.sub-nav').css({
                display:'none',
            })
            $('.header .container').removeClass('active');
        }
    })

    $('.main-nav>li').mouseenter(function(){
        if($(window).width()>=768){
            $('.sub-nav').css({
                display:'none',
            })
            $(this).children('.sub-nav').css({
                display:'grid',
            })
            $('.header .container').addClass('active');
        }
    })

    $('.header').mouseleave(function(){                
        $('.sub-nav').css({
            display:'none',
        })
        $('.header .container').removeClass('active');
    })

    $(window).scroll(function(){
        let wScrTop = $(this).scrollTop();
        if(wScrTop>0){
            $('#btn-top').css({
                display:'grid',
            })
        }else{
            $('#btn-top').css({
                display:'none',
            })
        }
    })
})