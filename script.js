function toggleLanguage() {
  alert('言語切替はまだ実装されていません');
}

/* ==========================
   Dropdown (Language & Menu)
=========================== */
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

// Language change demo
document.querySelectorAll(".lang-dropdown li").forEach(li => {
  li.addEventListener("click", () => {
    const selected = li.dataset.lang;
    console.log("Language switched to:", selected);

    // 切り替え表示のみ
    document.querySelector(".lang-btn").innerHTML = li.innerHTML;
  });
});


/* ==========================
   Swiper Init
=========================== */
function initSection3Swiper() {
  const target = document.querySelector(".client-swiper");
  if (!target) {
    console.log("Swiper target not found yet");
    return;
  }

  console.log("Swiper initializing...");

  new Swiper(".client-swiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1000: { slidesPerView: 1.5 }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
}

// partial 読み込み完了後イベントで Swiper 初期化
document.addEventListener("partialsLoaded", initSection3Swiper);
