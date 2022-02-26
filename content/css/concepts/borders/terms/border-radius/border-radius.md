---
Title: 'border-radius'
Description: 'Adds rounded corners to an element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Borders'
  - 'Box Model'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

The `border-radius` property defines rounded corners on an element. It measures the radii for each corner and can have one to four specified values.

## Syntax

```pseudo
/* Using four values */
border-radius: <top left> <top right> <bottom right> <bottom left>;

/* Using three values */
border-radius: <top left> <top right + bottom left> <bottom right>;

/* Using two values */
border-radius: <top left + bottom right> <top right + bottom left>;

/* Using one value */
border-radius: <all>;
```

## Example 1

```css
p {
  border: 1px solid blue;
  border-radius: 10px;
}
```

Sets a 1-pixel blue border around each paragraph with 10-pixel rounded corners.

## Example 2

```css
h1 {
  border: 3px solid black;
  border-radius: 0px 25px;
}
```

Sets a 3-pixel solid black border around each heading element with 25-pixel rounding only on the top right and bottom left.

## Example 3

```css
#with-background {
  background: #73ad21;
  border-radius: 25px;
}
```

The element with an `id` of `with-background`, will have 25-pixel rounded corners, even if no border is displayed.
