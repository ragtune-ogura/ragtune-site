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

document.querySelectorAll('.menu-dropdown li > a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').replace('#', '');
    const target = document.getElementById(targetId);

    if (!target) return;

    // 画面幅によるオフセット
    const offset = window.innerWidth <= 999 ? 92 : 113;

    // 対象位置
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

    // 実際にスクロールする位置
    const scrollTo = targetPosition - offset;

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth'
    });
  });
});
