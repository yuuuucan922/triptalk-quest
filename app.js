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
      },
      {
        type: "choice",
        prompt: "for here",
        hint: "店内で飲食するときの表現",
        answer: "店内で",
        choices: ["店内で", "持ち帰り", "氷なし"],
        phrase: "For here, please."
      },
      {
        type: "choice",
        prompt: "oat milk",
        hint: "牛乳の代わりに選べる植物性ミルク",
        answer: "オーツミルク",
        choices: ["オーツミルク", "紙ナプキン", "砂糖"],
        phrase: "Can I get that with oat milk?"
      },
      {
        type: "choice",
        prompt: "less sugar",
        hint: "甘さを控えめにしたいとき",
        answer: "砂糖少なめ",
        choices: ["砂糖少なめ", "熱め", "大きいサイズ"],
        phrase: "Could you make it less sweet?"
      },
      {
        type: "choice",
        prompt: "recommend",
        hint: "おすすめを聞くときに使う動詞",
        answer: "おすすめする",
        choices: ["おすすめする", "支払う", "温める"],
        phrase: "What do you recommend?"
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
      },
      {
        type: "text",
        prompt: "おすすめは何ですか？",
        hint: "What do you recommend? を使う",
        answer: "What do you recommend?",
        accepted: ["what do you recommend", "what would you recommend", "what do you suggest"],
        phrase: "What do you recommend?"
      },
      {
        type: "text",
        prompt: "オーツミルクにできますか？",
        hint: "Can I get that with ... ? を使う",
        answer: "Can I get that with oat milk?",
        accepted: ["can i get that with oat milk", "could i get that with oat milk", "with oat milk"],
        phrase: "Can I get that with oat milk?"
      },
      {
        type: "text",
        prompt: "レシートをもらえますか？",
        hint: "Could I have ... ? を使う",
        answer: "Could I have a receipt?",
        accepted: ["could i have a receipt", "can i have a receipt", "may i have a receipt"],
        phrase: "Could I have a receipt?"
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
      },
      {
        type: "text",
        speaker: "Barista",
        prompt: "What size would you like?",
        hint: "サイズを答える。例: Small, please.",
        answer: "Small, please.",
        accepted: ["small please", "medium please", "large please", "a small please", "a medium please", "a large please"],
        phrase: "Small, please."
      },
      {
        type: "text",
        speaker: "Barista",
        prompt: "Would you like it hot or iced?",
        hint: "ホットかアイスかを答える",
        answer: "Iced, please.",
        accepted: ["iced please", "hot please", "i'll have it iced", "i will have it iced"],
        phrase: "Iced, please."
      },
      {
        type: "text",
        speaker: "Barista",
        prompt: "Your total is five dollars.",
        hint: "カードで払えるか聞く",
        answer: "Can I pay by card?",
        accepted: ["can i pay by card", "could i pay by card", "do you take cards", "card please"],
        phrase: "Can I pay by card?"
      }
    ]
  }
};

