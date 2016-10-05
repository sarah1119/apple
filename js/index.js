$(function() {
    $(document).on("mousedown",false)

    $('.search').on('click', function () {
        $(this).closest('.leader').addClass('searching')
        $('.mask').addClass('active')
    })
    $('.button').on('click', function () {
        $(this).closest(".leader").removeClass('searching')
        $('.mask').removeClass('active')
    })
    $('.btn').on('click', function () {
        $(document.body).toggleClass("hidden")
        $(".leader").toggleClass("active")
        $(".list").stop();
       // $(".list").slideToggle()
        $(".list li").toggleClass("limove")
        $(this).toggleClass("zhuan")
        $('.list2-l').toggleClass("rotate")
        $('.list2-r').toggleClass("move")
        $(".list2 li").eq(2).toggleClass("li3")
    })
// $(".list-small").resize(function(){
//     alert(1)
// })
// /////////////////////banner轮播/////////////////////////////////////
var slides=$(".carousel .nav a")
var dots=$(".tab-nav .dot")
var moving=false;

var moveTo=function(el,dir){
    moving=true;
     if(dir==="right"){
         slides.filter(".active")
             .removeClass("active")
             .addClass("leave")
             .delay(1000)
             .queue(function(){
                 moving=false;
                 $(this).removeClass('leave').dequeue();
             })
         $(el).addClass('right')
         //reflow  强制浏览器重绘一帧  get获取的是dom对象
         $(el).get(0).offsetWidth;
         $(el).removeClass('right').addClass('active')
     }else if(dir==="left"){
         slides.filter(".active")
             .removeClass("active")
             .addClass("right")
             .delay(1000)
             .queue(function(){
                 moving=false;
                 $(this).removeClass('right').dequeue();
             })

         $(el).addClass('enter')
             .addClass('active')
             .delay(1000)
             .queue(function(){
                 $(this).removeClass("enter").dequeue();
             })

     }
     $(dots).removeClass('active').eq(slides.index(el)).addClass('active')
}
var moveRight=function(){
    if(moving){return}
    var active=slides.filter(".active")
    var el=active.next().length ? active.next():slides.eq(0);
    moveTo(el,"right")
}
// var moveLeft=function(){
//     if(moving){return}
//     var active=slides.filter(".active")
//     var el=active.prev().length ? active.prev():slides.eq(0)
//     moveTo(el,"left")
// }
    var t=setInterval(moveRight,1000)

 dots.on("click",function(){
     if(moving){return;}
     clearInterval(t)
    var c=slides.index(slides.filter(".active"));
    var n=$(this).index();
    if(c===n){return;}
    if(c < n){
        moveTo(slides.eq(n),"right")
    }else{
        moveTo(slides.eq(n),"left")
    }
    dots.filter(".active").removeClass("active")
    $(this).addClass("active")

})

//////////////////////////////////footer/////////////////////////////////////////
$('.nav h3').on("click",function(){
       $(this).toggleClass("click")
       $(this).next().toggleClass("move")
})












})
