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
  - 'learn-github'
  - 'paths/git-and-github'
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
  background-color: yellow;
  animation-name: slide;
  animation-duration: 4s;
  animation-timing-function: linear;
}

@keyframes slide {
  0% {
    margin-left: 0%;
  }
  25% {
    margin-left: 25%;
  }
  50% {
    margin-left: 50%;
  }
  75% {
    margin-left: 75%;
  }
  100% {
    margin-left: 100%;
  }
}
```

## Example 2

Apply `linear` to the `animation-timing-function` using `png` as a source:

```html
<div>
  <img src="docs/media/css-animation-function-1.png">
</div>
```

```css
div {
  animation-name: slide;
  animation-duration: 4s;
  animation-iteration-count: 2;
  animation-direction: alternate;
  animation-timing-function: linear;
}

@keyframes slide {
  0% {
    margin-left: 0%;
  }
  25% {
    margin-left: 25% !important;
  }
  50% {
    margin-left: 50% !important;
  }
  75% {
    margin-left: 75% !important;
  }
  100% {
    margin-left: 100%;
  }
}
```
**Note** 
 -`animation-name` specifies the name of the keyframe that is being bind to the selector.
 -`animation-duration` specifies the time an animation takes to complete.
 -`animation-iteration-count` specifies how many times an animation should be played.
 -`animation-direction` specifies the direction an animation should be played in.
 -`animation-timing-function` specifies the speed curve of an animation.
 -`!important` prevents image to stop at interaction points

