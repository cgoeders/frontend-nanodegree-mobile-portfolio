module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		// copy: {
		// 	dist: {
		// 		files: [
		// 			{
		// 				expand: true, cwd: 'src', src: ['**'], dest: 'dist/'
		// 			}
		// 		]
		// 	}
		// },

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
	        		'dist/index.min.html': 'src/index.html',
	        		'dist/project-2048.min.html': 'src/project-2048.html',
	        		'dist/project-mobile.min.html': 'src/project-mobile.html',
	        		'dist/webperf.min.html': 'src/project-webperf.html',
	        		'dist/views/pizza.min.html': 'src/views/pizza.html'
	    		}
	    	}
		},

		// 'cssmin': {


		// }





	});


	grunt.registerTask('default', [
		//'copy', 
		'htmlmin',
		// 'cssmin',
		'open'

	]);

	grunt.registerTask('upload', ['default', 'gh-pages'])
}