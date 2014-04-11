'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            configFiles: {
                files: ['./Gruntfile.js'],
                tasks: ['manifest', 'requirejs'],
                options: {
                    reload: true,
                    debounceDelay: 1000,
                    livereload: true
                }
            },
            src: {
                files: ['./public/javascripts/**/*.js'],
                tasks: ['requirejs', 'manifest'],
                options: {
                    livereload: true,
                    debounceDelay: 1000
                }
            },
            css: {
                files: ['./public/stylesheets/**/*.less'],
                tasks: ['manifest'],
                options: {
                    livereload: true,
                    debounceDelay: 1000
                }
            },
            views: {
                files: ['./views/**/*.jade'],
                tasks: ['manifest'],
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
                    optimize: 'uglify2',
                    preserveLicenseComments: false,
                    generateSourceMaps: true
                }
            }
        },
        manifest: {
            generate: {
                options: {
                    basePath: 'public/',
                    cache: ['../'],
                    verbose: true,
                    timestamp: true,
                    hash: true
                },
                src: ['build/main-build.js', 'components/requirejs/require.js', 'stylesheets/*.css'],
                dest: 'public/manifest.appcache'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-manifest');

    grunt.registerTask('default', ['requirejs', 'manifest', 'watch']);
};