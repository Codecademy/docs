---
Title: "Animations"
Subjects:
  - "Web Development"
  - "Web Design"
Tags: 
  - "Animation"
  - "Elements"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-csss"
  - "https://www.codecademy.com/learn/paths/web-development"
---

A CSS animation lets a HTML element gradually change from one style to another, without using JavaScript. Any number of CSS properties can be changed, for any amount of times.

To use CSS animation, some keyframes for the animation must be specified.

## `@keyframes` Rule

Keyframes hold what CSS styles the element will have at certain times. When you specify styles inside the `@keyframes` rule, the animation will gradually change from the current styles to the new styles.

To get an animation to work, the animation must be binded to an element:

```css
/* The animation */
@keyframes color-change {
  from {color: yellow;}
  to {color: orange;}
}

/* The element */
h1 {
  color: yellow;
  animation-name: color-change;
  animation-duration: 5s;
}
```
