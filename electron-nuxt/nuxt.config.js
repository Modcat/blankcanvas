module.exports = {
	mode: 'spa',
	head: {title: 'Blankcanvas'}, // Headers of the page
	loading: false, // Disable default loading bar
	build: {
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
			}
			// Extend only webpack config for client-bundle
			if (isClient) { config.target = 'electron-renderer' }
		}
	},
	dev: process.env.NODE_ENV === 'DEV',
	css: [
		'@/assets/css/global.css'
	]
}
