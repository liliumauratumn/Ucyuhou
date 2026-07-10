# Astro 移行設計書 (ASTRO_MIGRATION_SPEC.md)

本ドキュメントは、思想解説メディア「宇宙を悟り法則を引き寄せる（Ucyuhou）」を現在の静的HTML/CSS構成から、保守性・可読性・拡張性を向上させたAstro構成へと移行するための技術仕様書である。

---

## 1. 現在のプロジェクト構成 (HTML/CSS/JS)

現在のサイトは完全な静的HTMLで構築されており、以下の構成となっている。

- **HTMLファイル群 (ルート直下)**
  - トップページ: `index.html` (1ファイル)
  - 固定ページ/静的ページ: `about.html`, `contact.html`, `privacy.html`, `terms.html` (4ファイル)
  - カテゴリーページ: `category-*.html` (8ファイル)
  - 記事ページ: `article-*.html` (26ファイル)
- **CSSファイル群 (`css/`)**
  - グローバル: `css/global.css`
  - トークン設定: `css/tokens.css`
  - 各ページ専用スタイル: `css/pages/` (`top.css`, `category.css`, `article.css`, `static-page.css`)
- **JavaScriptファイル群 (`js/`)**
  - `js/search.js` : 静的にビルドされた記事検索データベースおよび簡易フロントエンド検索ロジック
- **ビルド用スクリプト (`scripts/`)**
  - `scripts/build-search-index.js` : 全 `article-*.html` の本文を解析し、`js/search.js` を自動生成するNode.jsスクリプト

### 現在確認できるコンテンツ総数
- **記事数**: 26件 (`article-*.html`)
- **カテゴリ数**: 8件 (`category-*.html`)
- **固定ページ数**: 5件 (`index.html`, `about.html`, `contact.html`, `privacy.html`, `terms.html`)

---

## 2. Astro移行の目的

1. **共通コンポーネント化によるコード重複の排除**
   ヘッダー（`site-header`）、フッター（`site-footer`）、メルマガフォーム（`newsletter`）、関連記事カードなどの共通HTMLマークアップが各ページにハードコードされているため、共通Astroコンポーネントとして一元管理し、二重保守を解消する。
2. **コンテンツと表示ロジックの分離**
   記事をHTML（表示コード）からMarkdown / MDXに分離し、Astroの「Content Collections」を使用することで、記事追加や修正を極めて容易にする。
3. **静的（SSG）出力によるパフォーマンス維持**
   AstroのゼロJavaScript（デフォルト）アプローチおよび静的ビルドを利用し、現在の高速な表示パフォーマンスとSEO最適化を完全に維持する。
4. **AIエージェントによる自動運用の容易化**
   ファイル名やデータ定義が規格化され、AIが構造を理解しやすくなることで、今後の記事自動インデックス化や運用性を高める。

---

## 3. 移行後の予定ディレクトリ構成

Astro 5+の標準規約（`src/content.config.ts` の利用）およびAI編集容易性のガイドラインに則り、以下の構成でプロジェクトを再編成する。

```text
/
  astro.config.mjs
  package.json
  tsconfig.json (または jsconfig.json)
  README.md
  AI_EDITING_GUIDE.md
  docs/
    ASTRO_MIGRATION_SPEC.md
    ASTRO_MIGRATION_STATUS.md
    DESIGN_PRESERVATION_CONTRACT.md
    CONTENT_MIGRATION_MAP.md

  public/
    assets/
      images/  (移行時にコピーされる静的アセット類)
        Ucyuhou.png
        hero-main.jpg
        card-water.jpg
        ...

  src/
    content.config.ts    (Content Collectionsのスキーマ・ローダー定義 ※Astro 5+準拠)
    pages/
      index.astro        (トップページ)
      about.astro        (このサイトについて)
      contact.astro      (問い合わせフォーム)
      privacy.astro      (プライバシーポリシー)
      terms.astro        (利用規約)
      articles/
        [slug].astro     (記事ページの動的ルーティング)
      category/
        [slug].astro     (カテゴリーページの動的ルーティング)

    layouts/
      BaseLayout.astro     (HTMLの基本構造、Google Fontsプリコネクト、SEOメタ情報定義)
      ArticleLayout.astro  (記事用レイアウト)
      CategoryLayout.astro (カテゴリー用レイアウト)
      StaticLayout.astro   (固定ページ用レイアウト)

    components/
      SiteHeader.astro      (共通ヘッダー)
      SiteFooter.astro      (共通フッター)
      ArticleCard.astro     (記事一覧用カード)
      NewsletterBlock.astro (メルマガ登録フォーム)

    content/
      articles/            (記事Markdown格納庫 — Content Collections)
        satori.md
        tsushin.md
        ... (全26記事分)

    styles/
      tokens.css
      global.css
      pages/
        top.css
        article.css
        category.css
        static-page.css

    scripts/
      build-search-index.js (Markdownファイルをパースして js/search.js を生成するように改修)
```

---

## 4. 固定6段階の移行工程

移行作業は以下の6段階を厳密に順を追って実施する。旧サイトの既存HTML・CSS・画像アセットは移行途中で移動・削除せず、Astro側へ**コピー**する方針をとる。旧サイト環境は「Phase 6」の検証がすべて完了するまで完全に残す。

### Phase 1：Astro基盤作成
- **作業内容**: 
  - `package.json` の作成および Astro 関連パッケージの依存関係設定
  - `astro.config.mjs` の構成（`output: 'static'` 指定による完全静的ビルド設定）
  - 既存のCSSファイルを `src/styles/` へコピー配置（既存CSSは変更しない）
  - 既存の `assets/images/` の静的アセットを `public/assets/images/` へコピー配置（元の場所からは削除しない）
