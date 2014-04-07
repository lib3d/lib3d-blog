define([], function() {

    /**
     *
     * @param {$scope} $scope
     * @param {PostManager} PostManager
     * @constructor
     */
    function AppController($scope, PostManager, PostListService) {
        this.$scope = $scope;
        this.PostManager = PostManager;
        this.PostListService = PostListService;

        $scope.post = {};
        $scope.PostListService = PostListService;
        this.fetchPostList();
    }

    AppController.prototype.fetchPostList = function() {
        this.PostListService.fetch();
    };


    AppController.prototype.create = function(post) {
        var self = this;
        this.PostManager.save(post).then(function(response) {
            self.PostListService.fetch();
        });
    };

    AppController.$inject = ['$scope', 'PostManager', 'PostListService'];

    return AppController;
});