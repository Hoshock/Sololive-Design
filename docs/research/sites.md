# 参考サイトの観察カタログ

2026-11-01時点。これはUIの**観察とデザイン分析**であり、JSライブラリの使用をすべて特定したという意味ではない。検出技術は [evidence.md](evidence.md) を見る。

| タレント / 公演 | 公式サイト | 観察されたデザイン要素 | 注目する問い |
| --- | --- | --- | --- |
| 猫又おかゆ 2nd「ぺるそにゃ～りすぺくと」 | https://personyarespect.hololivepro.com/ | 二面性・鏡合わせ・メッセージ画像のレイヤー | 世界観を縦スクロールでどう物語化するか |
| さくらみこ 2nd「Blooming Parade!!」 | https://blooming-parade.hololivepro.com/ | リボン、桜、物語風のKVと縦組みテキスト | 装飾をセクション間の導線にできるか |
| 桃鈴ねね 1st「花咲く＊ねねねねねねねね超開花！」 | https://nenenenenenenene.hololivepro.com/ | パステル多色、雲型区切り、花のボタン | 章ごとの大胆なカラー変更を成立させる条件は |
| IRyS 1st「HOPE ||: Beyond the Stars」 | https://hope-beyond-the-stars.hololivepro.com/ | 暗い星空、セリフ体、章番号、詩の挿入 | 文字の組版で静かな高揚感を作れるか |
| 宝鐘マリン 1st「Ahoy!! キミたちみんなパイレーツ♡」 | https://ahoy-youre-all-pirates.hololivepro.com/ | 舞台的なロゴ、DAYごとの異なる演出 | ローディングとKVの情報量をどう制御するか |
| 博衣こより 1st「Dream Spark」 | https://dream-spark.hololivepro.com/ | 高彩度の装飾、画像見出し、長尺の情報構成 | 情報密度の高い告知ページを華やかに保てるか |
| ときのそら「Everyday of Light」 | https://tokinosora-live.com/sorapa2026-pia-arena-mm | タイトル反復、スクロール案内、独立ドメイン | キービジュアルを時間帯や公演区分とどう結びつけるか |

参考範囲を広げる場合の比較対象: 天音かなた「LOCK ON」、常闇トワ「SHINier」、鷹嶺ルイ「REBELLION」、ハコス・ベールズ「REGALIA」、星街すいせい「SuperNova」。**URL・実装詳細は追加検証してから記載すること。**

## 横断的な発見

1. NEWS、TICKET、MERCH、ALBUM、VIDEO、PROFILEという**情報の種類は共通化**しやすい。
2. 一方で装飾はKVだけでなく、見出し、ボタン、章境界、スクロール順、文字組みまで固有のテーマを反映する。
3. ライブ世界観と操作性は競合しない。固定CTAなど実用的な導線も公演モチーフに変えられる。
4. キャラクター、前景装飾、背景を別レイヤーとして設計すると動きを分離できる。

## 一次資料の例

- おかゆ2ndの公式制作クレジット（Web制作：EAST END CREATIVE）: https://personyarespect.hololivepro.com/information/
- みこ2nd公式: https://blooming-parade.hololivepro.com/
- ねね1st公式: https://nenenenenenenene.hololivepro.com/
- こより1st公式: https://dream-spark.hololivepro.com/
- ときのそら公式公演情報: https://hololive.hololivepro.com/events/everyday-of-light/

## 注意

画像の構成やアニメーションは視覚観察だけで決定しない。特に「CanvasかCSSか」「GSAP使用か」は未確認なら候補として記録する。
