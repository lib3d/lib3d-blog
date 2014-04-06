require.config({
    paths: {
        jQuery: '../components/jquery/dist/jquery.min',
        angular: '../components/angular/angular.min'
    },
    shim: {
        jQuery: {
            deps: [],
            exports: 'jQuery'
        },
        angular: {
            deps: ['jQuery'],
            exports: 'angular'
        }
    }
});

require(['jQuery', 'angular', './app/Main/MainModule'], function($, angular, MainModule) {
    angular.module('lib3d', ['main']);

    angular.bootstrap(document.body, ['lib3d']);
    document.body.setAttribute('ng-app', 'lib3d');
});