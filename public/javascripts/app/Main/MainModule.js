define(
    [
        'angular',
        './component/controller/AppController',
        './component/controller/PostController',
        './component/resource/Post',
        './component/service/PostListService',
        './component/directive/postDirective'
    ],
    function(
        angular,
        AppController,
        PostController,
        Post,
        PostListService,
        postDirective
        ) {

        var MainModule = angular.module('main', ['ngResource']);

        MainModule.controller('AppController', AppController);
        MainModule.controller('PostController', PostController);

        MainModule.service('Post', Post);

        MainModule.service('PostListService', PostListService);

        MainModule.directive('post', postDirective);

        return MainModule;
    }
);