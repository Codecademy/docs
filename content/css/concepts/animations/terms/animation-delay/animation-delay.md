---
Title: 'animation-delay'
Description: 'Defines when an animation starts.'
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

Defines when an animation starts.

## Syntax

```css
animation-delay: <value>;
```

where `<value>` can be one of the following:

- Seconds: `2s`
- Milliseconds: `200ms`

**Note:** If not provided, an animation will occur immediately because the default value is `0s`.

## Example 1

Wait `2s` then run the animation:

```css
div {
  height: 200px;
  width: 200px;
  background-color: blue;
  animation-name: disappear;
  animation-duration: 2s;
  animation-delay: 2s;
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

Add a second value to wait `6000ms` then run the second animation:

```css
div {
  height: 200px;
  width: 200px;
  background-color: blue;
  animation-name: bluewhiteblue, slideright;
  animation-duration: 4s, 5000ms;
  animation-delay: 2s, 6000ms;
}

@keyframes bluewhiteblue {
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

@keyframes slideright {
  from {
    margin-left: 0%;
  }

  to {
    margin-left: 100%;
  }
}
```

In example 1 the animation is delayed for two seconds then slides right for two seconds before the background color changes from blue to white.

![Example 1, delay animation for 2 seconds](https://raw.githubusercontent.com/Codecademy/docs/main/media/animation-delay-example1.gif)

In example 2 there are two animations, the first is delayed two seconds. Half way through the animation the background color changes to white and back to blue at the end. The second is delayed 6000ms then slides to the right for 5000ms.

![Example 2, after the first animation delay the second animation for 6000 milliseconds](https://raw.githubusercontent.com/Codecademy/docs/main/media/animation-delay-example2.gif)
