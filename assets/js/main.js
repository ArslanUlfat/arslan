document.addEventListener("DOMContentLoaded", function() {
  const sweetScroll = new SweetScroll({ /* options */ });

  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const navbar = document.querySelector("[data-navbar]");
  const navLinks = document.querySelectorAll(".nav-link");

  navTogglers.forEach(toggler => {
    toggler.addEventListener("click", () => {
      navbar.classList.toggle("hidden");
    });
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.add("hidden");
    });
  });
});

window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = scrollPercent + '%';
});


function scrollRight() {
  const container = document.querySelector('.horizontal-scroll');
  container.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
}

function scrollLefts() {
  const container = document.querySelector('.horizontal-scroll');
  container.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
}