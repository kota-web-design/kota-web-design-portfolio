document.addEventListener("DOMContentLoaded", () => {

  const header = document.querySelector(".header");
  const toggle = document.querySelector(".header__toggle");
  const navLinks = document.querySelectorAll(".header__nav a");

  const closeMenu = () => {
    if (!header || !toggle) return;
    header.classList.remove("open");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "メニューを開く");
  };

  const openMenu = () => {
    if (!header || !toggle) return;
    header.classList.add("open");
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "メニューを閉じる");
  };

  // ハンバーガー開閉
  if (toggle && header) {
    toggle.addEventListener("click", () => {
      if (header.classList.contains("open")) {
        closeMenu();
        return;
      }

      openMenu();
    });
  }

  // メニュークリックで閉じる
  if (navLinks.length > 0 && header) {
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });
  }

  // 外クリックで閉じる
  document.addEventListener("click", (e) => {
    if (header && toggle) {
      if (!header.contains(e.target) && header.classList.contains("open")) {
        closeMenu();
      }
    }
  });

  // Escキーで閉じる（UX強化）
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && header) {
      closeMenu();
    }
  });

});
