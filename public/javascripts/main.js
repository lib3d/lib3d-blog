require.config({
    paths: {
        'jQuery': '../components/jquery/dist/jquery.min',
        'angular': '../components/angular/angular.min',
        'angular-resource': '../components/angular-resource/angular-resource',
        'angular-ui-router': '../components/angular-ui-router/release/angular-ui-router'
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
        },
        'angular-ui-router': {
            deps: ['angular']
        }
    }
});

;(function () {
    "use strict";

    function updateCache() {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
            window.location.reload();
        }
    }

    window.applicationCache.addEventListener('updateready', updateCache, false);
    updateCache();

})();


require(['jQuery', 'angular', 'angular-resource', 'angular-ui-router', './app/Main/MainModule'], function($, angular) {
    angular.module('lib3d', ['main']);

    angular.bootstrap(document.body, ['lib3d']);
    document.body.setAttribute('ng-app', 'lib3d');
});