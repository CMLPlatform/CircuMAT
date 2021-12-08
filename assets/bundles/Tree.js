import {extent, min, max} from "d3-array";
import {hierarchy, tree} from "d3-hierarchy";
import {scaleLinear} from "d3-scale";

import {assign, configPrep, constant, elem, merge} from "d3plus-common";
import {Circle, Path} from "d3plus-shape";
import {Viz} from "d3plus-viz";

import {default as nest} from "./nest";

/**
    @class Tree
    @extends Viz
    @desc Uses d3's [tree layout](https://github.com/d3/d3-hierarchy#tree) to create a tidy tree chart based on an array of data.
*/
var Tree = (function (Viz) {
  function Tree() {

    Viz.call(this);

    this._orient = "vertical";
    this._separation = function (a, b) { return a.parent === b.parent ? 1 : 2; };

    this._shape = constant("Circle");
    this._shapeConfig = assign(this._shapeConfig, {
      labelConfig: {
        fontColor: "#444"
      },
      Path: {
        fill: "none",
        stroke: "#ccc",
        strokeWidth: 1
      },
      r: constant(5),
      width: constant(10),
      height: constant(10)
    });

    this._tree = tree();

  }

  if ( Viz ) Tree.__proto__ = Viz;
  Tree.prototype = Object.create( Viz && Viz.prototype );
  Tree.prototype.constructor = Tree;

  /**
      Extends the draw behavior of the abstract Viz class.
      @private
  */
  Tree.prototype._draw = function _draw (callback) {
    var this$1 = this;


    Viz.prototype._draw.call(this, callback);

    var height = this._orient === "vertical"
            ? this._height - this._margin.top - this._margin.bottom
            : this._width - this._margin.left - this._margin.right,
          left = this._orient === "vertical" ? "left" : "top",
          that = this,
          transform = "translate(" + (this._margin.left) + ", " + (this._margin.top) + ")",
          width = this._orient === "horizontal"
            ? this._height - this._margin.top - this._margin.bottom
            : this._width - this._margin.left - this._margin.right;

    var treeData = this._tree
      .separation(this._separation)
      .size([width, height])
      (hierarchy({
        key: "root",
        values: nest(this._filteredData, this._groupBy.slice(0, this._drawDepth + 1))
      }, function (d) { return d.key && d.values ? d.values : null; }).sort(this._sort))
      .descendants()
      .filter(function (d) { return d.depth <= this$1._groupBy.length && d.parent; });

    /**
        Merges the values of a given nest branch.
        @private
    */
    function flattenBranchData(branch) {
      return merge(branch.values.map(function (l) { return l.key && l.values ? flattenBranchData(l) : l; }), that._aggs);
    }

    treeData.forEach(function (d, i) {
      if (d.data.key && d.data.values) { d.data = flattenBranchData(d.data); }
      d.__d3plus__ = true;
      d.i = i;
    });

    var r = this._shapeConfig.r;
    if (typeof r !== "function") { r = constant(r); }
    var rBufferRoot = max(treeData, function (d) { return d.depth === 1 ? r(d.data, d.i) : 0; });
    var rBufferEnd = max(treeData, function (d) { return d.children ? 0 : r(d.data, d.i); });

    var yExtent = extent(treeData, function (d) { return d.y; });
    this._labelHeight = min([
      this._orient === "vertical" ? 50 : 100,
      (yExtent[1] - rBufferRoot - rBufferEnd) / (this._groupBy.length + 1)
    ]);

    this._labelWidths = nest(treeData, function (d) { return d.depth; })
      .map(function (d) { return d.values.reduce(function (num, v, i) {
        var next = i < d.values.length - 1 ? d.values[i + 1].x : width + this$1._margin[left],
              prev = i ? d.values[i - 1].x : this$1._margin[left];
        return min([num, next - v.x, v.x - prev]);
      }, width); });

    var yScale = scaleLinear()
      .domain(yExtent)
      .range([rBufferRoot + this._labelHeight, height - rBufferEnd - this._labelHeight]);

    treeData.forEach(function (d) {
      var val = yScale(d.y);
      if (this$1._orient === "horizontal") {
        d.y = d.x;
        d.x = val;
      }
      else { d.y = val; }
    });

    var elemObject = {parent: this._select, enter: {transform: transform}, update: {transform: transform}};

    this._shapes.push(new Path()
      .data(treeData.filter(function (d) { return d.depth > 1; }))
      .select(elem("g.d3plus-Tree-Links", elemObject).node())
      .config(configPrep.bind(this)(this._shapeConfig, "shape", "Path"))
      .config({
        d: function (d) {

          var r = this$1._shapeConfig.r;

          if (typeof r === "function") { r = r(d.data, d.i); }

          var px = d.parent.x - d.x + (this$1._orient === "vertical" ? 0 : r),
                py = d.parent.y - d.y + (this$1._orient === "vertical" ? r : 0),
                x = this$1._orient === "vertical" ? 0 : -r,
                y = this$1._orient === "vertical" ? -r : 0;

          return this$1._orient === "vertical"
            ? ("M" + x + "," + y + "C" + x + "," + ((y + py) / 2) + " " + px + "," + ((y + py) / 2) + " " + px + "," + py)
            : ("M" + x + "," + y + "C" + ((x + px) / 2) + "," + y + " " + ((x + px) / 2) + "," + py + " " + px + "," + py);

        },
        id: function (d, i) { return this$1._ids(d, i).join("-"); }
      })
      .render());

    this._shapes.push(new Circle()
      .data(treeData)
      .select(elem("g.d3plus-Tree-Shapes", elemObject).node())
      .config(configPrep.bind(this)(this._shapeConfig, "shape", "Circle"))
      .config({
        id: function (d, i) { return this$1._ids(d, i).join("-"); },
        label: function (d, i) {
          if (this$1._label) { return this$1._label(d.data, i); }
          var ids = this$1._ids(d, i).slice(0, d.depth);
          return ids[ids.length - 1];
        },
        labelConfig: {
          textAnchor: function (d) { return this$1._orient === "vertical" ? "middle"
          : d.data.children && d.data.depth !== this$1._groupBy.length ? "end" : "start"; },
          verticalAlign: function (d) { return this$1._orient === "vertical" ? d.data.depth === 1 ? "bottom" : "top" : "middle"; }
        },
        hitArea: function (d, i, s) {

          var h = this$1._labelHeight,
                w = this$1._labelWidths[d.depth - 1];

          return {
            width: this$1._orient === "vertical" ? w : s.r * 2 + w,
            height: this$1._orient === "horizontal" ? h : s.r * 2 + h,
            x: this$1._orient === "vertical" ? -w / 2 : d.children && d.depth !== this$1._groupBy.length ? -(s.r + w) : -s.r,
            y: this$1._orient === "horizontal" ? -h / 2 : d.children && d.depth !== this$1._groupBy.length ? -(s.r + this$1._labelHeight) : -s.r
          };

        },
        labelBounds: function (d, i, s) {
          var obj;


          var h = this$1._labelHeight,
                height = this$1._orient === "vertical" ? "height" : "width",
                w = this$1._labelWidths[d.depth - 1],
                width = this$1._orient === "vertical" ? "width" : "height",
                x = this$1._orient === "vertical" ? "x" : "y",
                y = this$1._orient === "vertical" ? "y" : "x";

          return ( obj = {}, obj[width] = w, obj[height] = h, obj[x] = -w / 2, obj[y] = d.children && d.depth !== this$1._groupBy.length ? -(s.r + h) : s.r, obj );

        }
      })
      .render());

    return this;

  };

  /**
      @memberof Tree
      @desc If *value* is specified, sets the orientation to the specified value. If *value* is not specified, returns the current orientation.
      @param {String} [*value* = "vertical"] Accepts either "vertical" or "horizontal".
  */
  Tree.prototype.orient = function orient (_) {
    return arguments.length ? (this._orient = _, this) : this._orient;
  };

  /**
      @memberof Tree
      @desc If *value* is specified, sets the separation accessor to the specified function. If *value* is not specified, returns the current separation accessor.

From the [d3-hierarchy documentation](https://github.com/d3/d3-hierarchy#tree_separation):
> The separation accessor is used to separate neighboring nodes. The separation function is passed two nodes a and b, and must return the desired separation. The nodes are typically siblings, though the nodes may be more distantly related if the layout decides to place such nodes adjacent.
      @param {Function} [*value*]
      @example
function separation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}
  */
  Tree.prototype.separation = function separation (_) {
    return arguments.length ? (this._separation = _, this) : this._separation;
  };

  return Tree;
}(Viz));

export default Tree;

//# sourceMappingURL=Tree.js.map