const navMenu = document.getElementById("nav-menu");
const navLinksContainer = document.querySelector(".nav-links");
const navToggleBtn = document.getElementById("nav-toggle-btn");
const navLinks = document.querySelectorAll(".nav-link");

navToggleBtn.addEventListener("click", () => {
  const navMenuHeight = navMenu.getBoundingClientRect().height;
  const navLinksContainerHeight =
    navLinksContainer.getBoundingClientRect().height;

  if (navMenuHeight === 0) {
    navMenu.style.height = `${navLinksContainerHeight}px`;
  } else {
    navMenu.style.height = 0;
  }
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navMenu.style.height = 0;
  });
});

const homeBtn = document.getElementById("home-btn");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 600) {
    homeBtn.classList.add("show-home-button");
  } else {
    homeBtn.classList.remove("show-home-button");
  }
});
