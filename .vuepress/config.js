module.exports = {
  title: 'DAWG',
  description: "A DAW built using the web 🤘",
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/installation',
          '/guide/user_guide',
          '/guide/troubleshooting',
        ]
      }
    ]
  }
}