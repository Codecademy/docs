---
Title: 'useCallback()'
Description: 'Caches a function definition between re-renders and only updates it when its dependencies change.'
Subjects:
  - 'Web Development'
Tags:
  - 'Components'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

The **`useCallback()`** hook caches a function definition between re-renders. It returns a memoized version of the function that only changes if one of its dependencies changes.

This hook is primarily used as a performance optimization. It is especially useful when passing functions to components wrapped in `React.memo()` to prevent unnecessary re-renders.

## Syntax

The **`useCallback()`** hook caches a function definition between re-renders of a [component](https://www.codecademy.com/resources/docs/react/components). It returns a memoized version of the function that only changes if one of its dependencies changes.

This hook is primarily used as a performance optimization. It is especially useful when passing functions as [props](https://www.codecademy.com/resources/docs/react/props) to child components to prevent unnecessary re-rendering.

```pseudo
const memoizedFunction = useCallback(
  () => {
    // Function logic
  },
  [dependencies]
);
```

## Example 

The following example, `useCallback()` is used to prevent unnecessary re-rendering of a child component wrapped in `React.memo():`

```js
import React, { useState, useCallback, memo } from 'react';

const Child = memo(function Child({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}
```