// =====================
// Dropdown
// =====================
document.addEventListener("click", (e) => {
  const menu = document.querySelector(".lang-selector, .menu-selector");

  // --- Menu 開閉 ---
  if (e.target.closest(".lang-btn, .menu-btn")) {
    menu.classList.toggle("open");
    return; // ← ここ超重要！（即閉じを防ぐ）
  }

  // dropdown 内クリックは閉じない
  if (e.target.closest(".lang-selector, .menu-selector")) {
    return;
  }

  // 外側クリックで閉じる
  menu.classList.remove("open");
});
