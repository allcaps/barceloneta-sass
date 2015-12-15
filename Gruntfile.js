module.exports = function(grunt) {

    // Time how long tasks take. Can help when optimizing build times.
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

      sass: {
          options: {
            sourceMap: true
          },
          dist: {
            files: {
              'main.css': 'barceloneta.scss'
            }
          }
        },

        watch: {
            sass: {
                files: ['barceloneta/**/*.scss'],
                tasks: ['sass']
            }
        }

    });

    grunt.registerTask('default', [
        'watch'
    ]);

    grunt.registerTask('build', [
        'sass'
    ]);
};
