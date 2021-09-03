---
Title: 'animation-timing-function'
Description: 'Defines an acceleration curve for each keyframe in a single animation. '
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

Defines an acceleration curve for each keyframe in a single animation.

## Syntax

```css
animation-timing-function: <value>;
```

where `<value>` can be one of the following keywords:

- `step-start`: The easing curve for an animation that starts quickly and decelerates.
- `step-end`: The easing curve for an animation that starts slowly and decelerates.
- `linear`: The easing curve for an animation that starts and ends at the same speed.
- `ease`: The easing curve for an animation that starts and ends at the same speed.
- `ease-in`: The easing curve for an animation that starts slowly and accelerates.
- `ease-out`: The easing curve for an animation that starts slowly and decelerates.
- `ease-in-out`: The easing curve for an animation that starts and ends at the same speed.
- `cubic-bezier()`: The easing curve for an animation that starts and ends at the same speed.

**Note:** Applied property by property from keyframe to keyframe.

## Example 1

Apply `ease-in-out` to the `animation-timing-function` property of the `div` element:

```css
div {
  height: 200px;
  width: 200px;
  background-color: blue;
  animation-name: slideright;
  animation-duration: 4s;
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
