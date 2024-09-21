---
Title: 'animation-iteration-count'
Description: 'Defines how many times an animation runs.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Animation'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Defines how many times an animation runs.

## Syntax

```css
animation-iteration-count: <value>;
```

where `<value>` can be one of the following:

- Number value: `3`, `300`
- `infinite` will run animation on endless loop

**Note:** providing one value will apply to all `animation-name` values. Additional comma separated values will apply correspondingly.

## Example 1

Run animation `fadeoutfadein` two times:

```css
div {
  height: 200px;
  width: 200px;
  background-color: blue;
  animation-duration: 2s;
  animation-name: fadeoutfadein;
  animation-iteration-count: 2;
}

@keyframes fadeoutfadein {
  0% {
    background-color: blue;
  }
  50% {
    background-color: white;
  }
  100% {
    background-color: blue;
  }
}
```

![animation-iteration-count-example-1](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-animation-iteration-count-fade.gif)

## Example 2

Run animation `fadeoutfadein` two times and `slideleft` one time:

```css
div {
  height: 200px;
  width: 200px;
  background-color: blue;
  animation-duration: 4s, 4000ms;
  animation-name: fadeoutfadein, slideleft;
  animation-iteration-count: 1, 2;
}

@keyframes fadeoutfadein {
  0% {
    background-color: blue;
  }
  50% {
    background-color: white;
  }
  100% {
    background-color: blue;
  }
}

@keyframes slideleft {
  from {
    margin-left: 100%;
  }

  to {
    margin-left: 0%;
  }
}
```

![animation-iteration-count-example-2](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-animation-iteration-count-fade-slide.gif)
