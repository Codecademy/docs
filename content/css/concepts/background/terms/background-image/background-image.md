---
Title: 'background-image'
Description: 'Places one or more images in the background of the element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Background'
  - 'Images'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Specifies the placement of one or more images in the background of an element.

## Syntax

```css
background-image: value | none;
```

Where `value` can be one of the following:

- URL function value:
  - `('cat.gif')`
  - `('../img/cat.png')`
- Gradient values:
  - `linear-gradient(0deg, #C1D279, #4062BF)`
  - `repeating-linear-gradient(0deg, #1D4D19, #191A4D 10px)`
  - `radial-gradient(circle at top, #40BFA5, #BB40BF)`
  - `repeating-radial-gradient(#1D4D19, #191A4D 10px)`

Multiple background images are supported. The first `value` specified will be stacked on top.

```css
background-image: value, value;
```

> **Note:** The `background-color` property should always be set, which acts as a fallback color when the set `background-image` is unavailable.

## Example 1

Set a linear gradient background on the `.hero` class element, transitioning from yellow at the top to purple at the bottom:

```css
.hero {
  width: 400px;
  height: 300px;
  background-image: linear-gradient(yellow, purple);
}
```

![Linear Gradient background from yellow to purple](https://raw.githubusercontent.com/Codecademy/docs/main/media/background-image-example-1.png)

## Example 2

Set two background images on the `.hero` class element with a fallback background color of blue. The `fish.png` image will be positioned on top of the `ocean.png` image:

```css
.hero {
  width: 400px;
  height: 300px;
  background-color: blue;
  background-image: url('fish.png'), url('ocean.png');
  background-size: cover;
}
```

![Background image with fish image over ocean image](https://raw.githubusercontent.com/Codecademy/docs/main/media/background-image-example-2.png)

## Example 3

Set two background images on the `.hero` class element with a fallback background color of `green`. It repeats `squirrel.gif` on top of `tree.png` sizing down `squirrel.gif` to `20%` and `tree.png` to `cover`:

```css
.hero {
  width: 400px;
  height: 300px;
  background-color: green;
  background-image: url('squirrel.gif'), url('tree.png');
  background-repeat: repeat, no-repeat;
  background-size: 20%, cover;
}
```

![Background with squirrel gif repeated over tree image](https://raw.githubusercontent.com/Codecademy/docs/main/media/background-image-example-3.gif)
