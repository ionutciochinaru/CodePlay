$(".nav-link").click(function (){
    $(this).toggleClass("active");
})

$("textarea").height($(window).height() - $("#header").height())