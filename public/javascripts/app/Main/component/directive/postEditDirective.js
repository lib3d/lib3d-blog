define([], function () {
    "use strict";

    function postEditDirective() {
        return {
            controller: 'PostController',
            controllerAs: 'postController',
            templateUrl: 'template-post-edit'
        };
    }

    postEditDirective.$inject = [];

    return postEditDirective;

});