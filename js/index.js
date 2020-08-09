window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector("#hamburger");
  const menus = document.querySelector("#menus");

  hamburger.addEventListener("click", () => {
    if (menus.className.includes("show")) {
      menus.classList.remove("show");
    } else {
      menus.classList.add("show");
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    if (menus.className.includes("show")) {
      menus.classList.remove("show");
    }
  }
});
