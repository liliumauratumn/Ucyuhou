# コンテンツ移行マッピング表 (CONTENT_MIGRATION_MAP.md)

本ドキュメントは、Ucyuhouサイト内の全HTMLファイルと、Astro移行後の各ファイル（動的ルーティング用slug、Markdownファイル、固定ページ）の対応関係を定義したマッピング表である。

---

## 1. 記事ページ (article-*.html) 移行マップ

全26件の記事HTMLファイルについて、以下のように移行を予定する。
※「本文状態」は文字数カウントおよび直近の書き下ろし状況に基づき分類している。
※テーマ指定は、通常記事が `theme: default`、宇宙通信記事が `theme: cosmic` となる。

| 旧HTML | 現在のタイトル | カテゴリ | 移行後slug案 | 本文状態 | 使用画像 | 予定テーマ | 移行状態 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `article-abraham.html` | エイブラハムの「許可する」とは何を許すことなのか | 引き寄せ | `abraham` | スタブ（極小: 66文字）※加筆せずそのまま移行 | `assets/images/hero-main.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-allowed.html` | 在ることが許されている状態 | 目覚め | `allowed` | スタブ（極小: 50文字）※加筆せずそのまま移行 | `assets/images/hero-main.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-anatta.html` | ブッダの「無我」と現代における自己同一化の解除 | 悟り | `anatta` | スタブ（極小: 61文字）※加筆せずそのまま移行 | `assets/images/hero-main.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-buddha.html` | ブッダの苦と引き寄せの抵抗はどこでつながるか | 悟り | `buddha` | スタブ（極小: 64文字）※加筆せずそのまま移行 | `assets/images/hero-main.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-bunsho.html` | ホ・オポノポノの真意、ハワイ伝統と現代解釈の溝を読む | 文書 | `bunsho` | 十分な長さ（完成: 772文字） | `assets/images/hero-main.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-desire.html` | 願望と執着の違い | 引き寄せ | `desire` | スタブ（極小: 51文字）※加筆せずそのまま移行 | `assets/images/hero-main.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-discard.html` | 欲しいものリストを捨てる | 引き寄せ | `discard` | スタブ（極小: 66文字）※加筆せずそのまま移行 | `assets/images/hero-main.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-emerald-prep.html` | エメラルドタブレットを読む前に知るべきこと | 文書 | `emerald-prep` | スタブ（極小: 64文字）※加筆せずそのまま移行 | `assets/images/hero-main.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-emerald.html` | エメラルドタブレットの「上なるものと下なるもの」を読む | 文書 | `emerald` | スタブ（極小: 59文字）※加筆せずそのまま移行 | `assets/images/hero-main.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-hikiyose.html` | 願うほど遠ざかる理由——引き寄せの「抵抗」を再読する | 引き寄せ | `hikiyose` | 十分な長さ（完成: 762文字） | `assets/images/card-water.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-jissen-1.html` | 「私は誰か」を問い続けるマハルシの探求 | 実践 | `jissen-1` | 十分な長さ（完成: 326文字）※独自書き下ろし | `assets/images/card-books.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-jissen-2.html` | ホ・オポノポノの実践：記憶のクリーニング | 実践 | `jissen-2` | 十分な長さ（完成: 296文字）※独自書き下ろし | `assets/images/card-water.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-kakera-1.html` | 自我の境界線が溶ける瞬間 | 思考の欠片 | `kakera-1` | 十分な長さ（完成: 287文字）※独自書き下ろし | `assets/images/card-sky.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-kakera-2.html` | 言葉が現実を切り取る前の世界 | 思考の欠片 | `kakera-2` | 十分な長さ（完成: 299文字）※独自書き下ろし | `assets/images/card-corridor.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-law.html` | エメラルドタブレット翻訳史——錬金術の最高経典が伝える宇宙の法則 | 宇宙の法則 | `law` | 十分な長さ（完成: 790文字） | `assets/images/card-books.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-maharshi.html` | マハルシの静寂——インド覚者が遺した「私は誰か」という自問 | 悟り | `maharshi` | スタブ（極小: 57文字）※加筆せずそのまま移行 | `assets/images/hero-main.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-mezame.html` | 意識とは「見ている場」のことである | 目覚め | `mezame` | 十分な長さ（完成: 727文字） | `assets/images/card-corridor.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-mirror.html` | 現実は内面の鏡ではなく、内面の配置である | 宇宙の法則 | `mirror` | スタブ（極小: 62文字）※加筆せずそのまま移行 | `assets/images/hero-main.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-narrow.html` | 思考はなぜ現実を狭くするのか | 悟り | `narrow` | スタブ（極小: 63文字）※加筆せずそのまま移行 | `assets/images/hero-main.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-no-resistance.html` | 抵抗の不在が引き寄せの正体である | 引き寄せ | `no-resistance` | スタブ（極小: 63文字）※加筆せずそのまま移行 | `assets/images/hero-main.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-quantum.html` | 量子力学と意識の境界、観測者効果は引き寄せを証明するか | 引き寄せ | `quantum` | スタブ（極小: 79文字）※加筆せずそのまま移行 | `assets/images/hero-main.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-satori.html` | 悟りとは、特別な境地ではない | 悟り | `satori` | 十分な長さ（完成: 751文字） | `assets/images/hero-main.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-scale.html` | 感情のスケールを超えた視点 | 引き寄せ | `scale` | スタブ（極小: 69文字）※加筆せずそのまま移行 | `assets/images/hero-main.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-tolle.html` | エックハルト・トールの「いまここ」は時間論ではない | 悟り | `tolle` | スタブ（極小: 57文字）※加筆せずそのまま移行 | `assets/images/hero-main.jpg` | `default` | 移行済み・動的表示検証済み |
| `article-tsushin.html` | 宇宙通信・創刊号 | 宇宙通信 | `tsushin` | 十分な長さ（完成） | `assets/images/card-water.jpg` | `cosmic` | 移行済み・動的表示検証済み |
| `article-vortex.html` | エイブラハムの Vortex は「私の消滅」に近い | 引き寄せ | `vortex` | スタブ（極小: 57文字）※加筆せずそのまま移行 | `assets/images/hero-main.jpg` | `default` | 移行済み・動的表示検証済み |

