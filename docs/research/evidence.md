# エビデンス台帳

更新: 2026-11-01。実装を判断するときの根拠レベルを揃えるためのページ。

## ラベル

- **A: 公式一次資料**: 公式ページのクレジット、公開HTML、実際に取得したリソースなど。
- **B: 第三者検出報告**: 外部調査サイトによる技術スタック検出。実ソースでの裏付けはこの研究では未実施。
- **C: 視覚観察**: 見た目・動き・構図から分かる内容。
- **D: 再現候補/仮説**: 似た演出を実装する方法。元サイトの採用技術を意味しない。

| ID | 事項 | 確度 | 根拠 |
| --- | --- | --- | --- |
| E-01 | おかゆ2ndのWeb制作はEAST END CREATIVE（片山莉緒・長峯翔太） | A | https://personyarespect.hololivepro.com/information/ |
| E-02 | IRyS 1stでSwiper/WordPress/Google Fontsの検出報告 | B | https://katapick.com/sites/irys-hope-beyond-the-stars |
| E-03 | みこ2ndでLenis/Swiper/WordPress/Google Fontsの検出報告 | B | 2026-11-01調査時の第三者情報。元ページURL・検出手法の再確認が必要 |
| E-04 | ねね1stでSwiper/WordPress/Google Fontsの検出報告 | B | 2026-11-01調査時の第三者情報。元ページURL・検出手法の再確認が必要 |
| E-05 | IRySの詩的な章構成、中央拡大のVIDEOカルーセル | C/B | https://katapick.com/sites/irys-hope-beyond-the-stars |
| E-06 | ねね1stの章ごとの配色と雲形境界 | C | https://nenenenenenenene.hololivepro.com/ / https://katapick.com/patterns |
| E-07 | みこ2ndのリボンと縦書き装飾 | C | https://blooming-parade.hololivepro.com/ / https://katapick.com/studio |
| E-08 | パララックスにCSS transform、時系列制御にGSAPが有効 | D | https://gsap.com/docs/v3/Plugins/ScrollTrigger/ |
| E-09 | スライダー再現にSwiperが有効 | D | https://swiperjs.com/swiper-api |
| E-10 | 滑らかな慣性スクロールの実装候補としてLenis | D | https://lenis.dev/ |

### 未確認の技術

React / Next.js / Vue / Three.js / PixiJS / Tailwind CSS / jQuery / 特定バージョンのGSAPの採用は、この研究からは断定しない。WordPressはサイト全体のフロントエンド構成を確定するものではない。

## 次の証拠収集

1. 対象サイト・URL・日時・ブラウザ環境を記録する。
2. NetworkのJS/CSSリクエストとレスポンスヘッダーを確認する。
3. ソースマップ、バンドル内シンボル、DOM構造、CSS computed stylesなどを複数証拠として揃える。
4. 証拠によりA/B/C/Dを更新し、見た目からの推測を採用確定に昇格させない。

**免責:** Katapickの検出報告を採用実装の最終証拠とせず、現行のソース解析とは区別する。
