//Scroll on home page

$('.nav').localScroll();

$('.nav-footer').localScroll();


//Logo changes when on hover
$('.logo').mouseout(function(){
  $('.logo').attr("src","images/namebw.svg");
});

$('.logo').mouseover(function(){
  $('.logo').attr("src","images/name.svg");
});

//linkedin flip
$('.linkedin').mouseover(function(){
  $('.linkedin').attr("src","images/linkedin-logo-flip.svg");
});

$('.linkedin').mouseout(function(){
  $('.linkedin').attr("src","images/linkedin-logo.svg");
});

//behance flip
$('.behance').mouseover(function(){
  $('.behance').attr("src","images/behnace-logo-flip.svg");
});

$('.behance').mouseout(function(){
  $('.behance').attr("src","images/behnace-logo.svg");
});


//mail flip
$('.mail').mouseover(function(){
  $('.mail').attr("src","images/mail-icon-flip.svg");
});

$('.mail').mouseout(function(){
  $('.mail').attr("src","images/mail-icon.svg");
});

//flip portfolio pieces
$("#one, #two, #three, #four, #five, #six").flip({axis: 'x'});