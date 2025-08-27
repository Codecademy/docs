---
Title: 'scaleX()'
Description: 'Applies a scaling transformation to an element along the X-axis.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'CSS'
  - 'Functions'
  - 'Positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The **`scaleX()`** function in CSS is used to apply a scaling transformation to an element along the X-axis. This means that the element will be stretched or compressed horizontally.

## Syntax

```pseudo
transform: scaleX(s);
```

### Parameters

- `s`: A number that specifies the scaling factor. A value of `1` means no scaling, values greater than `1` enlarge the element, values between `0` and `1` reduce its size, and negative values flip the element horizontally.

## Example

```css
.bigCat {
  transform: scaleX(2);
}
```

In this example, the element with the class `bigCat` will be scaled to twice its original size along the X-axis.
