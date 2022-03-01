---
Title: 'border-radius'
Description: 'Rounds the corners of an element.'
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
/* Four values */
border-radius: <top-left> <top-right> <bottom-right> <bottom-left>;

/* Three values */
border-radius: <top-left> <top-right + bottom-left> <bottom-right>;

/* Two values */
border-radius: <top-left + bottom-right> <top-right + bottom-left>;

/* One value */
border-radius: <all corners>;
```

Both [absolute and relative units](https://www.codecademy.com/resources/docs/css/units) can be used as values for this property.

## Example 1

```css
p {
  border: 1px solid blue;
  border-radius: 10px;
}
```

Sets a 1-pixel blue border around each paragraph with 10-pixel rounded corners.

![Border Radius Example 1](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-border-radius-1.png)

## Example 2

```css
p {
  border: 3px solid black;
  border-radius: 0px 25px;
}
```

Sets a 3-pixel solid black border around each paragraph with 25-pixel rounding only on the top right and bottom left.

![Border Radius Example 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-border-radius-2.png)

## Example 3

```css
#with-background {
  background: #73ad21;
  border-radius: 25px;
}
```

The element with an `id` of `#with-background` will have 25-pixel rounded corners, even if no border is displayed.

![Border Radius Example 3](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-border-radius-3.png)
