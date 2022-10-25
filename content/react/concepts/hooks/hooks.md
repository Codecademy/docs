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

In React, **hooks** are functions that give class-like abilities to function components, include [state](https://www.codecademy.com/resources/docs/react/state) and side-effects.

There are a few rules when using hooks! Specifically:

- Call hooks at the top level of React functions. If hooks are called in a loop, condition, or nested function, they may not render in the same order every time.
- Call hooks from React functions and not regular JavaScript functions.

While there are standard React hooks, like `useState()` and `useEffect()`, there are also custom-made hooks!

Hooks are imported at the top of a file from the `react` library:

```pseudo
import React, { useHook } from 'react';
```

> **Note:** The code snippet above is purely pseudocode and useHook is not an actual React hook.
