const images = [
  {
    src: "./img/digital_art/maincontent/ladydeath.png",
    title: "Lady Death",
    link: "https://www.deviantart.com/vandemoniumx",
    author: "vandemoniumx",
  },
  {
    src: "./img/digital_art/maincontent/brock-grossman-crab-robot-girl-06-blood.jpg",
    title: "Crab Robot",
    link: "https://www.artstation.com/brockag",
    author: "Brock Grossman",
  },

  {
    src: "./img/digital_art/maincontent/ladydeath.png",
    title: "Lady Death",
    link: "https://www.deviantart.com/vandemoniumx",
    author: "vandemoniumx",
  },

  {
    src: "./img/digital_art/maincontent/ladydeath.png",
    title: "Lady Death",
    link: "https://www.deviantart.com/vandemoniumx",
    author: "vandemoniumx",
  },

  {
    src: "./img/digital_art/maincontent/ladydeath.png",
    title: "Lady Death",
    link: "https://www.deviantart.com/vandemoniumx",
    author: "vandemoniumx",
  },
  {
    src: "./img/digital_art/maincontent/ladydeath.png",
    title: "Lady Death",
    link: "https://www.deviantart.com/vandemoniumx",
    author: "vandemoniumx",
  },
  {
    src: "./img/digital_art/maincontent/ladydeath.png",
    title: "Lady Death",
    link: "https://www.deviantart.com/vandemoniumx",
    author: "vandemoniumx",
  },
  {
    src: "./img/digital_art/maincontent/ladydeath.png",
    title: "Lady Death",
    link: "https://www.deviantart.com/vandemoniumx",
    author: "vandemoniumx",
  },
];

const columns = document.querySelectorAll(".column-content1, .column-content2, .column-content3");

images.forEach((image, index) => {
  const column = columns[index % columns.length];

  const photoDiv = document.createElement("div");
  photoDiv.classList.add("photo");

  const a = document.createElement("a");
  a.setAttribute("href", image.src);
  a.setAttribute("data-title", `${image.title} By <a href='${image.link}' target='_blank'>${image.author}</a>`);
  a.setAttribute("data-lightbox", "contentl");

  const img = document.createElement("img");
  img.setAttribute("src", image.src);
  img.setAttribute("alt", "");

  a.appendChild(img);
  photoDiv.appendChild(a);
  column.appendChild(photoDiv);
});

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
