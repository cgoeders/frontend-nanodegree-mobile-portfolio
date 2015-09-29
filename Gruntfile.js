module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		// 'copy': {
		// 	  dist: {
		// 		files: [
		// 			{
		// 				expand: true, cwd: 'src', src: ['**'], dest: 'dist/'
		// 			}
		// 		]
		// 	}
		// },

		'uglify': {
			my_target: {
				files: {
					'dist/js/perfmatters.js': 'src/js/perfmatters.js',
					'dist/views/js/main.js': 'src/views/js/main.js',
					//'dist/js/script.js': 'src/js/script.js'
					//above commented out; used to minify JS (from end of index.html)
				}
			}
		},

		'cssmin': {
			target: {
		  		files: {
		  			'dist/css/print-min.css': 'src/css/print.css',
		  			'dist/views/css/bootstrap-grid-min.css': 'src/views/css/bootstrap-grid.css',
		  			'dist/views/css/style-min.css': 'src/views/css/style.css'
		  		}
		  	}
		},

		'htmlmin': {
    		dist: { 
      			options: {
		        	removeComments: true,
		        	collapseWhitespace: true
	    		},
	    		
	    		//dictionary of files
	    		files: {
	        		// 'dist/index.html': 'src/index.html',
	        		//above commented out; manually adding grunt's uglified JS to dist/index.html
	        		'dist/project-2048.html': 'src/project-2048.html',
	        		'dist/project-mobile.html': 'src/project-mobile.html',
	        		'dist/project-webperf.html': 'src/project-webperf.html',
	        		'dist/views/pizza.html': 'src/views/pizza.html'
	    		}
	    	}
		},

		'open': {
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
		// 'copy', 
		// 'uglify',
		// 'cssmin',
		// 'htmlmin',
		'open'
	]);

	grunt.registerTask('upload', ['default', 'gh-pages'])
}