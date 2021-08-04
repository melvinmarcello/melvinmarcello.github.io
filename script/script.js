const navHome = document.querySelector(".home");
const navAbout = document.querySelector(".about");
const navProject = document.querySelector(".project");
const navContact = document.querySelector(".contact");
const Name = document.querySelector(".navbar-brand");

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", function () {
    navbarShrink();
    navHome.style.color = "black";
    navAbout.style.color = "black";
    navProject.style.color = "black";
    navContact.style.color = "black";
    Name.style.color = "black";
  });
});

const home = document.querySelector("#home");

home.addEventListener("mouseover", function () {
  navHome.style.color = "white";
  navAbout.style.color = "white";
  navProject.style.color = "white";
  navContact.style.color = "white";
  Name.style.color = "white";
});
