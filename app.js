const modes = {
  vocabulary: {
    label: "Vocabulary",
    title: "Cafe word quiz",
    tab: "Words",
    subtitle: "+5 XP",
    xp: 5,
    questions: [
      {
        type: "choice",
        prompt: "receipt",
        hint: "カフェで会計後にもらうもの",
        answer: "レシート / 領収書",
        choices: ["レシート / 領収書", "座席", "砂糖"],
        phrase: "Could I have a receipt?"
      },
      {
        type: "choice",
        prompt: "to go",
        hint: "店内ではなく持ち帰るときの表現",
        answer: "持ち帰り",
        choices: ["持ち帰り", "おかわり", "予約"],
        phrase: "To go, please."
      },
      {
        type: "choice",
        prompt: "decaf",
        hint: "カフェインなしの飲み物",
        answer: "カフェインレス",
        choices: ["カフェインレス", "氷なし", "大盛り"],
        phrase: "Do you have decaf coffee?"
      },
      {
        type: "choice",
        prompt: "extra hot",
        hint: "飲み物を熱めにしてほしいとき",
        answer: "熱め",
        choices: ["熱め", "甘さ控えめ", "小さいサイズ"],
        phrase: "Could you make it extra hot?"
      }
    ]
  },
  sentence: {
    label: "Sentence",
    title: "Build a useful phrase",
    tab: "Phrases",
    subtitle: "+12 XP",
    xp: 12,
    questions: [
      {
        type: "text",
        prompt: "ラテを1ついただけますか？",
        hint: "Could I have ... ? を使う",
        answer: "Could I have a latte?",
        accepted: ["could i have a latte", "can i have a latte", "i would like a latte"],
        phrase: "Could I have a latte?"
      },
      {
        type: "text",
        prompt: "持ち帰りでお願いします。",
        hint: "短く To go, please. で通じる",
        answer: "To go, please.",
        accepted: ["to go please", "takeout please", "for takeout please"],
        phrase: "To go, please."
      },
      {
        type: "text",
        prompt: "以上です。ありがとうございます。",
        hint: "注文を終えるときの定番",
        answer: "That's all, thank you.",
        accepted: ["that's all thank you", "that is all thank you", "that's it thank you"],
        phrase: "That's all, thank you."
      }
    ]
  },
  conversation: {
    label: "Conversation",
    title: "Order from the barista",
    tab: "Roleplay",
    subtitle: "+20 XP",
    xp: 20,
    questions: [
      {
        type: "text",
        speaker: "Barista",
        prompt: "Hi. What can I get for you?",
        hint: "飲み物を注文する。例: Could I have ... ?",
        answer: "Could I have a latte?",
        accepted: ["could i have", "can i have", "i would like", "i'd like"],
        phrase: "Could I have a latte?"
      },
      {
        type: "text",
        speaker: "Barista",
        prompt: "For here or to go?",
        hint: "店内か持ち帰りかを答える",
        answer: "To go, please.",
        accepted: ["to go", "for here", "takeout", "here please"],
        phrase: "To go, please."
      },
      {
        type: "text",
        speaker: "Barista",
        prompt: "Anything else?",
        hint: "注文を終える",
        answer: "That's all, thank you.",
        accepted: ["that's all", "that is all", "that's it", "no thank you"],
        phrase: "That's all, thank you."
      }
    ]
  }
};

const upgrades = [
  {
    xp: 0,
    title: "Small counter",
    detail: "小さなカウンターからスタート。"
  },
  {
    xp: 30,
    title: "Table seats",
    detail: "お客さんが座れるテーブル席を追加。"
  },
  {
    xp: 65,
    title: "Barista uniform",
    detail: "バリスタの服装が店長スタイルに変化。"
  },
  {
    xp: 100,
    title: "Popular cafe",
    detail: "カップ棚とメニューが増えて人気店に。"
  },
  {
    xp: 120,
    title: "Forest master",
    detail: "豆福が森のマスターバリスタに成長。"
  }
];

const mamefukuLevels = [
  {
    level: 1,
    minXp: 0,
    title: "Cafe Apprentice",
    image: "assets/characters/mamefuku/mamefuku-lv1.png",
    alt: "Mamefuku cafe apprentice"
  },
  {
    level: 2,
    minXp: 30,
    title: "Beginner Clerk",
    image: "assets/characters/mamefuku/mamefuku-lv2.png",
    alt: "Mamefuku beginner clerk"
  },
  {
    level: 3,
    minXp: 65,
    title: "Beginner Barista",
    image: "assets/characters/mamefuku/mamefuku-lv3.png",
    alt: "Mamefuku beginner barista"
  },
  {
    level: 4,
    minXp: 100,
    title: "Full Barista",
    image: "assets/characters/mamefuku/mamefuku-lv4.png",
    alt: "Mamefuku full barista"
  },
  {
    level: 5,
    minXp: 120,
    title: "Forest Cafe Master",
    image: "assets/characters/mamefuku/mamefuku-lv5.png",
    alt: "Mamefuku forest cafe master"
  }
];

