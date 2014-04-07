define(
    [
        'angular',
        './component/controller/AppController',
        './component/controller/PostController',
        './component/manager/PostManager',
        './component/service/PostListService',
        './component/directive/postDirective'
    ],
    function(
        angular,
        AppController,
        PostController,
        PostManager,
        PostListService,
        postDirective
        ) {
        var MainModule = angular.module('main', []);

        MainModule.controller('AppController', AppController);
        MainModule.controller('PostController', PostController);

        MainModule.service('PostManager', PostManager);

        MainModule.service('PostListService', PostListService);

        MainModule.directive('post', postDirective);

        return MainModule;
    }
);