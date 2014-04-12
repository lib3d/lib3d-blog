define([], function() {

    function postListDirective() {
        return {
            controller: 'PostListController',
            controllerAs: 'postListController',
            templateUrl: 'template-post-list',
            replace: true
        };
    }

    postListDirective.$inject = [];

    return postListDirective;

});