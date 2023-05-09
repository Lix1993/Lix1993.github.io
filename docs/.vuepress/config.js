module.exports = {
  title: "简历 for Li Xing",
  description: "简历 for Li Xing",
  head: [
    ["meta", { name: "keywords", content: '简历' }],
    ["link", { rel: "icon", href: `/icons/icon-521x521.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects/" },
      { text: "Skills", link: "/skills/" },
      { text: "GitHub", link: "https://github.com/Lix1993/lix1993.github.io" }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('Guide')
    },
    lastUpdated: 'Last Updated'
  },
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    }],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'G-ETPZ81N14C'
      }
    ]

  ],
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'customize',
        'advanced',
      ]
    }
  ]
}

