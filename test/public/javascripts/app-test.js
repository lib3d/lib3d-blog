var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/Spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/public/javascripts',

    paths: {
        'angular-mocks': '/base/public/bower_components/angular-mocks/angular-mocks',
        'mixins': '/base/test/public/mixins',
        'mock': '/base/test/public/mock',
        'fixtures/proxy': '/base/test/fixtures/public/proxy',
        'fixtures/public/Reservation': '/base/test/fixtures/public/Reservation',
        'fixtures/user': '/base/test/fixtures/public/user'
    },
    shim: {
        'angular-mocks': ['angular']
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});