const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".link");

const options = {
  threshold: 0.29,
};

const observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;
    const activeNav = document.querySelector(`[data-page = ${className}]`);
    const navIndex = entry.target.getAttribute("data-index");

    if (entry.isIntersecting) {
      navLinks.forEach((nav) => {
        if (nav === navLinks[navIndex]) {
          nav.style.color = "black";
          nav.style.fontWeight = "bolder";
        } else {
          nav.style.color = "#f2f6f8";
          nav.style.fontWeight = "lighter";
        }
      });
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});

// Navbar silde animation------------------------------

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});
