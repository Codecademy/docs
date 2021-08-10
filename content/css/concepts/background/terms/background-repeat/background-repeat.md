---
Title: "background-repeat"
Description: "Defines how the background image should be repeated if the image does not fully cover the element."
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Background"
  - "Positioning"
CatalogContent:
  - "learn-css"
  - "paths/front-end-engineer-career-path"
  - "paths/full-stack-engineer-career-path"
---



Defines how the background image should be repeated if the image does not fully cover the element.

## Syntax

**Note:** The default position will be in the top-left corner. It will repeat vertically and horizontally by default.

```css
background-repeat: <value>;
```

Where `<value>` can be the following: `no-repeat` | `repeat` | `repeat-x` | `repeat-y` | `space` | `round` | `initial` | `inherit`

## Example 1

Set background image to not repeat:

```css
body {
  background-image: url("ocean.png");
  background-repeat: no-repeat;
}
```

## Example 2

Set `star.gif` to repeat along x-axis:

```css
body {
  background-image: url("star.gif"), url("space.png");
  background-repeat: repeat-x, no-repeat;
}
```

## Example 3

Evenly distribute `star.gif` from the end of element:

```css
body {
  background-image: url("star.gif"), url("night-sky.png");
  background-repeat: space, no-repeat;
}
```

## Example 4

Scale the star gif to fit the element:

```css
body {
  background-image: url("star.gif"), url("night-sky.png");
  background-repeat: round, no-repeat;
}
```
