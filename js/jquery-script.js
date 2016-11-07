$(document).ready(function() {
  $('.modal-trigger').leanModal();

  $('.project-side-one').hover(function() {
    $('.project-nav-one').css('background-color', '#F1A71E');
  }, function() {
    $('.project-nav-one').css('background-color', '');
  });

  $('.project-side-two').hover(function() {
    $('.project-nav-two').css('background-color', '#F1A71E');
  }, function() {
    $('.project-nav-two').css('background-color', '');
  });

  $('.project-side-three').hover(function() {
    $('.project-nav-three').css('background-color', '#F1A71E');
  }, function() {
    $('.project-nav-three').css('background-color', '');
  });

  $('.project-side-four').hover(function() {
    $('.project-nav-four').css('background-color', '#F1A71E');
  }, function() {
    $('.project-nav-four').css('background-color', '');
  });
});
