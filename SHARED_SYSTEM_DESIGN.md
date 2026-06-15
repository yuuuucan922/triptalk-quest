# TripTalk Quest 共有システム設計

## 結論

最初は GitHub Pages でアプリを公開し、進捗は各端末の `localStorage` に保存する。  
その後、夫婦で同じ進捗やモンスター育成を共有したくなった段階で、Supabase などのバックエンドを追加する。

この順番が最も簡単で、壊れにくい。

## 目的

- 妻と同じ URL でアプリを使える
- 旅行英会話をロールプレイ形式で楽しく続けられる
- 学習すると経験値が増える
- 経験値でたまごっち風のモンスターが成長する
- 将来的に夫婦で同じモンスターを育てられる

## フェーズ設計

## Phase 1: GitHub Pages で共有

### 構成

```text
index.html
styles.css
app.js
assets/
  monsters/
    egg.png
    baby.png
    child.png
    teen.png
    adult.png
```

### 保存先

端末ごとの `localStorage` に保存する。

保存するデータ:

```json
{
  "xp": 42,
  "correct": 8,
  "completedTurns": 8,
  "phrases": [],
  "monsterStage": "child"
}
```

### メリット

- GitHub Pages だけで公開できる
- ログイン不要
- サーバー不要
- スマホでも URL を開けば使える

### 制限

- 夫婦それぞれの進捗は別々
- 端末を変えると進捗は引き継がれない
- 同じモンスターを一緒に育てることはできない

## Phase 2: 共有コード方式

### 目的

ログインなしで、夫婦が同じ学習ルームを使えるようにする。

### 追加するもの

- 共有ルーム ID
- クラウド保存
- 夫婦共通の XP
- 夫婦共通のモンスター状態

例:

```text
https://example.github.io/triptalk/?room=tanaka-trip
```

### データ構造

```json
{
  "roomId": "tanaka-trip",
  "sharedXp": 128,
  "monster": {
    "type": "sprout",
    "stage": "teen",
    "lastFedAt": "2026-06-15T12:00:00.000Z"
  },
  "members": {
    "husband": {
      "name": "夫",
      "xp": 78,
      "clearCount": 12
    },
    "wife": {
      "name": "妻",
      "xp": 50,
      "clearCount": 7
    }
  }
}
```

### 推奨バックエンド

Supabase を推奨する。

理由:

- 無料枠で始めやすい
- GitHub Pages から直接使える
- データベースと認証を後から追加しやすい
- 小規模な夫婦共有アプリに十分

## Phase 3: ログイン方式

### 目的

端末を変えても進捗を引き継げるようにする。

### 追加するもの

- Google ログイン
- ユーザーごとの学習履歴
- 夫婦ルームへの参加
- 日別の学習記録

### テーブル案

```text
profiles
- id
- display_name
- created_at

rooms
- id
- name
- invite_code
- shared_xp
- monster_type
- monster_stage
- created_at

room_members
- room_id
- profile_id
- role
- joined_at

study_events
- id
- room_id
- profile_id
- scenario_id
- xp
- answer
- is_correct
- created_at
```

## モンスター育成仕様

## オンライン機能設計

## 結論

最初に作るべきオンライン機能は「同じ部屋でモンスターを一緒に育てる」機能。  
対戦はその後に追加する。

理由は、英語学習アプリでは勝ち負けよりも継続が重要だから。夫婦で同じ部屋を見て、相手の学習がモンスターの成長に反映される方が続きやすい。

## 共有ルーム

夫婦で同じルームに入る。

ルームで共有するもの:

- 共有モンスター
- 共有 XP
- 今日の学習状況
- 夫婦それぞれの貢献 XP
- 最近の学習ログ

表示例:

```text
Trip Room
Mochi is growing

夫: +54 XP today
妻: +38 XP today

あと 12 XP で進化
```

## キャラ同居機能

夫と妻がそれぞれモンスターを持ち、同じ部屋に表示する。

```text
assets/
  monsters/
    husband/
      egg.png
      baby.png
      child.png
      teen.png
      adult.png
    wife/
      egg.png
      baby.png
      child.png
      teen.png
      adult.png
```

データ構造:

