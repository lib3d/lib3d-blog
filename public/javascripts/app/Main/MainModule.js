define(
    [
        'angular',
        './component/controller/AppController',
        './component/manager/PostManager'
    ],
    function(
        angular,
        AppController,
        PostManager
        ) {
        var MainModule = angular.module('main', []);

        MainModule.controller('AppController', AppController);

        MainModule.service('PostManager', PostManager);

        return MainModule;
    }
);