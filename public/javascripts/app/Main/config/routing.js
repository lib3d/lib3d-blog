define([], function() {

    function routing($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main', {
            abstract: true,
            views: {
                '': {
                    controller: 'AppController',
                    controllerAs: 'appController',
                    template: '<div ui-view="main"></div>'
                }
            }
        });

        $stateProvider.state('post-list', {
            parent: 'main',
            url: '/post-list',
            views: {
                'main': {
                    templateUrl: 'template-page-post-list'
                }
            }
        })

        $stateProvider.state('post-edit', {
            parent: 'main',
            url: '/post-edit?id',
            views: {
                'main': {
                    templateUrl: 'template-page-post-edit'
                }
            }
        });

        $urlRouterProvider.otherwise('/post-list');
    }

    routing.$inject = ['$stateProvider', '$urlRouterProvider'];

    return routing;


});