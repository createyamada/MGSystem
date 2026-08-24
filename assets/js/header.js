const hamburger = document.getElementById("hamburger");
const whiteLogo = document.getElementById("whiteLogo");
const blackLogo = document.getElementById("blackLogo");
const pageHeader = document.querySelector(".page-header");
const topMenus = document.querySelectorAll(".top-menu");
const blackAreas = document.querySelectorAll(".black-area");

document.querySelectorAll(".resMenu").forEach((menu) => {
  menu.addEventListener("click", () => {
    if (hamburger) hamburger.checked = false;
  });
});

function logoColorChange() {
  if (!whiteLogo || !blackLogo) return;

  const headerReferenceY = pageHeader?.getBoundingClientRect().bottom ?? 50;
  const isOverBlackArea = Array.from(blackAreas).some((area) => {
    const rect = area.getBoundingClientRect();
    return rect.top <= headerReferenceY && rect.bottom >= headerReferenceY;
  });

  whiteLogo.classList.toggle("nonDisp", isOverBlackArea);
  blackLogo.classList.toggle("nonDisp", !isOverBlackArea);
  pageHeader?.classList.toggle("is-light-background", isOverBlackArea);
  topMenus.forEach((menu) => {
    menu.style.color = isOverBlackArea ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)";
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
