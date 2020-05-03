
module.exports = {
	mode: 'spa',
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	loading: false,
	css: [
		'./assets/styles/base.less'
	],
	styleResources: {
		sass: ['./assets/styles/core/c-colors.less']
	},
	plugins: [
		'./plugins/nativescript-elements.js',
		'./plugins/feathers-client.js'
	],
	buildModules: [],
	modules: [
		'@nuxtjs/style-resources',
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
	],
	axios: {},
	build: {
		transpile: ['feathers-vuex'],
		extend (config, { isDev, isClient }) {
			// Extend only webpack config for client-bundle
			// if (isClient) { config.target = 'electron-renderer' }
		}
	},
	dev: process.env.NODE_ENV === 'DEV',
	vue: {
		config: {
			ignoredElements: [
				'AbsoluteLayout',
				'DockLayout',
				'FlexboxLayout',
				'GridLayout',
				'StackLayout',
				'SegmentedBarItem',
				'WrapLayout',
				'ActionBar',
				'ActionItem',
				'NavigationButton',
				'ActivityIndicator',
				'Button',
				'DatePicker',
				'Image',
				'Label',
				'ListPicker',
				'ListView',
				'Progress',
				'ScrollView',
				'SearchBar',
				'SegmentedBar',
				'Slider',
				'Switch',
				'TabView',
				'TextField',
				'TextView',
				'HtmlView',
				'WebView',
				'TimePicker',
				'Page',
				'Placeholder'
			],
			productionTip: false
		}
	},
}
