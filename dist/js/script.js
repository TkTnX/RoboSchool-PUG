// BURGER MODAL

const burgerModalBtn = document.querySelector("#headerBurgerBtn");
const headerBurgerClose = document.querySelector("#headerBurgerClose");
const burgerModal = document.querySelector("#headerBurger");

burgerModalBtn.addEventListener("click", () => {
  burgerModal.classList.toggle("active");
  document.body.style.overflow = "hidden";
});


headerBurgerClose.addEventListener("click", () => {
  burgerModal.classList.remove("active");
  document.body.style.overflow = "visible";


})

// SWIPER

const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  slidesPerView: 1.3,
  spaceBetween: 20,
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    650: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
