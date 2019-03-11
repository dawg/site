module.exports = {
  title: 'VUSIC',
  description: "A modern Digital Audio Workstation",
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
          '/guide/user_guide'
        ]
      }
    ]
  }
}