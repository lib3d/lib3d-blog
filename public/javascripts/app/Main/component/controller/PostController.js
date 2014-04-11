define([], function() {

    /**
     *
     * @param $scope
     * @param {Post} Post
     * @param {PostListService} PostListService
     * @constructor
     */
    function PostController($scope, Post, PostListService) {
        this.$scope = $scope;
        this.Post = Post;
        this.PostListService = PostListService;
        this.$editing = false;
    }

    PostController.prototype.edit = function(post) {
        this.$scope.editedPost = post ? new this.Post(post) : new this.Post();
        this.$editing = true;
    };

    PostController.prototype.save = function(post) {
        var self = this;
        post.$save().then(function(response) {
            self.PostListService.fetch();
            self.$editing = false;
        });
    };

    PostController.prototype.delete = function(post) {
        var self = this;
        post.$delete(post).then(function(response) {
            self.PostListService.fetch();
        });
    };
    
    PostController.prototype.cancel = function(post) {
        this.$editing = false;
        this.$scope.editedPost = null;
    };

    PostController.$inject = ['$scope', 'Post', 'PostListService'];
    
    

    return PostController;

});