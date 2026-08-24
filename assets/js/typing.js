const typingElement = document.querySelector(".hero-text-typing");

if (typingElement) {
  const text = "MGSystems";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    typingElement.textContent = text;
  } else {
    typingElement.textContent = "";
    const characters = Array.from(text, (character) => {
      const span = document.createElement("span");
      span.textContent = character;
      typingElement.appendChild(span);
      return span;
    });

    let index = 0;
    const timer = window.setInterval(() => {
      characters[index].style.display = "inline";
      index += 1;
      if (index >= characters.length) window.clearInterval(timer);
    }, 100);
  }
}
