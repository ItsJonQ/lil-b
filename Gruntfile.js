module.exports = function(grunt) {

    // Configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            add_banner: {
                options: {
                  banner: '/*!\n * Lil B - Bootstrap Reset\n * Jon Q. 2014.\n * https://github.com/ItsJonQ/bootstrap-lil-b\n */'
              },
              files: {
                  'b.min.css': ['b.css']
              }
          }
        },
        watch: {
            scripts: {
                files: ['b.css'],
                tasks: ['cssmin']
            }
        }
    });

    // Load plugins here
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Define your tasks here
    grunt.registerTask('default', ['cssmin', 'watch']);

};