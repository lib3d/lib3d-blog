'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            configFiles: {
                files: ['./Gruntfile.js'],
                tasks: ['clean', 'requirejs', 'manifest'],
                options: {
                    reload: true,
                    debounceDelay: 1000,
                    livereload: true
                }
            },
            javascripts: {
                files: ['./public/javascripts/**/*.js'],
                tasks: ['clean', 'requirejs', 'manifest'],
                options: {
                    livereload: true,
                    debounceDelay: 1000
                }
            },
            stylesheets: {
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
                    appDir: './public/javascripts/',
                    baseUrl: './',
                    dir: './public/build/',
                    optimize: 'uglify2',
                    preserveLicenseComments: false,
                    generateSourceMaps: true,
                    skipDirOptimize: true,
                    removeCombined: true,

                    mainConfigFile: [
                        'public/javascripts/common.js',
                        'public/javascripts/blog.js'
                    ],

                    modules: [
                        {
                            name: 'common',
                            include: [
                                'jQuery',
                                'angular',
                                'angular-resource',
                                'angular-ui-router'
                            ],
                            override: {
                                generateSourceMaps: false,
                                optimize: 'none'
                            }
                        },
                        {
                            name: 'blog',
                            include: [
                                'MainModule'
                            ],
                            exclude: [
                                'common'
                            ]
                        }
                    ]
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
                    hash: true,
                    preferOnline: true
                },
                src: [
                    'components/requirejs/require.js',
                    'build/*.js',
                    'build/*.map',
                    'components/requirejs/require.js',
                    'stylesheets/*.css'
                ],
                dest: 'public/manifest.appcache'
            }
        },
        clean: ['build']
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-manifest');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'requirejs', 'manifest', 'watch']);
};