require(['common', 'blog'], function () {
    "use strict";

    require(['angular', 'MainModule'], function (angular) {

        angular.module('lib3d', ['main']);

        angular.bootstrap(document.body, ['lib3d']);
        document.body.setAttribute('ng-app', 'lib3d');

        function updateCache() {
            if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
                window.location.reload();
            }
        }

        window.applicationCache.addEventListener('updateready', updateCache, false);
        updateCache();
    });
});