const interiorLevels = [
  {
    level: 1,
    clears: 0,
    title: "Rented cafe corner",
    detail: "A humble starter cafe with hand-drip tools.",
    back: "assets/interiors/cafe/cafe-lv1-back.png",
    front: "assets/interiors/cafe/cafe-lv1-front.png"
  },
  {
    level: 2,
    clears: 3,
    title: "Tiny permanent cafe",
    detail: "Adds more cups, beans, and a cleaner counter.",
    back: "assets/interiors/cafe/cafe-lv2-back.png",
    front: "assets/interiors/cafe/cafe-lv2-front.png"
  },
  {
    level: 3,
    clears: 7,
    title: "Town cafe",
    detail: "Adds a cozy window, shelves, plants, and cafe decor.",
    back: "assets/interiors/cafe/cafe-lv3-back.png",
    front: "assets/interiors/cafe/cafe-lv3-front.png"
  },
  {
    level: 4,
    clears: 12,
    title: "Almost pro cafe",
    detail: "Adds seating and a compact espresso machine.",
    back: "assets/interiors/cafe/cafe-lv4-back.png",
    front: "assets/interiors/cafe/cafe-lv4-front.png"
  },
  {
    level: 5,
    clears: 18,
    title: "Completed cafe",
    detail: "Adds a large red professional espresso machine.",
    back: "assets/interiors/cafe/cafe-lv5-back.png",
    front: "assets/interiors/cafe/cafe-lv5-front.png"
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
  interiorBack: document.querySelector("#interiorBack"),
  interiorFront: document.querySelector("#interiorFront"),
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
  return interiorLevels.filter((level) => state.clears >= level.clears).length;
}

function mamefukuLevel() {
  return mamefukuLevels.reduce((current, level) => state.xp >= level.minXp ? level : current, mamefukuLevels[0]);
}

function interiorLevel() {
  return interiorLevels.reduce((current, level) => state.clears >= level.clears ? level : current, interiorLevels[0]);
}

function renderModeTabs() {
  elements.modeTabs.innerHTML = "";

  Object.entries(modes).forEach(([key, mode]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = key === state.mode ? "active" : "";
    button.innerHTML = `${mode.tab}<span>${mode.label} / ${mode.subtitle}</span>`;
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
  elements.modeLabel.textContent = `${mode.label} ${state.questionIndex + 1}/${mode.questions.length}`;
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
    const previousInterior = interiorLevel();
    const previousCharacter = mamefukuLevel();
    state.xp = Math.min(120, state.xp + mode.xp);
    state.clears += 1;
    addPhrase(question.phrase);
    const nextInterior = interiorLevel();
    const nextCharacter = mamefukuLevel();

    if (nextInterior.level > previousInterior.level) {
      showFeedback("good level-up", `Cafe Lv.${nextInterior.level} unlocked`, nextInterior.detail);
      triggerUpgradeEffect();
    } else if (nextCharacter.level > previousCharacter.level) {
      showFeedback("good level-up", `Mamefuku Lv.${nextCharacter.level} unlocked`, nextCharacter.title);
      triggerUpgradeEffect();
    } else {
      showFeedback("good", `+${mode.xp} XP`, `正解: ${question.phrase} / 意味: ${question.hint}`);
    }
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

function triggerUpgradeEffect() {
  elements.cafeStage.classList.remove("is-upgrading");
  window.requestAnimationFrame(() => {
    elements.cafeStage.classList.add("is-upgrading");
  });
  window.setTimeout(() => {
    elements.cafeStage.classList.remove("is-upgrading");
  }, 900);
}

function renderStats() {
  const characterLevel = mamefukuLevel();
  const cafeInterior = interiorLevel();
  const nextUpgrade = interiorLevels.find((level) => state.clears < level.clears);
  const nextText = nextUpgrade ? `Next Lv.${nextUpgrade.level}: ${nextUpgrade.title} / ${nextUpgrade.clears} clears` : "All cafe interiors unlocked";

  elements.totalXp.textContent = state.xp;
  elements.xpMeterText.textContent = `${state.xp} / 120`;
  elements.xpBar.style.width = `${Math.min(100, (state.xp / 120) * 100)}%`;
  elements.clearCount.textContent = state.clears;
  elements.itemCount.textContent = unlockedCount();
  elements.phraseCount.textContent = state.phrases.length;
  elements.nextRewardText.textContent = nextText;
  elements.cafeLevelLabel.textContent = `Interior Lv.${cafeInterior.level} / Mamefuku Lv.${characterLevel.level}`;
  elements.baristaTitle.textContent = characterLevel.title;
  elements.interiorBack.src = cafeInterior.back;
  elements.interiorFront.src = cafeInterior.front;
  elements.mamefukuImage.src = characterLevel.image;
  elements.mamefukuImage.alt = characterLevel.alt;
  const isUpgrading = elements.cafeStage.classList.contains("is-upgrading");
  elements.cafeStage.className = `cafe-stage interior-${cafeInterior.level}${isUpgrading ? " is-upgrading" : ""}`;
}

function renderUpgrades() {
  elements.upgradeList.innerHTML = "";

  interiorLevels.forEach((upgrade) => {
    const unlocked = state.clears >= upgrade.clears;
    const item = document.createElement("div");
    item.className = `upgrade-item ${unlocked ? "unlocked" : ""}`;
    item.innerHTML = `
      <strong>${unlocked ? "Unlocked" : `${upgrade.clears} clears`} / Lv.${upgrade.level} ${upgrade.title}</strong>
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
