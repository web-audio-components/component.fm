
var browserify = require('browserify')
  , shim = require('browserify-shim');

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

  grunt.registerTask('browserify', function () {
    console.log('hi');
    shim(browserify(), {
      jquery: {
        path: './public/assets/scripts/vendor/jquery-1.9.1.min.js',
        exports: '$'
      }
    })
    .require(require.resolve('./public/assets/scripts/vendor/lodash-1.1.1.min.js'), { expose: 'underscore' })
    .require(require.resolve('./public/assets/scripts/vendor/backbone-1.0.0.min.js'), { expose: 'backbone' })
    .require(require.resolve('./public/app/main.js'), { entry: true })
    .bundle(function (err, source) {
      console.log('bye');
      if (err) return console.error(err);
      fs.writeFileSync('./public/build/site.js', source);
    });
  });

};
