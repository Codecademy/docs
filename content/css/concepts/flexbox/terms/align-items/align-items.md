---
Title: 'align-items'
Description: 'Sets how items are aligned along the cross axis in flex containers and the block axis in grid containers.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Flexbox'
  - 'Grid'
  - 'Layout'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

**`align-items`** sets how items are aligned inside a flex or grid container. In flexbox, it controls alignment along the cross-axis (perpendicular to the main axis defined by `flex-direction`). In grid, it controls alignment along the block axis within each grid area (vertical by default in horizontal writing modes).

## Syntax

```pseudo
align-items: <value>;
```

**Parameters:**

- `<value>`: Specifies how items inside a container are aligned. Common values include:
  - `stretch` (default)
  - `flex-start`
  - `flex-end`
  - `center`
  - `start`
  - `end`
  - `baseline`

**Return value:**

None. This property sets a layout rule and does not return a value.

## Example 1: Using `align-items` with flex

In this example, `align-items: center` is applied to a flex container to align its child elements vertically centered along the cross-axis:

```css
.container {
  height: 250px;
  width: 400px;
  border: 2px solid red;
  display: flex;
  align-items: center;
}
```

The output of the code above is shown below:

![align-items implementation using flexbox where the paragraphs inside 'div' are centered](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-align-items-1.jpg)

## Example 2: Using `align-items` with grid

In this example, `align-items: end` is applied to a grid container to align its child elements to the bottom of their grid cell.

```css
.container {
  height: 250px;
  width: 400px;
  border: 2px solid red;
  display: grid;
  align-items: end;
}
```

The output of the code above is shown below:

![align-items implementation using grid where the paragraphs inside 'div' are positioned at the end](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-align-items-2.jpg)

## Common `align-items` Values in Flexbox

The image below illustrates how different align-items values affect vertical alignment in a flex container:

![align-items property values in flexbox and their corresponding alignment](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-align-items-illustration.jpg)
