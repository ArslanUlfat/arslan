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

document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const projectCards = document.querySelectorAll('.project-card');
  const paginationControls = document.getElementById('pagination-controls');
  const itemsPerPage = 3;
  let currentPage = 1;

  function displayPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    projectCards.forEach((card, index) => {
      card.style.display = (index >= start && index < end) ? 'block' : 'none';
    });

    updatePaginationControls(page);
  }

  function updatePaginationControls(page) {
    paginationControls.innerHTML = '';
    const totalPages = Math.ceil(projectCards.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.className = `px-4 py-2 mx-1 rounded-lg ${i === page ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'}`;
      button.addEventListener('click', () => displayPage(i));
      paginationControls.appendChild(button);
    }
  }

  displayPage(currentPage);
});