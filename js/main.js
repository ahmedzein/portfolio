$('.nav').localScroll();

$('.nav-footer').localScroll();

$('.logo').mouseover(function(){
  $('.logo').attr("src","images/name.svg");
});

$('.logo').mouseout(function(){
  $('.logo').attr("src","images/namebw.svg");
});