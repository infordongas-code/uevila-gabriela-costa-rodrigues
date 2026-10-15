const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuToggle.textContent = "☰";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
