---
Title: 'z-index'
Description: 'Sets the stack order of an element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Positioning'
  - 'Layers'
  - 'Layout'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

[gray box above black box]: https://raw.githubusercontent.com/Codecademy/docs/main/media/css-z-index-gray.png
[black box above gray box]: https://raw.githubusercontent.com/Codecademy/docs/main/media/css-z-index-black.png

The `z-index` sets the stack order of an element.

## Syntax

```css
z-index: <value>;
```

The `z-index` value can be specified with a positive or negative integer. An element with a larger `z-index` value will be higher on the stack than an element with a lower `z-index` value. Unless specified, the default value of an element on the stack is 0.

**Note:** The `z-index` property does not work with an element that has a `position` value of `static`.

## Example 1

In the following example, we have a gray box and a black box. We can set the gray box above the black box by giving the gray box a higher `z-index` value.

```css
.graybox {
  z-index: 2;
}

.blackbox {
  z-index: 1;
}
```

![Gray box above black box]

## Example 2

If we wanted to have the black box above the gray box, we can simply give the black box a higher `z-index` value.

```css
.graybox {
  z-index: 2;
}

.blackbox {
  z-index: 3;
}
```

![Black box above gray box]
