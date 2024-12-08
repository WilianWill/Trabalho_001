const menuIcon = document.getElementById("menu_icon");
const menu = document.querySelector(".menu");

/* ebntos de menu ativo ao clicar */
menuIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    menuIcon.classList = "fa-solid fa-xmark";
  } else {
    menuIcon.classList = "fa-solid fa-bars";
  }
});

/* evento para esconder o menu ao clicar fora */
document.addEventListener("click", (e) => {
  let linkElement = e.target.closest("a");

  if (linkElement) {
    menu.classList.remove("active");
    menuIcon.classList = "fa-solid fa-bars";
  }

  if (!menu.contains(e.target) && e.target !== menuIcon) {
    menu.classList.remove("active");
  }

  if (menu.classList.contains("active")) {
    menuIcon.classList = "fa-solid fa-xmark";
  } else {
    menuIcon.classList = "fa-solid fa-bars";
  }
});

/* eventos para mudar o tamanho da fonte */
function changeFont() {
  let html = document.documentElement;
  let plus = document.getElementById("plus");
  let rotate = document.getElementById("rotate");

  plus.addEventListener("click", () => {
    html.style.fontSize = "20px";
  });

  rotate.addEventListener("click", () => {
    html.style.fontSize = "16px";
  });
}

changeFont();
