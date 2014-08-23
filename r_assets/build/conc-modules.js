({
	baseUrl: '../js',
	mainConfigFile: '../js/main.js',
	name: 'main',
	out: '../js/conc-modules.js',
	optimize: 'none',
	preserveLicenseComments: false,
	paths: {
		requireLib: 'libs/require'
	},
	include: 'requireLib'
})