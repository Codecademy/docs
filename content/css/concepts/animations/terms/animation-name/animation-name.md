---
Title: 'animation-name'
Description: 'Defines a comma-separated list of animations to apply to the given selector. '
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

Defines a comma-separated list of animations to apply to the given selector.

## Syntax

```css
animation-name: <value>;
```

where `<value>` is a `@keyframes` rule, which contains the properties that will be animated.

```css
div {
  animation-name: fade;
}

@keyframes fade {
  /* properties: values; */
}
```

## Example 1

Give the `animation-name` a value of `disappear`:

```css
div {
  height: 200px;
  width: 200px;
  background-color: blue;
  animation-duration: 2s;
  animation-name: disappear;
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

![Example 1](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-animation-name-disappear.gif)

## Example 2

Give the `animation-name` a second comma-separated value `slideleft`:

```css
div {
  height: 200px;
  width: 200px;
  background-color: blue;
  animation-duration: 4s, 5000ms;
  animation-name: fadeoutfadein, slideleft;
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

![Example 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-animation-name-fade-slide.gif)
