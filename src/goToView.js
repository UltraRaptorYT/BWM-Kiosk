export function goToView(targetId, onHideCallback = null) {
  const views = [
    "#homeDiv",
    "#quizDiv",
    "#lifeDiv",
    "#seminarDiv",
    "#signupDiv",
    "#wheelSpinnerDiv",
  ];

  const videoEmbedContainer = document.getElementById("videoEmbed");

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

  if (targetId === "#quizDiv") {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  if (targetId === "#lifeDiv") {
    const playlistId = "PL2veEdJiJs8gu8wUp7UsWXNJR8j-O7axn";
    const totalVideos = 7;
    const randomIndex = Math.floor(Math.random() * totalVideos) + 1;

    console.log(randomIndex);

    if (videoEmbedContainer) {
      videoEmbedContainer.innerHTML = `
        <iframe width="1280" height="720"
          src="https://www.youtube.com/embed/videoseries?list=${playlistId}&index=${randomIndex}"
          title="YouTube Playlist"
          frameborder="0"
          allowfullscreen>
        </iframe>
      `;
    }
  } else if (videoEmbedContainer) {
    videoEmbedContainer.innerHTML = "";
  }
}
