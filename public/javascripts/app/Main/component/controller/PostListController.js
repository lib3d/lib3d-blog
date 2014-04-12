define([], function() {

    /**
     *
     * @param {$scope} $scope
     * @param {Post} Post
     * @constructor
     */
    function PostListController($scope, $state, PostListService) {
        this.$scope = $scope;
        this.$state = $state;
        this.PostListService = PostListService;

        $scope.PostListService = PostListService;

        this.fetchPostList();
    }

    PostListController.prototype.fetchPostList = function() {
        this.PostListService.fetch();
    };

    PostListController.prototype.edit = function(post) {
        this.$state.transitionTo('post-edit', { id: post._id });
    };

    PostListController.prototype.create = function(post) {
        this.edit({});
    };

    PostListController.prototype.delete = function(post) {
        var self = this;
        post.$delete(post).then(function(response) {
            self.PostListService.fetch();
        });
    };

    PostListController.$inject = ['$scope', '$state', 'PostListService'];

    return PostListController;
});