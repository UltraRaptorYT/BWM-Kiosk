import "./index.css";
import { toggle } from "./toggle";
import { redirect } from "./redirect";
import { populateQuizGrid, quizDict } from "./populateQuizGrid";

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
        <p class="engText">Why Study Buddhism?</p>
      </button>
      <button class="optionBG" id="registerBtn">
        <p class="chiText">想要报名佛学班？点击查看最新开课时间！</p>
        <p class="engText">Interested in joining a Buddhism Class?</p>
        <p class="engText">Click to see the latest schedule!</p>
      </button>
      <button class="optionBG" id="lifeBtn">
        <p class="chiText">观赏：我们佛学班的学习旅程</p>
        <p class="engText">Watch: Journey of our Buddhism Classes</p>
      </button>
      <button class="optionBG">
        <p class="chiText">心灵提升讲座</p>
        <p class="engText">Ad-hoc Buddhism Seminars</p>
      </button>
    </div>
    <div id="disclaimer">
      <span class="text-lg">*所有课程免费！</span>
    </div>
    <div id="wheelDiv" class="flex items-center gap-3">
      <div class="flex flex-col" id="wheelTitle">
        <p>抽一张智慧法语</p>
        <p>Spin the wheel to get your</p>
        </p>Wisdom Quote</p>
      </div>
      <img src="./wheel.png" id="wheel"/>
    </div>
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
      <h1 class="text-4xl text-outline goldText">
        为什么要<span class="redText">学佛？</span>
      </h1>
      <h1 class="text-4xl text-outline goldText">
        Why learn <span class="redText">Buddhism?</span>
      </h1>
    </div>
    <div class="flex p-5 w-full gap-5 h-full grow items-center">
      <div class="grid grid-cols-4 bg-red-900 p-5 gap-3" id="quizGridDiv">
      </div>
      <div class="relative grow flex items-center justify-center flex-col gap-3">
        <div class="text-2xl gap-3 flex flex-col" id="selectionTextChi">请选一个！</div>
        <div class="text-xl gap-3 flex flex-col" id="selectionTextEng">Please choose one!</div>
      </div>
    </div>
    <button
      class="absolute flex flex-col btn-gray text-4xl btn btn-xl hidden"
      id="quizRegisterBtn"
    >
      <span>我要报名！</span>
    </button>
  </div>
  <div class="hidden fullHeight relative bg-black flex items-center justify-center flex-col gap-3" id="lifeDiv">
    <div class="p-5 h-full">
      <button class="btn bg-transparent homeBtn" id="lifeHomeBtn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path
            d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
          />
        </svg>
      </button>
      <h1 class="text-white text-center">Life of a buddhism Class 佛学班同学们精彩的一年</h1>
      <div class="grow flex w-full h-full p-5 items-center justify-center">
        <iframe class="aspectVideo" src="https://www.youtube.com/embed/CrTUWIBVrkk?si=vKBcNnJ4iRqmMSTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  </div>
  <div class="hidden" id="seminarDiv">
    <button class="btn bg-transparent homeBtn" id="seminarHomeBtn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path
          d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
        />
      </svg>
    </button>
  </div>
