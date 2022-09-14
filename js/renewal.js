$(document).ready(function () {

    //메뉴
    var burger = $("#burger");

    burger.on("click", function () {
        burger.toggleClass("on");
        $("#ham-menu").toggleClass("on");
        $("#burger-p").toggleClass("on");
        $("header").toggleClass("on");
    });

    $(".sidemenu>li").mouseover(function () {
        $(this).children("ul").stop().slideDown();
    });
    $(".sidemenu>li").mouseleave(function () {
        $(this).children("ul").stop().slideUp();
    });

    $("#tech-main>.sec").mouseover(function () {
        $(this).addClass("on");
    });
     $("#tech-main>.sec").mouseleave(function () {
        $(this).removeClass("on");
    });
});