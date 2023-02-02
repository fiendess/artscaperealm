// Tiny Slider
let slider = tns({
  container: ".my-slider",
  slideBy: 1,
  speed: 400,
  nav: false,
  controlContainer: "#controls",
  prevButton: ".previous",
  nextButton: ".next",
  touch: true,
  mouseDrag: true,
  responsive: {
    1600: {
      items: 4,
      gutter: 20,
    },
    1024: {
      items: 3,
      gutter: 20,
    },
    768: {
      items: 2,
      gutter: 20,
    },
  },
});

$(document).ready(function () {
  $("#imageModal1").on("shown.bs.modal", function () {
    $("#imageModal1").trigger("focus");
  });
  $("#imageModal2").on("shown.bs.modal", function () {
    $("#imageModal2").trigger("focus");
  });
  $("#imageModal3").on("shown.bs.modal", function () {
    $("#imageModal3").trigger("focus");
  });
  // More modal elements
});
