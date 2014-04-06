define([], function() {

    /**
     *
     * @param {$scope} $scope
     * @param {PostManager} PostManager
     * @constructor
     */
    function AppController($scope, PostManager) {
        this.$scope = $scope;
        this.PostManager = PostManager;

        $scope.post = {};
        this.fetchPostList();
    }

    AppController.prototype.fetchPostList = function() {
        var self = this;
        this.PostManager.list().then(function(response) {
            self.$scope.postList = response.data;
        });
    };

    AppController.prototype.save = function(post) {
        var self = this;
        this.PostManager.save(post).then(function(response) {
            self.fetchPostList();
        });
    };

    AppController.prototype.delete = function(post) {
        var self = this;
        this.PostManager.delete(post).then(function(response) {
            self.fetchPostList();
            console.log('remove', response);
        });
    };

    AppController.$inject = ['$scope', 'PostManager'];

    return AppController;
});