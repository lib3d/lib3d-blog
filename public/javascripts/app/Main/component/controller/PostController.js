define([], function() {

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

        if($stateParams.id) {
            var self = this
            PostListService.getPostById($stateParams.id).then(function (post) {
                $scope.editedPost = post;
            });
        } else {
            $scope.editedPost = new Post();
        }
    }

    PostController.prototype.save = function() {
        var self = this;
        this.$scope.editedPost.$save().then(function(post) {
            self.$state.transitionTo('post-list');
        });
    };

    PostController.prototype.delete = function() {
        var self = this;
        post.$delete(this.$scope.editedPost).then(function(response) {
            self.PostListService.fetch();
        });
    };

    PostController.$inject = ['$scope', '$state', '$stateParams', 'Post', 'PostListService'];

    return PostController;

});