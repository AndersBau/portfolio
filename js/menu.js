const hamburguer = document.querySelector(".nav_burguer");
const nav_ul = document.querySelector(".nav_ul");
const navlinks = document.querySelector(".nav_li")

const line1 = document.querySelector(".nav_burguer--1");
const line2 = document.querySelector(".nav_burguer--2");
const line3 = document.querySelector(".nav_burguer--3");

hamburguer.addEventListener("click", () => {
   nav_ul.classList.toggle("nav_ul--open");
   line1.classList.toggle("nav_b1--active");
   line2.classList.toggle("nav_b2--active");
   line3.classList.toggle("nav_b3--active");
});

