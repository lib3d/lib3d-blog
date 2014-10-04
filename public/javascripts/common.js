require.config({
    paths: {
        'jQuery': '../components/jquery/dist/jquery.min',
        'angular': '../components/angular/angular.min',
        'angular-resource': '../components/angular-resource/angular-resource.min',
        'angular-ui-router': '../components/angular-ui-router/release/angular-ui-router.min',
        'es5-shim': '../components/es5-shim/es5-shim.min'
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
    },
    "modules": [
        {
            "name": "common",
            "include": [
                "es5-shim",
                "jQuery",
                "angular",
                "angular-resource",
                "angular-ui-router"
            ],
            "override": {
                "generateSourceMaps": false,
                "optimize": "none"
            }
        }
    ]
});