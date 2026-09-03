const hamburger = document.getElementById("hamburger");
const whiteLogo = document.getElementById("whiteLogo");
const blackLogo = document.getElementById("blackLogo");
const pageHeader = document.querySelector(".page-header");
const topMenus = document.querySelectorAll(".top-menu");
const themedSections = document.querySelectorAll("[data-header-theme]");
const presidentDisclosures = document.querySelectorAll(".president-disclosure");

document.querySelectorAll(".resMenu").forEach((menu) => {
  menu.addEventListener("click", () => {
    if (hamburger) hamburger.checked = false;
  });
});

function logoColorChange() {
  if (!whiteLogo || !blackLogo) return;

  const headerReferenceY = pageHeader?.getBoundingClientRect().bottom ?? 50;
  const currentSection = Array.from(themedSections).find((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= headerReferenceY && rect.bottom >= headerReferenceY;
  });
  const isOverLightArea = currentSection?.dataset.headerTheme === "light";

  whiteLogo.classList.toggle("nonDisp", isOverLightArea);
  blackLogo.classList.toggle("nonDisp", !isOverLightArea);
  pageHeader?.classList.toggle("is-light-background", isOverLightArea);
  topMenus.forEach((menu) => {
    menu.style.color = isOverLightArea ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)";
  });
}

let scrollUpdatePending = false;
function requestHeaderUpdate() {
  if (scrollUpdatePending) return;
  scrollUpdatePending = true;
  window.requestAnimationFrame(() => {
    logoColorChange();
    scrollUpdatePending = false;
  });
}

window.addEventListener("scroll", requestHeaderUpdate, { passive: true });
window.addEventListener("resize", requestHeaderUpdate);
window.addEventListener("hashchange", requestHeaderUpdate);
window.addEventListener("pageshow", requestHeaderUpdate);
window.addEventListener("load", () => window.setTimeout(requestHeaderUpdate, 0));
logoColorChange();

function syncPresidentDisclosures() {
  presidentDisclosures.forEach((disclosure) => {
    disclosure.open = window.innerWidth >= 1025;
  });
}

window.addEventListener("resize", syncPresidentDisclosures);
syncPresidentDisclosures();
