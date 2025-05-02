export function toggle(element, type) {
  element.addEventListener("click", () => {
    if (type == "quiz") {
      document.querySelector("#quizDiv").classList.toggle("hidden");
      document.querySelector("#homeDiv").classList.toggle("hidden");
    } else if (type == "life") {
      document.querySelector("#lifeDiv").classList.toggle("hidden");
      document.querySelector("#homeDiv").classList.toggle("hidden");
    } else if (type == "seminar") {
      document.querySelector("#seminarDiv").classList.toggle("hidden");
      document.querySelector("#homeDiv").classList.toggle("hidden");
    } else {
      console.log(type, "TOGGLE ERROR!");
    }
  });
}
