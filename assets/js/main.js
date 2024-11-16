document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("[data-navbar]");
  document.querySelectorAll("[data-nav-toggler]").forEach(toggler => 
    toggler.addEventListener("click", () => navbar.classList.toggle("hidden"))
  );
  document.querySelectorAll(".nav-link").forEach(link => 
    link.addEventListener("click", () => navbar.classList.add("hidden"))
  );
});

window.addEventListener("scroll", () => {
  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`;
});
const scrollHorizontal = (distance) => {
  document.querySelector(".horizontal-scroll").scrollBy({ left: distance, behavior: "smooth" });
};
const scrollRight = () => scrollHorizontal(300);
const scrollLefts = () => scrollHorizontal(-300);