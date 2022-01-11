
$(document).ready(function(){
  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  })
  $('.navbar-link').click(function(){
    $('header').toggleClass('toggle');
    $('#menu').toggleClass('fa-times');
  });
  $('#more-btn').click(function(){
    $('#project-popup').toggleClass('project-popup');
    $('#close-popup').toggleClass('toggle');
    $('#popup-text').toggleClass('toggle');

  })
  $('#close-popup').click(function(){
    $('#project-popup').toggleClass('project-popup');
    $('#close-popup').toggleClass('toggle');
    $('#popup-text').toggleClass('toggle');
  })
})
