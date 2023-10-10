---
Title: 'animation-play-state'
Description: 'It is used to control the playback state of an animation to pause and resume.'
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

It allows you to pause and resume the playback of an animation.

## Syntax

```css
animation-play-state: <value>;
```

where `<value>` can be one of the following:

- `paused`: the animation is paused at the current state.
- `running`: the animation is running.This is the default value.

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
});
```

## Example 3

```css
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

.animated-element {
  width: 100px;
  height: 100px;
  background-color: blue;
  animation: slide 2s linear infinite; 
}

.paused {
  animation-play-state: paused;
}
```
## Example 4

```css
@keyframes exampleAnimation {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.element {
  animation-name: exampleAnimation;
  animation-duration: 3s;
  animation-play-state: running;
  animation-iteration-count: infinite;
}
```

```js
const element = document.querySelector('.element');

function toggleAnimation() {
  if (element.style.animationPlayState === 'paused') {
    element.style.animationPlayState = 'running';
  } else {
    element.style.animationPlayState = 'paused';
  }
}

toggleAnimation();
```