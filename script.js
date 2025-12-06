/* -------------------------------------------------------
   ENABLE JS-ONLY ANIMATIONS
------------------------------------------------------- */
document.documentElement.classList.add("js-enabled");

/* -------------------------------------------------------
   SMOOTH SCROLL FOR ALL INTERNAL LINKS
------------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: "smooth"
    });
  });
});

/* -------------------------------------------------------
   SCROLL SPY (HIGHLIGHT ACTIVE SECTION IN NAV)
------------------------------------------------------- */
const sections = document.querySelectorAll("section[id]");
const desktopLinks = document.querySelectorAll(".desktop-nav .nav-link");
const mobileLinks = document.querySelectorAll(".pill-btn");

function activateNav(id) {
  desktopLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${id}`));
  mobileLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${id}`));
}

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (scrollY >= top) current = section.getAttribute("id");
  });

  if (current) activateNav(current);
});

/* -------------------------------------------------------
   REVEAL ANIMATION (FADE-IN ON SCROLL)
------------------------------------------------------- */
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("reveal");
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".timeline-item, .panel, .card, .hero-copy").forEach(el => {
  el.classList.add("reveal"); // initial state
  revealObserver.observe(el);
});

/* -------------------------------------------------------
   FLOATING MOBILE NAV — AUTO HIDE/SHOW
------------------------------------------------------- */
let lastScroll = 0;
const mobileNav = document.querySelector(".mobile-pill-nav");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 120) {
    // scrolling down → hide
    mobileNav.style.opacity = "0";
    mobileNav.style.transform = "translate(-50%, 20px)";
  } else {
    // scrolling up → show
    mobileNav.style.opacity = "1";
    mobileNav.style.transform = "translate(-50%, 0)";
  }
  lastScroll = currentScroll;
});

/* -------------------------------------------------------
   TIMELINE INTERACTION
   - Desktop: expand on hover (handled by CSS)
   - Mobile: tap to expand
------------------------------------------------------- */
document.querySelectorAll(".timeline-item").forEach(item => {
  const toggle = item.querySelector(".timeline-toggle");

  toggle.addEventListener("click", () => {
    if (window.innerWidth < 860) {
      item.classList.toggle("expanded");
    }
  });
});
