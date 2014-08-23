({
	baseUrl: '../js',
	mainConfigFile: '../js/config.js',
	name: 'config',
	out: '../js/min/scripts.min.js',
	//optimize: 'none',
	preserveLicenseComments: false,
	paths: {
		requireLib: 'libs/require'
		//, jquery: "empty:"
	},
	include: 'requireLib'
})