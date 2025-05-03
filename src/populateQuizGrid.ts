export let quizDict = [
  {
    chiTitle: "要更快乐",
    engTitle: "To be Happier",
    chiText: "",
    engText: "",
    audio: "",
  },
  {
    chiTitle: "增长智慧",
    engTitle: "Increase wisdom",
    chiText: "",
    engText: "",
    audio: "",
  },
  {
    chiTitle: "更加善良",
    engTitle: "Increase compassion",
    chiText: "",
    engText: "",
    audio: "",
  },
  {
    chiTitle: "结交善友",
    engTitle: "Virtuous Friends",
    chiText: "",
    engText: "",
    audio: "",
  },
  {
    chiTitle: "健康长寿",
    engTitle: "Health & Longevity",
    chiText: "",
    engText: "",
    audio: "",
  },
  {
    chiTitle: "减少烦恼",
    engTitle: "Reduce afflictions",
    chiText: "",
    engText: "",
    audio: "",
  },
  {
    chiTitle: "增加福报",
    engTitle: "Increase Merits",
    chiText: "",
    engText: "",
    audio: "",
  },
  {
    chiTitle: "生命意义",
    engTitle: "Meaning of life",
    chiText: "",
    engText: "",
    audio: "",
  },
  {
    chiTitle: "停止痛苦",
    engTitle: "Stop suffering",
    chiText: "",
    engText: "",
    audio: "",
  },
  {
    chiTitle: "家庭和谐",
    engTitle: "Family Harmony",
    chiText: "",
    engText: "",
    audio: "",
  },
  {
    chiTitle: "不堕恶趣",
    engTitle: "No lower realms",
    chiText: "",
    engText: "",
    audio: "",
  },
  {
    chiTitle: "脱离轮回",
    engTitle: "Break the cycle",
    chiText: "",
    engText: "",
    audio: "",
  },
  {
    chiTitle: "我要成佛",
    engTitle: "Attain buddhahood",
    chiText: "",
    engText: "",
    audio: "",
  },
  {
    chiTitle: "心力变强",
    engTitle: "Enhance mental strength",
    chiText: "",
    engText: "",
    audio: "",
  },
  {
    chiTitle: "佛门礼仪",
    engTitle: "Buddhist etiquette",
    chiText: "",
    engText: "",
    audio: "",
  },
  {
    chiTitle: "面对逆境",
    engTitle: "Learn to face adversity",
    chiText: "",
    engText: "",
    audio: "",
  },
];

export function populateQuizGrid(quizDict) {
  const quizGridDiv = document.getElementById("quizGridDiv");
  quizGridDiv.innerHTML = ""; // Clear existing content

  quizDict.forEach((item) => {
    const label = document.createElement("label");
    label.className = "quizGrid flex justify-between items-center gap-2";
    label.setAttribute("for", item.chiTitle);

    const input = document.createElement("input");
    input.type = "radio";
    input.className = "quizRadio";
    input.name = "quiz";
    input.id = item.chiTitle;
    input.value = item.chiTitle;

    const engSpan = document.createElement("span");
    engSpan.className = "text-center grow flex items-center";
    engSpan.textContent = item.engTitle;

    const chiSpan = document.createElement("span");
    chiSpan.className = "text-4xl text-center";
    chiSpan.textContent = item.chiTitle;

    label.appendChild(input);
    label.appendChild(engSpan);
    label.appendChild(chiSpan);
    quizGridDiv.appendChild(label);
  });

  // reattach event listeners after dynamic rendering
  attachQuizListeners();
}
