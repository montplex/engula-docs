// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const config = {
	title: 'Montplex Docs',
	tagline: 'Engula DataBase Docs',
	favicon: 'img/favicon.ico',
	url: 'https://dev.montplex.com',
	baseUrl: '/',

	organizationName: 'montplex',
	projectName: 'Engula DataBase Docs',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	i18n: {
		defaultLocale: 'zh-Hans',
		locales: ['en', 'zh-Hans'],
		localeConfigs: {
			en: {
				htmlLang: 'en',
			},
		},
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
				},
				blog: {
					showReadingTime: true,
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: 'img/docusaurus-social-card.jpg',
			navbar: {
				hideOnScroll: false,
				title: 'Montplex',
				logo: {
					alt: 'Montplex',
					src: 'img/logo.svg',
				},
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'tutorialSidebar',
						position: 'left',
						label: 'Docs',
					},
					{ to: '/blog', label: 'Blog', position: 'left' },
					{ to: 'docs/support/contact-us', label: 'Contact Us', position: 'left' },
					{
						href: 'https://dev.montplex.com/',
						label: 'Console',
						position: 'right',
					},
					{
						type: 'localeDropdown',
						position: 'right',
					},
				],
			},
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: false,
				respectPrefersColorScheme: true,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			// 设置侧边栏可折叠
			docs: {
				sidebar: {
					hideable: true,
					autoCollapseCategories: true,
				},
			},
		}),
}

module.exports = config
