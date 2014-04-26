module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
//        uglify: {
//            options: {
//            },
//            build: {
//                src: ["js/lib/jquery.js", "js/lib/modernizer.js", "js/default.js", "js/userdetail.js", "js/createuser-v2.js", "FullscreenOverlayStyles/js/classie.js", "FullscreenOverlayStyles/js/snap.svg-min.js", "FullscreenOverlayStyles/js/demo12.js"],
//                dest: 'build/scripts.min.js'
//            }
//        }
//		sass: {                              // Task
//			dist: {                            // Target
//				options: {                       // Target options
//					style: 'expanded'
//				},
//				files: {                         // Dictionary of files
//					'css/normalize.css': 'scss/normalize.scss',       // 'destination': 'source'
//					'css/fontface.css': 'scss/fontface.scss',       // 'destination': 'source'
//					'css/style.css': 'scss/style.scss'       // 'destination': 'source'
//				}
//			}
//		},
		concat: {
			options: {
				separator: '\n'
			},
			dist: {
				src: ['scss/normalize.css', 'scss/fontface.css', 'scss/base.css','scss/modules/*.css'],
				dest: 'css/style.css'
			}
		},
		includes: {
			files: {
				src: ['pages/index.html'] ,
				dest: 'index.html'
			}
		},
		watch: {
			scripts: {
				files: ['**/*.scss', '**/*.js', '**/*.html'],
				tasks: ['concat','includes'],
				options: {
					livereload: true

				}
			}
		}


    });

    // Load the plugin that provides the "uglify" task.
   // grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-includes');


    // Default task(s).
    grunt.registerTask('default', ['watch']);

};