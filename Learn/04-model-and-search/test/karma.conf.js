// Karma configuration

module.exports = function(config) {
  config.set({
    basePath: '..',
    frameworks: ['jasmine'],
    files: [
      "../lib/angular/angular.js",
      "../lib/angular-route/angular-route.js",
      "../lib/angular-mocks/angular-mocks.js",
      '*.js',
      'test/*.spec.js'
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
