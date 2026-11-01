# SOLO/LIVE DESIGN LAB

ホロライブのソロライブ特設サイトを題材に、デザイン手法とWeb実装を調査し、オリジナルのVueショーケースで技術を試す非公式研究リポジトリ。

- **GitHub Pages:** https://hoshock.github.io/Sololive-Design/ （Pagesの有効化が必要）
- **Stack:** VitePress 1.6.4 / Vue 3 / scoped CSS / GitHub Actions
- **Docs:** VitePress標準のナビゲーション、サイドバー、ローカル検索を利用
- **UI libraries:** Tailwind CSS、shadcn-vue、GSAP、Swiper、Lenisは未採用。必要性が明確になった時点で評価。

## 開発

```bash
corepack enable
pnpm install
pnpm dev
pnpm test
pnpm build
pnpm preview
```

パッケージ管理には **pnpm 10.34.8** を使用（`package.json` の `packageManager` に指定）。今回の実行環境ではnpmレジストリへ接続できず、`pnpm-lock.yaml` はまだ生成できていません。初回は `pnpm install` で生成してコミットしてください。それまではCIが `pnpm install --no-frozen-lockfile` を使用します。

## GitHub Pages

[Settings → Pages](https://github.com/Hoshock/Sololive-Design/settings/pages) で **Build and deployment → Source → GitHub Actions** を選択。 `main` へのpushで `.github/workflows/deploy.yml` が実行される。VitePressの `base` は `/Sololive-Design/`。

公式の手順: https://vitepress.dev/guide/deploy

## Progressive disclosure

[AGENTS.md](AGENTS.md) を常時読む入口とし、内容は以下に分割。

| 目的 | ファイル |
| --- | --- |
| 公式サイトの比較 | [docs/research/sites.md](docs/research/sites.md) |
| 検出技術の根拠 | [docs/research/evidence.md](docs/research/evidence.md) |
| デザイン原則 | [docs/design/principles.md](docs/design/principles.md) |
| 実装技術 | [docs/engineering/techniques.md](docs/engineering/techniques.md) |
| DevTools調査 | [docs/engineering/inspection.md](docs/engineering/inspection.md) |
| 構造・公開 | [docs/architecture.md](docs/architecture.md) |
| 次の課題 | [docs/roadmap.md](docs/roadmap.md) |

公演の写真、キービジュアル、ロゴ、ソースコードを無断複製しない。ショーケースはオリジナルのCSSアート。公式とは無関係。
