<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const worlds = [
  { id: 'bloom', no: '01', name: 'BLOOM', label: 'BOTANICAL / SOFT', headline: 'The world,\nin full bloom.', ja: '想いが、花ひらく。', description: '曲線、淡い光、花びらを思わせるレイヤーで、心が開いてゆく余韻を表現する。', tags: ['CURVED FORMS', 'FLOATING LAYERS', 'SOFT LIGHT'] },
  { id: 'nocturne', no: '02', name: 'NOCTURNE', label: 'CELESTIAL / EDITORIAL', headline: 'After the\nlast light.', ja: '夜の向こうに、歌がある。', description: '星と光と余白。細い文字と抑制した色彩で、静かな高揚感を描く。', tags: ['SERIF TYPE', 'NIGHT BLUE', 'CINEMATIC SPACE'] },
  { id: 'pulse', no: '03', name: 'PULSE', label: 'ELECTRIC / GRAPHIC', headline: 'FEEL THE\nFREQUENCY.', ja: '鼓動まで、デザインする。', description: 'ライムの強烈なコントラスト、角張った形、巨大な文字でステージのエネルギーを表現する。', tags: ['ANGULAR FORMS', 'BOLD TYPE', 'NEON CONTRAST'] }
] as const
type WorldId = typeof worlds[number]['id']
const selected = ref<WorldId>('bloom')
const current = computed(() => worlds.find(w => w.id === selected.value) ?? worlds[0])
const motion = ref(true)
const systemAllowsMotion = ref(true)
onMounted(() => {
  systemAllowsMotion.value = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  motion.value = systemAllowsMotion.value
})
const running = computed(() => systemAllowsMotion.value && motion.value)
</script>

