/* jshint node:true */
"use strict";

module.exports = function(grunt) {
    grunt.initConfig({

        // factorize paths in variables
        dirs: {
            'public': './public',
            'views': './views'
        },

        // require static configs from json files
        requirejs: grunt.file.readJSON('grunt-requirejs.json'),
        manifest: grunt.file.readJSON('grunt-manifest.json'),
        less: grunt.file.readJSON('grunt-less.json'),

        // config clean tasks
        clean: {
            js: ['public/build/*'],
            css: ['public/stylesheets/*.css']
        },

        // config watch tasks
        watch: {
            configFiles: {
                files: ['Gruntfile.js','grunt-*.json'],
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
                files: ['public/stylesheets/**/*.less'],
                tasks: ['assets:css']
            },
            views: {
                files: ['views/**/*.jade'],
                tasks: ['manifest'],
                options: {
                    livereload: true,
                    debounceDelay: 300
                }
            },
            livereload: {
                files: [
                    'public/stylesheets/*.css',
                    'public/build/*.js'
                ],
                options: {
                    livereload: true,
                    debounceDelay: 300
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

    // register tasks
    grunt.registerTask('assets:css', ['clean:css', 'less:development', 'manifest']);
    grunt.registerTask('assets:js', ['clean:js', 'requirejs', 'manifest']);
    grunt.registerTask('assets:all', ['clean', 'requirejs', 'less:development', 'manifest']);

    // register default task
    grunt.registerTask('default', ['assets:all', 'watch']);
};