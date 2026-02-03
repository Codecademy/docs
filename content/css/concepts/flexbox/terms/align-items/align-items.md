---
Title: align-items
Description: A property that controls how items are aligned within a container
Subjects:
  - 'Web Devellopment'
  - 'Web Design'
Tags: 
  - 'Flexbox'
  - 'Grid'
  - 'Layout'
CatalogContent: 
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

**Align-items** is a flexbox and grid property that specifies how items inside a container are aligned. In flexbox, align-items controls how these items are aligned across the axis perpendicular  to the main axis, which is specified by flex-direction. In grid, it controls the alignment in the block direction (vertical by default).

## Synthax

```css
.container {
  display: flex;
  align-items: <value>;
}
```
or 
```css
.container {
  display: grid;
  align-items: <value>;
}
```

The `<value>` can be:
* `stretch`: items stretched to fill the container
* `flex-start`: items aligned to the start of the container
* `flex-end`: items aligned to the end of the container
* `center`: items aligned to the center of their axis
* `start`: items aligned to the start of the container (used in grid)
* `end`: items are aligned to the end of the container (used in grid)
* `baseline`: items aligned to their baseline

## Example

```html
<div class="container">
	<p>paragraph 1</p>
	<p>paragraph 2</p>
	<p>paragraph 3</p>
</div>
```

For the above piece of HTML code, align-items can be used as follows

```css
/* using grid */
.container {
  height: 300px;
  width: 300px;
  border: 2px solid red;
  display: flex;
  align-items: center;
}
p {
  width: 80px;
  border: 1px solid blue;
}
```

The above code output is shown below:

![align-items implementation using flexbox where the paragraphs inside 'div' are centered](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-align-items-example-using-flexbox.jpg)

or 

```css
/* using grid */
.container {
  height: 300px;
  width: 300px;
  border: 2px solid red;
  display: grid;
  align-items: end;
}
p {
  width: 80px;
  border: 1px solid blue;
}
```

The above code output is shown below:

![align-items implementation using grid where the paragraphs inside 'div' are positioned at the end](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-align-items-example-using-grid.jpg)

The image below shows some of the align-items property values in flexbox and their corresponding alignment.

![align-items property values in flexbox and their corresponding alignment](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-align-items-illustration.jpg)
