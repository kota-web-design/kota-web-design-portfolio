document.addEventListener("DOMContentLoaded", () => {

  const header = document.querySelector(".header");
  const toggle = document.querySelector(".header__toggle");
  const navLinks = document.querySelectorAll(".header__nav a");

  // ハンバーガー開閉
  if (toggle && header) {
    toggle.addEventListener("click", () => {
      header.classList.toggle("open");

      if (header.classList.contains("open")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });
  }

  // メニュークリックで閉じる
  if (navLinks.length > 0 && header) {
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        header.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // 外クリックで閉じる
  document.addEventListener("click", (e) => {
    if (header && toggle) {
      if (!header.contains(e.target) && header.classList.contains("open")) {
        header.classList.remove("open");
        document.body.style.overflow = "";
      }
    }
  });

  // Escキーで閉じる（UX強化）
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && header) {
      header.classList.remove("open");
      document.body.style.overflow = "";
    }
  });

});