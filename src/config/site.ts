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
      label: 'Home',
      href: '/',
    },
    {
      label: 'Projects',
      href: '/projects',
    },

    {
      label: 'Expertise',
      href: '/Expertise',
    },
    {
      label: 'About Me',
      href: '/about',
    },
    // {
    //   label: 'Careers',
    //   href: '/Careers',
    // },
    {
      label: 'Contact Me',
      href: '/Contact',
    },

  ],

  links: [
    {

      label: "Facebook",

      href: "/"

    },

    {

      label: "Instagram",

      href: "/"

    },

    {

      label: "Youtube",

      href: "/"

    },
  ]
};
