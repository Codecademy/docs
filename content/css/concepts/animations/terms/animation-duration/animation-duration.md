---
Title: "animation-duration"
Description: "Defines how long an animation should take to complete."
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Animation"
CatalogContent:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition

Defines how long an animation should take to complete.

## Syntax

```css
animation-duration: <value>;
```

where `<value>` can be one of the following:

- Seconds: `2s`
- Milliseconds: `200ms`

**Note:** If not provided, an animation will not occur because the default value is `0s`.

## Example 1

Change color of box from `blue` to `white` over a duration of `2` seconds:

```css
div {
  height: 200px;
  width: 200px;
  background-color: blue;
  animation-name: disappear;
  animation-duration: 2s;
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

Provide a second duration value to determine the duration of an additional animation:

```css
div {
  height: 200px;
  width: 200px;
  background-color: blue;
  animation-name: fadeoutfadein, slideleft;
  animation-duration: 4s, 5000ms;
}

@keyframes fadeoutfadein {
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

@keyframes slideleft {
  from {
    margin-left: 100%;
  }

  to {
    margin-left: 0%;
  }
}
```
