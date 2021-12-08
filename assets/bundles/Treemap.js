import {nest} from "d3-collection";
import {hierarchy, treemap, treemapSquarify} from "d3-hierarchy";

import {accessor, assign, configPrep, constant, elem, merge} from "d3plus-common";
import {Rect} from "d3plus-shape";
import {Viz} from "d3plus-viz";

/**
    @class Treemap
    @extends Viz
    @desc Uses the [d3 treemap layout](https://github.com/mbostock/d3/wiki/Treemap-Layout) to creates SVG rectangles based on an array of data. See [this example](https://d3plus.org/examples/d3plus-hierarchy/getting-started/) for help getting started using the treemap generator.
*/
var Treemap = (function (Viz) {
  function Treemap() {

    Viz.call(this);

    this._padding = 1;
    this._shapeConfig = assign({}, this._shapeConfig, {
      labelConfig: {
        fontResize: true
      }
    });
    this._sort = function (a, b) { return b.value - a.value; };
    this._sum = accessor("value");
    this._tile = treemapSquarify;
    this._treemap = treemap().round(true);

  }

  if ( Viz ) Treemap.__proto__ = Viz;
  Treemap.prototype = Object.create( Viz && Viz.prototype );
  Treemap.prototype.constructor = Treemap;

  /**
      Extends the draw behavior of the abstract Viz class.
      @private
  */
  Treemap.prototype._draw = function _draw (callback) {
    var this$1 = this;


    Viz.prototype._draw.call(this, callback);

    var nestedData = nest();
    for (var i = 0; i <= this._drawDepth; i++) { nestedData.key(this$1._groupBy[i]); }
    nestedData = nestedData.entries(this._filteredData);

    var tmapData = this._treemap
      .padding(this._padding)
      .size([
        this._width - this._margin.left - this._margin.right,
        this._height - this._margin.top - this._margin.bottom
      ])
      .tile(this._tile)
      (hierarchy({values: nestedData}, function (d) { return d.values; }).sum(this._sum).sort(this._sort));

    var shapeData = [], that = this;

    /**
        Flattens and merges treemap data.
        @private
    */
    function extractLayout(children) {
      for (var i = 0; i < children.length; i++) {
        var node = children[i];
        if (node.depth <= that._drawDepth) { extractLayout(node.children); }
        else {
          node.__d3plus__ = true;
          node.id = node.data.key;
          node.data = merge(node.data.values);
          node.i = i;
          node.x = node.x0 + (node.x1 - node.x0) / 2;
          node.y = node.y0 + (node.y1 - node.y0) / 2;
          shapeData.push(node);
        }
      }
    }
    if (tmapData.children) { extractLayout(tmapData.children); }
    var total = tmapData.value;

    var transform = "translate(" + (this._margin.left) + ", " + (this._margin.top) + ")";
    this._shapes.push(new Rect()
      .data(shapeData)
      .label(function (d) { return [
        this$1._drawLabel(d.data, d.i),
        ((Math.round(this$1._sum(d.data, d.i) / total * 100)) + "%")
      ]; })
      .select(elem("g.d3plus-Treemap", {
        parent: this._select,
        enter: {transform: transform},
        update: {transform: transform}
      }).node())
      .config({
        height: function (d) { return d.y1 - d.y0; },
        labelBounds: function (d, i, s) {
          var h = s.height;
          var sh = Math.min(50, h * 0.25);
          return [
            {width: s.width, height: h - sh, x: -s.width / 2, y: -h / 2},
            {width: s.width, height: sh, x: -s.width / 2, y: h / 2 - sh}
          ];
        },
        labelConfig: {
          textAnchor: function (d) { return d.l ? "middle" : "start"; },
          verticalAlign: function (d) { return d.l ? "bottom" : "top"; }
        },
        width: function (d) { return d.x1 - d.x0; }
      })
      .config(configPrep.bind(this)(this._shapeConfig, "shape", "Rect"))
      .render());

    return this;

  };

  /**
      @memberof Treemap
      @desc If *value* is specified, sets the inner and outer padding accessor to the specified function or number and returns the current class instance. If *value* is not specified, returns the current padding accessor.
      @param {Function|Number} [*value*]
  */
  Treemap.prototype.padding = function padding (_) {
    return arguments.length ? (this._padding = typeof _ === "function" ? _ : constant(_), this) : this._padding;
  };

  /**
      @memberof Treemap
      @desc If *comparator* is specified, sets the sort order for the treemap using the specified comparator function. If *comparator* is not specified, returns the current group sort order, which defaults to descending order by the associated input data's numeric value attribute.
      @param {Array} [*comparator*]
      @example
function comparator(a, b) {
  return b.value - a.value;
}
  */
  Treemap.prototype.sort = function sort (_) {
    return arguments.length ? (this._sort = _, this) : this._sort;
  };

  /**
      @memberof Treemap
      @desc If *value* is specified, sets the sum accessor to the specified function or number and returns the current class instance. If *value* is not specified, returns the current sum accessor.
      @param {Function|Number} [*value*]
      @example
function sum(d) {
  return d.sum;
}
  */
  Treemap.prototype.sum = function sum (_) {
    return arguments.length ? (this._sum = typeof _ === "function" ? _ : constant(_), this) : this._sum;
  };

  /**
      @memberof Treemap
      @desc If *value* is specified, sets the [tiling method](https://github.com/d3/d3-hierarchy#treemap-tiling) to the specified function and returns the current class instance. If *value* is not specified, returns the current [tiling method](https://github.com/d3/d3-hierarchy#treemap-tiling).
      @param {Function} [*value*]
  */
  Treemap.prototype.tile = function tile (_) {
    return arguments.length ? (this._tile = _, this) : this._tile;
  };

  return Treemap;
}(Viz));

export default Treemap;

//# sourceMappingURL=Treemap.js.map