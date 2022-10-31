---
Title: 'Hooks'
Description: 'Hooks are functions that give class-like abilities to function components such as state.'
Subjects:
  - 'Web Development'
Tags:
  - 'Functions'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

In React, **hooks** are [functions](https://www.codecademy.com/resources/docs/javascript/functions) that give class-like abilities to function [components](https://www.codecademy.com/resources/docs/react/components), including [state](https://www.codecademy.com/resources/docs/react/state) and side-effects.

There are a few rules when using hooks, including the following:

- Hooks must be called from React functions (i.e. components or custom hooks) and not from a regular JavaScript function.
- Hooks should not be called inside of a loop, condition, or nested function. Instead, hooks should be called at the top level of a React function so they render in the same order every time.

While there are standard React hooks, like `useState()` and `useEffect()`, there are also custom-made hooks!

## Syntax

```pseudo
import React, { useHook } from 'react';
```

Hooks are imported at the top of a file from the `react` library:

> **Note:** The code snippet above is purely pseudocode and useHook is not an actual React hook.
