// =====================
// Dropdown
// =====================
document.addEventListener("click", (e) => {
  const menu = document.querySelector(".menu-selector");

  // --- Menu 開閉 ---
  if (e.target.closest(".menu-btn")) {
    menu.classList.toggle("open");
    return; // ← ここ超重要！（即閉じを防ぐ）
  }

  // dropdown 内クリックは閉じない
  if (e.target.closest(".menu-selector")) {
    return;
  }

  // 外側クリックで閉じる
  menu.classList.remove("open");
});