<template>
  <div class="solo" :class="{ paused: !running }">
    <section class="hero" id="top" aria-labelledby="hero-title">
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="hero-aurora" aria-hidden="true"></div>
      <div class="hero-circle circle-1" aria-hidden="true"></div>
      <div class="hero-circle circle-2" aria-hidden="true"></div>
      <div class="hero-circle circle-3" aria-hidden="true"></div>
      <div class="hero-orb" aria-hidden="true">♪</div>
      <div class="hero-copy">
        <p class="eyebrow"><b class="led"></b> INDEPENDENT WEB DESIGN STUDY <i></i> 2026 / VOL. 01</p>
        <h1 id="hero-title">EVERY STAGE <em>HAS A SOUL.</em></h1>
        <p class="hero-description">特別な一夜に、特別なWeb体験を。<br>ソロライブ特設サイトのデザインと実装を探求する、インタラクティブな研究室。</p>
        <div class="hero-cta"><a href="#worlds" class="cta">EXPLORE THE WORLDS <span>↗</span></a><a class="sub-cta" href="./research/sites.html">VIEW RESEARCH ↗</a></div>
      </div>
      <div class="hero-bottom"><span>01 / INTRODUCTION</span><span>SCROLL TO DISCOVER ↓</span><span>MADE WITH VUE + VITEPRESS</span></div>
    </section>

    <div class="ticker" aria-hidden="true"><span>EXPRESSION IS EVERYTHING ✳ BEYOND THE TEMPLATE ✳ EXPRESSION IS EVERYTHING ✳ BEYOND THE TEMPLATE ✳</span></div>

    <section class="manifesto">
      <div class="section-kicker">00 / THE IDEA</div>
      <div><p class="overline">DESIGN RESEARCH × FRONTEND ENGINEERING</p><h2>同じ情報でも、<br><strong>同じ体験にはしない。</strong></h2><p>NEWS、TICKET、MERCH。共通の情報構造があっても、公演の個性はタイポグラフィ、構図、質感、動き、インタラクションで生まれる。3つのオリジナルな世界観を切り替えて、デザインの違いを体験してみて。</p></div>
    </section>

    <section id="worlds" class="worlds">
      <div class="section-heading"><div><p class="overline">EXPERIMENT NO. 01 / VISUAL LANGUAGES</p><h2>THREE WORLDS<span>.</span></h2></div><p class="heading-aside">SELECT A WORLD<br>001 — 003</p></div>
      <div class="world-layout">
        <aside class="selector" aria-label="世界観を選択">
          <button v-for="world in worlds" :key="world.id" type="button" :aria-pressed="selected===world.id" :class="{active:selected===world.id}" @click="selected=world.id" class="world-button">
            <span class="world-number">{{ world.no }}</span><span class="world-button-label"><strong>{{ world.name }}</strong><small>{{ world.label }}</small></span><span class="arrow">↗</span>
          </button>
          <div class="motion-row"><span>● AMBIENT MOTION</span><button type="button" :disabled="!systemAllowsMotion" :aria-pressed="running" @click="motion=!motion">{{ !systemAllowsMotion ? 'SYSTEM OFF' : running ? 'ON / PAUSE' : 'OFF / PLAY' }}</button></div>
        </aside>
        <div class="stage" :class="'stage-'+current.id" aria-live="polite">
          <div class="stage-grid" aria-hidden="true"></div><div class="stage-ring stage-ring-1" aria-hidden="true"></div><div class="stage-ring stage-ring-2" aria-hidden="true"></div><div class="stage-decoration" aria-hidden="true">{{ current.id === 'bloom' ? '✿' : current.id === 'nocturne' ? '✦' : '✳' }}</div>
          <div class="stage-top"><span>DESIGN STUDY / {{ current.no }}</span><span>✳</span></div>
          <div class="stage-main" :key="current.id"><p>A FICTIONAL DIGITAL CONCERT</p><h3>{{ current.headline }}</h3><h4>{{ current.ja }}</h4><a class="stage-button" href="./design/principles.html">EXPLORE DESIGN NOTES ↗</a></div>
          <div class="stage-bottom"><span>{{ current.label }}</span><span>ORIGINAL DESIGN / 2026</span></div>
        </div>
      </div>
      <div class="world-details"><div><span>SELECTED STUDY / {{ current.no }}</span><h3>{{ current.name }}</h3></div><p>{{ current.description }}</p><div class="tags"><span v-for="tag in current.tags" :key="tag">{{ tag }}</span></div></div>
    </section>

    <section class="toolkit">
      <div class="section-heading"><div><p class="overline">EXPERIMENT NO. 02 / TOOLKIT</p><h2>BEHIND THE CURTAIN<span>.</span></h2></div><p class="heading-aside">DESIGN × CODE</p></div>
      <div class="tech-cards">
        <article><span>01 / COMPOSITION</span><div class="tech-art layer-art" aria-hidden="true"><i></i><i></i><i></i></div><h3>Layers &amp; Depth</h3><p>レイヤー、グラデーション、透過と奥行き。平面にステージをつくる。</p><code>CSS / SVG / transform</code></article>
        <article><span>02 / MOTION</span><div class="tech-art rhythm-art" aria-hidden="true"><i></i><i></i><i></i></div><h3>Motion &amp; Rhythm</h3><p>浮遊や時間の流れ。動きを足す場所と止める場所を意図的に選ぶ。</p><code>CSS / Web Animations</code></article>
        <article><span>03 / INTERACTION</span><div class="tech-art interface-art" aria-hidden="true"><i></i><i></i><i></i></div><h3>Worlds &amp; Interface</h3><p>UIも世界観の一部に。状態管理はVue、資料の導線はVitePress。</p><code>Vue 3 / VitePress</code></article>
      </div>
    </section>
    <section class="research">
      <p class="overline">DOCUMENTED, NOT JUST DECORATED.</p>
      <h2>美しさを、<br><em>検証できる形に。</em></h2>
      <p>公式クレジット、第三者の技術検出、視覚観察、再現候補を混同しない。AGENTS.mdから必要な資料へ段階的にアクセスできる。</p>
      <div><a href="./research/sites.html">CASE STUDIES ↗</a><a href="./research/evidence.html">EVIDENCE LOG ↗</a><a href="./engineering/techniques.html">TECHNIQUES ↗</a></div>
    </section>
    <footer class="lab-footer"><span>SOLO/LIVE DESIGN LAB</span><span>NON-OFFICIAL / ORIGINAL VISUALS ONLY</span><a href="#top">BACK TO TOP ↑</a></footer>
  </div>
