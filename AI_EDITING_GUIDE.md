# AI_EDITING_GUIDE.md — Ucyuhou編集入口

## 1. このファイルの役割

このファイルは、Ucyuhouを編集するAIが最初に読む案内である。詳細規則を一冊へ重複させず、作業の種類ごとに正しい文書へ誘導する。

## 2. サイトの正式名称

```text
正式名称・著者名: 宇宙を悟り法則を引き寄せる
省略形: うちゅ法 / Ucyuhou
```

著者表示に「編集部」「管理人」「大いなる源泉」「AIライター」などを使わない。

## 3. 作業別に読む文書

### 記事の企画・執筆・校閲・画像

1. `docs/EDITORIAL_CONSTITUTION.md`
2. `docs/AUTHOR_IDENTITY.md`
3. `docs/CATEGORY_EDITORIAL_GUIDE.md`
4. `docs/ARTICLE_FORMAT_SPEC.md`
5. `docs/IMAGE_EDITORIAL_POLICY.md`
6. `docs/PUBLICATION_WORKFLOW.md`

使用するSkill：

- `.agents/skills/ucyuhou-article-planning/SKILL.md`
- `.agents/skills/ucyuhou-article-writing/SKILL.md`
- `.agents/skills/ucyuhou-editorial-review/SKILL.md`
- `.agents/skills/ucyuhou-image-direction/SKILL.md`

### Astro構造・コンポーネント・CSS

1. `.agents/AGENTS.md`
2. `docs/ASTRO_MIGRATION_SPEC.md`
3. `docs/DESIGN_PRESERVATION_CONTRACT.md`
4. `.agents/skills/astro-ai-editable-static-site/SKILL.md`

## 4. 現在の正式な編集場所

| 対象 | 場所 |
|---|---|
| 記事 | `src/content/articles/*.md` |
| 記事スキーマ | `src/content.config.ts` |
| カテゴリー定義 | `src/data/categories.ts` |
| ページ | `src/pages/` |
| レイアウト | `src/layouts/` |
| 共通部品 | `src/components/` |
| CSS | `src/styles/` |
| 画像 | `public/assets/images/` |
| 編集規則 | `docs/` |
| AI Skill | `.agents/skills/` |

旧ルート直下の `article-*.html`、`category-*.html`、`css/`、`js/` は移行元の保存物であり、新規記事の正式編集先ではない。

## 5. 新しい記事を追加するとき

1. 現存する全記事（本設計時点では26本）を走査して重複を確認する。
2. Article Briefを作る。
3. 必要な事実と引用だけを調査する。
4. `ARTICLE_FORMAT_SPEC.md` に従ってMarkdown原稿を作る。
5. 記事固有の正式画像を決める。
6. 編集校閲を通す。
7. `src/content/articles/<slug>.md` に配置する。
8. 次を実行する。

```bash
pnpm exec astro check
pnpm build
git diff --check
```

検索インデックスはビルド内で生成される。`js/search.js` や `dist/` を手動編集しない。

## 6. デザイン上の絶対条件

- Ucyuhouは思想解説メディアであり、スピリチュアルLPではない。
- 角丸を追加しない。
- 紫、金色、虹色、ネオン、グロー、パーティクルへ寄せない。
- 既存の傾き、非均一余白、ホバー差、画像重心などの必須ノイズを均一化しない。
- 情報として読む文字はWCAG AAのコントラストを守る。
- 操作要素はFitts’s lawとタップ領域を考慮する。
- Tailwind、React、UIライブラリ、重いアニメーションを理由なく追加しない。

詳細は `.agents/AGENTS.md` と `docs/DESIGN_PRESERVATION_CONTRACT.md` を読む。

## 7. 変更してはならないもの

ユーザーの明示指示がない限り、次を行わない。

- サイト名、著者名、8カテゴリーの改名
- 既存記事の大量書き換え
- Astro構造の再設計
- デザインの均一化
- 架空の拍手数、コメント数、閲覧数の追加
- 実装されていないSNS、コメント、会員、販売機能の追加
- Git commit、push、デプロイ
