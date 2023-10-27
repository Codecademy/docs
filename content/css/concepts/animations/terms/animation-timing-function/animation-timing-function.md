---
Title: 'animation-timing-function'
Description: 'Specifies the speed curve of an animation.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'CSS'
  - 'Images'
  - 'Animation'
  - 'Div'
  - 'Effects'
  - 'Values'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

**animation-timing-function** specifies the speed curve of an animation.
**speed curve** defines the time an animation uses to change from one set of css styles to another.

## Syntax

```css
animation-timing-function: <value>;
```

where `<value>` can be one of the following keywords:

- `linear`: The animation speed is the same from start to end.
- `ease`: The animation starts slow, then accelerate and finishes slow.
- `ease-in`: The animation starts slow then the speed increase.
- `ease-out`: The animation starts fast and ends slow.
- `ease-in-out`: The animation starts slow, then accelerate and finishes slow. 
- `step-start`: The animations starts fast and ends slow.
- `step-end`: The animation starts slow and then the speed increase.
- `cubic-bezier()`: The animation values can be changed, therefore the speed adjusted as desired.


## Example 1

Apply `linear` to the `animation-timing-function` property of the `div` element:

```css
div {
  height: 100px;
  width: 100px;
  background-color: black;
  animation-name: example1;
  animation-duration: 4s;
  animation-iteration-count: 2;
  animation-direction: alternate;
  animation-timing-function: linear;
}

@keyframes example1 {
  0% {
    background-color: black;
  }
  50% {
    background-color: grey;
  }
  100% {
    background-color: white;
  }
}
```
**Note**
![css-animation-example-1](docs/media/css-animation-example-1.gif)

## Example 2

Apply `linear` to the `animation-timing-function` property of the `div` element::


```css
div {
  width: 100px;
  height: 100px;
  background-color: pink;
  animation-name: example2;
  animation-duration: 4s;
  animation-iteration-count: 2;
  animation-direction: alternate;
  animation-timing-function: linear;
}

@keyframes example2 {
  0% {background-color: pink;}
  10% {backround-color: purple;}
  20% {background-color: yellow;}
  30% {background-color: orange;}
  40% {background-color: brown;}
  50% {background-color: red;}
  60% {background-color: green;}
  70% {background-color: blue;}
  80% {background-color: grey;}
  90% {background-color: black;}
  100% {background-color: white;}
}
```
**Note** 
![css-animation-example-2](docs/media/css-animation-example-2.gif)

