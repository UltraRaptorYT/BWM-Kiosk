import "./index.css";
import { quizToggle } from "./quiz";
import { redirect } from "./redirect";

document.querySelector("#app").innerHTML = `
  <div class="heroBG fullHeight relative" id="homeDiv">
    <h1 id="lamrimTitle">《菩提道次第广论》</h1>
    <div id="buddhistCollageDiv" class="flex flex-col gap-3 justify-center">
      <h1>吉祥宝聚寺.佛学院</h1>
      <button class="flex flex-col btn-green text-xl btn">
        <span>佛学系列讲座</span>
        <span>Buddhism Seminars</span>
      </button>
      <button class="flex flex-col btn-green text-xl btn">
        <span>观赏：佛学班回顾一年</span>
        <span>Life of a Buddhism Class</span>
      </button>
    </div>
    <div
      id="registerDiv"
      class="flex flex-col gap-3 justify-center items-start"
    >
      <button
        class="flex flex-col btn-green text-4xl btn btn-xl"
        id="registerBtn"
      >
        <span>我要报名！</span>
      </button>
      <button
        class="flex flex-col btn-green text-4xl btn btn-xl"
        id="quizBtn"
      >
        <span>为什么今生一定要学佛法？</span>
      </button>
    </div>
    <div id="disclaimer">
      <span class="text-lg">*所有课程免费！</span>
    </div>
  </div>
  <div class="hidden fullHeight relative p-5" id="quizDiv">
    <button class="btn bg-transparent" id="quizHomeBtn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
        <path
          d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
        />
      </svg>
    </button>
    <h1 class="text-4xl">为什么今生一定要学习佛法？</h1>
    <div class="flex flex-wrap-reverse p-5 w-full gap-5">
      <div class="grid grid-cols-4 bg-red-900 p-5 gap-3">
        <button class="quizGrid">
          <span class="text-6xl">想要快乐</span>
          <span class="text-lg">Happiness</span>
        </button>
        <button class="quizGrid">
          <span class="text-6xl">想要快乐</span>
          <span class="text-lg">Happiness</span>
        </button>
        <button class="quizGrid">
          <span class="text-6xl">想要快乐</span>
          <span class="text-lg">Happiness</span>
        </button>
        <button class="quizGrid">
          <span class="text-6xl">想要快乐</span>
          <span class="text-lg">Happiness</span>
        </button>
        <button class="quizGrid">
          <span class="text-6xl">想要快乐</span>
          <span class="text-lg">Happiness</span>
        </button>
        <button class="quizGrid">
          <span class="text-6xl">想要快乐</span>
          <span class="text-lg">Happiness</span>
        </button>
        <button class="quizGrid">
          <span class="text-6xl">想要快乐</span>
          <span class="text-lg">Happiness</span>
        </button>
        <button class="quizGrid">
          <span class="text-6xl">想要快乐</span>
          <span class="text-lg">Happiness</span>
        </button>
        <button class="quizGrid">
          <span class="text-6xl">想要快乐</span>
          <span class="text-lg">Happiness</span>
        </button>
        <button class="quizGrid">
          <span class="text-6xl">想要快乐</span>
          <span class="text-lg">Happiness</span>
        </button>
        <button class="quizGrid">
          <span class="text-6xl">想要快乐</span>
          <span class="text-lg">Happiness</span>
        </button>
        <button class="quizGrid">
          <span class="text-6xl">想要快乐</span>
          <span class="text-lg">Happiness</span>
        </button>
        <button class="quizGrid">
          <span class="text-6xl">想要快乐</span>
          <span class="text-lg">Happiness</span>
        </button>
        <button class="quizGrid">
          <span class="text-6xl">想要快乐</span>
          <span class="text-lg">Happiness</span>
        </button>
        <button class="quizGrid">
          <span class="text-6xl">想要快乐</span>
          <span class="text-lg">Happiness</span>
        </button>
        <button class="quizGrid">
          <span class="text-6xl">想要快乐</span>
          <span class="text-lg">Happiness</span>
        </button>
      </div>
      <div class="relative grow flex items-center grow justify-center">
        <p class="text-3xl">Please choose one!</p>
        <button
        class="absolute flex flex-col btn-green text-4xl btn btn-xl hidden"
        id="quizRegisterBtn"
      >
        <span>我要报名！</span>
      </button>
      </div>
    </div>
  </div>
`;

redirect(
  document.querySelector("#registerBtn"),
  "http://bit.ly/bwm_lrclass",
  "_blank"
);
redirect(
  document.querySelector("#quizRegisterBtn"),
  "http://bit.ly/bwm_lrclass",
  "_blank"
);
quizToggle(document.querySelector("#quizBtn"));
quizToggle(document.querySelector("#quizHomeBtn"));

document.querySelector("#quizDiv").classList.toggle("hidden");
document.querySelector("#homeDiv").classList.toggle("hidden");
