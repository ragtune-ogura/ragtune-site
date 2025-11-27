function toggleLanguage() {
  alert('言語切替はまだ実装されていません');
}

// Dropdown toggle
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
