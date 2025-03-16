export function redirect(element, link, target = "_self") {
  element.addEventListener("click", () => {
    window.open(link, target);
  });
}
