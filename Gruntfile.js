/* jshint node:true */
"use strict";

module.exports = function(grunt) {
    grunt.initConfig({

        // require static configs from json files
        requirejs: grunt.file.readJSON('grunt/grunt-requirejs.json'),
        manifest: grunt.file.readJSON('grunt/grunt-manifest.json'),
        less: grunt.file.readJSON('grunt/grunt-less.json'),
        sprite: grunt.file.readJSON('grunt/grunt-sprite.json'),

        // config clean tasks
        clean: {
            js: ['public/build/*'],
            css: ['public/build-stylesheets/*.css']
        },

        // config watch tasks
        watch: {
            configFiles: {
                files: ['Gruntfile.js','grunt/grunt-*.json'],
                tasks: ['assets:all'],
                options: {
                    reload: true
                }
            },
            javascripts: {
                files: ['public/javascripts/**/*.js'],
                tasks: ['assets:js']
            },
            stylesheets: {
                files: ['public/stylesheets/**/*.less', '!public/stylesheets/sprites/*.less'],
                tasks: ['assets:css']
            },
            sprites: {
                files: ['public/images/sprites/**/*.*'],
                tasks: ['assets:css']
            },
            views: {
                files: ['views/**/*.jade'],
                tasks: ['manifest']
            },
            livereload: {
                files: [
                    'public/build/stylesheets/*.css',
                    'public/build/require/*.js',
                    'views/**/*.jade'
                ],
                options: {
                    livereload: true,
                    debounceDelay: 1000
                }

            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-manifest');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-spritesmith');

    // register tasks
    grunt.registerTask('assets:css', ['clean:css', 'sprite', 'less:development', 'manifest']);
    grunt.registerTask('assets:js', ['clean:js', 'requirejs', 'manifest']);
    grunt.registerTask('assets:all', ['clean', 'requirejs', 'sprite', 'less:development', 'manifest']);


    // register default task
    grunt.registerTask('default', ['assets:all', 'watch']);
};