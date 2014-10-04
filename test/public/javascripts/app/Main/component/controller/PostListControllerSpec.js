define([
    'app/Main/component/controller/PostListController'
], function(PostListController) {

    describe('PostListController', function() {

        var instance, scope = {}, state = { transitionTo: sinon.spy() }, PostListService = { fetch: sinon.spy()};

        beforeEach(function() {
            sinon.stub(PostListController.prototype, 'fetchPostList');
            instance = new PostListController(scope, state, PostListService);
            PostListController.prototype.fetchPostList.restore();
        });

        describe('contructor', function() {

            it('should publish PostListService on scope', function() {
                sinon.stub(PostListController.prototype, 'fetchPostList');
                var scope = {}, state = {}, PostListService = {};
                var instance = new PostListController(scope, state, PostListService);
                instance.$scope.PostListService.should.equal(PostListService);
                PostListController.prototype.fetchPostList.restore();
            });

        });

        describe('prototype',function() {

            describe('fetchPostList', function() {

                it('should call fetchon PostListService', function() {
                    instance.fetchPostList();
                    instance.$scope.PostListService.fetch.should.have.been.calledOnce;
                });

            });

            describe('edit', function() {

                it('should call transitionTo on $state', function() {
                    instance.edit({_id: 1});
                    instance.$state.transitionTo.should.have.been.calledOnce;
                });

            });

            describe('create', function() {

                it('should call edit on the instance', function() {
                    sinon.stub(PostListController.prototype, 'edit');
                    instance.create();
                    instance.edit.should.have.been.calledOnce;
                    PostListController.prototype.edit.restore();
                });

            });

        });

    });

});