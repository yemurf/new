$(function(){
    $('button').click(function(){
        let thisText = $(this).text();
        let thisString = $(this).prev().children();
        if(thisText=='더보기'){
            $(this).text('접기');
            thisString.show();
        }else{
            $(this).text('더보기');
            thisString.hide();
        }
    })
    
    $(window).resize(function(){
        let ww = $(window).width();                
        if(ww<768){
            $('.col-all p span').show();
            $('button').text('접기');
        }else{
            $('.col-all p span').hide();
            $('button').text('더보기');
        }        
    })
})