define([], function() {

    /**
     * @param {$http} $http
     * @constructor
     */
    function Post($http, $q, $resource) {
        this.$http = $http;
        this.$q = $q;

        return $resource('/posts/:postId', { postId: '@_id' });
    }

    Post.prototype.list = function() {
        return this.$http.get('/posts');
    };

    Post.prototype.save = function(post) {
        if(post._id) {
            return this.$http.post('/post/' + post._id, post);
        } else {
            return this.$http.post('/post', post);
        }
    };

    Post.prototype['delete'] = function(post) {
        return this.$http.delete('/post/' + post._id);
    };

    Post.$inject = ['$http', '$q', '$resource'];


    return Post;

});