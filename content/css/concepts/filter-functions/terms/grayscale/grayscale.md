---
Title: 'grayscale()'
Description: 'Converts an element to grayscale.'
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
  - 'paths/full-stack-engineer-career-path'
---

Converts an element to grayscale.

## Syntax

```css
filter: grayscale(<value>);
```

where a required `<value>` can be one of the following:

- Number value: `0`, `.4`
- Percentage value: `100%`, `50%`

**Note:** Values of `0` and `0%` will leave the image unchanged. Values of `1` and `100%` will convert the image to complete grayscale. If a value is omitted, the default value is `1`.

## Example 1

Give the image a grayscale of `20%`:

```css
.banner-image {
  filter: grayscale(20%);
}
```

![Comparison between a original image and the image with the grayscale filter](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-filterfunction-grayscale-20%.png)

The first image on the left is the original, and the image on the right has the `grayscale` filter set at `(20%)`.
