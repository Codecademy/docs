---
Title: 'scaleX()'
Description: 'Applies a scaling transformation to an element along the X-axis.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'CSS'
  - 'Functions'
  - 'Positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

The **`scaleX()`** function in CSS is used to apply a scaling transformation to an element along the X-axis. This means that the element will be stretched or compressed horizontally.

## Syntax

```css
transform: scaleX(s);
```

### Parameters  

- `s`: A number that specifies the scaling factor. A value of `1` means no scaling (the element retains its original size), while values greater than `1` will enlarge the element, and values between `0` and `1` will reduce its size.

## Example

```css
.bigCat {
  transform: scaleX(2);
}
```

In this example, the element with the class `bigCat` will be scaled to twice its original **width**.
