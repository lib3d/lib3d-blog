;(function () {
    "use strict";

    function updateCache() {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
            window.location.reload();
        }
    }

    window.applicationCache.addEventListener('updateready', updateCache, false);
    updateCache();

})();

require(['common'], function() {
    require(['angular', 'app/Main/MainModule'], function(angular) {
        var angular = require('angular');
        angular.module('lib3d', ['main']);

        angular.bootstrap(document.body, ['lib3d']);
        document.body.setAttribute('ng-app', 'lib3d');

    });
});