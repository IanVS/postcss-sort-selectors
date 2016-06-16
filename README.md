# PostCSS Sort Selectors [![Build Status][ci-img]][ci]

[PostCSS] plugin to move selectors matching a pattern to the top of your css file..

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/IanVS/postcss-sort-selectors.svg
[ci]:      https://travis-ci.org/IanVS/postcss-sort-selectors

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-sort-selectors') ])
```

See [PostCSS] docs for examples for your environment.
