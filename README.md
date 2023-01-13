# @hongvanpc10/tailwind-grid-system

A plugin that provides utilities for making layout easier based on 12-column grids to design web pages.

## Installation

```shell
npm i @hongvanpc10/tailwind-grid-system -D
```

or

```shell
yarn add @hongvanpc10/tailwind-grid-system --dev
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@hongvanpc10/tailwind-grid-system'),
    // ...
  ],
}
```

## Usage

Here is example:

```html
<div class="row">
  <div class="col-6">
    <div class="bg-blue-500 h-60"></div>
  </div>
  <div class="col-6">
    <div class="bg-blue-500 h-60"></div>
  </div>
</div>
```

To specify gutter, use class `gutter-{size}`, default is 1.5rem.

| Class | Spacing |
| --- | --- |
| `gutter-xs` | `0.75rem` |
| `gutter-sm` | `1rem` |
| `gutter-md` | `1.25rem` |
| `gutter-lg` | `1.75rem` |
| `gutter-xl` | `2rem` |

Example:

```html
<div class="row gutter-sm">
  <div class="col-6">
    <div class="bg-blue-500 h-60"></div>
  </div>
  <div class="col-6">
    <div class="bg-blue-500 h-60"></div>
  </div>
</div>
```

## Configuration

You can configure gutter which values are generated by this plugin under the `gutter` key in your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      gutter: {
        xs: '0.75rem',
        sm: '1rem',
        md: '1.25rem',
        lg: '1.75rem',
        xl: '2rem',
      },
    },
  },
}
```