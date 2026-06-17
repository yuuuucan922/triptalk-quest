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
      },
      {
        type: "choice",
        prompt: "menu",
        hint: "注文前に見る一覧",
        answer: "メニュー",
        choices: ["メニュー", "財布", "出口"],
        phrase: "Could I see the menu?"
      },
      {
        type: "choice",
        prompt: "table",
        hint: "座って飲食する場所",
        answer: "テーブル",
        choices: ["テーブル", "牛乳", "レシート"],
        phrase: "Is this table free?"
      },
      {
        type: "choice",
        prompt: "small",
        hint: "小さいサイズ",
        answer: "小さい",
        choices: ["小さい", "熱い", "甘い"],
        phrase: "Small, please."
      },
      {
        type: "choice",
        prompt: "medium",
        hint: "中くらいのサイズ",
        answer: "中くらい",
        choices: ["中くらい", "現金", "氷"],
        phrase: "Medium, please."
      },
      {
        type: "choice",
        prompt: "large",
        hint: "大きいサイズ",
        answer: "大きい",
        choices: ["大きい", "少ない", "冷たい"],
        phrase: "Large, please."
      },
      {
        type: "choice",
        prompt: "iced",
        hint: "冷たい飲み物",
        answer: "アイス",
        choices: ["アイス", "店内", "おすすめ"],
        phrase: "Iced, please."
      },
      {
        type: "choice",
        prompt: "hot",
        hint: "温かい飲み物",
        answer: "ホット",
        choices: ["ホット", "席", "袋"],
        phrase: "Hot, please."
      },
      {
        type: "choice",
        prompt: "cash",
        hint: "カードではなく現金",
        answer: "現金",
        choices: ["現金", "レシート", "水"],
        phrase: "Can I pay in cash?"
      },
      {
        type: "choice",
        prompt: "card",
        hint: "クレジットカードなど",
        answer: "カード",
        choices: ["カード", "砂糖", "席"],
        phrase: "Can I pay by card?"
      },
      {
        type: "choice",
        prompt: "wifi",
        hint: "インターネット接続",
        answer: "Wi-Fi",
        choices: ["Wi-Fi", "牛乳", "紙ナプキン"],
        phrase: "Do you have Wi-Fi?"
      },
      {
        type: "choice",
        prompt: "password",
        hint: "Wi-Fiにつなぐための言葉",
        answer: "パスワード",
        choices: ["パスワード", "会計", "氷"],
        phrase: "What is the Wi-Fi password?"
      },
      {
        type: "choice",
        prompt: "restroom",
        hint: "トイレ",
        answer: "トイレ",
        choices: ["トイレ", "注文", "砂糖"],
        phrase: "Where is the restroom?"
      },
      {
        type: "choice",
        prompt: "napkin",
        hint: "口や手を拭く紙",
        answer: "ナプキン",
        choices: ["ナプキン", "おすすめ", "席"],
        phrase: "Could I have a napkin?"
      },
      {
        type: "choice",
        prompt: "straw",
        hint: "飲み物を飲む細い管",
        answer: "ストロー",
        choices: ["ストロー", "現金", "メニュー"],
        phrase: "Could I have a straw?"
      },
      {
        type: "choice",
        prompt: "refill",
        hint: "おかわり",
        answer: "おかわり",
        choices: ["おかわり", "持ち帰り", "温める"],
        phrase: "Can I get a refill?"
      },
      {
        type: "choice",
        prompt: "reservation",
        hint: "席などを前もって取ること",
        answer: "予約",
        choices: ["予約", "砂糖", "氷"],
        phrase: "Do I need a reservation?"
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
      },
      {
        type: "text",
        prompt: "店内でお願いします。",
        hint: "For here, please. を使う",
        answer: "For here, please.",
        accepted: ["for here please", "here please", "for here"],
        phrase: "For here, please."
      },
      {
        type: "text",
        prompt: "小さいサイズでお願いします。",
        hint: "Small, please. を使う",
        answer: "Small, please.",
        accepted: ["small please", "a small please", "small size please"],
        phrase: "Small, please."
      },
      {
        type: "text",
        prompt: "アイスでお願いします。",
        hint: "Iced, please. を使う",
        answer: "Iced, please.",
        accepted: ["iced please", "i'll have it iced", "i will have it iced"],
        phrase: "Iced, please."
      },
      {
        type: "text",
        prompt: "カードで払えますか？",
        hint: "Can I pay by card? を使う",
        answer: "Can I pay by card?",
        accepted: ["can i pay by card", "could i pay by card", "do you take cards"],
        phrase: "Can I pay by card?"
      },
      {
        type: "text",
        prompt: "Wi-Fiはありますか？",
        hint: "Do you have ... ? を使う",
        answer: "Do you have Wi-Fi?",
        accepted: ["do you have wifi", "do you have wi-fi", "is there wifi", "is there wi-fi"],
        phrase: "Do you have Wi-Fi?"
      },
      {
        type: "text",
        prompt: "Wi-Fiのパスワードは何ですか？",
        hint: "What is ... ? を使う",
        answer: "What is the Wi-Fi password?",
        accepted: ["what is the wifi password", "what is the wi-fi password", "wifi password", "wi-fi password"],
        phrase: "What is the Wi-Fi password?"
      },
      {
        type: "text",
        prompt: "トイレはどこですか？",
        hint: "Where is ... ? を使う",
        answer: "Where is the restroom?",
        accepted: ["where is the restroom", "where is the bathroom", "where is the toilet"],
        phrase: "Where is the restroom?"
      },
      {
        type: "text",
        prompt: "ナプキンをもらえますか？",
        hint: "Could I have ... ? を使う",
        answer: "Could I have a napkin?",
        accepted: ["could i have a napkin", "can i have a napkin", "may i have a napkin"],
        phrase: "Could I have a napkin?"
      },
      {
        type: "text",
        prompt: "ストローをもらえますか？",
        hint: "Could I have ... ? を使う",
        answer: "Could I have a straw?",
        accepted: ["could i have a straw", "can i have a straw", "may i have a straw"],
        phrase: "Could I have a straw?"
      },
      {
        type: "text",
        prompt: "これはいくらですか？",
        hint: "How much is ... ? を使う",
        answer: "How much is this?",
        accepted: ["how much is this", "how much does this cost", "what is the price"],
        phrase: "How much is this?"
      },
      {
        type: "text",
        prompt: "少し待ってもらえますか？",
        hint: "Could you give me ... ? を使う",
        answer: "Could you give me a moment?",
        accepted: ["could you give me a moment", "give me a moment", "one moment please"],
        phrase: "Could you give me a moment?"
      },
      {
        type: "text",
        prompt: "おかわりできますか？",
        hint: "Can I get ... ? を使う",
        answer: "Can I get a refill?",
        accepted: ["can i get a refill", "could i get a refill", "refill please"],
        phrase: "Can I get a refill?"
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
      },
      {
        type: "text",
        speaker: "Barista",
        prompt: "Do you need a receipt?",
        hint: "レシートがほしいと答える",
        answer: "Yes, please.",
        accepted: ["yes please", "yes a receipt please", "could i have a receipt"],
        phrase: "Yes, please."
      },
      {
        type: "text",
        speaker: "Barista",
        prompt: "Do you want room for milk?",
        hint: "ミルクを入れるスペースがほしいと答える",
        answer: "Yes, please.",
        accepted: ["yes please", "yes room for milk please", "a little room please"],
        phrase: "Yes, please."
      },
      {
        type: "text",
        speaker: "Barista",
        prompt: "What kind of milk would you like?",
        hint: "オーツミルクをお願いする",
        answer: "Oat milk, please.",
        accepted: ["oat milk please", "with oat milk", "can i get oat milk"],
        phrase: "Oat milk, please."
      },
      {
        type: "text",
        speaker: "Barista",
        prompt: "Would you like sugar?",
        hint: "砂糖少なめでお願いする",
        answer: "Less sugar, please.",
        accepted: ["less sugar please", "a little sugar please", "not too sweet please"],
        phrase: "Less sugar, please."
      },
      {
        type: "text",
        speaker: "Barista",
        prompt: "Can I get your name?",
        hint: "名前を伝える。例: My name is Yuki.",
        answer: "My name is Yuki.",
        accepted: ["my name is", "i'm", "i am"],
        phrase: "My name is Yuki."
      },
      {
        type: "text",
        speaker: "Barista",
        prompt: "It will be ready in five minutes.",
        hint: "ありがとうと答える",
        answer: "Thank you.",
        accepted: ["thank you", "thanks", "sounds good"],
        phrase: "Thank you."
      },
      {
        type: "text",
        speaker: "Barista",
        prompt: "Do you need a bag?",
        hint: "袋がほしいと答える",
        answer: "Yes, please.",
        accepted: ["yes please", "a bag please", "yes a bag please"],
        phrase: "Yes, please."
      },
      {
        type: "text",
        speaker: "Barista",
        prompt: "We are out of oat milk. Is soy milk okay?",
        hint: "大丈夫と答える",
        answer: "Soy milk is fine.",
        accepted: ["soy milk is fine", "that's fine", "that is fine", "soy milk is ok", "soy milk is okay"],
        phrase: "Soy milk is fine."
      },
      {
        type: "text",
        speaker: "Barista",
        prompt: "Do you want anything to eat?",
        hint: "クロワッサンをお願いする",
        answer: "A croissant, please.",
        accepted: ["a croissant please", "croissant please", "i'll have a croissant", "i will have a croissant"],
        phrase: "A croissant, please."
      },
      {
        type: "text",
        speaker: "Barista",
        prompt: "Is everything okay?",
        hint: "大丈夫と答える",
        answer: "Yes, everything is good.",
        accepted: ["everything is good", "yes everything is good", "it's good", "it is good"],
        phrase: "Yes, everything is good."
      },
      {
        type: "text",
        speaker: "Barista",
        prompt: "We close at six.",
        hint: "何時に閉まるか確認する",
        answer: "What time do you close?",
        accepted: ["what time do you close", "when do you close", "what time are you closing"],
        phrase: "What time do you close?"
      },
      {
        type: "text",
        speaker: "Barista",
        prompt: "The Wi-Fi password is on the receipt.",
        hint: "ありがとうと答える",
        answer: "Thank you.",
        accepted: ["thank you", "thanks", "thank you very much"],
        phrase: "Thank you."
      }
    ]
  }
};

