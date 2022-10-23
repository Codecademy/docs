---
Title: 'useEffect()'
Description: 'Takes in a function and an array. The function will be executed after the current render phase finishes and only if the elements inside the array has changed from the previous render.'
Subjects:
  - 'Web Development'
Tags:
  - 'Components'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

The **`useEffect()`** hook takes in a [function](https://www.codecademy.com/resources/docs/javascript/functions) and an [array](https://www.codecademy.com/resources/docs/javascript/arrays). The function will be executed after the current render process finishes and only if the elements inside the array has changed from the previous render.

This hook can be used to run side effects (call to an external API, update another state, etc.) or attach [event listeners](https://www.codecademy.com/resources/docs/javascript/events).

## Syntax

The `useEffect()` hook accepts a function and an array of dependencies as its first and second parameter respectively. This hook doesn't return any value.

```pseudo
useEffect(
  () => {
    // Runs side effect here
  },
  [] // Array of dependencies
);
```

If the array of dependencies is empty, the effect will only run once when the component mounts.

The function passed as the first parameter may also return a "cleanup function" that is executed before the next scheduled effect runs. This chance can be used to remove event listeners or abort an API call.

```jsx
useEffect(
  () => {
    // Runs side effect here

    return () => {
      // Do clean up here
    };
  },
  [] // Array of dependencies
);
```

## Example

In the following example, the `useEffect()` hook attaches a `'scroll'` listener to the `window` object and removes it with a cleanup function:

```jsx
import React, { useEffect } from 'react';

function PageWrapper() {
  useEffect(() => {
    function scrollHandler() {
      console.log('Current scroll position is', window.scrollTop);
    }

    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []); // Runs only once when component mounts

  return <div>Page content...</div>;
}
```
