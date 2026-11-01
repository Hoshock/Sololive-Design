# AGENTS.md

## Mission

Sololive-Designは、ソロライブ特設サイトの非公式デザイン研究と、VitePress/Vueによるインタラクティブな検証を行うリポジトリ。

## Progressive disclosure

このファイルは**軽量なルーター**。研究資料を丸ごと同時に読み込まず、タスクごとに以下の資料だけを読む。

| タスク | 最初に読む | 必要なら追加 |
| --- | --- | --- |
| ソロライブの事例を探す | `docs/research/sites.md` | `docs/research/evidence.md` |
| ライブラリ利用の根拠確認 | `docs/research/evidence.md` | `docs/engineering/inspection.md` |
| デザイン変更 | `docs/design/principles.md` | `docs/engineering/techniques.md` |
| Vue / CSS実装 | `docs/engineering/techniques.md` | `docs/architecture.md` |
| Pages、ビルド、構成変更 | `docs/architecture.md` | `README.md` |
| 次にやることを選ぶ | `docs/roadmap.md` | 該当資料だけ |

## Rules

1. **Evidence fidelity:** 公式一次資料、第三者検出、視覚観察、再現仮説を明示的に区別。元サイトのJSバンドルを調査していない場合に「採用確認」と書かない。
2. **No asset cloning:** タレントの絵、ロゴ、音源、元サイトの実装を無断複製しない。独自のCSS/SVGアートを使う。
3. **Reuse framework:** VitePress標準テーマ、Nav、Sidebar、Search、Markdown、SSGを最大限利用。独自のルーター・検索・ドキュメントレンダラを作らない。
4. **Interactive UI:** Vue 3 Composition APIを使い、`docs/.vitepress/theme/components/` 以下にSFCを置く。
5. **Dependencies by need:** Tailwindやshadcn-vueは実装の合理的な理由ができるまで増やさない。複雑なDialog/Select/Form等ではshadcn-vueの利用を検討。モーションにGSAP、スライダーにSwiper等を採用する場合も必要性と代替案を記録。
6. **SSR-safe:** VitePressはSSGするので`window`等の利用は`onMounted`以降。
7. **Accessible motion:** reduced-motionに対応。キーボード操作とフォーカスを維持。
8. **Pages base:** `/Sololive-Design/` で公開。絶対ルートパスを決め打ちしない。
9. **Docs as source of truth:** 新しい調査結果はdocsの該当ファイルへ追記し、AGENTS.mdを巨大化させない。

## File map

- `docs/index.md`: Vueショーケース。
- `docs/.vitepress/config.mts`: VitePressサイト設定。
- `docs/.vitepress/theme/index.ts`: デフォルトテーマを拡張。
- `docs/.vitepress/theme/components/SoloShowcase.vue`: 3つの世界観を切り替えるUI。
- `docs/research/`: 調査記録。
- `docs/design/`: デザイン。
- `docs/engineering/`: 実装・検証。
- `.github/workflows/deploy.yml`: Pages自動公開。

## Validation

`npm install && npm run test && npm run build`。スマホ・キーボード・reduced-motion・3テーマの切替・GitHub Pagesの公開状態を確認。この依頼においては`main`への直接コミットが明示されている。
