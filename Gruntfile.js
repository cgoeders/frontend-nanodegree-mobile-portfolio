module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		'copy': {
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
			// src: ['**']
		},

		'htmlmin': {
    		dist: { 
      			options: {
		        	removeComments: true,
		        	collapseWhitespace: true
	    		},
	    		
	    		//dictionary of files
	    		files: {
	        		//'destination': 'source'
	        		'dist/index.html': 'src/index.html',
	        		'dist/project-2048.html': 'src/project-2048.html',
	        		'dist/project-mobile.html': 'src/project-mobile.html',
	        		'dist/project-webperf.html': 'src/project-webperf.html',
	        		'dist/views/pizza.html': 'src/views/pizza.html'
	    		}
	    	}
		}

		// 'cssmin': {


		// }





	});


	grunt.registerTask('default', [
		'copy', 
		'htmlmin',
		// 'cssmin',
		'open'

	]);

	grunt.registerTask('upload', ['default', 'gh-pages'])
}