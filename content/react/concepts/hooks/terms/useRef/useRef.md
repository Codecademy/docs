---
Title: 'useState()'
Description: 'Create mutable references to elements or values, allowing access to them without causing re-renders.'
Subjects:
  - 'Web Development'
Tags:
  - 'Components'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

The **`useRef()`** hook in React is used to create mutable references to elements or values within functional [components](https://www.codecademy.com/resources/docs/react/components). It allows you to access and interact with DOM elements directly and persist data across renders without causing re-renders.

## Syntax

In the `useState()` hook, the `initialValue` is an optional parameter that you can provide when creating a new ref object.

`initialValue` allows you to initialize the `.current` property of the ref object with an initial value.

Here is how you can use this hook :

```pseudo
import React, { useRef } from 'react';

const myRef = useRef(initialValue);
```

When `useRef()` is called, it returns a ref object, and this ref object has a `.current` property.

If no `initialValue` is provided, `myRef.current` will be undefined by default.

## Example 1

In this example, the useRef hook is used to store the previous value of the count state, allowing you to display the current and previous count values without triggering re-renders.

```jsx
import React, { useState, useRef, useEffect } from 'react';

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```