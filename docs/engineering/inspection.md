# 実サイトのソース調査手順

## 記録フォーマット

- 対象URL / 調査日 / Chromeバージョン / デバイス・画面サイズ
- Observation: スクリーンで確認できたこと
- Network: リソースURL、Initiator、Response、Cache有無
- Sources: バンドル・ソースマップ・関数/クラス・ライブラリ署名
- CSS: computed styles、SVG/Canvasの有無
- Conclusion: **confirmed / third-party reported / likely / unknown**

## 手順

1. DevTools → Network → Disable cache。リロードしてJS、CSS、SVG、画像の要求を確認。
2. DOMをElementsで見て、Swiper特有のクラス、canvasタグ、SVG、疑似要素を確認。クラス名だけでは確定しない。
3. Sourcesの全体検索で `gsap`、`ScrollTrigger`、`Swiper`、`Lenis`、`lottie`、`wp-content`、`_next/static` を検索。
4. バンドルにまとめられたモジュールを確認。グローバル変数の不存在は未使用の証拠ではない。
5. スクロールを停止し、Chrome Performanceでどのプロパティが変化しているか観察。
6. Reduced motion・モバイル幅・低速回線・JS無効時のフォールバックを検証。
7. 根拠URLと検証手順を [evidence.md](../research/evidence.md) に残す。

## コンソール用の簡易スニペット

```js
const hints = /gsap|ScrollTrigger|swiper|lenis|lottie|three|pixi|wp-content|_next\/static/i;
console.table(
  performance.getEntriesByType("resource")
    .map((entry) => entry.name)
    .filter((url) => hints.test(url))
);
console.table({
  swiperElement: Boolean(document.querySelector(".swiper-wrapper")),
  swiperInstance: Boolean(document.querySelector(".swiper")?.swiper),
  gsapGlobal: Boolean(window.gsap),
  lenisGlobal: Boolean(window.Lenis),
});
```

**限界:** ファイル名の難読化、tree-shaking、バンドル、非公開のモジュール、DevToolsでの見落としがある。確認できなければ`unknown`とする。
