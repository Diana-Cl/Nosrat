import { defineConfig } from 'vitepress';

const base = '/Nosrat/';
const siteUrl = `https://Diana-Cl.github.io${base}`;

export default defineConfig({
  base: base,
  lang: 'fa-IR',
  dir: 'rtl',
  title: 'آموزش زبان نصرت',
  description: 'یادگیری سریع و آسان زبان انگلیسی',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: `${base}favicon.ico` }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap',
        rel: 'stylesheet',
      },
    ],
  ],

  themeConfig: {
    nav: [
      { text: 'خانه', link: '/' },
      { text: 'درس‌ها', link: '/Lessons/lesson-1' },
    ],

    sidebar: [
      {
        text: 'لیست دروس',
        items: [
          { text: 'درس ۱', link: '/Lessons/lesson-1' },
          { text: 'درس ۲', link: '/Lessons/lesson-2' },
          { text: 'درس ۳', link: '/Lessons/lesson-3' },
          { text: 'درس ۴', link: '/Lessons/lesson-4' },
          { text: 'درس ۵', link: '/Lessons/lesson-5' },
          { text: 'درس ۶', link: '/Lessons/lesson-6' },
          { text: 'درس ۷', link: '/Lessons/lesson-7' },
          { text: 'درس ۸', link: '/Lessons/lesson-8' },
          { text: 'درس ۹', link: '/Lessons/lesson-9' },
          { text: 'درس ۱۰', link: '/Lessons/lesson-10' },
          { text: 'درس ۱۱', link: '/Lessons/lesson-11' },
          { text: 'درس ۱۲', link: '/Lessons/lesson-12' },
          { text: 'درس ۱۳', link: '/Lessons/lesson-13' },
          { text: 'درس ۱۴', link: '/Lessons/lesson-14' },
          { text: 'درس ۱۵', link: '/Lessons/lesson-15' },
          { text: 'درس ۱۶', link: '/Lessons/lesson-16' },
          { text: 'درس ۱۷', link: '/Lessons/lesson-17' },
          { text: 'درس ۱۸', link: '/Lessons/lesson-18' },
          { text: 'درس ۱۹', link: '/Lessons/lesson-19' },
          { text: 'درس ۲۰', link: '/Lessons/lesson-20' },
          { text: 'درس ۲۱', link: '/Lessons/lesson-21' },
          { text: 'درس ۲۲', link: '/Lessons/lesson-22' },
          { text: 'درس ۲۳', link: '/Lessons/lesson-23' },
        ],
      },
    ],

    docFooter: {
      prev: 'درس قبلی',
      next: 'درس بعدی',
    },
  },
});
