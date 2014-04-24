define([], function () {
    "use strict";

    function PostListService(Post) {
        this.Post = Post;
        this.list = [];
    }

    PostListService.prototype.fetch = function () {
        var self = this;
        this.Post.query().$promise.then(function (posts) {
            self.list = posts;
        });
    };

    PostListService.prototype.getPostById = function (id) {
        return this.Post.get({ postId: id }).$promise;
    };

    PostListService.$inject = ['Post'];

    return PostListService;
});