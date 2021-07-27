---
Title: "text-justify"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Fonts"
  - "Typography"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition 

The `text-justify` property sets the justifcation method of text when `text-align: justify;` is applied to an element.

## Syntax

```css
text-justify: <value>;
```

The following values can be be appplied to the `text-justify` property:

- `none`: Disables justification methods.

- `inter-word`: Adjusts the spacing between words. 

- `inter-character`: Adjusts the spacing between characters.

- `auto`: Allows the browser to determine the justification method.

## Example 1

Setting a `p` element with a justifaction of `inter-word`.

```css
p {
  text-align: justify;
  text-justify: inter-word;
}
```