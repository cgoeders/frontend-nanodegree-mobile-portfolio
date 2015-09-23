module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		concat: {
			dist: {
				src: 'src/js/*.js',
				dest: 'dist/js/app.js'
			}
		}

	});

	grunt.registerTask('default', [
		'concat'
	]);
}