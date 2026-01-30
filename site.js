document.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector("h1");

  h1.addEventListener("mouseover", function () {
    h1.textContent = "Welcome to my website!";
  });
});