const areaModes = {
  cafe: modes,
  hotel: {
    vocabulary: {
      label: "Vocabulary",
      title: "Hotel word quiz",
      tab: "Words",
      subtitle: "+5 XP",
      xp: 5,
      questions: [
        { type: "choice", prompt: "reservation", hint: "ホテルの予約", answer: "予約", choices: ["予約", "搭乗口", "注文"], phrase: "I have a reservation." },
        { type: "choice", prompt: "check in", hint: "ホテル到着時の手続き", answer: "チェックイン", choices: ["チェックイン", "会計", "搭乗"], phrase: "I'd like to check in." },
        { type: "choice", prompt: "check out", hint: "ホテルを出る手続き", answer: "チェックアウト", choices: ["チェックアウト", "予約", "注文"], phrase: "I'd like to check out." },
        { type: "choice", prompt: "room key", hint: "部屋に入るための鍵", answer: "ルームキー", choices: ["ルームキー", "朝食", "荷物"], phrase: "Could I have my room key?" },
        { type: "choice", prompt: "front desk", hint: "ホテルの受付", answer: "フロント", choices: ["フロント", "空港", "カフェ"], phrase: "Where is the front desk?" },
        { type: "choice", prompt: "luggage", hint: "旅行の荷物", answer: "荷物", choices: ["荷物", "鍵", "朝食"], phrase: "Can I leave my luggage here?" },
        { type: "choice", prompt: "breakfast", hint: "朝に食べる食事", answer: "朝食", choices: ["朝食", "予約", "領収書"], phrase: "Is breakfast included?" },
        { type: "choice", prompt: "elevator", hint: "上の階へ行く乗り物", answer: "エレベーター", choices: ["エレベーター", "出口", "搭乗券"], phrase: "Where is the elevator?" }
      ]
    },
    sentence: {
      label: "Sentence",
      title: "Build a hotel phrase",
      tab: "Phrases",
      subtitle: "+12 XP",
      xp: 12,
      questions: [
        { type: "text", prompt: "チェックインしたいです。", hint: "I'd like to ... を使う", answer: "I'd like to check in.", accepted: ["i'd like to check in", "i would like to check in", "check in please"], phrase: "I'd like to check in." },
        { type: "text", prompt: "予約しています。", hint: "I have ... を使う", answer: "I have a reservation.", accepted: ["i have a reservation", "i've got a reservation", "reservation under"], phrase: "I have a reservation." },
        { type: "text", prompt: "荷物を預けられますか？", hint: "Can I leave ... ? を使う", answer: "Can I leave my luggage here?", accepted: ["can i leave my luggage here", "could i leave my luggage here", "can i store my luggage"], phrase: "Can I leave my luggage here?" },
        { type: "text", prompt: "朝食は含まれていますか？", hint: "Is ... included? を使う", answer: "Is breakfast included?", accepted: ["is breakfast included", "breakfast included"], phrase: "Is breakfast included?" },
        { type: "text", prompt: "Wi-Fiのパスワードは何ですか？", hint: "What is ... ? を使う", answer: "What is the Wi-Fi password?", accepted: ["what is the wifi password", "what is the wi-fi password", "wifi password"], phrase: "What is the Wi-Fi password?" },
        { type: "text", prompt: "チェックアウトしたいです。", hint: "I'd like to ... を使う", answer: "I'd like to check out.", accepted: ["i'd like to check out", "i would like to check out", "check out please"], phrase: "I'd like to check out." }
      ]
    },
    conversation: {
      label: "Conversation",
      title: "Talk at the hotel desk",
      tab: "Roleplay",
      subtitle: "+20 XP",
      xp: 20,
      questions: [
        { type: "text", speaker: "Hotel staff", prompt: "Welcome. How can I help you?", hint: "チェックインしたいと伝える", answer: "I'd like to check in.", accepted: ["check in", "i'd like to check in", "i would like to check in"], phrase: "I'd like to check in." },
        { type: "text", speaker: "Hotel staff", prompt: "Do you have a reservation?", hint: "予約していると答える", answer: "I have a reservation.", accepted: ["i have a reservation", "yes i have a reservation", "reservation"], phrase: "I have a reservation." },
        { type: "text", speaker: "Hotel staff", prompt: "May I see your passport?", hint: "どうぞと答える", answer: "Sure, here you are.", accepted: ["sure here you are", "here you are", "sure"], phrase: "Sure, here you are." },
        { type: "text", speaker: "Hotel staff", prompt: "Your room is on the fifth floor.", hint: "ありがとうと答える", answer: "Thank you.", accepted: ["thank you", "thanks"], phrase: "Thank you." },
        { type: "text", speaker: "Hotel staff", prompt: "Breakfast is from seven to ten.", hint: "場所を聞く", answer: "Where is breakfast?", accepted: ["where is breakfast", "where is the breakfast", "where can i have breakfast"], phrase: "Where is breakfast?" },
        { type: "text", speaker: "Hotel staff", prompt: "How was your stay?", hint: "良かったと答える", answer: "It was great, thank you.", accepted: ["it was great", "it was good", "great thank you", "good thank you"], phrase: "It was great, thank you." }
      ]
    }
  },
  airport: {
    vocabulary: {
      label: "Vocabulary",
      title: "Airport word quiz",
      tab: "Words",
      subtitle: "+5 XP",
      xp: 5,
      questions: [
        { type: "choice", prompt: "boarding pass", hint: "飛行機に乗るための券", answer: "搭乗券", choices: ["搭乗券", "朝食", "鍵"], phrase: "Here is my boarding pass." },
        { type: "choice", prompt: "passport", hint: "海外旅行で必要な身分証", answer: "パスポート", choices: ["パスポート", "領収書", "部屋"], phrase: "Here is my passport." },
        { type: "choice", prompt: "gate", hint: "飛行機に乗る場所", answer: "搭乗口", choices: ["搭乗口", "フロント", "朝食"], phrase: "Where is gate 12?" },
        { type: "choice", prompt: "baggage", hint: "預ける荷物", answer: "手荷物", choices: ["手荷物", "予約", "メニュー"], phrase: "Where is baggage claim?" },
        { type: "choice", prompt: "security", hint: "保安検査", answer: "保安検査", choices: ["保安検査", "チェックアウト", "砂糖"], phrase: "Where is security?" },
        { type: "choice", prompt: "departure", hint: "出発", answer: "出発", choices: ["出発", "朝食", "部屋"], phrase: "What time is departure?" },
        { type: "choice", prompt: "arrival", hint: "到着", answer: "到着", choices: ["到着", "予約", "支払い"], phrase: "What time is arrival?" },
        { type: "choice", prompt: "delay", hint: "飛行機が遅れること", answer: "遅延", choices: ["遅延", "席", "鍵"], phrase: "Is the flight delayed?" }
      ]
    },
    sentence: {
      label: "Sentence",
      title: "Build an airport phrase",
      tab: "Phrases",
      subtitle: "+12 XP",
      xp: 12,
      questions: [
        { type: "text", prompt: "搭乗口はどこですか？", hint: "Where is ... ? を使う", answer: "Where is the gate?", accepted: ["where is the gate", "where is gate"], phrase: "Where is the gate?" },
        { type: "text", prompt: "搭乗券を見せます。", hint: "Here is ... を使う", answer: "Here is my boarding pass.", accepted: ["here is my boarding pass", "here's my boarding pass"], phrase: "Here is my boarding pass." },
        { type: "text", prompt: "この便は遅れていますか？", hint: "Is the flight ... ? を使う", answer: "Is the flight delayed?", accepted: ["is the flight delayed", "is my flight delayed"], phrase: "Is the flight delayed?" },
        { type: "text", prompt: "荷物を預けたいです。", hint: "I'd like to ... を使う", answer: "I'd like to check this bag.", accepted: ["i'd like to check this bag", "i would like to check this bag", "check this bag"], phrase: "I'd like to check this bag." },
        { type: "text", prompt: "窓側の席がいいです。", hint: "window seat を使う", answer: "I'd like a window seat.", accepted: ["i'd like a window seat", "i would like a window seat", "window seat please"], phrase: "I'd like a window seat." },
        { type: "text", prompt: "乗り継ぎがあります。", hint: "connecting flight を使う", answer: "I have a connecting flight.", accepted: ["i have a connecting flight", "connecting flight"], phrase: "I have a connecting flight." }
      ]
    },
    conversation: {
      label: "Conversation",
      title: "Talk at the airport",
      tab: "Roleplay",
      subtitle: "+20 XP",
      xp: 20,
      questions: [
        { type: "text", speaker: "Airport staff", prompt: "May I see your passport?", hint: "どうぞと答える", answer: "Sure, here you are.", accepted: ["sure here you are", "here you are", "sure"], phrase: "Sure, here you are." },
        { type: "text", speaker: "Airport staff", prompt: "Do you have any bags to check?", hint: "1つあると答える", answer: "Yes, one bag.", accepted: ["yes one bag", "one bag", "i have one bag"], phrase: "Yes, one bag." },
        { type: "text", speaker: "Airport staff", prompt: "Window or aisle?", hint: "窓側を希望する", answer: "Window, please.", accepted: ["window please", "a window seat please", "window"], phrase: "Window, please." },
        { type: "text", speaker: "Airport staff", prompt: "Your gate is B12.", hint: "ありがとうと答える", answer: "Thank you.", accepted: ["thank you", "thanks"], phrase: "Thank you." },
        { type: "text", speaker: "Airport staff", prompt: "Boarding starts at ten thirty.", hint: "搭乗口を確認する", answer: "Where is the gate?", accepted: ["where is the gate", "where is gate"], phrase: "Where is the gate?" },
        { type: "text", speaker: "Airport staff", prompt: "Your flight is delayed.", hint: "どれくらい遅れるか聞く", answer: "How long is the delay?", accepted: ["how long is the delay", "how long delayed", "how long is it delayed"], phrase: "How long is the delay?" }
      ]
    }
  }
};

