---
Title: "animation-play-state"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Animation"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition

Defines whether an animation is running or paused. 

## Syntax

```css
animation-play-state: <value>;
```

where `<value>` can be one of the following:

- `paused`: the animation is paused.
- `running`: the animation is running.

## Example 1

Set animation state to running:

```css
div {
  height: 200px;
  width: 200px;
  background-color: blue;
  animation-name: disappear;
  animation-duration: 2s;
  animation-play-state: running;
}

@keyframes disappear {
  from {
    background-color: blue;
  }
  to {
    background-color: white;
  }
}
```


## Example 2

Pause the animation on `div` click:

```css
div {
  height: 200px;
  width: 200px;
  background-color: blue;
  animation-name: disappear;
  animation-duration: 4s;
  animation-play-state: running;
}

@keyframes disappear {
  from {
    background-color: blue;
  }
  to {
    background-color: white;
  }
}
```

```js
// Target div
const box = document.querySelector('div');
// Pause transition on click
box.addEventListener('click', () => {
  box.style.animationPlayState = 'paused';
})
```