---

## 2. カテゴリーページ (category-*.html) 移行マップ

全8件のカテゴリーHTMLファイルについて、以下のように移行を予定する。
※カテゴリーページは `src/pages/category/[slug].astro` にて動的に生成する。

| 旧HTML | カテゴリ名 | 移行後動的パス | 移行状態 | 備考 |
| :--- | :--- | :--- | :--- | :--- |
| `category-bunsho.html` | 文書 — Bunsho | `/category/bunsho` | 移行済み・動的表示検証済み | |
| `category-hikiyose.html` | 引き寄せ — Hikiyose | `/category/hikiyose` | 移行済み・動的表示検証済み | |
| `category-jissen.html` | 実践 — Practice | `/category/jissen` | 移行済み・動的表示検証済み | |
| `category-kakera.html` | 思考の欠片 — Fragments | `/category/kakera` | 移行済み・動的表示検証済み | |
| `category-law.html` | 宇宙の法則 — Law | `/category/law` | 移行済み・動的表示検証済み | |
| `category-mezame.html` | 目覚め — Mezame | `/category/mezame` | 移行済み・動的表示検証済み | |
| `category-satori.html` | 悟り — Satori | `/category/satori` | 移行済み・動的表示検証済み | |
| `category-tsushin.html` | 宇宙通信 — Cosmic Communications | `/category/tsushin` | 移行済み・動的表示検証済み | ※`theme: cosmic` による反転デザインの適用 |

---

## 3. 固定・静的ページ 移行マップ

全5件の静的HTMLファイルについて、以下のように個別移行を予定する。
※これらは `src/pages/` 配下に直接個別の `.astro` ファイルとして移行する。

| 旧HTML | ページタイトル | 移行後個別ファイル | 移行状態 | 備考 |
| :--- | :--- | :--- | :--- | :--- |
| `index.html` | 宇宙を悟り法則を引き寄せる | `src/pages/index.astro` | 未移行 | トップページ（グリッド構成） |
| `about.html` | このサイトについて | `src/pages/about.astro` | 未移行 | 静的ページ（Chanelミニマリズム） |
| `contact.html` | 問い合わせ | `src/pages/contact.astro` | 未移行 | お名前フォーム（Chanelミニマリズム） |
| `privacy.html` | プライバシーポリシー | `src/pages/privacy.astro` | 未移行 | 静的ページ（Chanelミニマリズム） |
| `terms.html` | 利用規約 | `src/pages/terms.astro` | 未移行 | 静的ページ（Chanelミニマリズム） |

---

## 4. 移行仕様上の決定・合意事項

1. **極小スタブ記事（17件）の扱い**:
   本文を増やさず、そのままの内容量で移行する（加筆・拡張はAstro移行の対象外とする）。
2. **宇宙通信のデザイン分岐**:
   `theme: cosmic` を指定してダークテーマデザインを適用する（通常記事は `theme: default`）。
3. **検索インデックスビルドの仕組み**:
   記事データ形式（Markdownスキーマ）の確定後に検索ロジックを実装し、インデックス生成は `pnpm build` 内に統合する。記事更新時に別コマンドを手動実行するような二重手順は設けない。
4. **スキーマ設定ファイル位置**:
   Astro 5+ 規格に基づき、`src/content.config.ts` で一元設定する。
