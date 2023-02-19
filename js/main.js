// ===== puer javascript ===================

// let myButton = document.getElementById("go-top");

// window.onscroll = function () {
//   if (window.pageYOffset >= 600) {
//     myButton.style.display = "block";
//   } else myButton.style.display = " none";
// };

// myButton.onclick = function () {
//   window.scrollTo(0, 0);
// };

// ===== jQuery ==========================

// Scroll To Top
var scrollToTop = $("#go-top");
$(window).on("scroll", function () {
  if ($(window).scrollTop() >= 500) {
    if (!scrollToTop.is(":visible")) {
      scrollToTop.fadeIn(300);
    }
  } else {
    if (scrollToTop.is(":visible")) {
      scrollToTop.fadeOut(300);
    }
  }
});

$("#go-top").on("click", function () {
  $(window).scrollTop(0, 0);
});
