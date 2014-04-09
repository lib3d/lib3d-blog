define([], function() {

    function PostListService(Post) {
        this.Post = Post;
        this.list = [];
    }

    PostListService.prototype.fetch = function() {
        var self = this;
        this.Post.query().$promise.then(function(posts) {
            self.list = posts;
        });
    };

    PostListService.$inject = ['Post'];

    return PostListService;
})