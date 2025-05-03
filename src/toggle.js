export function toggle(element, type, onHideCallback = null) {
  element.addEventListener("click", () => {
    const homeDiv = document.querySelector("#homeDiv");

    if (type === "quiz") {
      if (!quizDiv.classList.contains("hidden") && onHideCallback) {
        onHideCallback(); // Call cleanup before hiding
      }
      quizDiv.classList.toggle("hidden");
      homeDiv.classList.toggle("hidden");
    } else if (type === "life") {
      const lifeDiv = document.querySelector("#lifeDiv");
      if (!lifeDiv.classList.contains("hidden") && onHideCallback) {
        onHideCallback();
      }
      lifeDiv.classList.toggle("hidden");
      homeDiv.classList.toggle("hidden");
    } else if (type === "seminar") {
      const seminarDiv = document.querySelector("#seminarDiv");
      if (!seminarDiv.classList.contains("hidden") && onHideCallback) {
        onHideCallback();
      }
      seminarDiv.classList.toggle("hidden");
      homeDiv.classList.toggle("hidden");
    } else if (type === "wheel") {
      const wheelSpinnerDiv = document.querySelector("#wheelSpinnerDiv");
      if (!wheelSpinnerDiv.classList.contains("hidden") && onHideCallback) {
        onHideCallback();
      }
      wheelSpinnerDiv.classList.toggle("hidden");
      homeDiv.classList.toggle("hidden");
    } else if (type === "signup") {
      const signupDiv = document.querySelector("#signupDiv");
      if (!signupDiv.classList.contains("hidden") && onHideCallback) {
        onHideCallback();
      }
      signupDiv.classList.toggle("hidden");
      homeDiv.classList.toggle("hidden");
    } else {
      console.log(type, "TOGGLE ERROR!");
    }
  });
}
