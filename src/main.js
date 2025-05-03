import "./index.css";
import { toggle } from "./toggle";
// import { redirect } from "./redirect";
import {
  populateQuizGrid,
  quizDict,
  stopAudio,
  resetQuizState,
} from "./populateQuizGrid";
import { goToView } from "./goToView";

document.querySelector("#app").innerHTML = `
  <div class="heroBG fullHeight relative" id="homeDiv">
    <div id="imgDiv"></div>
    <div id="topLeftDiv" class="flex flex-col gap-4">
      <h1 id="lamrimTitle">佛学班招生！Find out more about our new Buddhism Classes here!</h1>
      <div>
        <p class="text-xl font-medium">一本蕴含无数智慧的宝典，通往快乐人生的详尽指南！</p>
        <p class="text-xl font-medium">A book of countless wisdom, a clear guide to a happy life!</p>
      </div>
    </div>
    <div class="flex flex-col gap-5" id="optionDiv">
      <button class="optionBG" id="quizBtn">
        <p class="chiText">为什么今生一定要学佛法？</p>
        <p class="engText">Why Learn Buddhism?</p>
      </button>
      <button class="optionBG" id="registerBtn">
        <p class="chiText">想要报名佛学班*？点击查看最新开课时间！</p>
        <p class="engText">Interested in joining a Buddhism Class*?</p>
        <p class="engText">Click to see the latest schedule!</p>
      </button>
      <button class="optionBG" id="lifeBtn">
        <p class="chiText">观赏：我们佛学班的学习旅程</p>
        <p class="engText">Watch: Journey of our Buddhism Classes</p>
      </button>
      <button class="optionBG" id="seminarBtn">
        <p class="chiText">心灵提升讲座</p>
        <p class="engText">Ad-hoc Buddhism Seminars</p>
      </button>
    </div>
    <div id="disclaimer">
      <span class="text-lg">*所有课程免费！All Classes are FOC!</span>
    </div>
    <button id="wheelDiv" class="flex items-center gap-3 bg-transparent">
      <div class="flex flex-col redText" id="wheelTitle">
        <p>抽一张智慧法语</p>
        <p>Spin the wheel to get your</p>
        </p>Wisdom Quote</p>
      </div>
      <img src="./wheel.png" id="wheel"/>
    </button>
  </div>
  <div class="hidden fullHeight relative p-5 flex flex-col" id="quizDiv">
    <button class="btn bg-transparent homeBtn" id="quizHomeBtn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path
          d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
        />
      </svg>
    </button>
    <div id="quizTitle">
      <h1 class="text-6xl text-outline goldText">
        为什么要<span class="redText">学佛？</span>
      </h1>
      <h1 class="text-6xl text-outline goldText">
        Why learn <span class="redText">Buddhism?</span>
      </h1>
    </div>
    <div class="flex p-5 w-full gap-5 h-full grow">
      <div class="grid grid-cols-4 bg-red-900 p-5 gap-3 self-center" id="quizGridDiv">
      </div>
      <div class="relative grow flex items-center justify-center flex-col gap-3 grow">
        <button id="playAudioBtn" class="text-xl btn btn-gray mr-auto hidden">
          ▶️ 播放音频 / Play Audio
        </button>

        <div class="text-2xl gap-3 flex flex-col" id="selectionTextChi">请选一个！</div>
        <div class="text-xl gap-3 flex flex-col" id="selectionTextEng">Please choose one!</div>
        <div id="specialSelection"></div>
        <button
          class="btn-gray text-4xl btn btn-xl hidden"
          id="quizRegisterBtn"
        >
          <span>现在报名 Sign up now</span>
        </button>
      </div>
    </div>

  </div>
  <div class="hidden fullHeight relative flex items-center justify-center flex-col gap-3" id="lifeDiv">
    <div class="p-5 h-full grow w-full flex flex-col items-center justify-center gap-5">
      <button class="btn bg-transparent homeBtn text-white" id="lifeHomeBtn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path
            d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
          />
        </svg>
      </button>
      <div class="redText text-4xl font-bold">我们佛学班的学习旅程 Life of our Buddhism Classes</div>
      <div id="videoEmbed"></div>
    </div>
  </div>
  <div class="hidden fullHeight flex items-center" id="seminarDiv">
    <button class="btn bg-transparent homeBtn" id="seminarHomeBtn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path
          d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
        />
      </svg>
    </button>
    <iframe src="https://bwmonastery.org.sg/calendar" width="100%" style="height:90vh" class="grow">
      <p>Your browser does not support iframes.</p>
    </iframe>
  </div>
  <div class="hidden fullHeight flex items-center justify-center" id="signupDiv">
    <button class="btn bg-transparent homeBtn" id="signupHomeBtn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path
          d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
        />
      </svg>
    </button>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSddjVJHAfv7dGYaX0igd07FHr7y-OCRCu_72sswv_BjgNy_AA/viewform?embedded=true" width="640" height="900" frameborder="0" marginheight="0" marginwidth="0">
      Loading…
    </iframe>
  </div>
  <div class="hidden fullHeight relative flex flex-col items-center justify-center" id="wheelSpinnerDiv">
    <button class="btn bg-transparent homeBtn" id="wheelHomeBtn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path
          d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
        />
      </svg>
    </button>
    <div class="flex flex-col absolute text-4xl" id="wheelSpinnerTitle">
      <p>抽一张智慧法语</p>
      <p>Spin the wheel to get your</p>
      </p>Wisdom Quote</p>
    </div>
    <div class="grow" id="wheelContainer">
      <fieldset class="ui-wheel-of-fortune" style="--_items: 28;">
        <ul data-itemCount="28">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
        </ul>
        <button type="button">SPIN</button>
      </fieldset>
    </div>

  </div>
`;

