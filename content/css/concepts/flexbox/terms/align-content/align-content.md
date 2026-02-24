---
Title: 'align-content'
Description: 'Controls the spacing and alignment between rows or columns of items in a flex or grid container when there are multiple lines of content.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Flexbox'
  - 'Layout'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

In CSS, **`align-content`** property controls how multiple rows or columns of flex items are spaced and aligned along the cross axis when a flex container wraps onto multiple lines.

However, it only has an effect when:

- `flex-wrap` is set to `wrap` or `wrap-reverse`
- There is extra space in the cross-axis of the container
- If all items fit on one line, `align-content` will have no effect

## Syntax

```pseudo
align-content: value;
```

**Parameters:**

- `value`: Defines how the lines of content are spaced and aligned along the cross axis. Common values include:
  - `flex-start`
  - `flex-end`
  - `center`
  - `space-between`
  - `space-around`
  - `space-evenly`
  - `stretch (default)`

**Return value:**

This property sets a layout rule and does not return a value.

## Example: Aligning wrapped flex rows using `align-content`

In this example, a flex container wraps its items into multiple rows, and `align-content: space-between` distributes the extra vertical space evenly between those rows along the cross axis:

```css
.container {
  display: flex;
  flex-wrap: wrap;           
  align-content: space-between;
  width: 220px;
  height: 300px;             
  border: 3px solid black;
}
```

The output of the above code block is shown below:

![Image shows the use of a container example with flex items that wrap into multiple rows, align-content controls the space between those rows and instead spreads them out vertically.](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-align-content-example-output.png)
