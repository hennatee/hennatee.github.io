$(document).ready(function(){
  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  })
})

$(document).ready(function(){
  $('#navbar-link').click(function(){
    $('header').toggleClass('toggle');
  })
})