define([], function() {

    function PostListService(PostManager) {
        this.PostManager = PostManager;
        this.list = [];
    }

    PostListService.prototype.fetch = function() {
        var self = this;
        this.PostManager.list().then(function(response) {
            self.list = response.data;
        });
    };

    PostListService.$inject = ['PostManager'];

    return PostListService;
})