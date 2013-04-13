
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
  grunt.loadNpmTasks('grunt-browserify2');

  grunt.registerTask('browserify', ['browserify2:compile']);

};
