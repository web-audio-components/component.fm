
module.exports = function(grunt) {

  grunt.initConfig({

    stylus: {
      compile: {
        options: {
          'include css': true
        },
        files: {
          'public/build/site.css': 'public/assets/styles/main.styl'
        }
      }
    },

    browserify2: {
      compile: {
        entry: './public/app/main.js',
        compile: './public/assets/scripts/app.js'
      }
    },

    concat: {
      dist: {
        src: [
          './public/assets/scripts/vendor/jquery-1.9.1.min.js',
          './public/assets/scripts/vendor/lodash-1.1.1.min.js',
          './public/assets/scripts/vendor/backbone-1.0.0.min.js',
          './public/assets/scripts/app.js'
        ],
        dest: './public/build/site.js'
      }
    },

    watch: {
      files: [
        'public/app/**/*',
        'public/assets/**/*'
      ],
      tasks: ['stylus']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-browserify2');

  grunt.registerTask('browserify', ['browserify2:compile']);
  grunt.registerTask('default', ['stylus', 'browserify', 'concat']);

};