`;

populateQuizGrid(quizDict);
redirect(
  document.querySelector("#registerBtn"),
  "http://bwm.sg/signup",
  "_blank"
);
redirect(
  document.querySelector("#quizRegisterBtn"),
  "http://bwm.sg/signup",
  "_blank"
);
toggle(document.querySelector("#quizBtn"), "quiz");
toggle(document.querySelector("#quizHomeBtn"), "quiz");
toggle(document.querySelector("#lifeBtn"), "life");
toggle(document.querySelector("#lifeHomeBtn"), "life");
toggle(document.querySelector("#seminarBtn"), "seminar");
toggle(document.querySelector("#seminarHomeBtn"), "seminar");

// let quizDict = {
//   想要快乐: {
//     text: [
//       "學經典和苦樂有沒有關係？學經典究竟可不可以去除痛苦，可不可以得到究竟的快樂？是不是離苦得樂的途徑？如果是途徑的話，我們拿多少時間來學習教典呢？如果說它是途徑，為什麼它是途徑呢？因為痛苦如果源於顛倒的認知、源於錯誤的看法，那麼把錯誤的看法顛倒過來的那個就是最重要的。那麼誰的語言、誰的勸說、誰的話語、誰的經典，可以讓我們把心中的錯誤改變呢？說：「法、佛法！」法有什麼樣的作用？能不能改變我們？能不能救護我們？法的定義喔！改變我們什麼呢？一定是改變苦的，然後把沒有得到的快樂得到，這叫改變。救護，救護是什麼意思？如果活得好好的，救我幹什麼呀？一定是從苦的地方救走，救到樂的地方，所以這是法的特質。",
//     ],
//     audio: "happiness.mp3",
//   },
//   增长智慧: {
//     text: [
//       "雖然說文殊菩薩代表智慧，就是這樣交代一句，實際上師父在引領我們走近文殊菩薩，走近光明和智慧的代表，走進論典、走進經典、走進佛菩薩偉大的心；學會去恭敬禮敬這樣的心、去傾聽這樣的心、去追隨這樣的心、去學習這樣的心。然後就必將結束我們在林林總總的對境之中所產生的種種非理作意呀、觀過啊，或者由於誤解、沒有聽明白等等，所產生的人與人之間的傷害；必將由於聽聞教典，讓我們更清澈地了解什麼是最正確的量，因為它就是智慧！從一個無染的心、從一個無漏的心裡邊顯示出來一個量，我們會去學習校對這樣的量、聽聞這樣的量，並且在心中先是熟悉、記住，然後慢慢去比對自心、調整我們的心。皈敬文殊菩薩、歸向智慧，翻轉由愚癡導致的一切痛苦的因和果。",
//     ],
//     audio: "wisdom.mp3",
//   },
//   更加善良: { text: [""], audio: "" },
//   结交善友: { text: [""], audio: "" },
//   健康长寿: { text: [""], audio: "" },
//   减少烦恼: { text: [""], audio: "" },
//   增加福报: { text: [""], audio: "" },
//   生命意义: { text: [""], audio: "" },
//   停止痛苦: {
//     text: [
//       "學經典和苦樂有沒有關係？學經典究竟可不可以去除痛苦，可不可以得到究竟的快樂？是不是離苦得樂的途徑？如果是途徑的話，我們拿多少時間來學習教典呢？如果說它是途徑，為什麼它是途徑呢？因為痛苦如果源於顛倒的認知、源於錯誤的看法，那麼把錯誤的看法顛倒過來的那個就是最重要的。那麼誰的語言、誰的勸說、誰的話語、誰的經典，可以讓我們把心中的錯誤改變呢？說：「法、佛法！」法有什麼樣的作用？能不能改變我們？能不能救護我們？法的定義喔！改變我們什麼呢？一定是改變苦的，然後把沒有得到的快樂得到，這叫改變。救護，救護是什麼意思？如果活得好好的，救我幹什麼呀？一定是從苦的地方救走，救到樂的地方，所以這是法的特質。",
//     ],
//     audio: "suffering.mp3",
//   },
//   家庭和谐: {
//     text: [
//       "在廣論班研討的時候，我們都知道家家都有很難處理的問題，有的問題就是經年累月地處理不了──其實不是問題處理不了，是心裡想不開呀！怎麼想也想不開，所以怎麼辦呢？大家選擇來學法，透過開發自己的智慧、開發自己的慈悲心，讓自己開心之後，就會發現：其實不用特別非得讓別人都做對了，自己才能夠開心，不是那麼被動的，是只要學到法了，只要心意開解自己就開心。而這個心意開解，不一定都依靠周圍的人給你的力量，是依靠法就可以讓心得到力量，自己就開解了。我們自己開心了，那不開心的人看到你開心，他也開心了。不然天天家裡邊愁苦著一張臉，大家都要看你的臉，這樣的話都很辛苦啊！",
//     ],
//     audio: "family_harmony.mp3",
//   },
//   不堕恶趣: {
//     text: [
//       "通常我們都是不了解自己，我們對自己的看法都是太狹隘或者完全顛倒的，因為佛菩薩會認為我們在人天善道、我們在人道，我們是有能力修行的。",

//       "視野遼闊吧！我們從人間一下子看到了六道，看到了：喔！在六道輪迴的有情裡，人天善道還是居在可以修善的這樣一個顯赫的位置！非常尊貴的位置！就是成為一個人。多麼偉大的事情──居然我是一個人，我在人道！",
//       "平常沒有意識到這件事不容易吧！因為我們不會去六道輪迴這樣想啊！我們會覺得好像本來就是一個人、永遠都是一個人，都不會失去這個人身一般。可是在這裡邊六道啊、六道，我們好不容易得到了一個人身，而這個人身在最開始修行的時候是可能修行的呀！",
//     ],
//     audio: "lower_realms.mp3",
//   },
//   脱离轮回: { text: [""], audio: "" },
//   我要成佛: {
//     text: [
//       "師父的期待非常地美，就是一直走上去，走到圓滿成佛的這條路。看看！第一盤還沒講完，師父就已經提出了「圓滿成佛的這條路」。當這幾個字落入你我的耳根，融進了我們的內心的時候，這幾個字在我們生命中所產生的作用，是非常非常震撼的！因為我們居然知道了有成佛這件事！居然知道了有一個善知識，將在《廣論》裡和我們詳細地討論關於「我」怎麼樣成佛的事情。這個「我」，是坐在你的錄音機邊啊，還是手機旁，坐在什麼旁邊跟我們一起學《廣論》的，就是很多個「我」。居然有一個善知識跟我們討論「我」怎麼樣成佛這件事情！所以不管我知道得多少、我習氣多重啊、我沒有時間啊、我笨啊，甚至我身體不好呀，我把其他的事情做完我就沒有體力學……這都沒關係！因為就這麼短的時間，師父還是來為我們講這件事了，我們遇到他了！",
//     ],
//     audio: "buddhahood.mp3",
//   },
//   心力变强: { text: [""], audio: "" },
//   佛门礼仪: { text: [""], audio: "" },
//   面对逆境: {
//     text: [
//       "「佛子雖逢難，善增罪不生。」這裡邊就講的是一樣的道理。",
//       "",
//       "那為什麼他在惡劣的環境中反而增加善呢？增加他的慈悲心呢？就是因為他知道外境的這種好與醜並不能決定自己是幸福或者悲慘，真正讓我們的生命朝著增上的那個目標而去的，就是我們內心對所經歷的這件事的看法。不是說經歷了什麼事你就一定會怎樣，而是正在經歷這件事情時候，你對它的見解是什麼？這個見解是我們每個人要自己弄清楚：這個境是來淨化我們的，還是來──考驗嗎？考驗什麼？考驗會不會執持善念或善法呀！",
//     ],
//     audio: "adversity.mp3",
//   },
// };

// document.querySelectorAll(".quizRadio").forEach((radio) => {
//   radio.addEventListener("click", function (event) {
//     stopAudio();
//     if (this === lastChecked) {
//       // Deselect the radio if it was already selected
//       this.checked = false;
//       lastChecked = null;
//       document.getElementById("selectionText").innerText = "Please choose one!";
//       document.querySelector("#quizRegisterBtn").classList.add("hidden");
//     } else {
//       lastChecked = this;
//       document.getElementById("selectionText").innerHTML = "";
//       for (let text of quizDict[this.value]["text"]) {
//         let paragraph = document.createElement("p");
//         paragraph.textContent = text;
//         document.getElementById("selectionText").append(paragraph);
//       }
//       document.querySelector("#quizRegisterBtn").classList.remove("hidden");
//       fetch(
//         `${backend_url}/stream-audio?audio=${quizDict[this.value]["audio"]}`
//       )
//         .then((response) => response.blob())
//         .then((blob) => {
//           const url = URL.createObjectURL(blob);

//           if (currentAudio) {
//             currentAudio.pause();
//             currentAudio.currentTime = 0; // Reset playback to the start
//           }

//           currentAudio = new Audio(url);
//           currentAudio.play();
//         })
//         .catch((error) => console.error("Error loading audio:", error));
//     }
//   });
// });
