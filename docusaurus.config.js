/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Kevin Loh Jun Yong',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'KevinLohJunYong',
      items: [
        { to: 'skills', label: 'Skills', position: 'left' },
        { to: 'projects', label: 'Projects', position: 'left' },
        {
          href: "mailto:e0439232@u.nus.edu", 
          target: "_blank",
          label: 'Contact',
          position: 'right',
        },
        {
          href: "https://github.com/KevinLohJunYong", 
          target: "_blank",
          label: 'Github',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
