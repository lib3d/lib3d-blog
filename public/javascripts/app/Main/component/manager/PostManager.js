define([], function() {

    /**
     * @param {$http} $http
     * @constructor
     */
    function PostManager($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    PostManager.prototype.list = function() {
        return this.$http.get('/posts');
    };

    PostManager.prototype.save = function(post) {
        if(post._id) {
            return this.$http.post('/post/' + post._id, post);
        } else {
            return this.$http.post('/post', post);
        }
    };

    PostManager.prototype['delete'] = function(post) {
        return this.$http.delete('/post/' + post._id);
    };

    PostManager.$inject = ['$http', '$q'];

    return PostManager;

});