const areaConfigs = {
  cafe: {
    label: "Cafe",
    storageKey: "tripTalkCafe",
    characterLevels: null,
    interiors: null
  },
  hotel: {
    label: "Hotel",
    storageKey: "tripTalkHotel",
    back: "assets/interiors/hotel/hotel-lobby-back.png",
    front: "",
    character: {
      title: "Hotel Concierge Cat",
      image: "assets/characters/hotel-cat/hotel-cat.png",
      alt: "Hotel concierge cat"
    }
  },
  airport: {
    label: "Airport",
    storageKey: "tripTalkAirport",
    back: "assets/interiors/airport/airport-terminal-back.png",
    front: "",
    character: {
      title: "Airport Staff Penguin",
      image: "assets/characters/airport-penguin/airport-penguin.png",
      alt: "Airport staff penguin"
    }
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
  area: document.body.dataset.area || "cafe",
  mode: document.body.dataset.mode || "vocabulary",
  questionIndex: 0,
  questionOrders: {},
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
  const saved = localStorage.getItem(areaConfig().storageKey);
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    state.xp = Number(parsed.xp) || 0;
    state.clears = Number(parsed.clears) || 0;
    state.phrases = Array.isArray(parsed.phrases) ? parsed.phrases : [];
  } catch {
    localStorage.removeItem(areaConfig().storageKey);
  }
}

