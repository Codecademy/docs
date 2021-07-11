---
Title: "max()"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Functions"
  - "Positioning"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition

Set a minimum value.

## Syntax

```css
min(value);
```

- `value` can contain more than one parameter separated by comma.

## Example 1

Set the element to have a minimum width of `600px`.

```css
div {
  width: min(50%, 600px);
}
```

The code above gave the browser the choice to choose the biggest value that is suitable. Choosing the biggest value depends on the viewport width. If `viewport width` multiply by `50%` does not exceed `600px` then `50%` will be used instead else `600px` will be used.

It's the opposite of `min()` basically.
