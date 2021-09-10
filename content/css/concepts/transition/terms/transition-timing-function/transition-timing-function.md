---
Title: 'transition-timing-function'
Description: 'Specifies the speed of a transition effect over the course of its duration.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Transitions'
  - 'Functions'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Specifies the speed of an elements transition effect over the course of its duration.

## Syntax

```css
transition-timing-function: <value>;
```

The `transition-timing-function` can have one of the following values:

- `ease`: Default value, speeds up until the middle of the transition then slows back down at the end.
- `linear`: Same speed from start to end.
- `ease-in`: Starts off slowly then increasing speed until the transition is complete.
- `ease-out`: Starts off quickly then decreasing speed until the transition is complete.
- `ease-in-out`: Starts slowly, then speeds up, then ends slowly.
- `steps(int, start|end)`: A stepping function that takes in two parameters. The first (_required_) parameter being the number of intervals or steps the transition effect takes to finish. The second parameter, which is optional, takes in either `start` or `end`. `start` will make value changes occur at the beginning of each interval while `end` will make the changes occur at the end of each interval. If no second parameter is specified, the default value will be `end`.
- `step-start`: Equal to `steps(1, start)`.
- `step-end`: Equal to `steps(1, end)`;
- `cubic-bezier(p1, p2, p3, p4)`: An author defined curve/speed, where `p1` through `p3` must be between 0 to 1.

**Note:** The integer value for `steps(int, start|end)` must be greater then 0.

Make sure to declare a `transition-duration` property, otherwise the duration will be 0 and have no transitioning effect.

## Example 1

Setting a `p` element with a transitioning effect speed of `ease-in-out`.

```css
p {
  transition-timing-function: ease-in-out;
}
```

## Example 2

Setting a `p` element with a transitioning effect that takes 7 intervals to complete and changes values at the beginning of each interval.

```css
div {
  transition-timing-function: steps(7, start);
}
```

## Example 3

Defining a custom speed for a `p` elements transition effect.

```css
p {
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```
