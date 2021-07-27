---
Title: "text-overflow"
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

The `text-overflow` property specifies how hidden/not displayed content is signaled to the user.

**Note:** The properties `white-space: nowrap;` and `overflow: hidden;` are required for `text-overflow` to work. 

## Syntax

```css
text-overflow: <value>;
```

The following values can be be appplied to the `text-overflow` property:

- `clip`: Default value. Cuts off/hides the overflowing content.

- `ellipsis`: Displays an ellipsis ("..."). 

- `" "`: A custom string set by the author.


## Example 1

Setting a `div` so that overflowing text is represented with an ellipsis.

```css
div {
  text-overflow: ellipsis;
  
/*Additional properties required for text-overflow to function*/
  overflow: hidden;
  white-space: nowrap;
}
```