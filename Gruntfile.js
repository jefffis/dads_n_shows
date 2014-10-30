module.exports= function(grunt){
	
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
                files: {
                    'sass/<%= pkg.file_name %>.css': 'sass/all.scss'
                }
            }
		},

		/*'min': {
			'dist': {
				'options': {
					'report': false
				},
				'files': [{
					'src': ['_s/m/jquery.js','_s/m/functions.js','_s/m/onready.js'],
					'dest': '_s/m/<%= pkg.file_name %>.min.js'
				}]
			}
		},*/

		'cssmin': {
			'dist': {
				'options': {
					'report': false
				},
				'files': [{
					'src': 'sass/<%= pkg.file_name %>.css',
					'dest': 'stylesheets/<%= pkg.file_name %>.min.css'
				}]
			}
		},

		watch: {
			scripts: {
                files: [
                    'sass/*.scss'
                ],
                tasks: ['sass','cssmin']
            }
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-yui-compressor');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-processhtml'); // used for minifying inlined JS

	grunt.registerTask('w',['watch']);

	//grunt.registerTask('default', ['sass','min','cssmin']);

	grunt.registerTask('default', ['sass','cssmin']);

}