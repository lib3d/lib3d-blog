'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            configFiles: {
                files: ['./Gruntfile.js'],
                options: {
                    reload: true,
                    debounceDelay: 1000
                }
            },
            src: {
                files: ['./public/javascripts/**/*.js'],
                tasks: ['requirejs'],
                options: {
                    livereload: true,
                    debounceDelay: 1000
                }
            },
            views: {
                files: ['./views/**/*.jade'],
                options: {
                    livereload: true,
                    debounceDelay: 1000
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    mainConfigFile: 'public/javascripts/main.js',
                    name: './main',
                    out: './public/build/main-build.js',
                    optimize: 'none'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['requirejs', 'watch']);
};