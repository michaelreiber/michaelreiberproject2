$(document).ready(function(){
    $("#eminempic").click(function(){
        $("#eminem").fadeIn();
    });
    
    $("#bigseanpic").click(function(){
        $("#bigsean").fadeIn();
    });
    
    $("#roycepic").click(function(){
        $("#royce").fadeIn();
    });
    
    $(".expander h1").click(function(){
        $(this).parent().find("p").slideToggle(2000);
    });
});