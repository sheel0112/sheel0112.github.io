/* Footer year */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* Highlight the nav link for the section in view */
const navLinks = document.querySelectorAll(".desktop-nav .nav-link");
const sections = [...navLinks]
  .map(link => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const spy = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === id));
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach(s => spy.observe(s));
}
