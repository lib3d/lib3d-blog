define(
    [
        'angular',

        'app/Main/component/controller/AppController',
        'app/Main/component/controller/PostListController',
        'app/Main/component/controller/PostController',
        'app/Main/component/resource/Post',
        'app/Main/component/service/PostListService',
        'app/Main/component/directive/postShowDirective',
        'app/Main/component/directive/postListDirective',
        'app/Main/component/directive/postEditDirective',

        'app/Main/config/routing'
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