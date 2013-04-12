
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

};
