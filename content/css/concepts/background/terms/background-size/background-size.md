---
Title: 'background-size'
Description: 'Defines the size of one or more background images.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Background'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Defines the size of one or more background images.

## Syntax

```css
background-size: <value>;
```

where `<value>` can be one of the following:

- `contain`: scales the image as much as possible while keeping the aspect ratio and avoids clipping the image.
- `cover`: scales the image and maintains its aspect ratio, but this time the image will fill the whole area of the element and some clipping may occur.
- `auto`: tells the browser to automatically calculate the size based on the actual size of the image and the aspect ratio.
- Length value: `50%`, `100px 50px`

**Note:** If one length value is provided that will be applied to the width. If two length values are provided, the second value will be applied to the height.

## Example 1

Set background horizontal size to `500px`:

```css
.hero {
  background-image: url('fish.png');
  background-repeat: no-repeat;
  height: 1000px;
  background-size: 500px;
}
```

The CSS code above will produce the following result:

![A blue fish image following the above css specifications](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-background-size1.png)

## Example 2

Set background horizontal size and vertical size with a `%` value:

```css
.hero {
  background-image: url('fish.png');
  background-repeat: no-repeat;
  height: 1000px;
  background-size: 50% 25%;
}
```

The CSS code above will produce the following result:

![A blue fish image following the above css specifications](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-background-size2.png)

## Example 3

Set the background size to fill the whole element while maintaining the aspect ratio:

```css
.hero {
  background-image: url('fish.png');
  background-repeat: no-repeat;
  height: 1000px;
  background-size: cover;
}
```

The CSS code above will produce the following result:

![A blue fish image following the above css specifications](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-background-size3.png)

## Example 4

Set the background size to maintain the aspect ratio and avoid any clipping:

```css
.hero {
  background-image: url('fish.png');
  background-repeat: no-repeat;
  height: 1000px;
  background-size: contain;
}
```

The CSS code above will produce the following result:

![A blue fish image following the above css specifications](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-background-size4.png)
