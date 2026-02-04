---
Title: 'justify-content'
Description: 'A property that defines the space between and around items within a container.'
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

The **`justify-content`** property defines the space between and around items within a container along the flexbox's main axis or [`grid's`](https://www.codecademy.com/resources/docs/css/grids) inline axis.

## Syntax

```pseudo
justify-content: value;
```

The `value` can be any of the following:

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

In the following example, the `justify-content: space-around` property is used to distribute the flex items along the main axis. This creates equal space between the items, and half-sized spaces on both ends of the container.

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
