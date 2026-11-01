# Architecture

VitePress 1.6.4とVue 3による非公式のWebデザイン研究室。

## 構成

```text
/
├── AGENTS.md
├── README.md
├── package.json
├── .github/workflows/deploy.yml
└── docs/
    ├── index.md
    ├── .vitepress/
    │   ├── config.mts
    │   └── theme/
    │       ├── index.ts
    │       ├── custom.css
    │       └── components/SoloShowcase.vue
    ├── research/{sites,evidence}.md
    ├── design/principles.md
    ├── engineering/{techniques,inspection}.md
    └── {architecture,roadmap,README}.md
```

VitePressのdefault themeを**拡張**。Nav、Sidebar、検索、Markdownレンダリング、SSGなどは標準機能を使う。Vue SFCの3テーマUIをショーケースだけで使う。モバイル、キーボード、reduced-motionに対応。

## 公開

- `base: '/Sololive-Design/'`。
- Actionsで`pnpm install --no-frozen-lockfile && pnpm test && pnpm build`。現時点はlockfileが未生成のため初回は非frozenで実行。lockfileを作成してコミット後に`--frozen-lockfile`へ変更。
- 成果物は`docs/.vitepress/dist`。
- [Settings → Pages](https://github.com/Hoshock/Sololive-Design/settings/pages) → **Source: GitHub Actions** に変更する。branch / rootではない。
- 公開URLは`https://hoshock.github.io/Sololive-Design/`。

公式ガイド: https://vitepress.dev/guide/deploy

## 依存導入の判断

現時点はVitePress + Vue + CSSで成立。VitePress自体がルーティング、ナビ、検索を提供するため、ここを再発明しない。Tailwind CSSは共有トークンや多数コンポーネントを運用する段階で検討。shadcn-vueは複雑なダイアログ/フォーム/選択部品が登場した際に評価。Swagger等の無関係なライブラリは導入しない。
