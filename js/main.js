//Scroll on home page

$('.nav').localScroll();

$('.nav-footer').localScroll();


//Logo changes when on hover

$('.logo').mouseover(function(){
  $('.logo').attr("src","images/name.svg");
});

$('.logo').mouseout(function(){
  $('.logo').attr("src","images/namebw.svg");
});

//linkedin flip

$('.linkedin').mouseover(function(){
  $('.linkedin').attr("src","images/linkedin-logo.svg");
});

$('.linkedin').mouseout(function(){
  $('.linkedin').attr("src","images/linkedin-logo-flip.svg");
});

//behance flip

$('.behance').mouseover(function(){
  $('.behance').attr("src","images/behnace-logo.svg");
});

$('.behance').mouseout(function(){
  $('.behance').attr("src","images/behnace-logo-flip.svg");
});

//mail flip

$('.mail').mouseover(function(){
  $('.mail').attr("src","images/mail-icon.svg");
});

$('.mail').mouseout(function(){
  $('.mail').attr("src","images/mail-icon-flip.svg");
});

