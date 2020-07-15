addtoggle = null;
$(window).ready(function () {
  var click = true;
  "use strict";
  // Collapse Navbar
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  });

  addtoggle = function () {
    var lista = document.getElementById("mainNav").classList.contains("navbar-scrolled");
    if (lista) {
      $("#mainNav").removeClass("navbar-scrolled");
    } else {
      $("#mainNav").addClass("navbar-scrolled");
    }
  }

})
// (function ($) {

// })(jQuery); // End of use strict