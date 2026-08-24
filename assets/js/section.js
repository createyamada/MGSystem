const sectionTitles = document.querySelectorAll(
  ".president-section, .company-section, .develop-section"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-animated");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sectionTitles.forEach((title) => observer.observe(title));
} else {
  sectionTitles.forEach((title) => title.classList.add("is-animated"));
}
