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

		'gh-pages': {
			options: {
				base: 'dist'
			},

			src: ['**']
		}
	});


	grunt.registerTask('default', [
		'copy'
	]);

	grunt.registerTask('upload', [ 'copy', 'gh-pages'])
}