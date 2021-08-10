---
Title: "translate()"
Description: "Translates an element by one or more axes."
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Functions"
  - "Positioning"
CatalogContent:
  - "learn-css"
  - "paths/front-end-engineer-career-path"
  - "paths/full-stack-engineer-career-path"
---



Translates an element by one or more axes.

## Syntax

```css
transform: translate(<value>);
```

where a required `<value>` can be one of the following:

- Length value: `100px`, `1.5em`
- Percentage value: `25%`, `50%`

**Note:** Providing only a single value will represent the horizontal axis. Providing a second comma separated value will represent the vertical axis. Values can be negative to translate elements in the opposite direction along the axes.

## Example 1

Move the `.box` element `100px` along the horizontal axis:

```css
.box {
  transform: translate(100px);
}
```

## Example 2

Move the `.box` element along the horizontal axis `200px` and  `100px` up the vertical axis:

```css
.box {
  transform: translate(200px, -100px);
}
```


## Example 3

Move the `.box` element `100px` down the vertical axis:

```css
.box {
  transform: translate(0, 100px);
}
```

