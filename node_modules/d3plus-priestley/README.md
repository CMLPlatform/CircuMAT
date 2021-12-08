# d3plus-priestley

[![NPM Release](http://img.shields.io/npm/v/d3plus-priestley.svg?style=flat)](https://www.npmjs.org/package/d3plus-priestley) [![Build Status](https://travis-ci.org/d3plus/d3plus-priestley.svg?branch=master)](https://travis-ci.org/d3plus/d3plus-priestley) [![Dependency Status](http://img.shields.io/david/d3plus/d3plus-priestley.svg?style=flat)](https://david-dm.org/d3plus/d3plus-priestley) [![Gitter](https://img.shields.io/badge/-chat_on_gitter-brightgreen.svg?style=flat&logo=gitter-white)](https://gitter.im/d3plus/)

A reusable Priestley timeline built on D3.

## Installing

If you use NPM, `npm install d3plus-priestley`. Otherwise, download the [latest release](https://github.com/d3plus/d3plus-priestley/releases/latest). You can also load d3plus-priestley as a standalone library or as part of [D3plus](https://github.com/d3plus/d3plus). ES modules, AMD, CommonJS, and vanilla environments are supported. In vanilla, a `d3plus` global is exported:

```html
<script src="https://cdn.jsdelivr.net/npm/d3plus-priestley@1"></script>
<script>
  console.log(d3plus);
</script>
```


## Simple Priestley Diagram

Priestly Timelines (named after 18th-century English theologian [Joseph Priestly](https://en.wikipedia.org/wiki/Joseph_Priestley)), show the duration of multiple data points over time by stacking blocks to best fit. Given data with unique IDs and start and end dates:

```js
var data = [
  {id: "alpha",   start: 2004, end: 2007},
  {id: "epsilon", start: 2007, end: 2012},
  {id: "beta",    start: 2005, end: 2010},
];
```

It's only requires a few lines of code to create a Priestly Timeline:

```js
new d3plus.Priestley()
  .data(data)
  .render();
```


[<kbd><img src="/example/getting-started.png" width="990px" /></kbd>](https://d3plus.org/examples/d3plus-priestley/getting-started/)

[Click here](https://d3plus.org/examples/d3plus-priestley/getting-started/) to view this example live on the web.


### More Examples

 * [Grouping Priestley Bars into Lanes](http://d3plus.org/examples/d3plus-priestley/grouping/)

## API Reference

##### 
* [Priestley](#Priestley)

---

<a name="Priestley"></a>
#### **Priestley** [<>](https://github.com/d3plus/d3plus-priestley/blob/master/src/Priestley.js#L15)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](https://github.com/d3plus/d3plus-viz#Viz).


* [Priestley](#Priestley) ⇐ [<code>Viz</code>](https://github.com/d3plus/d3plus-viz#Viz)
    * [new Priestley()](#new_Priestley_new)
    * [.axisConfig([*value*])](#Priestley.axisConfig) ↩︎
    * [.end([*value*])](#Priestley.end) ↩︎
    * [.paddingInner([*value*])](#Priestley.paddingInner) ↩︎
    * [.paddingOuter([*value*])](#Priestley.paddingOuter) ↩︎
    * [.start([*value*])](#Priestley.start) ↩︎


<a name="new_Priestley_new" href="#new_Priestley_new">#</a> new **Priestley**()

Creates a priestley timeline based on an array of data.





<a name="Priestley.axisConfig" href="#Priestley.axisConfig">#</a> Priestley.**axisConfig**([*value*]) [<>](https://github.com/d3plus/d3plus-priestley/blob/master/src/Priestley.js#L147)

If *value* is specified, sets the config method for the axis and returns the current class instance. If *value* is not specified, returns the current axis configuration.


This is a static method of [<code>Priestley</code>](#Priestley), and is chainable with other methods of this Class.


<a name="Priestley.end" href="#Priestley.end">#</a> Priestley.**end**([*value*]) [<>](https://github.com/d3plus/d3plus-priestley/blob/master/src/Priestley.js#L157)

If *value* is specified, sets the end accessor to the specified function or key and returns the current class instance. If *value* is not specified, returns the current end accessor.


This is a static method of [<code>Priestley</code>](#Priestley), and is chainable with other methods of this Class.


<a name="Priestley.paddingInner" href="#Priestley.paddingInner">#</a> Priestley.**paddingInner**([*value*]) [<>](https://github.com/d3plus/d3plus-priestley/blob/master/src/Priestley.js#L175)

Sets the [paddingInner](https://github.com/d3/d3-scale#band_paddingInner) value of the underlining [Band Scale](https://github.com/d3/d3-scale#band-scales) used to determine the height of each bar. Values should be a ratio between 0 and 1 representing the space in between each rectangle.


This is a static method of [<code>Priestley</code>](#Priestley), and is chainable with other methods of this Class.


<a name="Priestley.paddingOuter" href="#Priestley.paddingOuter">#</a> Priestley.**paddingOuter**([*value*]) [<>](https://github.com/d3plus/d3plus-priestley/blob/master/src/Priestley.js#L185)

Sets the [paddingOuter](https://github.com/d3/d3-scale#band_paddingOuter) value of the underlining [Band Scale](https://github.com/d3/d3-scale#band-scales) used to determine the height of each bar. Values should be a ratio between 0 and 1 representing the space around the outer rectangles.


This is a static method of [<code>Priestley</code>](#Priestley), and is chainable with other methods of this Class.


<a name="Priestley.start" href="#Priestley.start">#</a> Priestley.**start**([*value*]) [<>](https://github.com/d3plus/d3plus-priestley/blob/master/src/Priestley.js#L195)

If *value* is specified, sets the start accessor to the specified function or key and returns the current class instance. If *value* is not specified, returns the current start accessor.


This is a static method of [<code>Priestley</code>](#Priestley), and is chainable with other methods of this Class.

---



###### <sub>Documentation generated on Wed, 03 Feb 2021 14:23:14 GMT</sub>
