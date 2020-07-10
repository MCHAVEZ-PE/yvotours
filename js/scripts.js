(function ($) {
  "use strict";
  // Collapse Navbar
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  });
  // var slides = document.getElementsByClassName("boxSliderImg");
  // for (slide of slides) {

  // }
})(jQuery); // End of use strict