const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});





function page4Animation(){
// var a = document.querySelector('#elem1')
var elemC = document.querySelector('#elem-container')
var fixed = document.querySelector('#fixed-image')
elemC.addEventListener("mouseenter", ()=>{
  fixed.style.display = 'block'

})
elemC.addEventListener("mouseleave", ()=>{
  fixed.style.display = 'none'

})


var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
  e.addEventListener("mouseenter", function(){
    var image = e.getAttribute('data-image')
    fixed.style.backgroundImage = `url(${image})`


  })

})


}


function swiperAnimation(){


var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 100,

});
}

swiperAnimation();
page4Animation();

var loader = document.querySelector('#loader')
setTimeout(function(){
  loader.style.top = "-100%"



},3200)


