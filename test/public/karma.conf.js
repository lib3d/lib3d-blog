module.exports = function (config) {
    "use strict";

    config.set({
        basePath: '../../',
        browsers: ['PhantomJS'],
        frameworks: ['requirejs', 'mocha', 'sinon-chai'],
        plugins: [
            'karma-junit-reporter',
            'karma-story-reporter',
            'karma-mocha',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-sinon-chai',
            'karma-coverage',
            'karma-requirejs'
        ],
        reporters: ['story', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'test/coverage'
        },
        preprocessors: {
            'public/javascripts/app/**/component/controller/*.js': ['coverage']
        },
        colors: true,
        logLevel: config.LOG_INFO,
        files: [
            // bower components
            {pattern: 'public/components/es5-shim/es5-shim.min.js', included: false},
            {pattern: 'public/components/angular/angular.min.js', included: false},

            // application files
            {pattern: 'public/javascripts/app/**/component/controller/*.js', included: false},

            // specs
            {pattern: 'test/**/*Spec.js', included: false},

            // r.js config
            'public/javascripts/common.js',
            'public/javascripts/blog.js',

            // test app
            'test/public/javascripts/app-test.js'
        ],
    });
}