define([], function() {

    /**
     *
     * @param {$scope} $scope
     * @param {Post} Post
     * @constructor
     */
    function AppController($scope, PostListService) {
        this.$scope = $scope;
        this.PostListService = PostListService;

        $scope.PostListService = PostListService;

        this.fetchPostList();
    }

    AppController.prototype.fetchPostList = function() {
        this.PostListService.fetch();
    };

    AppController.$inject = ['$scope', 'PostListService'];

    return AppController;
});