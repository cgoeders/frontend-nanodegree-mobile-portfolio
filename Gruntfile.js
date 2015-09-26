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


//cssmin: {
//   target: {
//     files: [{
//       expand: true,
//       cwd: 'release/css',
//       src: ['*.css', '!*.min.css'],
//       dest: 'release/css',
//       ext: '.min.css'
//     }]
//   }
// }

//uglify

//combine into index.html

//compress images

//htmlmin

//upload




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

		// 'imagemin': {
		//     dynamic: {
		//       files: [{
		//         expand: true,                  // Enable dynamic expansion
		//         cwd: 'src/',                   // Src matches are relative to this path
		//         src: ['**/*.{png,jpg}'],   // Actual patterns to match
		//         dest: 'dist/'                  // Destination path prefix
		//       }]
		//     }
		//   }



	});


	grunt.registerTask('default', [
		'copy', 
		'htmlmin',
		// 'cssmin',
		// 'imagemin',
		'open'

	]);

	grunt.registerTask('upload', ['default', 'gh-pages'])
}