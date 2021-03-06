
module.exports = function(grunt) {

  grunt.initConfig({
    stylus: {
      compile: {
        options: {
          'include css': true
        },
        files: {
          'public/styles/app.css': 'client/styles/*.styl'
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          'public/styles/site.min.css': [
            'public/styles/site.css'
          ]
        }
      }
    },

    copy: {
      main: {
        files: [{
          expand: false,
          flatten: true,
          src: 'client/build/web-audio-components-rack/*',
          dest: 'public/styles/web-audio-components-rack/'
        }]
      }
    },

    browserify2: {
      compile: {
        entry: './client/index.js',
        compile: './public/scripts/app.js'
      }
    },

    concat: {
      dist: {
        src: [
          './vendor/scripts/jquery-2.0.0.js',
          './vendor/scripts/underscore-1.4.4.js',
          './vendor/scripts/backbone-1.0.0.js',
          './vendor/scripts/handlebars-1.0.0-rc.3.js',
          './public/scripts/templates.js',
          './client/build/build.js',
          './public/scripts/app.js'
        ],
        dest: './public/scripts/site.js'
      },
      css: {
        src: [
          'vendor/styles/bootstrap.css',
          'vendor/styles/font-awesome.css',
          'client/build/build.css',
          'public/styles/app.css'
        ],
        dest: './public/styles/site.css'
      }
    },

    uglify: {
      development: {
        files: {
          'public/scripts/site.min.js': 'public/scripts/site.js'
        }
      }
    },

    jade: {
      dev: {
        options: {
          data: { env: 'development' }
        },
        files: {
          'public/dev.html': 'client/markup/index.jade'
        }
      },
      prod: {
        options: {
          data: { env: 'production' }
        },
        files: {
          'public/index.html': 'client/markup/index.jade'
        }
      }
    },
    // Need to figure out how to wrap this in CJS
    handlebars: {
      compile: {
        options: {
          namespace: 'templates',
          processName: function ( name ) {
            return name.split('/').pop().match(/^(.*)\.hbs$/)[1];
          }
        },
        files: {
          'public/scripts/templates.js': 'client/templates/*.hbs'
        }
      }
    },

    watch: {
      files: [
        'client/**/*'
      ],
      tasks: ['default']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-browserify2');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  grunt.registerTask('browserify', ['browserify2:compile']);
  grunt.registerTask('default', 'jade stylus browserify handlebars concat cssmin uglify copy'.split(' '));
};
