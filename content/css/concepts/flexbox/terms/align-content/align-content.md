---
Title: 'align-content'
Description: 'A flexbox property that controls the spacing between rows/columns of flex items, provided there are multiple lines of content.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Flexbox'
  - 'Layout'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

A flexbox property that controls the spacing between rows/columns of flex items, provided there are multiple lines of content.

However, it only has an effect when:

- `flex-wrap` is set to `wrap` or `wrap-reverse`
- There is extra space in the cross-axis of the container
- If all items fit on one line, `align-content` will have no effect

---

## Syntax

```css
#section-c {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
};
```

The `<align-content>` can be any of the following:

- stretch
- flex-start
- flex-end
- center
- space-between
- space-around
- space-evenly

## Example

A container example with flex items that wrap into multiple rows, align-content controls the space between those rows and instead spreads them out vertically.

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
