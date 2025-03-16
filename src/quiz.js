export function quizToggle(element) {
  element.addEventListener("click", () => {
    document.querySelector("#quizDiv").classList.toggle("hidden");
    document.querySelector("#homeDiv").classList.toggle("hidden");
  });
}
