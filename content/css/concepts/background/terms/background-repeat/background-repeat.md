---
Title: 'background-repeat'
Description: 'Defines how the background image should be repeated if the image does not fully cover the element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Background'
  - 'Positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
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
  background-image: url('ocean.png');
  background-repeat: no-repeat;
}
```

![A background image of an ocean that is not repeated](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-background-repeat1.png)

## Example 2

Set `star.gif` to repeat along x-axis:

```css
body {
  background-image: url('star.gif'), url('space.png');
  background-repeat: repeat-x, no-repeat;
}
```

![Star gif repeated across the x-axis](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-background-repeat2.png)

## Example 3

Evenly distribute `star.gif` from the end of element:

```css
body {
  background-image: url('star.gif'), url('night-sky.png');
  background-repeat: space, no-repeat;
}
```

![Star gif repeated evenly across x-axis without cropping](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-background-repeat3.png)

## Example 4

Scale the star gif to fit the element:

```css
body {
  background-image: url('star.gif'), url('night-sky.png');
  background-repeat: round, no-repeat;
}
```

![Star gif stretched and repeated to fit element](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-background-repeat4.png)