```json
{
  "roomId": "tanaka-trip",
  "monsters": {
    "husband": {
      "name": "Mochi",
      "type": "sprout",
      "xp": 72,
      "stage": "child"
    },
    "wife": {
      "name": "Lulu",
      "type": "flame",
      "xp": 88,
      "stage": "teen"
    }
  }
}
```

画面仕様:

- 1つの部屋に2体のモンスターを表示する
- 学習した人のモンスターが少し動く
- 相手が学習したら「妻が Hotel quest をクリア」などを表示する
- 2人の合計 XP で部屋の飾りが増える

## 協力イベント

対戦より先に、協力イベントを入れる。

例:

```text
週末ミッション
2人で合計 300 XP を集める
報酬: 部屋にカフェテーブルを追加
```

協力イベントの種類:

- 2人で合計 XP を集める
- 2人で別々の旅行シーンをクリアする
- 連続学習日数をつなぐ
- 片方が学習すると、もう片方にボーナスが入る

## ゆるい対戦

対戦は「勝った・負けた」を強くしすぎない。

採用する対戦:

- 今日の XP レース
- 今週のクリア数
- 早押しフレーズクイズ
- 旅行シーン別スコア

避ける対戦:

- 片方の失敗が目立つランキング
- 長時間プレイした方だけが勝つ仕組み
- 英語力の差が強く出る直接対決

表示例:

```text
Today Battle
夫 84 XP vs 妻 76 XP
あと 1 問で逆転
```

## リアルタイム機能

Supabase Realtime を使う。

リアルタイムで反映するもの:

- 相手が学習を完了した
- 共有 XP が増えた
- モンスターが進化した
- 今日のミッションが達成された

最初は完全なチャット機能は作らない。  
代わりに、定型リアクションだけにする。

リアクション例:

```text
Nice!
Great job!
Keep going!
旅行で使えそう!
```

## 部屋カスタマイズ

XP 報酬で部屋の見た目を変えられるようにする。

アイテム例:

- カフェテーブル
- スーツケース
- 空港看板
- ホテルキー
- 地図
- 観葉植物

保存データ:

```json
{
  "roomItems": ["cafe_table", "suitcase", "map"],
  "background": "airport_lounge"
}
```

## オンライン機能の実装順

1. 共有ルーム ID を作る
2. 共有 XP を Supabase に保存する
3. 2人の学習ログを保存する
4. 同じ部屋に2体のモンスターを表示する
5. 相手の学習完了をリアルタイム表示する
6. 協力ミッションを追加する
7. 今日の XP レースを追加する
8. 部屋カスタマイズを追加する

## 最初のオンライン MVP

最初のオンライン版は、次だけでよい。

- 共有ルーム ID
- 夫・妻の名前
- 夫・妻それぞれの XP
- 2体のモンスター表示
- 今日の合計 XP
- 相手が学習した時の通知

これだけで「一緒にやっている感」が出る。

## キャラ関係性・結婚・子育て

## 結論

後期機能として、モンスター同士の関係性、結婚、子育てを追加すると面白い。  
ただし最初から入れず、共有ルームと協力育成が楽しく動いてから追加する。

理由は、この機能は世界観と継続性には強いが、最初の学習体験より実装範囲が広いから。

## 関係性システム

夫と妻のモンスター同士に親密度を持たせる。

親密度が上がる行動:

- 2人が同じ日に学習する
- 協力ミッションを達成する
- 相手にリアクションを送る
- 片方が復習したフレーズをもう片方も使う
- 週末イベントを一緒に完了する

データ構造:

```json
{
  "relationship": {
    "level": 4,
    "points": 340,
    "status": "best_friends",
    "lastInteractionAt": "2026-06-15T12:00:00.000Z"
  }
}
```

関係性ステータス:

```text
strangers
friends
best_friends
partners
family
```

## 結婚イベント

親密度が一定以上になったら、結婚イベントを解放する。

条件例:

```text
関係性レベル 5
2人で合計 2000 XP
協力ミッション 10 回達成
7 日間のうち 4 日以上、2人とも学習
```

イベント内容:

- 旅行先でプロポーズ風イベント
- 指輪や花束などの部屋アイテム解放
- 2体のモンスターの表示距離が近くなる
- 共有称号を獲得

称号例:

```text
Travel Partners
World Honeymooners
Phrase Family
```

## 子育てシステム

結婚後に、子どもモンスターを育てられる。

