<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# nanmaxabs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the maximum absolute value of a strided array, ignoring `NaN` values.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
nanmaxabs = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-nanmaxabs@v0.1.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var nanmaxabs = require( 'path/to/vendor/umd/stats-base-nanmaxabs/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-nanmaxabs@v0.1.0-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.nanmaxabs;
})();
</script>
```

#### nanmaxabs( N, x, stride )

Computes the maximum absolute value of a strided array `x`, ignoring `NaN` values.

```javascript
var x = [ 1.0, -2.0, NaN, 2.0 ];
var N = x.length;

var v = nanmaxabs( N, x, 1 );
// returns 2.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **stride**: index increment for `x`.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to compute the maximum absolute value of every other element in `x`,

```javascript
var floor = require( '@stdlib/math-base-special-floor' );

var x = [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0, NaN, NaN ];
var N = floor( x.length / 2 );

var v = nanmaxabs( N, x, 2 );
// returns 4.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, NaN, NaN, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var N = floor( x0.length / 2 );

var v = nanmaxabs( N, x1, 2 );
// returns 4.0
```

#### nanmaxabs.ndarray( N, x, stride, offset )

Computes the maximum absolute value of a strided array, ignoring `NaN` values and using alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, NaN, 2.0 ];
var N = x.length;

var v = nanmaxabs.ndarray( N, x, 1, 0 );
// returns 2.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the maximum absolute value for every other value in `x` starting from the second value

```javascript
var floor = require( '@stdlib/math-base-special-floor' );

var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, NaN, NaN, 2.0, 3.0, 4.0 ];
var N = floor( x.length / 2 );

var v = nanmaxabs.ndarray( N, x, 2, 1 );
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   Depending on the environment, the typed versions ([`dnanmaxabs`][@stdlib/stats/base/dnanmaxabs], [`snanmaxabs`][@stdlib/stats/base/snanmaxabs], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-nanmaxabs@v0.1.0-umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x;
var i;

x = new Float64Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    if ( randu() < 0.2 ) {
        x[ i ] = NaN;
    } else {
        x[ i ] = round( (randu()*100.0) - 50.0 );
    }
}
console.log( x );

var v = nanmaxabs( x.length, x, 1 );
console.log( v );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-base/dnanmaxabs`][@stdlib/stats/base/dnanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a double-precision floating-point strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats-base/maxabs`][@stdlib/stats/base/maxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a strided array.</span>
-   <span class="package-name">[`@stdlib/stats-base/nanmax`][@stdlib/stats/base/nanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats-base/nanminabs`][@stdlib/stats/base/nanminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats-base/snanmaxabs`][@stdlib/stats/base/snanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a single-precision floating-point strided array, ignoring NaN values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-nanmaxabs.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-nanmaxabs

[test-image]: https://github.com/stdlib-js/stats-base-nanmaxabs/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/stats-base-nanmaxabs/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-nanmaxabs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-nanmaxabs?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-nanmaxabs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-nanmaxabs/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-nanmaxabs/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-nanmaxabs/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-nanmaxabs/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-nanmaxabs/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-nanmaxabs/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/base/dnanmaxabs]: https://github.com/stdlib-js/stats-base-dnanmaxabs/tree/umd

[@stdlib/stats/base/maxabs]: https://github.com/stdlib-js/stats-base-maxabs/tree/umd

[@stdlib/stats/base/nanmax]: https://github.com/stdlib-js/stats-base-nanmax/tree/umd

[@stdlib/stats/base/nanminabs]: https://github.com/stdlib-js/stats-base-nanminabs/tree/umd

[@stdlib/stats/base/snanmaxabs]: https://github.com/stdlib-js/stats-base-snanmaxabs/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
