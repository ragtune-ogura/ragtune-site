// =====================
// Dropdown
// =====================
document.addEventListener("click", (e) => {
  const menu = document.querySelector(".menu-selector");

  // メニュークリックで open 切り替え
  if (e.target.closest(".menu-btn")) {
    menu.classList.toggle("open");
    return;
  }

  // 内側（dropdown内）のクリックは閉じない
  if (e.target.closest(".menu-selector")) {
    return;
  }

  // 外側クリックで閉じる
  menu.classList.remove("open");
});
