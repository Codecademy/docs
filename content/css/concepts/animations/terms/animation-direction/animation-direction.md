---
Title: 'animation-direction'
Description: 'Determines whether an animation runs forward or in reverse on some or all of its cycles.'
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

Determines whether an animation runs forward or in reverse on some or all of its cycles.

## Syntax

```css
animation-direction: <value>;
```

where `<value>` can be one of the following:

- `normal`: Animation will play as specified.
- `reverse`: Animation will be played in the reverse direction as specified.
- `alternate`: causes the cycles to alternate between `normal` and `reverse`.
- `alternate-reverse`: causes the cycles to alternate between `reverse` and `normal`.

## Example 1

Reverse the direction of the animation:

```css
div {
  height: 200px;
  width: 200px;
  background-color: blue;
  animation-name: slideleft;
  animation-duration: 4s;
  animation-direction: reverse;
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

![Animation with reverse animation-direction](https://raw.githubusercontent.com/Codecademy/docs/main/media/animation-direction-example1.gif)

## Example 2

Set the first direction to `alternate` and the second direction to `alternate-reverse`:

```css
div {
  height: 200px;
  width: 200px;
  background-color: blue;
  animation-name: fadeout, slideright;
  animation-duration: 4s, 4000ms;
  animation-iteration-count: 2;
  animation-direction: alternate, alternate-reverse;
}

@keyframes fadeout {
  from {
    background-color: blue;
  }
  to {
    background-color: white;
  }
}

@keyframes slideright {
  from {
    margin-left: 0%;
  }
  to {
    margin-left: 100%;
  }
}
```

![Animation with animation-direction as alternate and altrernate-reverse](https://raw.githubusercontent.com/Codecademy/docs/main/media/animation-direction-example2.gif)
