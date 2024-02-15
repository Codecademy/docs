---
Title: 'X and Y Coordinates'
Description: 'An X coordinate and a Y coordinate indicate the location of a point along an X-axis (horizontal) and a Y-axis (vertical).'
Subjects:
  - 'Web Design'
Tags:
  - 'UI'
  - 'UX'
CatalogContent:
  - 'intro-to-ui-ux'
  - 'paths/front-end-engineer-career-path'
---

An **X coordinate** and a **Y coordinate** indicate the location of a point along the X-axis (horizontal) and Y-axis (vertical). X and Y coordinates are written in parenthesis: (9, 30). The first value is the X coordinate and the second value is the Y coordinate.

In [design software](https://www.codecademy.com/resources/docs/uiux/design-software), X and Y coordinates represent a layer’s location on the canvas. If a layer is inside a frame, the coordinates represent its position within the frame.

When a layer is moved around on the canvas, its coordinates automatically update to reflect its position. Alternatively, new coordinate values can be entered, shifting the layer to a new location on the canvas.

In design software, the **origin**, or point where the X-axis and Y-axis intersect, is at the top-left corner of the canvas or frame. Thus, a layer at the top-left corner of a frame has the coordinates (0,0). As the layer is moved right, the value of its X coordinate increases. As the layer is moved down, the value of its Y coordinate increases.

![Gif of a Figma design file. An image of Codecademy’s mascot Codey is located at the top left of a frame, with the starting coordinates (0, 0). As Codey is moved to the right, the value of the X coordinate increases. As Codey is moved down, the Y coordinate value increases.](https://static-assets.codecademy.com/Courses/intro-to-ui-and-ux/docs/X-Y-Coordinates-Demo.gif)

X and Y coordinates represent the location of a single point, but a layer is generally much larger than a point. Therefore, design software assigns a **reference point**, which is the exact point on the layer that correlates to its coordinates. The reference point is typically located at the top-left corner of the layer’s bounds. However, in some software, it’s possible to shift the reference point.

![Screenshot of a Figma design file. On the left, there’s a rectangle in a frame. The rectangle’s reference point, which is located at the top-left corner, is highlighted. On the right, the X and Y coordinates of the rectangle are displayed.](https://static-assets.codecademy.com/Courses/intro-to-ui-and-ux/docs/X-Y-Coordinates-Reference-Point.png)

Because design software assigns X and Y coordinates for every layer, designers can precisely position all layers in the design.

For example, if a [button](https://www.codecademy.com/resources/docs/uiux/button) should appear in the same position across multiple website pages, a designer can check the X and Y coordinates of the button to ensure that they are the same on every frame.

Figma, a prototyping tool and graphics editor, has [more information](https://help.figma.com/hc/en-us/articles/360039956914-Adjust-alignment-rotation-and-position#Position) on X and Y coordinations including alignment, rotation, and postiion.
