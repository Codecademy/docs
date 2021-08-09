---
Title: "contrast()"
Description: "Defines the contrast on an element."
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Images"
  - "Functions"
  - "Colors"
CatalogContent:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition

Defines the contrast on an element.

## Syntax

```css
filter: contrast(<value>);
```

where a required `<value>` can be one of the following:

- Number value: `0`, `1.4`
- Percentage value: `100%`, `50%`

**Note:** Values of `1` and `100%` will have no effect. Values greater than `1` and `100%` will increase the contrast. Values less than `1` and `100%` will decrease the contrast. A value of `0` and `0%` will be completely gray. 

## Example 1

Give the image a contrast of `200%`:

```css
.banner-image {
  filter: contrast(200%);
}
```

