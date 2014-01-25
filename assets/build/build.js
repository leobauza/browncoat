({
	baseUrl: '../js',
	mainConfigFile: '../js/main.js',
	name: 'main',
	out: '../js/min/scripts.min.js',
	//optimize: 'none',
	preserveLicenseComments: false,
	paths: {
		requireLib: 'require/require'
	},
	include: 'requireLib'
})