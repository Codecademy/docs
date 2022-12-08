---
Title: 'SVG'
Description: 'Scalable Vector Graphics (SVG) is a XML-based file format for describing two-dimensional vector images. SVGs description of vector graphics with text allows for infinitely-scalable high-fidelity images with small file sizes.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Images'
  - 'Files'
  - 'HTML'
CatalogContent:
  - 'paths/code-foundations'
  - 'paths/computer-science'
  - 'paths/front-end-engineer-career-path'
---

**Scalable Vector Graphics (SVG)** is a XML-based file format for describing two-dimensional vector images. SVG's description of vector graphics with text allows for infinitely-scalable high-fidelity images with small file sizes.

Unlike the common bitmap image formats of JPEG and PNG, Scalable Vector Graphics files do not describe the location and colors of individual pixels. Instead, SVG files represent basic shapes and curves within a two-dimensional coordinate plane. This provides their scalability as well as straightforward scripting of transformations and animations using JavaScript as is commonly found on the web.

## Example

An example SVG image containing the most common shapes can be found below:

```html
<!-- Describe the two-dimensional plane on which the image will be drawn on -->
<svg
  width="300"
  height="300"
  viewBox="0 0 400 400"
  xmlns="http://www.w3.org/2000/svg"
>
  <!-- Create a black rectangle whose upper-left corner is at (25, 25) and a width and height of 200 -->
  <rect x="25" y="25" width="200" height="200" fill="black" />

  <!-- Create a white circle with a center at (125, 125) with a radius of 75 -->
  <circle cx="125" cy="125" r="75" fill="white" />

  <!-- Create a straight blue line from (50, 50) to (200, 200) -->
  <line x1="50" y1="50" x2="200" y2="200" stroke="blue" stroke-width="5" />

  <!-- Create a set of straight red lines going through the points (50, 125), (125, 50), (200, 125), (125, 200), and (50, 125) -->
  <polyline
    points="50,125 125,50 200,125 125,200 50,125"
    stroke="red"
    stroke-width="5"
    fill="none"
  />

  <!-- Create a green quadratic Bézier curve from (50, 200) to (125, 125) 
       with a control point at (75, 75) which is then mirrored until (200, 50) -->
  <path
    d="M 50 200 Q 75 75, 125 125 T 200 50"
    stroke="green"
    stroke-width="5"
    fill="transparent"
  />
</svg>
```
