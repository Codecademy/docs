---
Title: 'scale3d()'
Description: 'Scales an element in 3D space along the x, y, and z axes.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Functions'
  - 'Positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

The **`scale3d()`** function scales an element in 3D space along the x, y, and z axes, allowing for three-dimensional transformations.

## Syntax

```css
transform: scale3d(<x>, <y>, <z>);
```

where the parameters are:

- `<x>`: A number or percentage that scales the element along the x-axis (horizontal)
- `<y>`: A number or percentage that scales the element along the y-axis (vertical)
- `<z>`: A number or percentage that scales the element along the z-axis (depth)

**Note:** Values greater than 1 increase the size, values between 0 and 1 decrease the size, and negative values flip the element along that axis.

## Example

Scaling a `.cube` element to be twice as wide, half as tall, and three times as deep:

```css
.cube {
  transform: scale3d(2, 0.5, 3);
  transform-style: preserve-3d;
}
```

## Codebyte Example

```codebyte/css
<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      perspective: 1000px;
      margin: 50px;
    }

    .cube {
      width: 100px;
      height: 100px;
      background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
      transform: scale3d(1.5, 0.8, 2);
      transform-style: preserve-3d;
      transition: transform 0.3s ease;
    }

    .cube:hover {
      transform: scale3d(2, 1, 3);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="cube"></div>
  </div>
</body>
</html>
```
