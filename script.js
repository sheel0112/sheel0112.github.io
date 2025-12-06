/* -----------------------------------------------
   SMOOTH SCROLLING FOR NAV LINKS
------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


/* -----------------------------------------------
   ACTIVE NAV HIGHLIGHT ("Scroll Spy")
------------------------------------------------- */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function activateNav() {
  let scrollPos = window.scrollY + 120; // accounts for header height

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      // remove previous active
      navLinks.forEach(link => link.classList.remove("active"));

      // set new active
      const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activateNav);


/* -----------------------------------------------
   SCROLL FADE-IN ANIMATIONS (Stripe-style)
------------------------------------------------- */

const revealItems = document.querySelectorAll(
  ".panel, .card, .timeline-item, .section-header, .hero-inner"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach(item => observer.observe(item));

/* Add CSS class immediately for JS-enabled reveal animations */
document.body.classList.add("js-enabled");
