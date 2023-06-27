// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

const config = {
	title: "Montplex Docs",
	tagline: "Engula DataBase Docs",
	favicon: "img/montplex.ico",
	url: "https://dev.montplex.com",
	baseUrl: "/docs",
	organizationName: "Montplex",
	projectName: "Montplex Docs",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	i18n: {
		defaultLocale: "en",
		locales: ["en", "zh-Hans"],
		localeConfigs: {
			en: {
				htmlLang: "en",
			},
		},
	},

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
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			hideOnScroll: false,
			title: "", // Montplex
			logo: {
				alt: "montplex Logo",
				src: "img/montplex.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "Docs",
				},
				{ to: "/blog", label: "Blog", position: "left" },
				{ to: "docs/contact", label: "Contact Us", position: "left" },
				{
					href: "https://dev.montplex.com/",
					label: "Console",
					position: "right",
				},
				{
					type: "localeDropdown",
					position: "right",
				},
			],
		},
		colorMode: {
			defaultMode: "light",
			disableSwitch: false,
			respectPrefersColorScheme: true,
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme,
		},
		// 设置侧边栏可折叠
	/* 	docs: {
			sidebar: {
				hideable: true,
				autoCollapseCategories: true,
			},
		}, */
	},
};

module.exports = config;
