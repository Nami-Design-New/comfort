//navmenu
let toggler = document.querySelector(".toggle_nav");
let navMenu = document.querySelector(".nav_ul");
toggler.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  navMenu.classList.contains("show")
    ? (toggler.querySelector("i").classList = "fa-sharp fa-regular fa-xmark")
    : (toggler.querySelector("i").classList = "fa-sharp fa-solid fa-bars");
});
//MainSlider
var mainSlider = new Swiper(".mainSliderContainer", {
  spaceBetween: 0,
  loop: true,
  effect: "fade",
  speed: 500,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".mainSliderPagination",
    clickable: true
  },
  navigation: {
    nextEl: ".mainSliderNext",
    prevEl: ".mainSliderPrev"
  }
});
//products slider
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  slidesPerView: 5,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    992: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 2
    },
    350: {
      slidesPerView: 1
    }
  }
});
//about swiper
let aboutSwiper = new Swiper(".aboutSwiper", {
  spaceBetween: 50,
  slidesPerView: 1,
  grabCursor: true,
  pagination: true,
  loop: true,
  pagination: {
    el: ".aboutSwiperPagination",
    clickable: true
  }
});
//products slider
let categorySlider = new Swiper(".category-cards", {
  spaceBetween: 12,
  slidesPerView: 5,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    992: {
      slidesPerView: 6
    },
    768: {
      slidesPerView: 4
    },
    350: {
      slidesPerView: 2
    }
  }
});