function saveProgress() {
  localStorage.setItem(areaConfig().storageKey, JSON.stringify({
    xp: state.xp,
    clears: state.clears,
    phrases: state.phrases
  }));
}

function areaConfig() {
  return areaConfigs[state.area] || areaConfigs.cafe;
}

function areaModeSet() {
  return areaModes[state.area] || areaModes.cafe;
}

function currentMode() {
  return areaModeSet()[state.mode];
}

function shuffleArray(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function buildQuestionOrder(modeKey, previousQuestionIndex = -1) {
  const order = shuffleArray(areaModeSet()[modeKey].questions.map((_, index) => index));
  if (order.length > 1 && order[0] === previousQuestionIndex) {
    [order[0], order[1]] = [order[1], order[0]];
  }
  state.questionOrders[modeKey] = order;
  state.questionIndex = 0;
}

function ensureQuestionOrder(modeKey) {
  const order = state.questionOrders[modeKey];
  if (!order || order.length !== areaModeSet()[modeKey].questions.length) {
    buildQuestionOrder(modeKey);
  }
}

function currentQuestion() {
  ensureQuestionOrder(state.mode);
  const order = state.questionOrders[state.mode];
  return currentMode().questions[order[state.questionIndex]];
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

function renderLesson() {
  const mode = currentMode();
  const question = currentQuestion();

  elements.modeLabel.textContent = `${mode.label} ${state.questionIndex + 1}/${mode.questions.length}`;
  elements.promptTitle.textContent = mode.title;
  elements.answerLabel.textContent = question.type === "choice" ? "Choose an answer" : "Your English";
  elements.answerInput.value = "";
  elements.answerInput.placeholder = question.type === "choice" ? "Or type the Japanese meaning..." : "Type your English sentence...";
  elements.questionBox.innerHTML = `
    <span class="speaker">${question.speaker || `${areaConfig().label} lesson`}</span>
    <div class="prompt">${question.prompt}</div>
  `;

  elements.choiceGrid.innerHTML = "";
  if (question.type === "choice") {
    shuffleArray(question.choices).forEach((choice) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = choice;
      button.addEventListener("click", () => submitAnswer(choice));
      elements.choiceGrid.appendChild(button);
    });
  }

  renderStats();
  elements.answerInput.focus({ preventScroll: true });
  speakRoleplayPrompt();
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
    scene: areaConfig().label
  });
  state.phrases = state.phrases.slice(0, 10);
}

