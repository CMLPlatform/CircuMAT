'use strict';

var fs = require('fs');

var canvg = require('../');

var basicSVG = require('./fixtures/basic.svg'),
    complexSVG = require('./fixtures/complex.svg');


describe('canvg', function () {
  var canvas;

  beforeEach(function() {
    canvas = document.createElement('canvas');
  });

  it('should create canvas from a basic svg', function() {
    // when
    canvg(canvas, basicSVG);

    // then
    expect(canvas.outerHTML).to.equal('<canvas width="373" height="99" style="width: 373px; height: 99px;"></canvas>');
  });


  it('should create canvas from complex svg - complex', function() {
    // when
    canvg(canvas, complexSVG);

    // then
    expect(canvas.outerHTML).to.equal('<canvas width="5134" height="1834" style="width: 5134px; height: 1834px;"></canvas>');
  });


  it('should throw error on invalid svg', function() {
    // when
    function toCanvas() {
      canvg(canvas, 'foo');
    }

    // then
    expect(toCanvas).to.throw(Error);
  });

});
