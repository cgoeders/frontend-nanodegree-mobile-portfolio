module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		copy: {
			dist: {
				files: [
					{
						expand: true, cwd: 'src', src: ['**'], dest: 'dist/'
					}
				]
			}
		},

		open: {
			dev: {
				path: 'dist/index.html'
			}
		},

		'gh-pages': {
			options: {
				base: 'dist'
			},

			src: ['**']
		}
	});


	grunt.registerTask('default', [
		'copy', 'open'
	]);

	grunt.registerTask('upload', [ 'default', 'gh-pages'])
}