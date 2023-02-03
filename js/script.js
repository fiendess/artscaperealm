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
