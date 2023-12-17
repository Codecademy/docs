---
Title: 'background-position'
Description: 'Defines the positions of one or more background images relative to the background-origin position. This is the point from which any background repetition will occur.'
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

Defines the positions of one or more background images relative to the `background-origin` position. This is the point from which any background repetition will occur.

## Syntax

```css
background-position: <value>;
```

Where value can be one of the following:

- Position keyword: `left`, `right`, `left top`, `bottom`, `bottom center`
- X% Y%: `25% 75%`, `50%, 50%`
- Length value: `25px 25px`, `4em 2em`

**Note:** The default position will be in the top-left corner.

## Example 1

Set background image position to the top right corner of `.hero` class element:

```css
.hero {
  background-image: url('avatar.png');
  background-repeat: no-repeat;
  background-position: top right;
}
```

The following is the result of the code block above:

![Background image on top right of the browser](https://raw.githubusercontent.com/Codecademy/docs/main/media/background-position-example-1.png)

## Example 2

Use percentages to place background image in the middle of the element:

```css
.hero {
  background-image: url('forrest.png');
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
```

The following is the result of the code block above:

![Background image in the middle](https://raw.githubusercontent.com/Codecademy/docs/main/media/background-position-example-2.png)

## Example 3

Use pixels to place background image `100px` down the y-axis and `100px` along the x-axis:

```css
.hero {
  background-image: url('forrest.png');
  background-repeat: no-repeat;
  background-position: 100px 100px;
}
```

The following is the result of the code block above:

![Background image 100px down and 100px right](https://raw.githubusercontent.com/Codecademy/docs/main/media/background-position-example-3.png)

## Example 4

Position multiple images:

```css
.hero {
  background-image: url('squirrel'), url('forrest.png');
  background-repeat: no-repeat;
  background-position: top left, bottom right;
}
```

The following is the result of the code block above:

![Two background images in different positions](https://raw.githubusercontent.com/Codecademy/docs/main/media/background-position-example-4.png)
