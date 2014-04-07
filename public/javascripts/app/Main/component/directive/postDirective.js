define([], function() {

    function postDirective() {
        return {
            controller: 'PostController',
            controllerAs: 'postController'
        };
    }

    postDirective.$inject = [];

    return postDirective;

});