const state = {
  mode: "vocabulary",
  questionIndex: 0,
  xp: 0,
  clears: 0,
  phrases: []
};

const elements = {
  totalXp: document.querySelector("#totalXp"),
  cafeStage: document.querySelector("#cafeStage"),
  barista: document.querySelector("#barista"),
  mamefukuImage: document.querySelector("#mamefukuImage"),
  cafeLevelLabel: document.querySelector("#cafeLevelLabel"),
  baristaTitle: document.querySelector("#baristaTitle"),
  nextRewardText: document.querySelector("#nextRewardText"),
  xpMeterText: document.querySelector("#xpMeterText"),
  xpBar: document.querySelector("#xpBar"),
  clearCount: document.querySelector("#clearCount"),
  itemCount: document.querySelector("#itemCount"),
  phraseCount: document.querySelector("#phraseCount"),
  modeTabs: document.querySelector("#modeTabs"),
  modeLabel: document.querySelector("#modeLabel"),
  promptTitle: document.querySelector("#promptTitle"),
  questionBox: document.querySelector("#questionBox"),
  answerForm: document.querySelector("#answerForm"),
  answerLabel: document.querySelector("#answerLabel"),
  answerInput: document.querySelector("#answerInput"),
  choiceGrid: document.querySelector("#choiceGrid"),
  feedback: document.querySelector("#feedback"),
  soundButton: document.querySelector("#soundButton"),
  upgradeList: document.querySelector("#upgradeList"),
  phraseBank: document.querySelector("#phraseBank"),
  resetButton: document.querySelector("#resetButton")
};

function loadProgress() {
  const saved = localStorage.getItem("tripTalkCafe");
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    state.xp = Number(parsed.xp) || 0;
    state.clears = Number(parsed.clears) || 0;
    state.phrases = Array.isArray(parsed.phrases) ? parsed.phrases : [];
  } catch {
    localStorage.removeItem("tripTalkCafe");
  }
}

function saveProgress() {
  localStorage.setItem("tripTalkCafe", JSON.stringify({
    xp: state.xp,
    clears: state.clears,
    phrases: state.phrases
  }));
}

function currentMode() {
  return modes[state.mode];
}

function currentQuestion() {
  return currentMode().questions[state.questionIndex];
}

function normalize(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[?.!,]/g, "")
    .replace(/\s+/g, " ");
}

function unlockedCount() {
  return upgrades.filter((upgrade) => state.xp >= upgrade.xp).length;
}

function cafeLevel() {
  return mamefukuLevels.reduce((current, level) => state.xp >= level.minXp ? level : current, mamefukuLevels[0]);
}

function renderModeTabs() {
  elements.modeTabs.innerHTML = "";

  Object.entries(modes).forEach(([key, mode]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = key === state.mode ? "active" : "";
    button.innerHTML = `${mode.tab}<span>${mode.subtitle}</span>`;
    button.addEventListener("click", () => {
      state.mode = key;
      state.questionIndex = 0;
      renderLesson();
    });
    elements.modeTabs.appendChild(button);
  });
}

function renderLesson() {
  const mode = currentMode();
  const question = currentQuestion();

  renderModeTabs();
  elements.modeLabel.textContent = mode.label;
  elements.promptTitle.textContent = mode.title;
  elements.answerLabel.textContent = question.type === "choice" ? "Choose an answer" : "Your English";
  elements.answerInput.value = "";
  elements.answerInput.placeholder = question.type === "choice" ? "Or type the Japanese meaning..." : "Type your English sentence...";
  elements.questionBox.innerHTML = `
    <span class="speaker">${question.speaker || "Cafe lesson"}</span>
    <div class="prompt">${question.prompt}</div>
  `;

  elements.choiceGrid.innerHTML = "";
  if (question.type === "choice") {
    question.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = choice;
      button.addEventListener("click", () => submitAnswer(choice));
      elements.choiceGrid.appendChild(button);
    });
  }

  renderStats();
  elements.answerInput.focus({ preventScroll: true });
}

function isCorrect(answer, question) {
  const normalizedAnswer = normalize(answer);
  if (!normalizedAnswer) return false;

  if (question.type === "choice") {
    return normalizedAnswer === normalize(question.answer);
  }

  return question.accepted.some((accepted) => normalizedAnswer.includes(normalize(accepted)));
}

