---
Title: "min()"
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

Set a maximum value.

## Syntax

```css
min(value);
```

- `value` can contain more than one parameter separated by comma.

## Example 1

Set the element to have a maximum width of `600px`.

```css
div {
  width: min(50%, 600px);
}
```

The code above gave the browser the choice to choose the smallest value that is suitable. Choosing the smallest value depends on the viewport width. If `viewport width` multiply by `50%` exceed `600px` then `600px` will be used instead else `50%` will be used.

It's the opposite of `max()` basically.
