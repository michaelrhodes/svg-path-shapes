# svg-path-shapes

[![Build status](https://travis-ci.org/michaelrhodes/svg-path-shapes.png?branch=master)](https://travis-ci.org/michaelrhodes/svg-path-shapes)

[![Browser support](https://ci.testling.com/michaelrhodes/svg-path-shapes.png)](https://ci.testling.com/michaelrhodes/svg-path-shapes)

<small>Older browsers might require a polyfill for [String.prototype.trim](http://kangax.github.io/es5-compat-table/#String.prototype.trim).</small>

## Install
```sh
$ npm install svg-path-shapes
```

### Example
``` js
var shapes = require('svg-path-shapes')

shapes('M30 10 L35 15 M40 20 L45 25')
// => ['M30 10 L35 15', 'M40 20 L45 25']
```

### License
[MIT](http://opensource.org/licenses/MIT)
