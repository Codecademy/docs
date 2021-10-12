---
Title: 'Hooks'
Description: 'In React, hooks are functions that give functional components class-like abilities.'
Subjects:
  - 'Web Development'
Tags:
  - 'Functions'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

In React, hooks are functions that give functional components class-like abilities. These abilities include:

- Using `state`
- Performing side effects

There are a few rules when using hooks! Specifically:

- Only call hooks at the top level of React functions. If you do it in a loop, condition, or nested function, they may not render in the same order every time.
- Only call hooks from React functions and not regular JavaScript functions.

While there are standard React hooks, like `useState()` and `useEffect()`, there are also custom-made hooks!

Most hooks are imported from the `react` library:

```jsx
import React, { useState, useEffect } from 'react';
```

## Syntax of `useState()`

Pass an `initialValue` into `useState()` to return a pair of new values:

- A current `state` value
- A function, `setState` that updates the `state`

```jsx
const [state, setState] = useState(initialValue);
```

`useState()` returns an array. The first element is the `initialValue` assigned to `state`. The second element is a function with a similar use case as React's `this.setState()` class component method.

## Syntax of `useEffect()`

Pass a callback function, `sideEffects()` into `useEffect()`. This hook and function will execute whenever the component mounts or updates. It is similar to React's lifecycle methods: `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. The component's `state` can also be accessed inside of `sideEffect()`.

```jsx
useEffect(function sideEffects() {
  ...
})
```
