define([], function () {
    "use strict";

    /**
     *
     * @param {$scope} $scope
     * @param {$state} $state
     * @constructor
     */
    function AppController($scope, $state) {
        this.$scope = $scope;
        this.$state = $state;
    }

    AppController.$inject = ['$scope', '$state'];

    return AppController;
});