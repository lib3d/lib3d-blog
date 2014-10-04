define([
    'app/Main/component/controller/AppController'
], function(AppController) {
    describe('AppController', function() {

        it('should hold a $scope', function() {
            var scope = {};
            new AppController(scope).$scope.should.equal(scope);
        });

        it('should hold a $state', function() {
            var state = {};
            new AppController(null, state).$state.should.equal(state);
        });

    });
});