populateQuizGrid(quizDict);
// redirect(
//   document.querySelector("#registerBtn"),
//   "https://bwm.sg/signup",
//   "_blank"
// );
// redirect(
//   document.querySelector("#quizRegisterBtn"),
//   "https://bwm.sg/signup",
//   "_blank"
// );

document.querySelector("#quizBtn").addEventListener("click", () => {
  stopAudio();
  resetQuizState();
  goToView("#quizDiv");
});

document.querySelector("#quizHomeBtn").addEventListener("click", () => {
  stopAudio();
  resetQuizState();
  goToView("#homeDiv");
});

document.querySelector("#quizRegisterBtn").addEventListener("click", () => {
  stopAudio();
  resetQuizState();
  goToView("#signupDiv");
});

document.querySelector("#signupHomeBtn").addEventListener("click", () => {
  stopAudio();
  resetQuizState();
  goToView("#homeDiv");
});

document.querySelector("#registerBtn").addEventListener("click", () => {
  stopAudio();
  resetQuizState();
  goToView("#signupDiv");
});

document.querySelector("#lifeBtn").addEventListener("click", () => {
  const playlistId = "PL2veEdJiJs8gu8wUp7UsWXNJR8j-O7axn"; // Replace with your own playlist ID
  const totalVideos = 7; // Replace with actual count
  const randomIndex = Math.floor(Math.random() * totalVideos) + 1;

  console.log(randomIndex);

  const videoEmbedContainer = document.getElementById("videoEmbed");
  videoEmbedContainer.innerHTML = `
  <iframe width="1280" height="720"
    src="https://www.youtube.com/embed/videoseries?list=${playlistId}&index=${randomIndex}"
    title="YouTube Playlist"
    frameborder="0"
    allowfullscreen>
  </iframe>
`;

  stopAudio();
  resetQuizState();
  goToView("#lifeDiv");
});

document.querySelector("#lifeHomeBtn").addEventListener("click", () => {
  stopAudio();
  resetQuizState();
  goToView("#homeDiv");
});

document.querySelector("#seminarBtn").addEventListener("click", () => {
  stopAudio();
  resetQuizState();
  goToView("#seminarDiv");
});

document.querySelector("#seminarHomeBtn").addEventListener("click", () => {
  stopAudio();
  resetQuizState();
  goToView("#homeDiv");
});

document.querySelector("#wheelDiv").addEventListener("click", () => {
  stopAudio();
  resetQuizState();
  goToView("#wheelSpinnerDiv");
});

document.querySelector("#wheelHomeBtn").addEventListener("click", () => {
  stopAudio();
  resetQuizState();
  goToView("#homeDiv");
});

function getResultsAtTop(spinnerElement) {
  if (!spinnerElement) return null;

  const rect = spinnerElement.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const topY = rect.top + 0.05 * rect.height; // the arrow is 4%, so we use 5%
  const element = document.elementFromPoint(centerX, topY);
  if (element?.parentElement?.parentElement !== spinnerElement) return null;
  return element?.textContent?.trim() || null;
}

function wheelOfFortune(node) {
  if (!node) return;

  const spin = node.querySelector("button");
  const wheel = node.querySelector("ul");
  let animation;
  let previousEndDegree = 0;

  spin.addEventListener("click", () => {
    if (animation) {
      animation.cancel(); // Reset the animation if it already exists
    }

    const randomAdditionalDegrees = Math.random() * 360 + 1800;
    const newEndDegree = previousEndDegree + randomAdditionalDegrees;

    animation = wheel.animate(
      [
        { transform: `rotate(${previousEndDegree}deg)` },
        { transform: `rotate(${newEndDegree}deg)` },
      ],
      {
        duration: 4000,
        direction: "normal",
        easing: "cubic-bezier(0.440, -0.205, 0.000, 1.130)",
        fill: "forwards",
        iterations: 1,
      }
    );

    previousEndDegree = newEndDegree;
    animation.onfinish = () => {
      const currentValue = getResultsAtTop(node);
      spin.textContent = currentValue;
    };
  });
}

// Usage
document
  .querySelectorAll(".ui-wheel-of-fortune")
  .forEach((el) => wheelOfFortune(el));
// wheelOfFortune('.ui-wheel-of-fortune');
