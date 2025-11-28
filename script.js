// =====================
// Dropdown
// =====================
document.addEventListener("click", (e) => {
  // Language dropdown
  if (e.target.closest(".lang-btn")) {
    const dd = document.querySelector(".lang-dropdown");
    dd.style.display = dd.style.display === "block" ? "none" : "block";
  } else {
    document.querySelector(".lang-dropdown").style.display = "none";
  }

  // Menu dropdown
  if (e.target.closest(".menu-btn")) {
    const dd = document.querySelector(".menu-dropdown");
    dd.style.display = dd.style.display === "block" ? "none" : "block";
  } else {
    document.querySelector(".menu-dropdown").style.display = "none";
  }
});

// // =====================
// // Swiper Init
// // =====================
// function initSection3Swiper() {
//   const target = document.querySelector(".client-swiper");
//   if (!target) return;

//   console.log("Swiper initialized");

//   new Swiper(".client-swiper", {
//     loop: true,
//     autoplay: { delay: 5000, disableOnInteraction: false },
//     slidesPerView: 1,
//     spaceBetween: 20,
//     breakpoints: { 1000: { slidesPerView: 1.5 } },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
// }

// document.addEventListener("partialsLoaded", initSection3Swiper);
