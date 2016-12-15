$(function(){
    
   $(".scroll").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });
    
     $("#main_menu").css({"position": "static", backgroundColor: "transparent"});
     $("#main_menu > ul > li > a").css("color", "#fff");
    
    $(window).scroll(function(){

    if($(window).scrollTop() >= 100){
        $("#main_menu").css({"position": "fixed", backgroundColor: "#fff"});
        $("#main_menu > ul > li > a").css("color", "#1ac056");
    } else {
        $("#main_menu").css({"position": "static", backgroundColor: "transparent"});
        $("#main_menu > ul > li > a").css("color", "#fff");
    }
});
    
});