function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Batas Awal toggle menu hamburger
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");
mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active"); // Menambahkan atau menghapus kelas
  ("active");
});
// Batas Akhir toggle menu hamburger

function showModal() {
  const modal = document.getElementById("aboutModal");
  modal.classList.add("active");
}

function closeModal() {
  const modal = document.getElementById("aboutModal");
  modal.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("aboutModal");
  modal.classList.remove("active");
});

window.onclick = function (event) {
  const modal = document.getElementById("aboutModal");
  if (event.target === modal) {
    closeModal();
  }
};
