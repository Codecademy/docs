---
Title: 'animation-timing-function'
Description: 'Shapes the animation speed curve.'
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

Specifies how intermediate values are calculated throughout the duration of an animation, determining the pacing of the animation. This CSS property influences the speed curve of the animation, controlling its acceleration and deceleration.

## Syntax

```css
animation-timing-function: value;
```

where `value` can be one of the following keywords:

- `step-start`: Easing curve for an animation that starts quickly and decelerates.
- `step-end`: Easing curve for an animation that starts slowly and decelerates.
- `linear`: Easing curve for an animation that maintains a constant speed.
- `ease`: Easing curve for an animation that starts and ends smoothly.
- `ease-in`: Easing curve for an animation that starts slowly and accelerates.
- `ease-out`: Easing curve for an animation that starts quickly and decelerates.
- `ease-in-out`: Easing curve for an animation that starts and ends smoothly.
- `cubic-bezier()`: Easing curve defined using cubic Bezier functions.

**Note:** Applied property by property from keyframe to keyframe.

## Example 1

Applying `ease-in-out` to the `animation-timing-function` property of a `div` element:

```css
div {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: blue;
  animation-name: slideright;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes slideright {
  0% {
    margin-left: 0%;
  }
  50% {
    margin-left: 50%;
  }
  100% {
    margin-left: 100%;
  }
}
```

The ease-in-out timing function adds a gradual acceleration and deceleration effect to make the motion appear more natural.

![Image illustration for example 1](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-animation-timing-function.gif)
