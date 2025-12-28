import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import './custom.css';
import AudioPlayer from './components/AudioPlayer.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('AudioPlayer', AudioPlayer);
  },
} satisfies Theme;
