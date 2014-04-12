define(
    [
        'angular',

        './component/controller/AppController',
        './component/controller/PostListController',
        './component/controller/PostController',
        './component/resource/Post',
        './component/service/PostListService',
        './component/directive/postShowDirective',
        './component/directive/postListDirective',
        './component/directive/postEditDirective',

        './config/routing'
    ],
    function(
        angular,

        AppController,
        PostListController,
        PostController,
        Post,
        PostListService,
        postShowDirective,
        postListDirective,
        postEditDirective,

        routing
        ) {

        var MainModule = angular.module('main', ['ngResource', 'ui.router']);

        MainModule.controller('AppController', AppController);
        MainModule.controller('PostListController', PostListController);
        MainModule.controller('PostController', PostController);

        MainModule.service('Post', Post);
        MainModule.service('PostListService', PostListService);

        MainModule.directive('postShow', postShowDirective);
        MainModule.directive('postList', postListDirective);
        MainModule.directive('postEdit', postEditDirective);

        MainModule.config(routing);

        return MainModule;
    }
);