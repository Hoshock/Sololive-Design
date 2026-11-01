import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import SoloShowcase from './components/SoloShowcase.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('SoloShowcase', SoloShowcase)
  }
} satisfies Theme