function addPhrase(phrase) {
  if (state.phrases.some((item) => item.english === phrase)) return;

  state.phrases.unshift({
    english: phrase,
    scene: "Cafe"
  });
  state.phrases = state.phrases.slice(0, 10);
}

function submitAnswer(rawAnswer) {
  const answer = rawAnswer.trim();
  const question = currentQuestion();
  const mode = currentMode();
  if (!answer) return;

  if (isCorrect(answer, question)) {
    state.xp = Math.min(120, state.xp + mode.xp);
    state.clears += 1;
    addPhrase(question.phrase);
    showFeedback("good", `+${mode.xp} XP`, `正解: ${question.phrase} / 意味: ${question.hint}`);
    goNextQuestion();
  } else {
    state.xp = Math.min(120, state.xp + 2);
    showFeedback("try", "+2 XP", "惜しい。ヒントなしでもう一度考えてみよう。");
  }

  saveProgress();
  renderStats();
  renderUpgrades();
  renderPhraseBank();
}

function goNextQuestion() {
  window.setTimeout(() => {
    const mode = currentMode();
    state.questionIndex = (state.questionIndex + 1) % mode.questions.length;
    renderLesson();
  }, 650);
}

function showFeedback(kind, title, message) {
  elements.feedback.className = `feedback ${kind}`;
  elements.feedback.innerHTML = `<strong>${title}</strong><span>${message}</span>`;
}

function renderStats() {
  const level = cafeLevel();
  const nextUpgrade = upgrades.find((upgrade) => state.xp < upgrade.xp);
  const nextText = nextUpgrade ? `Next: ${nextUpgrade.title} at ${nextUpgrade.xp} XP` : "All cafe upgrades unlocked";

  elements.totalXp.textContent = state.xp;
  elements.xpMeterText.textContent = `${state.xp} / 120`;
  elements.xpBar.style.width = `${Math.min(100, (state.xp / 120) * 100)}%`;
  elements.clearCount.textContent = state.clears;
  elements.itemCount.textContent = unlockedCount();
  elements.phraseCount.textContent = state.phrases.length;
  elements.nextRewardText.textContent = nextText;
  elements.cafeLevelLabel.textContent = `Mamefuku Lv.${level.level}`;
  elements.baristaTitle.textContent = level.title;
  elements.mamefukuImage.src = level.image;
  elements.mamefukuImage.alt = level.alt;
  elements.cafeStage.className = `cafe-stage level-${Math.min(level.level, 3)}`;
}

function renderUpgrades() {
  elements.upgradeList.innerHTML = "";

  upgrades.forEach((upgrade) => {
    const unlocked = state.xp >= upgrade.xp;
    const item = document.createElement("div");
    item.className = `upgrade-item ${unlocked ? "unlocked" : ""}`;
    item.innerHTML = `
      <strong>${unlocked ? "Unlocked" : `${upgrade.xp} XP`} - ${upgrade.title}</strong>
      <span>${upgrade.detail}</span>
    `;
    elements.upgradeList.appendChild(item);
  });
}

function renderPhraseBank() {
  if (state.phrases.length === 0) {
    elements.phraseBank.innerHTML = `<p class="empty-bank">正解したカフェ英語がここに保存されます。</p>`;
    return;
  }

  const list = document.createElement("div");
  list.className = "phrase-list";
  state.phrases.forEach((phrase) => {
    const item = document.createElement("div");
    item.className = "phrase-item";
    item.innerHTML = `<strong>${phrase.english}</strong><span>${phrase.scene}</span>`;
    list.appendChild(item);
  });
  elements.phraseBank.innerHTML = "";
  elements.phraseBank.appendChild(list);
}

function speakCurrentEnglish() {
  const question = currentQuestion();
  const text = question.type === "choice" ? question.prompt : question.answer;

  if (!("speechSynthesis" in window)) {
    showFeedback("try", "Voice unavailable", "このブラウザでは読み上げが使えません。");
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.88;
  window.speechSynthesis.speak(utterance);
}

elements.answerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitAnswer(elements.answerInput.value);
  elements.answerInput.value = "";
});

elements.soundButton.addEventListener("click", speakCurrentEnglish);

elements.resetButton.addEventListener("click", () => {
  localStorage.removeItem("tripTalkCafe");
  state.mode = "vocabulary";
  state.questionIndex = 0;
  state.xp = 0;
  state.clears = 0;
  state.phrases = [];
  showFeedback("", "Reset", "カフェの進捗をリセットしました。");
  renderLesson();
  renderUpgrades();
  renderPhraseBank();
});

loadProgress();
renderLesson();
renderUpgrades();
renderPhraseBank();
