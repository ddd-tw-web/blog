const baseUrl = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY}/`
  : "/";

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "DDDesign Taiwan Blog",
    tagline: "DDDesign Taiwan Community Official Blog",
    url: "https://ddd-tw.com",
    baseUrl,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "ddd-tw-web", // Usually your GitHub org/user name.
    projectName: "ddd-tw-web.github.io", // Usually your repo name.
    i18n: {
      defaultLocale: "zh-Hant",
      locales: ["zh-Hant"],
    },
    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          blog: {
            showReadingTime: true,
            routeBasePath: "/",
          },
          docs: false,
          pages: false,
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        colorMode: {
          defaultMode: "dark",
          disableSwitch: true,
        },
        navbar: {
          title: "DDDesign Taiwan Blog",
          logo: {
            alt: "DDDesign Taiwan Logo",
            src: "img/logo.svg",
          },
          items: [],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Link",
              items: [
                {
                  label: "Homepage",
                  href: "https://ddd-tw.com/",
                },
                {
                  label: "Conference",
                  href: "https://conference.ddd-tw.com/",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "E-mail",
                  href: "mailto:conference@ddd-tw.com",
                },
                {
                  label: "Messenger",
                  href: "https://m.me/DDDCommunity.tw",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/DddTaiwan",
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/ddd_twig",
                },
                {
                  label: "FB Page",
                  href: "https://www.facebook.com/DDDCommunity.tw",
                },
                {
                  label: "FB Group",
                  href: "https://www.facebook.com/groups/dddtaiwan",
                },
                {
                  label: "YouTube",
                  href: "https://www.youtube.com/channel/UCydw7dbEksG3axEMjHy4BxQ",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} DDDesign Taiwan, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme:
            /* @type {import('@docusaurus/preset-classic').PrismTheme} */
            {
              plain: {
                color: "#d6deeb",
                backgroundColor: "#011627",
              },
              styles: [
                {
                  types: ["changed"],
                  style: {
                    color: "rgb(162, 191, 252)",
                    fontStyle: "italic",
                    "--slnt": '"slnt" -15',
                    fontVariationSettings:
                      "var(--mono), var(--casl), var(--slnt), var(--CRSV)",
                  },
                },
                {
                  types: ["deleted"],
                  style: {
                    color: "rgba(239, 83, 80, 0.56)",
                    fontStyle: "italic",
                    "--slnt": '"slnt" -15',
                    fontVariationSettings:
                      "var(--mono), var(--casl), var(--slnt), var(--CRSV)",
                  },
                },
                {
                  types: ["inserted", "attr-name"],
                  style: {
                    color: "rgb(173, 219, 103)",
                    fontStyle: "italic",
                    "--slnt": '"slnt" -15',
                    fontVariationSettings:
                      "var(--mono), var(--casl), var(--slnt), var(--CRSV)",
                  },
                },
                {
                  types: ["comment"],
                  style: {
                    color: "rgb(99, 119, 119)",
                    fontStyle: "italic",
                    "--slnt": '"slnt" -15',
                    fontVariationSettings:
                      "var(--mono), var(--casl), var(--slnt), var(--CRSV)",
                  },
                },
                {
                  types: ["string", "url"],
                  style: {
                    color: "rgb(173, 219, 103)",
                  },
                },
                {
                  types: ["variable"],
                  style: {
                    color: "rgb(214, 222, 235)",
                  },
                },
                {
                  types: ["number"],
                  style: {
                    color: "rgb(247, 140, 108)",
                  },
                },
                {
                  types: ["builtin", "char", "constant", "function"],
                  style: {
                    color: "rgb(130, 170, 255)",
                  },
                },
                {
                  types: ["punctuation"],
                  style: {
                    color: "rgb(199, 146, 234)",
                  },
                },
                {
                  types: ["selector", "doctype"],
                  style: {
                    color: "rgb(199, 146, 234)",
                    fontStyle: "italic",
                    "--slnt": '"slnt" -15',
                    fontVariationSettings:
                      "var(--mono), var(--casl), var(--slnt), var(--CRSV)",
                  },
                },
                {
                  types: ["class-name"],
                  style: {
                    color: "rgb(255, 203, 139)",
                  },
                },
                {
                  types: ["tag", "operator", "keyword"],
                  style: {
                    color: "rgb(127, 219, 202)",
                  },
                },
                {
                  types: ["boolean"],
                  style: {
                    color: "rgb(255, 88, 116)",
                  },
                },
                {
                  types: ["property"],
                  style: {
                    color: "rgb(128, 203, 196)",
                  },
                },
                {
                  types: ["namespace"],
                  style: {
                    color: "rgb(178, 204, 214)",
                  },
                },
              ],
            },
        },
      }),
    plugins: [
      () => ({
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: "link",
                attributes: {
                  rel: "preconnect",
                  href: "https://fonts.googleapis.com",
                },
              },
              {
                tagName: "link",
                attributes: {
                  rel: "preconnect",
                  href: "https://fonts.gstatic.com",
                  crossorigin: true,
                },
              },
              {
                tagName: "link",
                attributes: {
                  rel: "stylesheet",
                  href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap",
                },
              },
              {
                tagName: "link",
                attributes: {
                  rel: "stylesheet",
                  href: "https://fonts.googleapis.com/css2?family=Recursive&display=swap",
                },
              },
            ],
          };
        },
      }),
    ],
  }
);
