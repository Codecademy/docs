---
Title: 'brightness()'
Description: 'Defines the brightness or darkness of an element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Images'
  - 'Functions'
  - 'Colors'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

Defines the brightness or darkness of an element.

## Syntax

```css
filter: brightness(<value>);
```

where a required `<value>` can be one of the following:

- Number value: `0`, `1.4`
- Percentage value: `100%`, `50%`

## Example

The example below applies the brightness filter to the Codecademy banner icon image.

```css
.banner-image {
  filter: brightness(150%);
}
```

![CSS brightness filter example](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-filterfunctions-brightness-example.png)

Here, the original image is on the left and the image on the right has the filter set at `brightness(150%)`.
