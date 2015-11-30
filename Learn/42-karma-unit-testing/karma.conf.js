// Karma configuration

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      // "app/lib/jquery/jquery.js",
      "app/lib/angular/angular.js",
      "app/lib/angular/angular-route.js",
      // "app/lib/angular/angular-mocks.js",
      'app/js/**/*.js',
      'test/**/*.js'
    ],
    exclude: [
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    captureTimeout: 60000,
    singleRun: false
  });
};