function submitAnswer(rawAnswer) {
  const answer = rawAnswer.trim();
  const question = currentQuestion();
  const mode = currentMode();
  if (!answer) return;

  if (isCorrect(answer, question)) {
    playCorrectSound();
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
    playTrySound();
    state.xp = Math.min(120, state.xp + 2);
    showFeedback("try", "+2 XP", "惜しい。ヒントなしでもう一度考えてみよう。");
  }

  saveProgress();
  renderStats();
}

function goNextQuestion() {
  window.setTimeout(() => {
    const mode = currentMode();
    const order = state.questionOrders[state.mode];
    const currentQuestionIndex = order[state.questionIndex];
    state.questionIndex += 1;
    if (state.questionIndex >= mode.questions.length) {
      buildQuestionOrder(state.mode, currentQuestionIndex);
    }
    renderLesson();
  }, 650);
}

function showFeedback(kind, title, message) {
  elements.feedback.className = `feedback ${kind}`;
  elements.feedback.innerHTML = `<strong>${title}</strong><span>${message}</span>`;
}

function playTone(frequency, duration, type = "sine", volume = 0.08, delay = 0) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const audio = new AudioContext();
  const oscillator = audio.createOscillator();
  const gain = audio.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, audio.currentTime + delay);
  gain.gain.setValueAtTime(0, audio.currentTime + delay);
  gain.gain.linearRampToValueAtTime(volume, audio.currentTime + delay + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + delay + duration);
  oscillator.connect(gain);
  gain.connect(audio.destination);
  oscillator.start(audio.currentTime + delay);
  oscillator.stop(audio.currentTime + delay + duration + 0.02);
  window.setTimeout(() => audio.close(), (delay + duration + 0.08) * 1000);
}

