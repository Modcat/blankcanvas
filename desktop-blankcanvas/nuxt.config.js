const host = Object.values(require('os').networkInterfaces())
	.flat()
	.filter((inter) => {
		return inter.family === 'IPv4' && !inter.internal
	})[0].address

module.exports = {
	mode: 'spa',
	
	server: {
		host,
		port: '1992'
	},
	/*
	** Headers of the page
	*/
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
	/*
	** Customize the progress-bar color
	*/
	loading: false,
	/*
	** Global CSS
	*/
	css: [
		'./assets/styles/base.less'
	],

	styleResources: {
		sass: ['./assets/styles/core/c-colors.less']
	},
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		'./plugins/nativescript-elements.js'
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [],
	/*
	** Nuxt.js modules
	*/
	modules: [
		'@nuxtjs/style-resources',
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'nuxt-svg-loader'
	],
	/*
	** Axios module configuration
	** See https://axios.nuxtjs.org/options
	*/
	axios: {},
	/*
	** Build configuration
	*/
	build: {
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
			}
			// Extend only webpack config for client-bundle
			if (isClient) { config.target = 'electron-renderer' }
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
