define([], function () {
    "use strict";

    /**
     *
     * @param $scope
     * @param {$state} $state
     * @param {$stateParams} $stateParams
     * @param {Post} Post
     * @param {PostListService} PostListService
     * @constructor
     */
    function PostController($scope, $state, $stateParams, Post, PostListService) {
        this.$scope = $scope;
        this.$state = $state;
        this.Post = Post;
        this.PostListService = PostListService;

        if ($stateParams.id) {
            PostListService.getPostById($stateParams.id).then(function (post) {
                $scope.editedPost = post;
            });
        } else {
            $scope.editedPost = new Post();
        }
    }

    PostController.prototype.save = function () {
        var self = this;
        this.$scope.editedPost.$save().then(function () {
            self.$state.transitionTo('post-list');
        });
    };

    PostController.prototype['delete'] = function () {
        var self = this;
        this.$scope.editedPost.$delete().then(function () {
            self.PostListService.fetch();
        });
    };

    PostController.$inject = ['$scope', '$state', '$stateParams', 'Post', 'PostListService'];

    return PostController;

});