
const hamburgerTag = document.querySelector("button.toggle")

hamburgerTag.addEventListener("click", function (event) {  
    hamburgerTag.classList.toggle("is-active")
})



import $ from 'jquery';
import 'slick-carousel';

$(".slider-wrapper").on("init", function(event, slick){
    $(".count").text(parseInt(slick.currentSlide + 1) + '/' + slick.slideCount);
});

$(".slider-wrapper").on("afterChange", function(event, slick, currentSlide){
    $(".count").text(parseInt(slick.currentSlide + 1) + '/' + slick.slideCount);
});
$(".slider-wrapper").slick({
    arrows: false,
    dots: true,
    dotsClass: 'slick-dots',
    draggable: false,
    fade: true,



});

