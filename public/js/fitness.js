$(function(){

    var size = $(window).width(),
        mobileOn = false,
        linkArrw = "";


// ANIMATING HOME SLIDER
        $("section#slider").flexslider({
            selector:"#slide > .slides",
            animationLoop:true,
            animation:"slide",
            slideshowSpeed: 5000,
            directionNav: false,
            start:function(){
                $(".default-slide").css("display","none");
            }

        });//flexslider

 // REVEALS THE SUBMENU OF NAV
        function submenu(){
            console.log("mobileOn is "+mobileOn);
            $(".submenu").hover(function(){

                if(!mobileOn){$(this).find("ul").slideDown(500);}

            }, function(){

                if(!mobileOn){$(this).find("ul").fadeOut(500);}

            });// submenu hover

        }//submenu

// ALLOWS THE MOBILE MENU BUTTON TO DISPLAY/HIDE NAV MENU
        $('#bottom-nav button').on("click",function(){
            $('#bottom-nav nav').slideToggle();
        })


 // CHANGES THE ARROWS IN THE MOBILE NAV MENU
        function changeArrws(selector){

            linkArrw = $(selector).find("span").hasClass("fa-angle-up");
            if(linkArrw){
                $(selector).find("span").removeClass("fa-angle-up").addClass("fa-angle-down");
            }else{
                $(selector).find("span").removeClass("fa-angle-down").addClass("fa-angle-up");
            }
        }

// TOGGLING SUBMENU IN MOBILE AND CHANGING ANGLE ARROWS
        $('.navbar-nav .submenu').on("click",function(){
            changeArrws(this);
            $(this).find("ul").slideToggle();
        })


// CHECKS THE WINDOW SIZE IN ORDER TO CHANGE CERTAIN EVENTS
        function checkWindow(){
            if(size > 768){
                changeArrws('.navbar-nav .submenu');
                mobileOn = false;
                $("#top-nav nav").css('display','block');
            }else if (size <=768){
                mobileOn = true;
            }else{
                console.log("I don't know whats going on")
            }
        }//checkWindow

        checkWindow();
        submenu();

// WHEN THE WINDOW RESIZES CHANGE THE SIZE VAR, AND RERUN FUNCTIONS
    $(window).on("resize", function(){
         size = $(window).width();
         console.log("window size is "+size);
        checkWindow();

        submenu();

    })// resize

});// end function
