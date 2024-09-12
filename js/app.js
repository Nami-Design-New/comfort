//navmenu
let toggler = document.querySelector(".toggle_nav");
let navMenu = document.querySelector(".categories-wrapper");
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
    disableOnInteraction: false,
  },
  pagination: {
    el: ".mainSliderPagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mainSliderNext",
    prevEl: ".mainSliderPrev",
  },
});
//products slider
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  slidesPerView: 5,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 2,
    },
    350: {
      slidesPerView: 1,
    },
  },
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
    clickable: true,
  },
});
//products slider
let categorySlider = new Swiper(".category-cards", {
  spaceBetween: 12,
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 1,
    },
  },
});

//paths
const { pathname } = window.location;

let navLinks = document.querySelectorAll(".nav_ul li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].classList.remove("active");
}
for (var i = 0; i < navLinks.length; i++) {
  if (
    navLinks[i].href.substring(navLinks[i].href.lastIndexOf("/") + 1) ===
    { pathname }.pathname.slice(1)
  ) {
    navLinks[i].classList.add("active");
  }
  if ({ pathname }.pathname === "/") {
    navLinks[0].classList.add("active");
  }
}

//cart

let openCartBtn = document.getElementById("cartOpen");
let closeCartBtn = document.querySelector(".close_cart-cc");
let cartmodel = document.querySelector(".mini_cart");
openCartBtn.addEventListener("click", () => {
  cartmodel.classList.add("active");
});
closeCartBtn.addEventListener("click", () => {
  cartmodel.classList.remove("active");
});

//Products Cart
let openCartBtnProduct = document.getElementById("cartOpenProduct");
let closeCartBtnProduct = document.querySelector(".close_cart-ccProduct");
let cartmodelProduct = document.querySelector(".mini_cartProduct");

console.log(openCartBtnProduct); // Should not be null
console.log(closeCartBtnProduct); // Should not be null
console.log(cartmodelProduct); // Should not be null

openCartBtnProduct.addEventListener("click", () => {
  cartmodelProduct.classList.add("active");
});
closeCartBtnProduct.addEventListener("click", () => {
  cartmodelProduct.classList.remove("active");
});

// products flash
const productFlashCards = document.querySelectorAll(".pop-card");
let animationFlag = true;
function animateDiv() {
  if (!animationFlag) {
    return;
  }
  productFlashCards.forEach((proCard) => {
    proCard.style.left = "-130px";
  });
  let randomIndex = Math.floor(Math.random() * productFlashCards.length);
  setTimeout(() => {
    if (!animationFlag) {
      return;
    }
    productFlashCards[randomIndex].style.left = "8px";
    setTimeout(() => {
      if (!animationFlag) {
        return;
      }
      productFlashCards[randomIndex].style.left = "-130px";
      animateDiv();
    }, 4000);
  }, 8000);
}
animateDiv();
let stopAnimation = document.querySelectorAll(".stop_animate");
stopAnimation.forEach((btn) => {
  btn.addEventListener("click", () => {
    animationFlag = false;
    productFlashCards.forEach((proCard) => {
      proCard.style.left = "-130px";
    });
  });
});
let searchOpen = document.getElementById("searchOpen");
let searchContainer = document.querySelector(".search-container");
let layer = document.querySelector(".layer");
let closeSearch = document.querySelector(".closeSearch");
searchOpen.addEventListener("click", function () {
  searchContainer.classList.add("show");
  layer.classList.add("show");
});
closeSearch.addEventListener("click", () => {
  searchContainer.classList.remove("show");
  layer.classList.remove("show");
});
////////////////////////
////////////////////////
///////////////////////

// // sidebar  Cart -->
// function openSidebar() {
//   document.getElementById("sidebar").style.width = "350px";
// }

// function closeSidebar() {
//   document.getElementById("sidebar").style.width = "0";
// }

////////////////////////
////////////////////////
///////////////////////
//counter
// var num;
// $(".button-count:first-child").click(function () {
//   num = parseInt($("input:text").val());
//   if (num > 1) {
//     $("input:text").val(num - 1);
//   }
//   if (num == 2) {
//     $(".button-count:first-child").prop("disabled", true);
//   }
//   if (num == 10) {
//     $(".button-count:last-child").prop("disabled", false);
//   }
// });

// $(".button-count:last-child").click(function () {
//   num = parseInt($("input:text").val());
//   if (num < 10) {
//     $("input:text").val(num + 1);
//   }
//   if (num > 0) {
//     $(".button-count:first-child").prop("disabled", false);
//   }
//   if (num == 9) {
//     $(".button-count:last-child").prop("disabled", true);
//   }
// });

// //switch button
// function movePill(a) {
//   let pill = document.querySelector(".backgroundPill");
//   if (a.value == "left") {
//     pill.style.left = "5px";
//   } else {
//     pill.style.left = "47%";
//   }
// }
