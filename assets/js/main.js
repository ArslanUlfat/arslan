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
  const projectCards = Array.from(document.querySelectorAll('.project-card'));
  const paginationControls = document.getElementById('pagination-controls');
  const itemsPerPage = 3;
  let currentPage = 1;

  function displayPage(page, filteredCards) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    projectCards.forEach(card => {
      card.style.display = 'none';
    });

    filteredCards.slice(start, end).forEach(card => {
      card.style.display = 'block';
    });

    updatePaginationControls(page, filteredCards);
  }

  function updatePaginationControls(page, filteredCards) {
    paginationControls.innerHTML = '';
    const totalPages = Math.ceil(filteredCards.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.className = `px-4 py-2 mx-1 rounded-lg ${i === page ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'}`;
      button.addEventListener('click', () => displayPage(i, filteredCards));
      paginationControls.appendChild(button);
    }
  }

  function initialize() {
    const allButton = document.querySelector('.filter-btn[data-filter="all"]');
    allButton.classList.add('bg-blue-600', 'text-white');
    allButton.classList.remove('bg-gray-200', 'text-gray-900');

    const allCards = projectCards.slice();
    allCards.forEach(card => card.classList.add('visible'));

    displayPage(currentPage, allCards);
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      filterButtons.forEach(btn => btn.classList.remove('bg-blue-600', 'text-white'));
      filterButtons.forEach(btn => btn.classList.add('bg-gray-200', 'text-gray-900'));

      button.classList.add('bg-blue-600', 'text-white');
      button.classList.remove('bg-gray-200', 'text-gray-900');

      const filteredCards = projectCards.filter(card => {
        return filter === 'all' || card.getAttribute('data-category') === filter;
      });

      currentPage = 1;
      displayPage(currentPage, filteredCards);
    });
  });

  initialize();
});