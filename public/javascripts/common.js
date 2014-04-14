require.config({
    paths: {
        'jQuery': '../components/jquery/dist/jquery.min',
        'angular': '../components/angular/angular.min',
        'angular-resource': '../components/angular-resource/angular-resource.min',
        'angular-ui-router': '../components/angular-ui-router/release/angular-ui-router.min'
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