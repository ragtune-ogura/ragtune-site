document.addEventListener("click", (e) => {
  const lang = document.querySelector(".lang-selector");
  const menu = document.querySelector(".menu-selector");

  // --- 言語ドロップダウン ---
  if (e.target.closest(".lang-btn")) {
    lang.classList.toggle("open");
    return;
  }

  // --- メニュードロップダウン ---
  if (e.target.closest(".menu-btn")) {
    menu.classList.toggle("open");
    return;
  }

  // --- 内側クリックは閉じない ---
  if (e.target.closest(".lang-selector") || e.target.closest(".menu-selector")) {
    return;
  }

  // --- 外側クリックで両方閉じる ---
  lang.classList.remove("open");
  menu.classList.remove("open");
});
