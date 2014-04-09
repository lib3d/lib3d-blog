require.config({
    paths: {
        'jQuery': '../components/jquery/dist/jquery.min',
        'angular': '../components/angular/angular.min',
        'angular-resource': '../components/angular-resource/angular-resource'
    },
    shim: {
        'jQuery': {
            deps: [],
            exports: 'jQuery'
        },
        'angular': {
            deps: ['jQuery'],
            exports: 'angular'
        },
        'angular-resource': {
            deps: ['angular']
        }
    }
});

require(['jQuery', 'angular', 'angular-resource', './app/Main/MainModule'], function($, angular) {
    angular.module('lib3d', ['main']);

    angular.bootstrap(document.body, ['lib3d']);
    document.body.setAttribute('ng-app', 'lib3d');
});