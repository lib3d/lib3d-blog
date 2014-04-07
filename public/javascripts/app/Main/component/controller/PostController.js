define([], function() {

    /**
     *
     * @param $scope
     * @param {PostManager} PostManager
     * @param {PostListService} PostListService
     * @constructor
     */
    function PostController($scope, PostManager, PostListService) {
        this.$scope = $scope;
        this.PostManager = PostManager;
        this.PostListService = PostListService;
        this.$editing = false;
    }

    PostController.prototype.edit = function() {
        this.$scope.editedPost = angular.copy(this.$scope.post);
        this.$editing = true;
    };


    PostController.prototype.save = function(post) {
        var self = this;
        this.PostManager.save(post).then(function(response) {
            self.PostListService.fetch();
            self.$editing = false;
        });
    };

    PostController.prototype.delete = function(post) {
        var self = this;
        this.PostManager.delete(post).then(function(response) {
            self.PostListService.fetch();
        });
    };

    PostController.$inject = ['$scope', 'PostManager', 'PostListService'];

    return PostController;

});