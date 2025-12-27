import { defineConfig } from 'vitepress';
import './custom.css';

export default defineConfig({
  lang: 'fa-IR',
  title: "آموزش زبان ساده",
  description: "دوره ۲۳ مرحله‌ای آموزش زبان",
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap',
        rel: 'stylesheet',
      },
    ],
    [
      'style',
      {},
      `
      :root {
        --vp-font-family-base: "Vazirmatn", sans-serif;
        --vp-font-family-mono: "Vazirmatn", monospace;
      }
      body {
        direction: rtl;
        font-family: "Vazirmatn", sans-serif;
      }
      `
    ],
  ],

  themeConfig: {
    nav: [
      { text: '🏠 خانه', link: '/' },
      { text: '📚 شروع درس‌ها', link: '/Lessons/lesson-1' },
    ],

    sidebar: {
      '/Lessons/': [
        {
          text: 'لیست درس‌های آموزشی',
          items: Array.from({ length: 23 }, (_, i) => ({
            text: `درس شماره ${i + 1}`,
            link: `/Lessons/lesson-${i + 1}`
          }))
        }
      ]
    },

    docFooter: {
      prev: 'درس قبلی',
      next: 'درس بعدی'
    },
    
    outline: {
      label: 'فهرست عناوین این درس'
    },

    returnToTopLabel: 'برگشت به بالا',
    sidebarMenuLabel: 'منو',
    darkModeSwitchLabel: 'تم تاریک/روشن',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'جستجو...' }
        }
      }
    }
  }
});
