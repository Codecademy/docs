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

In CSS, The **`scaleX()`** function in CSS is used to apply a scaling transformation to an element along the X-axis. This means that the element will be stretched or compressed horizontally.

## Syntax

```pseudo
transform: scaleX(s);
```

**Parameters:**

- `s`: A number that specifies the scaling factor. A value of `1` means no scaling, values greater than `1` enlarge the element, values between `0` and `1` reduce its size, and negative values flip the element horizontally.

## Example

In this example, the element with the class `bigCat` will be scaled to twice its original width:

The CSS code is:

```css
.regularSizeCat {
  transform: scaleX(1);
}

.bigCat {
  transform: scaleX(2);
}
```

The HTML code is:

```html
<html>
  <head> </head>
  <body style="background-color: #020617;">
    <p>Regular Cat</p>

    <img class="regularSizeCat" src="cat.jpg" alt="Regular Size Cat" />

    <p>Scaled-X Cat</p>

    <img class="bigCat" src="cat.jpg" alt="Big Cat" />
  </body>
</html>
```

![Regular cat and horizontally stretched cat using CSS scaleX()](https://raw.githubusercontent.com/Codecademy/docs/main/media/scaleX-Ejemplo.png)