- **完了条件**: 
  - 空のAstroプロジェクトが立ち上がり、`pnpm dev` 起動時にコピーしたCSSや画像アセットがエラーなく参照できること。

### Phase 2：レイアウト・共通コンポーネント化
- **作業内容**: 
  - `BaseLayout.astro`, `SiteHeader.astro`, `SiteFooter.astro` の実装
  - `ArticleCard.astro`, `NewsletterBlock.astro` などのモジュール化
- **完了条件**: 
  - 共通のヘッダー・フッター・フォームがAstroコンポーネントとして元の見た目のまま正しくレンダリングされること。

### Phase 3：記事コンテンツの移行 (代表記事移行とContent Collections)
- **作業内容**: 
  - `src/content.config.ts` で記事用のコレクションとスキーマ（`title`, `subtitle`, `category`, `publishedAt`, `heroImage`, `theme` 等）を定義する。
  - **代表記事移行**: 26件のうち、まず以下の2本のみを先行してMarkdownへ移行する。
    1. 通常記事代表: `article-satori.html` -> `satori.md` (`theme: default` 指定)
    2. 宇宙通信記事代表: `article-tsushin.html` -> `tsushin.md` (`theme: cosmic` 指定)
- **完了条件**: 
  - 代表記事2本のMarkdownファイルが生成され、Astroのスキーマ検証をパスすること。

### Phase 4：記事・カテゴリー動的ルートの実装と残り記事移行
- **作業内容**: 
  - `src/pages/articles/[slug].astro` による動的ルーティングの実装
  - `src/pages/category/[slug].astro` による動的カテゴリーフィルタリングと一覧表示の実装
  - **表示・構造確認**: 代表記事2本（通常・宇宙通信）について、表示崩れやアフォーダンス、テーマ（`cosmic`によるダークデザイン）の切り替えが正しく行われているかを検証する。
  - **残り記事の移行**: 代表検証が完了し、問題がないことを確認したのち、残り24記事のMarkdown移行（`theme: default` などの指定を含む）を一括して実施する。
- **完了条件**: 
  - 全26記事・カテゴリのURLが、指定した画面幅（1440px / 390px）において、ユーザーが認識できる重大なデザイン差のない状態でレンダリングされること。

### Phase 5：静的・固定ページおよび検索の移行
- **作業内容**: 
  - `index.astro` (トップページ) で記事データを取り込み、最新記事を一覧表示
  - `about.astro`, `contact.astro`, `privacy.astro`, `terms.astro` の移植
  - 検索データ形式の確定後、`scripts/build-search-index.js` を改修。Markdownファイルをスキャンして検索インデックス `js/search.js` を再生成する仕組みを実装し、ビルドプロセス（`pnpm build`）内に統合する。記事更新時に別コマンドを手動で実行する構造にしない。
- **完了条件**: 
  - トップページと全固定ページが完全に機能し、`pnpm build` 実行時に自動的に検索インデックスが再生成されて検索機能が動作すること。

### Phase 6：表示崩れ検証と静的ビルド (最終監査)
- **作業内容**: 
  - `pnpm build` を実行し、完全な静的HTML/CSSサイトとして `dist` へ出力
  - 新旧の生成HTMLをブラウザ検証ツール等で比較。余白・コントラスト比・Fitts's Law領域・不均一な傾き（ノイズ）の再現度を検証する。
- **完了条件**: 
  - 指定した代表ページ（トップページ、通常記事、宇宙通信記事、カテゴリページ、固定ページ）と画面幅（1440px / 390px）において、ユーザーが認識できる重大なデザイン差がないこと。
  - **既存旧アセットの保護**: Phase 6完了後も、既存の旧HTML、旧CSS、旧JavaScript、旧画像アセット等の削除・移動は一切行わない。これらはユーザーから明示的な指示があるまで残し、Geminiの自己判断で自動削除してはならない。

---

## 5. 技術スタックの制限・確定事項

- **コマンド・パッケージツールの統一**: 
  Astroプロジェクトの管理はすべて `pnpm` に統一する。
  - 依存関係のインストール: `pnpm install`
  - 開発用ローカル起動: `pnpm dev`
  - 静的ビルド: `pnpm build`
- **新規の外部ライブラリの禁止**: 
  React, Vue, Svelte, Tailwind CSS, Sass などの追加フレームワーク・CSSフレームワークは一切導入しない。現在のプレーンなCSSスタイルシート（バニラCSS）を流用する。
- **データベース・動的サーバー処理の禁止**: 
  Astroは SSG（静的サイト生成）モードでのみ動作させ、ビルド後の出力は、すべてピュアなHTML/CSS/JSの静的ファイルとする。
- **スタブ記事（17件）の扱い**:
  17件の極小スタブ記事（本文が1文程度のもの）は、移行時に本文の加筆・拡張を行わず、そのままのテキスト量で移行する（文章執筆・拡張はAstro移行の対象外とする）。
- **テーマ制御仕様**:
  記事のfrontmatter内でテーマを指定し、動的にスタイルを制御する。
  - `theme: default` : 通常の記事デザイン
  - `theme: cosmic` : 黒背景に白文字の宇宙通信用ダークデザイン
- **検索のビルド統合**:
  検索機能は記事データ形式の確定後に実装する。インデックスの生成は `pnpm build` プロセスに含め、更新時に別コマンドを手動実行するような二重運用を排除する。
