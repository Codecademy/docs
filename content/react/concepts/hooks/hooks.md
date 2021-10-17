---
Title: 'Hooks'
Description: 'In React, hooks are functions that give function components class-like abilities.'
Subjects:
  - 'Web Development'
Tags:
  - 'Functions'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

In React, hooks are functions that give function components class-like abilities. These abilities include:

- Using `state`
- Performing side effects

While there are standard React hooks, like `useState()` and `useEffect()`, there are also custom-made hooks!

Most hooks are imported from the `react` library:

```jsx
import React, { useState, useEffect } from 'react';
```

## Syntax of useState()

Pass an `initialValue` into `useState()` to return a pair of new values:

- A current `state` value
- A function, `setState` that updates the `state`

```jsx
const [state, setState] = useState(initialValue);
```

## Syntax of useEffect()

Pass a callback function, `sideEffects()` into `useEffect()`. This hook and function will execute whenever the componnet mounts or updates. It is similar to React's lifecycle methods: `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. The component's `state` can also be accessed inside of `sideEffect()`.

```jsx
useEffect(function sideEffects() {
  ...
})
```

The default behavior for effects is to invoke the effect after every completed render.

To fire the effect function conditionally, a second argument is passed to `useEffect`. This argument is an array of values that the effect depends on.

**Note:** When registering event listeners inside the effect function, it is not ideal to call them every time a component rerenders. Registering a new listener on every update might cause memory leaks.

```jsx
useEffect(function sideEffects() {
  ...
}, [dep1, dep2, ...]); // Re-runs the effect if a value in the array changes
```

In the example below, the effect runs the first time a component mounts. Subsequent rerenders don't fire the effect. This might be useful for setting up a subscription to an external service or registering event listeners.

```jsx
useEffect(function sideEffects() {
  ...
}, []); // Runs the effect when a component renders the first time
```
