
$(document).ready(function(){
  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  })
  $('.navbar-link').click(function(){
    $('header').toggleClass('toggle');
    $('#menu').toggleClass('fa-times');
  });
})

