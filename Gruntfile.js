module.exports = function(grunt) {

    // Configuration goes here
    grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      banner: '/*!\n' +
      ' * Lil\' B - Bootstrap\n' +
      ' * A Bootstrap for Bootstrap\n' +
      ' * v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
      ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
      ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
      ' */\n\n',

      concat: {
        options: {
          banner: '<%= banner %>',
          separator: '\n\n',
        },
        dist: {
          src: [
            'src/css/b.typgraphy.css',
            'src/css/b.optimize.css',
            'src/css/b.control.css',
            'src/css/b.helpers.css'],
          dest: 'dist/css/b.css',
        },
      },

      cssmin: {
        minify: {
          files: {
            'dist/css/b.min.css': ['dist/css/b.css']
          }
        }
      },

      watch: {
        scripts: {
          files: ['src/**/*.css'],
          tasks: ['concat', 'cssmin']
        }
      }

    });

    // Load plugins here
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Define your tasks here
    grunt.registerTask('default', ['concat', 'cssmin']);

  };