---
Title: 'animation'
Description: 'Shorthand property that sets the animations for an element.'
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

Shorthand property that sets the animations for an element.

## Syntax

```css
animation: <value>;
```

where `<value>` can be and of the following keywords:

- `animation-fill-mode`: `forwards`
- `animation-delay`: `2s`
- `animation-duration`: `4s`
- `animation-iteration-count`: `infinite`
- `animation-direction`: `alternate`
- `animation-timing-function`: `linear`
- `animation-name`: keyframes rule
- `animation-play-state`: `running`

**Note:** If you do not specify `animation-duration` property, the default value is `0s`, resulting in the animation not being played. The order of time values is important. The first will be applied to `animation-duration` and the second to `animation-delay`.

## Example 1

Set `fadetowhite` animation to run two seconds, loop infinitely, and alternate directions:

```css
div {
  height: 100px;
  width: 100px;
  background-color: #000;
  animation: fadetowhite 2s infinite alternate;
}

@keyframes fadetowhite {
  from {
    background-color: #000;
  }
  to {
    background-color: #fff;
  }
}
```

The following gif runs as a loop to demonstrate the code block above:

![CSS Animation Example 1](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-animation-example-1.gif 'CSS Animation Example 1')

## Example 2

Set `party` animation to last for two seconds, delay one second, loop five times and run in reverse:

```css
div {
  height: 100px;
  width: 100px;
  background-color: pink;
  animation: party 2s 1s 5 reverse;
}

@keyframes party {
  0% {
    background-color: red;
  }
  25% {
    background-color: green;
  }
  50% {
    background-color: blue;
  }
  75% {
    background-color: yellow;
  }
  100% {
    background-color: purple;
  }
}
```

The following gif runs as a loop to demonstrate the code block above:

![CSS Animation Example 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-animation-example-2.gif 'CSS Animation Example 2')
