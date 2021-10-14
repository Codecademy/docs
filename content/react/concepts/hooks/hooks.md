---
Title: 'Hooks'
Description: 'In React, hooks are functions that give function components class-like abilities. These abilities include: - Using state - Performing side effects While there are standard React hooks, like useState() and useEffect(), there are also custom-made hooks! Most hooks are imported from the react library: jsx import React, { useState, useEffect } from react;'
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

The default behavior for effects is to invoke the `effect` after every completed render.
However, You may want to fire the `effect` function conditionally. For example, when registering event listeners inside the `effect` function, you don't want to call it every time your component rerenders. That might cause memory leak because of registering a new listener on every update. Fortunately, We can pass a second argument to `useEffect` that is the array of values that the effect depends on.

```jsx
useEffect(function sideEffects() {
  ...
}, [dep1, dep2, ...]); // only re-run the effect if one of the values in the array changes
```

In the below example, the effect runs only first time when component mounts. Subsequent rerenders don't fire the effect. This might be useful for setting up a subscription to an external service or registering event listeners.

```jsx
useEffect(function sideEffects() {
  ...
}, []); // only run the effect when component rendered first time.
```
