export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: ' design prototype',
  description: 'Total Tech  website prototype',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    // {
    //   label: 'Docs',
    //   href: '/docs',
    // },
    {
      label: 'Pricing',
      href: '/pricing',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'About',
      href: '/about',
    },
  ],
  navMenuItems: [

    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Agency',
      href: '/Agency',
    },
    {
      label: 'Expertise',
      href: '/Expertise',
    },
    {
      label: 'Careers',
      href: '/Careers',
    },
    {
      label: 'Contact',
      href: '/Contact',
    },

  ],

  links: [
    {

      label: "Facebook",

      href: "/"

    },

    {

      label: "Instegram",

      href: "/"

    },

    {

      label: "Youtube",

      href: "/"

    },
  ]
};
