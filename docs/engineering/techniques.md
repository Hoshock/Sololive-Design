# CSS・SVG・Vueとライブラリの技術選定

元のライブサイトで「実際に使われている技術」については[エビデンス](../research/evidence.md)の確度を見る。この文書は**同種の表現を実現する際の候補**であり、採用確認ではない。

| 目標 | まず標準API | 必要に応じて |
| --- | --- | --- |
| レイヤーと奥行き | CSS transform, z-index, gradients | Canvas/WebGL |
| 特殊な境界 | SVG path, mask-image, clip-path | 動的な図形生成 |
| 縦組み | writing-mode: vertical-rl | 不要 |
| 出現・浮遊 | CSS animations, IntersectionObserver | 複雑な同期 → GSAP |
| 動画カルーセル | CSS scroll-snap | ループ/多数の状態 → Swiper |
| 慣性スクロール | ネイティブスクロール | 表現上必要ならLenis |
| 事前制作アニメ | CSS / SVG | 複雑なベクター素材ならLottie |

## このプロジェクトの採用

VitePress (Nav/Sidebar/Search/SSG) + Vue SFC (Composition APIでの状態) + CSS (レイヤー、動き、テーマ)。外部UIライブラリはまだ不要。

### shadcn-vue / Tailwindの使い所

VitePress標準のドキュメントUIと、3つのテーマボタン程度なら導入不要。複雑なDialog、フォーム、Select、Commandなどのアクセシビリティが必要ならshadcn-vueを検討し、多数の共有コンポーネントとデザイントークンが必要ならTailwind CSSを検討する。shadcn/uiはReact用、Vue版はshadcn-vue。

- https://vitepress.dev/guide/custom-theme
- https://swiperjs.com/swiper-api
- https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- https://lenis.dev/
- https://shadcn-vue.com/
