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

**Note:** The `background-color` property should always be set, which acts as a fallback color when the set background-image is unavailable.

## Example 1

Set a linear gradient background on the `.hero` class element, transitioning from yellow at the top to purple at the bottom:

```css
.hero {
  background-image: linear-gradient(yellow, purple);
}
```

## Example 2

Set two background images on the .hero class element with a fallback background color of blue. The fish.png image will be positioned on top of the ocean.png image:

```css
.hero {
  background-color: blue;
  background-image: url('fish.png'), url('ocean.png');
}
```

## Example 3

Repeat `squirrel.gif` on top of `trees.png`:

```css
.hero {
  background-color: green;
  background-image: url('squirrel.gif'), url('trees.png');
  background-repeat: repeat, no-repeat;
}
```
