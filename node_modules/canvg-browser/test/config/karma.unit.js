'use strict';

var path = require('path');

var basePath = '../../';

var absoluteBasePath = path.resolve(path.join(__dirname, basePath));


var TEST_BROWSERS = ((process.env.TEST_BROWSERS || '').replace(/^\s+|\s+$/, '') || 'PhantomJS').split(/\s*,\s*/g);

module.exports = function(karma) {
  karma.set({

    basePath: basePath,

    frameworks: [
      'browserify',
      'mocha',
      'chai'
    ],

    files: [
      'test/canvg-spec.js'
    ],

    preprocessors: {
      'test/canvg-spec.js': [ 'browserify' ]
    },

    reporters: [ 'spec' ],

    browsers: TEST_BROWSERS,

    browserNoActivityTimeout: 30000,

    singleRun: true,
    autoWatch: true,

    // browserify configuration
    browserify: {
      debug: true,
      transform: [ [ 'stringify', { extensions: [ 'svg' ] } ] ],
      paths: [ absoluteBasePath ]
    }
  });
};