基本方針:

- 子どもは2人の学習で成長する
- 片方だけでも育つが、2人で学習するとボーナスが入る
- 子どもの性格は学習スタイルで変化する

性格例:

```text
curious    新しいシーンをよく学ぶ
polite     丁寧表現をよく使う
brave      難しい問題に挑戦する
cheerful   連続学習が多い
```

保存データ:

```json
{
  "childMonster": {
    "name": "Pip",
    "stage": "baby",
    "xp": 128,
    "personality": "curious",
    "bornAt": "2026-06-15T12:00:00.000Z"
  }
}
```

## 子育てと英語学習の接続

子どもの成長条件を英語学習に紐づける。

例:

- 空港シーンを学ぶと「旅行好き」になる
- ホテルシーンを学ぶと「礼儀正しい」になる
- カフェシーンを学ぶと「社交的」になる
- 道案内シーンを学ぶと「冒険好き」になる
- 復習を多くすると「努力家」になる

この設計にすると、ゲーム要素が英語学習から分離しない。

## 家族ルーム

結婚・子育て後は、共有ルームを「家族ルーム」に拡張する。

表示するもの:

- 夫のモンスター
- 妻のモンスター
- 子どもモンスター
- 家族 XP
- 家族ミッション
- 家族アルバム

家族ミッション例:

```text
Family Trip Mission
今週、空港・ホテル・カフェをそれぞれ1回ずつクリア
報酬: Family Photo アイテム
```

## 家族アルバム

節目を自動で記録する。

記録するイベント:

- 初めて同じ日に学習した
- 初めて協力ミッションを達成した
- モンスターが進化した
- 結婚イベントを達成した
- 子どもモンスターが生まれた
- 初めて家族ミッションを達成した

データ構造:

```json
{
  "albumEvents": [
    {
      "type": "child_born",
      "title": "Pip was born",
      "createdAt": "2026-06-15T12:00:00.000Z"
    }
  ]
}
```

## 注意点

結婚・子育て機能は、夫婦で使う分には楽しいが、一般公開する場合は表現を柔らかくする。

一般向け名称の候補:

- Bond system
- Partner event
- Family room
- New generation

最初から強い恋愛・結婚表現に寄せすぎると、ユーザー層が狭くなる。  
このアプリでは「一緒に学ぶ関係が育つ」くらいの表現が扱いやすい。

## 画像配置

```text
assets/
  monsters/
    sprout/
      egg.png
      baby.png
      child.png
      teen.png
      adult.png
```

単体モンスターだけなら、最初はこれでもよい。

```text
assets/
  monsters/
    egg.png
    baby.png
    child.png
    teen.png
    adult.png
```

## 成長条件

```text
0 XP      egg
20 XP     baby
50 XP     child
80 XP     teen
120 XP    adult
```

## XP 付与ルール

```text
正解に近い回答: +18 XP
惜しい回答: +6 XP
1シーン完了: +20 XP
1日1回の学習: +10 XP
```

## 表示仕様

ホーム画面に次を表示する。

- 現在のモンスター画像
- 名前
- 成長段階
- 次の進化までの XP
- 今日の学習回数
- 夫婦それぞれの貢献 XP

例:

```text
Mochi
Child stage
72 / 80 XP
あと 8 XP で進化
```

## GitHub Pages 公開設計

## ブランチ

`main` ブランチを使う。

## 公開対象

リポジトリ直下を公開する。

```text
Settings
-> Pages
-> Build and deployment
-> Source: Deploy from a branch
-> Branch: main
-> Folder: /root
```

## URL

公開後は次のような URL になる。

```text
https://<github-user-name>.github.io/<repository-name>/
```

## 共有方法

妻にはこの URL を送る。

スマホではブラウザで開き、ホーム画面に追加するとアプリのように使える。

## 今後の実装順

1. `assets/monsters/` を追加する
2. モンスター画像を配置する
3. XP に応じて画像が変わる UI を追加する
4. GitHub Pages で公開する
5. まずは端末別進捗で使う
6. 続けられそうなら Supabase で共有ルームを追加する

## 採用しない方針

最初からログイン機能を作り込まない。  
理由は、学習体験より認証やデータ同期の実装が重くなり、最初の公開が遅くなるため。

まずは URL で共有できる状態を完成させる。
