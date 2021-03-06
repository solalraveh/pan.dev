/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "Build Security",
  tagline:
    "Explore our API Doc, Quickstarts, and Blog or dive right in and play in our sandbox. We have all the tools you needs to make the next big security innovation. SDKs in your favorite languages, detailed walk-throughs for sample apps, and all the resources you’ll need to flourish.",
  url: "https://pan.dev",
  baseUrl: "/",
  favicon: "img/PANW_Parent_Brand_Peelable_RGB_Red.png",
  organizationName: "PaloAltoNetworks", // Usually your GitHub org/user name.
  projectName: "pan.dev", // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true,
    navbar: {
      title: "",
      logo: {
        alt: "Palo Alto Networks for Developers",
        src: "img/PANW_Parent_Brand_Peelable_RGB_Red.svg",
        menus: [
          {
            src: "img/PANW_Parent_Brand_Peelable_RGB_Red.svg",
            position: "left"
          },
        ],
      },
    
      links: [
        {
          href: "https://strata.pan.dev",
          label: "Strata",
          position: "left"
        },
        {
          href: "https://cortex.pan.dev",
          label: "Cortex",
          position: "left"
        },
        {
          href: "https://xsoar.pan.dev",
          label: "Cortex XSOAR",
          position: "left"
        },
        {
          href: "https://gallery.pan.dev",
          label: "Find Code",
          position: "left"
        },
        {
          href: "https://medium.com/palo-alto-networks-developer-blog",
          label: "Blog",
          position: "right"
        },
        {
          href: "https://github.com/PaloAltoNetworks",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Products",
          items: [
            {
              label: "Strata",
            href: "https://strata.pan.dev"
            },
            {
              label: "Cortex",
            href: "https://cortex.pan.dev"
            },
            {
              label: "Cortex XSOAR",
            href: "https://xsoar.pan.dev"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              href: "https://medium.com/palo-alto-networks-developer-blog"
            }
          ]
        }
      ],
      logo: {
        alt: "Palo Alto Networks for developers",
        src: "img/PANW_Parent_Brand_Primary_Logo_RGB_KO.svg",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Palo Alto Networks, Inc.`
    }
  },
  themes: ["@docusaurus/theme-live-codeblock"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // editUrl:
          //   "https://github.com/PaloAltoNetworks/panos.pan.dev/tree/master/docs",
          routeBasePath: "docs",
          include: ["**/*.md", "**/*.mdx"], // Extensions to include.
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/DocItem",
          remarkPlugins: [],
          rehypePlugins: [],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
  plugins: [
    "@docusaurus/plugin-sitemap",
    {
      cacheTime: 600 * 1000, // 600 sec - cache purge period
      changefreq: "weekly",
      priority: 0.5
    }
  ],
  stylesheets: [
    {
      href:
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      type: "text/css"
    }
  ]
};
