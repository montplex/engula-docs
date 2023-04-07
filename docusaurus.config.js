// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// eslint-disable-next-line @typescript-eslint/no-var-requires
const lightCodeTheme = require("prism-react-renderer/themes/github");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Engula DataBase Docs",
  tagline: "The tagline of my site",
  favicon: "img/favicon.ico",
  // homePage
  url: "https://dev.montplex.com",
  baseUrl: "/",
  organizationName: "montplex",
  projectName: "Engula DataBase Docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  /* 订阅  */
  /* customFields: {
    newsletter: {
      action:
        "https://dev.us14.list-manage.com/subscribe/post?u=4ed0fd1909674fddee53ac3e7&amp;id=dfdcae99f5&amp;f_id=004887e0f0",
      method: "post",
      emailFieldName: "EMAIL",
      firstNameFieldName: "FNAME",
      submitButtonName: "subscribe",
      tosURL: "https://mailchimp.com/legal/terms/",
      privacyPolicyURL: "https://www.intuit.com/privacy/statement/",
      serviceName: "Mailchimp",
    },
  }, */
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  /* i18n: {
    defaultLocale: "en",
    locales: ["zh-Hans", "en"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
    },
  }, */
  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 85,
        max: 2000,
        min: 500,
        steps: 4,
        disableInDev: true,
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Paweł Kosiec`,
          },
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.scss")],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: false,
        title: "Montplex",
        logo: {
          alt: "Montplex",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          // { type: "localeDropdown", position: "right" },
          // { to: "/projects", label: "Projects", position: "left" },
          // { to: "/talks", label: "Talks", position: "left" },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Connect",
            items: [
              {
                label: "Email me",
                href: "mailto:pawel@kosiec.dev",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/liaoyia",
              },
            ],
          },
          {
            title: "Discover",
            items: [
              {
                label: "About",
                to: "/",
              },
              // {
              //   label: "Projects",
              //   to: "/projects",
              // },
              // {
              //   label: "Talks",
              //   to: "/talks",
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MontPlex.`,
      },
      /* algolia: {
        appId: "5DLGGOZ8KA",
        apiKey: "67ab853aa6285e51112a649d3cb51928",
        indexName: "kosiec",
      }, */
      prism: {
        theme: require("prism-react-renderer/themes/dracula"),
        // theme: lightCodeTheme,
        // darkTheme: darkCodeTheme,
      },
      // 设置侧边栏可折叠
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),
};

module.exports = config;
