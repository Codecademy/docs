---
Title: 'justify-content'
Description: 'Aligns and distributes space between items along the main axis in Flexbox or the inline axis in Grid.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Flexbox'
  - 'Layout'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

The **`justify-content`** property aligns and distributes space between items along the main axis of a flex container, or aligns [`grid's`](https://www.codecademy.com/resources/docs/css/grids) tracks along the inline axis of a grid container.

## Syntax

```pseudo
justify-content: value;
```

**Parameters:**

- `value`: Specifies how content is aligned or spaced. Common values include:
  - `space-around`
  - `space-between`
  - `space-evenly`
  - `stretch`
  - `center`
  - `flex-start`
  - `flex-end`
  - `start`
  - `end`

## Example

In the following example, the `justify-content: space-around` property is used to distribute the flex items along the main axis. This creates equal space between the items, and half-sized spaces on both ends of the container:

```css
.flex-container {
  display: flex;
  justify-content: space-around;
  width: 500px;
  padding: 1rem 0;
  border: 3px solid white;
}
```

The output of the above code block is shown below:

![An image showing how flex items align along the container's main axis.](https://raw.githubusercontent.com/Codecademy/docs/main/media/justify-content-example.png)
