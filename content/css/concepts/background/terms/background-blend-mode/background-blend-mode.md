---
Title: 'background-blend-mode'
Description: 'Returns a new blended color based on the background color and the background images.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Background'
  - 'Colors'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Returns a new blended color based on the background color and the background images.

## Syntax

```css
background-blend-mode: <value>;
```

where `<value>` can be one of the following: `normal` | `multiply` | `screen` | `overlay` | `darken` | `lighten` | `color-dodge` | `color-burn` | `hard-light` | `soft-light` | `difference` | `exclusion` | `hue` | `saturation` | `color` | `luminosity`

- `normal` is the default value which imposes simple alpha blending, as CSS has permitted since its inception.

- `lighten` means that the final result will show, at each pixel, either the image or its backdrop, whichever is lighter.

- `darken` will show, at each pixel, whichever is darker.

## Example 1

The background color will not bleed through the background image:

```css
body {
  background-image: url('fish.jpg');
  background-color: blue;
  background-blend-mode: normal;
}
```

The following image demonstrates the code block above:

![background-blend-mode example 1](https://raw.githubusercontent.com/Codecademy/docs/main/media/background-blend-mode-example1.png)

## Example 2

At each pixel, show whichever is lighter between the background image and the background color:

```css
body {
  background-image: url('fish.jpg');
  background-color: blue;
  background-blend-mode: lighten;
}
```

The following image demonstrates the code block above:

![background-blend-mode example 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/background-blend-mode-example2.png)

## Example 3

At each pixel, show whichever is darker between the background image and the background color:

```css
body {
  background-image: url('fish.jpg');
  background-color: blue;
  background-blend-mode: darken;
}
```

The following image demonstrates the code block above:

![background-blend-mode example 3](https://raw.githubusercontent.com/Codecademy/docs/main/media/background-blend-mode-example3.png)
