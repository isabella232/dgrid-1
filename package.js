// jshint unused: false
var profile = (function () {
	var copyOnlyMids = [
		/^dgrid1?\/Gruntfile$/,
		/^dgrid1?\/package$/
	];
	var miniExcludeMids = [
		/^dgrid1?\/CHANGES.md$/,
		/^dgrid1?\/LICENSE$/,
		/^dgrid1?\/README.md$/,
		/^dgrid1?\/Gruntfile$/,
		/^dgrid1?\/package$/
	];
	var amdRegex = /\.js$/;
	var isDemoRegex = /\/demos\//;
	var isStylusRegex = /\.styl$/;
	var isTestRegex = /\/test\//;

	return {
		resourceTags: {
			copyOnly: function (filename, mid) {
				return copyOnlyMids.some(function (midRE) {
					return midRE.test(mid);
				}) || isDemoRegex.test(filename) || isTestRegex.test(filename);
			},

			test: function (filename) {
				return isTestRegex.test(filename);
			},

			miniExclude: function (filename, mid) {
				return isDemoRegex.test(filename) ||
					isStylusRegex.test(filename) ||
					isTestRegex.test(filename) ||
					miniExcludeMids.some(function (midRE) {
						return midRE.test(mid);
					});
			},

			amd: function (filename) {
				return amdRegex.test(filename);
			}
		},

		trees: [
			[ '.', '.', /(?:\/\.)|(?:~$)|(?:(?:html-report|node_modules|nib|nodes)\/)/ ]
		]
	};
})();
