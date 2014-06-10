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
            require: ['public/build/require/'],
            css: ['public/build/stylesheets/'],
            images: ['public/build/images/']
        },

        // config watch tasks
        watch: {
            configFiles: {
                files: ['Gruntfile.js','grunt/grunt-*.json'],
                tasks: ['development'],
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
                tasks: ['assets:cssWithoutSprite']
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
    grunt.registerTask('assets:css', ['clean:css', 'clean:images', 'sprite', 'less:development', 'manifest']);
    grunt.registerTask('assets:cssWithoutSprite', ['clean:css', 'less:development', 'manifest']);
    grunt.registerTask('assets:js', ['clean:require', 'requirejs', 'manifest']);
    grunt.registerTask('development', ['clean', 'requirejs:development', 'sprite', 'less:development', 'manifest']);

    grunt.registerTask('production', ['clean', 'requirejs:production', 'sprite', 'less:production', 'manifest']);


    // register default task
    grunt.registerTask('default', ['development', 'watch']);
};