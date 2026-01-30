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
  height: 200px
  display: flex;
  align-items: center;
}

p {
  height: 50px;
  width: 40px;
}
```
or 

```css
/* using grid */
.container {
  height: 200px
  display: grid;
  align-items: end;
}

p {
  height: 50px;
  width: 40px;
}
```
