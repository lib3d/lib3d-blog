'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        publicDir: './public',
        viewsDir: './views',
        watch: {
            configFiles: {
                files: ['./Gruntfile.js'],
                tasks: ['assets:all'],
                options: {
                    reload: true,
                    debounceDelay: 1000,
                    livereload: true
                }
            },
            javascripts: {
                files: ['<%= publicDir %>/javascripts/**/*.js'],
                tasks: ['assets:js'],
                options: {
                    livereload: true,
                    debounceDelay: 1000
                }
            },
            stylesheets: {
                files: ['<%= publicDir %>/stylesheets/**/*.less'],
                tasks: ['assets:css'],
                options: {
                    livereload: true,
                    debounceDelay: 1000
                }
            },
            views: {
                files: ['<%= viewsDir %>/**/*.jade'],
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
                    appDir: '<%= publicDir %>/javascripts/',
                    baseUrl: './',
                    dir: '<%= publicDir %>/build/',
                    optimize: 'uglify2',
                    preserveLicenseComments: false,
                    generateSourceMaps: true,
                    skipDirOptimize: true,
                    removeCombined: true,

                    mainConfigFile: [
                        '<%= publicDir %>/javascripts/common.js',
                        '<%= publicDir %>/javascripts/blog.js'
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
                    basePath: '<%= publicDir %>/',
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
                    'stylesheets/*.css'
                ],
                dest: '<%= publicDir %>/manifest.appcache'
            }
        },
        less: {
            development: {
                options: {
                    paths: ['<%= publicDir %>/stylesheets'],
                    sourceMap: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= publicDir %>/stylesheets',
                        src: ['*.less'],
                        dest: '<%= publicDir %>/stylesheets',
                        ext: '.css'
                    }
                ]
            }
        },
        clean: {
            js: ['build'],
            css: ['<%= publicDir %>/stylesheets/*.css']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-manifest');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('assets:all', ['clean', 'requirejs', 'less:development', 'manifest']);

    grunt.registerTask('assets:css', ['clean:css', 'less:development', 'manifest']);
    grunt.registerTask('assets:js', ['clean:js', 'requirejs', 'manifest']);

    grunt.registerTask('default', ['assets:all', 'watch']);
};