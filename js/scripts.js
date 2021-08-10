$(document).ready(function() {
  $(".theme").click(function() {
    $("#dark-theme").toggle();
  
    $("#light-theme").toggle();
  });

  $("#dark-theme").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("#light-theme").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
});