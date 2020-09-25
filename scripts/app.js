$(document).ready(function(){
    $(".card-left__dropdown-btn").click(function() {
      $(".dropdown-items a").removeClass("clicked");
      $(".dropdown-items a").children("span").removeClass("clicked");
      $(".arrow").toggleClass("open");
      $(".dropdown-items").toggleClass("open");
    });
    
    $(".dropdown-items a").click(function() {
      $(".dropdown-items a").removeClass("clicked");
      $(".dropdown-items a").children("span").removeClass("clicked");
      $(this).toggleClass("clicked");  $(this).children("span").toggleClass("clicked");
    });
  });