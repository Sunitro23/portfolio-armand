document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burger.classList.toggle("toggle");
    document.querySelectorAll(".line").forEach((line) => line.classList.toggle("toggle"));
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
      navLinks.classList.remove("active");
      burger.classList.remove("toggle");
      document.querySelectorAll(".line").forEach((line) => line.classList.remove("toggle"));
    });
  });

  // Fade-in on scroll for atouts
  const atoutsGrid = document.querySelector(".atouts-grid");
  const observerOptions = { threshold: 0.1 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  if (atoutsGrid) observer.observe(atoutsGrid);
});
