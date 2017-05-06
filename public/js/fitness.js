$(function(){


$(".submenu").hover(function(){

    $(this).find("ul").css("background","red");
    $(this).find("ul").slideDown(500);
    console.log("its working");

}, function(){

    $(this).find("ul").fadeOut(500);

});// submenu hover

});// end function
