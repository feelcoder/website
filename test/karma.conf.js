// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
       // basePath: '../../',

        // testing framework to use (jasmine/mocha/qunit/...)
       // frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            // bower:js
       /*     'bower_components/modernizr/modernizr.js',
            'app/bower_components/jquery/dist/jquery.js',
            'app/bower_components/bootstrap/dist/js/bootstrap.js',
            'app/bower_components/json3/lib/json3.js',
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'app/bower_components/angular-ui-router/release/angular-ui-router.js',
            'app/bower_components/angular-resource/angular-resource.js',
            'app/bower_components/angular-cookies/angular-cookies.js',
            'app/bower_components/angular-sanitize/angular-sanitize.js',
            'app/bower_components/angular-translate/angular-translate.js',
            'app/bower_components/messageformat/messageformat.js',
            'app/bower_components/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat.js',
            'main/webapp/bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
            'main/webapp/bower_components/angular-translate-loader-partial/angular-translate-loader-partial.js',
            'main/webapp/bower_components/angular-dynamic-locale/src/tmhDynamicLocale.js',
            'main/webapp/bower_components/angular-local-storage/dist/angular-local-storage.js',
            'main/webapp/bower_components/angular-cache-buster/angular-cache-buster.js',
            'main/webapp/bower_components/ngInfiniteScroll/build/ng-infinite-scroll.js',
            'main/webapp/bower_components/ng-file-upload/ng-file-upload.js',
            'main/webapp/bower_components/flow.js/dist/flow.js',
            'main/webapp/bower_components/ng-flow/dist/ng-flow.js',
            'main/webapp/bower_components/angular-lazy-img/release/angular-lazy-img.js',
            'main/webapp/bower_components/angular-mocks/angular-mocks.js', */
            // endbower
            'app/app.js',
            'app/controllers/*.js',
            'app/service/*.js',
            'app/views/*html',
            'test/javascript/**/!(karma.conf).js'
        ],


        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 9876,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
