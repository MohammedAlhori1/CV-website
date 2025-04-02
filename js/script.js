// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
});

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const themeIcon = document.querySelector(".theme-toggle i");
  if (document.body.classList.contains("dark-mode")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Skill Animation
const skillCards = document.querySelectorAll(".skill-card");
const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelector(".skill-progress").style.width = entry.target
        .querySelector(".skill-progress")
        .getAttribute("style")
        .split(":")[1];
    }
  });
}, observerOptions);

skillCards.forEach((card) => observer.observe(card));
