
$(document).ready(function(){

    $(".fa-long-arrow-alt-left").click(function(){
        $(".square").animate({right: "+=50px"});
    });
    $(".fa-long-arrow-alt-right").click(function(){
        $(".square").animate({right: "-=50px"});
    });
    $(".fa-long-arrow-alt-up").click(function(){
        $(".square").animate({top: "-=20px"});
    });
    $(".fa-long-arrow-alt-down").click(function(){
        $(".square").animate({top: "+=20px"});
    });
     $('border').animate({ right: $(this).position().right }, 'slow');
        return false; 
});