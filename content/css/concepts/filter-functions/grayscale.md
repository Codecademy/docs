---
Title: "grayscale"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Images"
  - "Functions"
  - "Colors"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition

CSS filter function that converts an element to grayscale.

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

