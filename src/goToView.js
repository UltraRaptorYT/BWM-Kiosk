export function goToView(targetId, onHideCallback = null) {
  const views = [
    "#homeDiv",
    "#quizDiv",
    "#lifeDiv",
    "#seminarDiv",
    "#signupDiv",
    "#wheelSpinnerDiv",
  ];

  views.forEach((selector) => {
    const el = document.querySelector(selector);
    if (!el.classList.contains("hidden") && onHideCallback) {
      onHideCallback();
    }
    el.classList.add("hidden");
  });

  const target = document.querySelector(targetId);
  if (target) {
    target.classList.remove("hidden");
  }

  if (targetId == "#quizDiv") {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
}