</template>

<style scoped>
.solo{--bg:#090919;--fg:#f2eff9;font-family:Manrope,'Noto Sans JP',sans-serif;background:var(--bg);color:var(--fg);overflow:hidden}
.solo *{box-sizing:border-box}.solo a{color:inherit;text-decoration:none}.solo button{font:inherit}.solo :focus-visible{outline:3px solid #f1cf88;outline-offset:4px}
.solo h1,.solo h2,.solo h3,.solo h4,.solo p{border:0;padding:0;margin:0;line-height:1.2}
.hero{min-height:min(870px,calc(100svh - 64px));position:relative;isolation:isolate;display:flex;align-items:center;padding:100px clamp(24px,7vw,120px) 90px;overflow:hidden;background:radial-gradient(ellipse at 76% 43%,#433054 0,#1a182d 42%,#090919 75%)}
.hero-aurora{position:absolute;right:-15%;top:-20%;width:80vw;height:80vw;border-radius:50%;background:radial-gradient(circle,#a87de944,transparent 67%);filter:blur(35px)}
.hero-grid,.stage-grid{position:absolute;inset:0;background-image:linear-gradient(#ffffff16 1px,transparent 1px),linear-gradient(90deg,#ffffff16 1px,transparent 1px);background-size:80px 80px;opacity:.21;pointer-events:none}
.hero-circle{position:absolute;right:-13%;top:50%;height:72vw;width:54vw;max-width:740px;max-height:880px;border:1px solid #e6c8fb40;border-radius:50%;transform:translateY(-50%) rotate(35deg)}.circle-2{width:41vw;height:45vw;right:0;border-color:#e6c8fb70;transform:translateY(-50%) rotate(-23deg)}.circle-3{width:30vw;height:30vw;right:7%;border-color:#e6c8fb40}
.hero-orb{position:absolute;right:14%;top:37%;height:145px;width:145px;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at 30% 25%,#f8d7f5,#a56dc9 43%,#33265d);box-shadow:0 0 100px 40px #b081e650;color:#261c45;font:80px Georgia,serif;animation:drift 8s ease-in-out infinite}
.hero-copy{position:relative;z-index:2;max-width:1150px}.eyebrow,.overline,.section-kicker,.heading-aside,.hero-bottom,.world-number,.stage-top,.stage-bottom,.stage-main>p,.world-details>div>span,.tech-cards article>span,.lab-footer{font-size:10px;font-weight:700;letter-spacing:.17em}
.eyebrow{color:#c5b8de;display:flex;align-items:center;gap:13px;white-space:nowrap}.eyebrow i{height:1px;width:26px;background:#9384ae}.led{width:7px;height:7px;border-radius:50%;background:#d0b4ff;box-shadow:0 0 12px #e4ceff}
.hero h1{font-size:clamp(48px,9.2vw,143px);font-weight:800;line-height:.9!important;letter-spacing:-.093em;white-space:nowrap;margin:40px 0 35px!important}.hero h1 em{display:block;font:italic 500 clamp(62px,9vw,138px)/.95 'Cormorant Garamond',Georgia,serif;color:#d1b4fa;letter-spacing:-.058em;transform:translateX(3vw)}
.hero-description{font-size:14px;font-family:'Noto Sans JP',sans-serif;line-height:2.1!important;max-width:560px;color:#c3bdd1}.hero-cta{margin-top:40px;display:flex;align-items:center;flex-wrap:wrap;gap:30px;font-size:11px;font-weight:800;letter-spacing:.11em}
.cta{display:flex;align-items:center;justify-content:space-between;gap:29px;background:#d4b7ff;color:#221731!important;padding:17px 21px;transition:transform .2s}.cta:hover{transform:translateY(-4px)}.sub-cta{padding:13px 0;border-bottom:1px solid #ab9abc}
.hero-bottom{position:absolute;bottom:27px;left:clamp(24px,7vw,120px);right:clamp(24px,7vw,120px);display:flex;justify-content:space-between;color:#9d92b3;font-size:9px}
.ticker{height:57px;border-block:1px solid #6e5c85;background:#1a152b;display:flex;align-items:center;overflow:hidden;white-space:nowrap}.ticker span{display:block;font-size:12px;font-weight:800;letter-spacing:.28em;color:#e0c9f5;animation:slide 22s linear infinite}
.manifesto{padding:105px clamp(24px,7vw,120px);background:#101021;display:grid;grid-template-columns:1fr 2fr;gap:45px}.section-kicker{color:#cbb1f3}.overline{color:#a99bbf;margin-bottom:20px!important}.manifesto h2{font-family:'Noto Sans JP',sans-serif;font-size:clamp(30px,4.5vw,65px);line-height:1.5!important;letter-spacing:-.05em}.manifesto h2 strong{color:#d2b7ff}.manifesto p:last-child{font:14px/2.2 'Noto Sans JP',sans-serif;color:#aca6c0;max-width:740px;margin-top:26px}
.worlds{padding:110px clamp(24px,7vw,120px);background:#f4f0f7;color:#1a1427}.section-heading{display:flex;align-items:end;justify-content:space-between;gap:18px;margin-bottom:45px}.section-heading h2{font-size:clamp(34px,6.4vw,80px);font-weight:800;line-height:1!important;letter-spacing:-.075em}.section-heading h2 span{color:#a171e9}.worlds .overline,.toolkit .overline{color:#857a91}.heading-aside{font-size:9px;text-align:right;line-height:1.7;color:#95869e}
.world-layout{min-height:555px;display:grid;grid-template-columns:minmax(230px,.42fr) minmax(0,1fr);border:1px solid #ddd5e5;background:#fff}.selector{display:flex;flex-direction:column;padding:34px 0}.world-button{display:grid;grid-template-columns:25px 1fr 22px;align-items:start;text-align:left;gap:12px;border:0;border-bottom:1px solid #e8e1ed;background:transparent;padding:25px;color:#403550;cursor:pointer;transition:background .2s}.world-button:hover,.world-button.active{background:#f3e9fa;color:#7043aa}.world-button.active{border-left:3px solid #a470e8;padding-left:22px}.world-number{font-size:9px;margin-top:5px;color:#8d7b9a}.world-button-label strong{font-size:clamp(18px,2.2vw,30px);letter-spacing:-.05em;display:block}.world-button-label small{display:block;margin-top:7px;font-size:9px;letter-spacing:.09em;font-weight:700}.arrow{font-size:21px}.motion-row{margin-top:auto;display:flex;justify-content:space-between;align-items:center;gap:12px;padding:20px 23px 0;font-size:9px;font-weight:800;letter-spacing:.08em;color:#796984}.motion-row button{background:white;border:1px solid #d2c5df;padding:9px;cursor:pointer;font-size:9px}.motion-row button:disabled{opacity:.5;cursor:not-allowed}
.stage{--c-bg:#fad9e2;--c-fg:#7a2e50;--c-deco:#eb83ac;--c-line:#c96999;position:relative;display:flex;flex-direction:column;justify-content:space-between;isolation:isolate;overflow:hidden;padding:30px clamp(25px,4vw,60px);background:var(--c-bg);color:var(--c-fg);transition:background .35s,color .35s;min-height:555px}.stage-nocturne{--c-bg:#151f3e;--c-fg:#e8ddba;--c-deco:#b4bde0;--c-line:#8091b9}.stage-pulse{--c-bg:#d1ff36;--c-fg:#1d260f;--c-deco:#1d260f;--c-line:#728f1b}
.stage-grid{background-image:linear-gradient(90deg,var(--c-line) 1px,transparent 1px),linear-gradient(var(--c-line) 1px,transparent 1px);opacity:.12}
.stage-top,.stage-bottom{position:relative;z-index:3;display:flex;justify-content:space-between;gap:10px;font-size:9px}.stage-top span:last-child{font-size:20px}.stage-ring{position:absolute;width:360px;height:360px;border:1px solid var(--c-line);border-radius:50%;top:10%;right:-15%;opacity:.5;animation:drift 7s ease-in-out infinite}.stage-ring-2{width:220px;height:220px;top:28%;right:8%}.stage-decoration{position:absolute;right:-4%;top:10%;font-size:clamp(210px,25vw,375px);line-height:1;color:var(--c-deco);opacity:.42;animation:rotate 48s linear infinite}.stage-pulse .stage-decoration{font-size:clamp(240px,30vw,430px);opacity:.3}.stage-pulse .stage-ring{border-radius:0;transform:rotate(24deg)}
.stage-main{position:relative;z-index:2;animation:appear .35s ease both}.stage-main>p{font-size:9px;margin-bottom:23px}.stage-main h3{white-space:pre-line;font:600 clamp(58px,6.7vw,104px)/.84 'Cormorant Garamond',Georgia,serif;letter-spacing:-.06em}.stage-nocturne .stage-main h3{font-weight:400;font-style:italic}.stage-pulse .stage-main h3{font:italic 800 clamp(51px,6.2vw,100px)/.97 Manrope,sans-serif;letter-spacing:-.095em}.stage-main h4{font:700 15px 'Noto Sans JP',sans-serif;letter-spacing:.1em;margin-top:25px}.stage-button{display:inline-block;margin-top:36px;padding:13px 17px;border:1px solid currentColor;font-size:9px;font-weight:800;letter-spacing:.12em}.stage-pulse .stage-button{background:#1c2810;color:#e5ff89;border-color:#1c2810;transform:skew(-6deg)}.stage-nocturne .stage-button{border-radius:30px}
.world-details{padding:33px 0 0;display:grid;grid-template-columns:1fr 1.3fr 1.1fr;gap:30px;align-items:center}.world-details>div>span{color:#8d7e9b}.world-details h3{margin-top:7px;font-size:28px;letter-spacing:-.05em}.world-details>p{font:12px/2 'Noto Sans JP',sans-serif;color:#6f6378}.tags{display:flex;flex-wrap:wrap;gap:6px}.tags span{padding:8px;font-size:9px;font-weight:700;border:1px solid #c9bdce;color:#6a5b76}
.toolkit{background:#161426;padding:105px clamp(24px,7vw,120px)}.toolkit .heading-aside{color:#b3a8c5}.tech-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.tech-cards article{min-height:415px;border:1px solid #49425c;background:linear-gradient(135deg,#231e38,#151325);padding:25px}.tech-cards article>span{color:#cbb4f5}.tech-cards h3{font-size:22px;letter-spacing:-.04em}.tech-cards p{color:#b9b1c7;font:12px/2 'Noto Sans JP',sans-serif;margin:15px 0}.tech-cards code{color:#cbb4f5;background:transparent!important;font-size:11px!important;padding:0!important}
.tech-art{height:185px;position:relative;display:grid;place-items:center}.tech-art i{position:absolute;display:block}.layer-art i{width:120px;height:120px;border:1px solid #bda2f1;background:#9673c855;transform:rotate(28deg) skew(10deg,10deg)}.layer-art i:nth-child(1){translate:-26px -17px}.layer-art i:nth-child(3){translate:26px 17px}.rhythm-art i{height:12px;width:12px;border-radius:50%;background:#c6aaff;left:20%}.rhythm-art i:nth-child(2){left:45%;height:30px;width:30px;box-shadow:0 0 35px #ab89ef}.rhythm-art i:nth-child(3){left:75%;height:55px;width:55px;background:transparent;border:1px solid #c6aaff}.interface-art i{width:150px;height:85px;border:1px solid #a98bcb;background:#a98bcb44;transform:rotate(-10deg)}.interface-art i:nth-child(2){transform:translate(20px,-20px) rotate(8deg)}.interface-art i:nth-child(3){width:60px;height:25px;transform:translate(20px,24px);background:#c2a6e7}
.research{padding:120px clamp(24px,7vw,120px);background:radial-gradient(ellipse at 85% 0%,#67488180,transparent 60%),#2b2342}.research h2{font:700 clamp(42px,6.7vw,95px)/1.25 'Noto Sans JP',sans-serif;letter-spacing:-.06em;margin-bottom:25px}.research h2 em{color:#d5b9ff;font-weight:400}.research>p:not(.overline){max-width:630px;font:13px/2.2 'Noto Sans JP',sans-serif;color:#d3c8df}.research>div{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}.research>div a{padding:14px 18px;border:1px solid #a18bbf;font-size:11px;font-weight:800;letter-spacing:.1em}.research>div a:hover{background:#ffffff15}
.lab-footer{background:#0e0c1b;display:flex;justify-content:space-between;gap:12px;padding:31px clamp(24px,7vw,120px);color:#9e91ac;font-size:9px}
@keyframes drift{50%{translate:0 -22px}}@keyframes slide{to{translate:-40% 0}}@keyframes rotate{to{rotate:360deg}}@keyframes appear{from{opacity:0;translate:0 12px}to{opacity:1;translate:0 0}}
.paused *,.paused *:before,.paused *:after{animation-play-state:paused!important;transition-duration:0s!important}
@media(prefers-reduced-motion:reduce){.solo *,.solo *:before,.solo *:after{animation:none!important;transition:none!important}}
@media(max-width:850px){.hero h1{font-size:clamp(41px,9vw,76px)}.hero h1 em{font-size:clamp(55px,10vw,88px)}.hero-orb{right:5%;opacity:.6}.world-layout{grid-template-columns:230px minmax(0,1fr)}.world-button{padding:20px 14px}.world-button.active{padding-left:11px}.world-details{grid-template-columns:1fr 1fr}.tags{grid-column:1/-1}.stage-main h3{font-size:clamp(50px,6vw,80px)}}
@media(max-width:650px){.hero{min-height:730px;padding:90px 24px 95px}.hero-copy{margin-top:70px}.hero-circle{right:-35%}.hero-orb{top:15%;right:7%;height:95px;width:95px;font-size:52px}.hero h1{font-size:clamp(37px,11vw,65px);margin:28px 0!important}.hero h1 em{font-size:clamp(51px,12vw,77px);transform:none}.eyebrow{font-size:8px;letter-spacing:.08em;flex-wrap:wrap}.hero-description{font-size:12px}.hero-bottom{left:24px;right:24px;font-size:8px}.hero-bottom span:last-child{display:none}.manifesto{grid-template-columns:1fr;padding:80px 24px;gap:26px}.manifesto h2{font-size:clamp(28px,7vw,46px)}.manifesto p:last-child{font-size:12px}.worlds,.toolkit{padding:80px 24px}.section-heading h2{font-size:clamp(30px,7vw,52px)}.world-layout{grid-template-columns:1fr}.selector{padding:0;display:grid;grid-template-columns:repeat(3,1fr)}.world-button{display:block;padding:16px 9px;border-left:0!important;border-bottom:1px solid #dccfe3}.world-button.active{border-bottom:3px solid #9e69eb;padding-left:9px}.world-button-label strong{font-size:clamp(13px,3.8vw,21px)}.world-button-label small,.world-button .arrow{display:none}.motion-row{grid-column:1/-1;padding:12px 18px;margin:0}.stage{min-height:510px;padding:25px}.stage-main h3{font-size:clamp(49px,12vw,80px)}.stage-pulse .stage-main h3{font-size:clamp(44px,10vw,70px)}.stage-decoration{right:-17%;top:10%;font-size:230px}.world-details{grid-template-columns:1fr;gap:15px}.tags{grid-column:auto}.tech-cards{grid-template-columns:1fr}.tech-cards article{min-height:370px}.research{padding:90px 24px}.lab-footer{padding:28px 24px;flex-wrap:wrap;font-size:8px}.lab-footer span:nth-child(2){order:3;width:100%}}
</style>