function playCorrectSound() {
  playTone(660, 0.12, "triangle", 0.09, 0);
  playTone(880, 0.14, "triangle", 0.08, 0.1);
}

function playTrySound() {
  playTone(220, 0.12, "sine", 0.055, 0);
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
  const config = areaConfig();
  const characterLevel = state.area === "cafe" ? mamefukuLevel() : config.character;
  const cafeInterior = state.area === "cafe" ? interiorLevel() : config;

  elements.totalXp.textContent = state.xp;
  if (elements.cafeLevelLabel) {
    elements.cafeLevelLabel.textContent = `Interior Lv.${cafeInterior.level} / Mamefuku Lv.${characterLevel.level}`;
  }
  if (elements.baristaTitle) {
    elements.baristaTitle.textContent = characterLevel.title;
  }
  elements.interiorBack.src = cafeInterior.back;
  if (cafeInterior.front) {
    elements.interiorFront.src = cafeInterior.front;
    elements.interiorFront.hidden = false;
  } else {
    elements.interiorFront.hidden = true;
  }
  elements.mamefukuImage.src = characterLevel.image;
  elements.mamefukuImage.alt = characterLevel.alt;
  const isUpgrading = elements.cafeStage.classList.contains("is-upgrading");
  const stageClass = cafeInterior.level ? `interior-${cafeInterior.level}` : `area-${state.area}`;
  elements.cafeStage.className = `cafe-stage ${stageClass}${isUpgrading ? " is-upgrading" : ""}`;
}

function renderUpgrades() {
  if (!elements.upgradeList) return;
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
  if (!elements.phraseBank) return;
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
  const text = state.mode === "conversation" ? question.prompt : question.type === "choice" ? question.prompt : question.answer;

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

function speakRoleplayPrompt() {
  if (state.mode !== "conversation") return;
  window.setTimeout(speakCurrentEnglish, 180);
}

elements.answerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitAnswer(elements.answerInput.value);
  elements.answerInput.value = "";
});

elements.soundButton.addEventListener("click", speakCurrentEnglish);

if (elements.resetButton) {
  elements.resetButton.addEventListener("click", () => {
    localStorage.removeItem(areaConfig().storageKey);
    state.mode = document.body.dataset.mode || "vocabulary";
    state.questionIndex = 0;
    state.questionOrders = {};
    state.xp = 0;
    state.clears = 0;
    state.phrases = [];
    showFeedback("", "Reset", `${areaConfig().label}の進捗をリセットしました。`);
    renderLesson();
    renderUpgrades();
    renderPhraseBank();
  });
}

loadProgress();
renderLesson();
renderUpgrades();
renderPhraseBank();
