const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountainBehind = document.getElementById("mountains_behind");
const button = document.getElementById("btn");

window.addEventListener("scroll", () => {
  const value = window.scrollY;
  stars.style.left = value + 0.2 + "px";
  moon.style.top = value + 1.05 + "px";
  mountainBehind.style.top = value + 0.8 + "px";
  button.style.marginTop = value + 2 + "px";
});
