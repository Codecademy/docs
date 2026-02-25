---
Title: 'useMemo()'
Description: 'Returns a memoized value that only recalculates when one of its dependencies changes, helping to avoid expensive calculations on every render.'
Subjects:
  - 'Web Development'
Tags:
  - 'Components'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

The **`useMemo()`** hook is used to store the result of an expensive calculation and only recalculate it when its dependencies change. This helps to improve performance by skipping unnecessary work during re-renders.

When a [component](https://www.codecademy.com/resources/docs/react/components) re-renders, all the code inside it runs again. If there is a slow or heavy calculation, it will run every time — even if the inputs have not changed. The `useMemo()` hook solves this by remembering (or "memoizing") the result and only recalculating when needed.

## Syntax

```pseudo
import React, { useMemo } from 'react';

const memoizedValue = useMemo(() => {
  return computedResult;
}, [dependency1, dependency2]);
```

- The first argument is a [function](https://www.codecademy.com/resources/docs/javascript/functions) that returns the value to be memoized.
- The second argument is an [array](https://www.codecademy.com/resources/docs/javascript/arrays) of dependencies. The function will only run again when one of these values changes.
- If the dependency array is empty (`[]`), the value is calculated only once when the component first mounts.

> **Note:** `useMemo()` is meant for performance optimization. The code should still work correctly without it — it should not be used to control when code runs.

## Example

In this example, a list of numbers is filtered based on a threshold value. The filtering only runs again when the `numbers` array or the `threshold` value changes, not on every render:

```jsx
import React, { useState, useMemo } from 'react';

function FilteredList() {
  const [threshold, setThreshold] = useState(5);
  const [count, setCount] = useState(0);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const filteredNumbers = useMemo(() => {
    console.log('Filtering numbers...');
    return numbers.filter((num) => num >= threshold);
  }, [threshold]);

  return (
    <div>
      <h2>Numbers greater than or equal to {threshold}:</h2>
      <ul>
        {filteredNumbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
      <button onClick={() => setThreshold(threshold + 1)}>
        Increase Threshold
      </button>
      <button onClick={() => setCount(count + 1)}>
        Re-render (Count: {count})
      </button>
    </div>
  );
}
```

Clicking the **"Re-render"** button updates the `count` state and causes the component to re-render. But since `threshold` has not changed, `useMemo()` returns the stored result and skips the filtering step. The `console.log` will only appear when the **"Increase Threshold"** button is clicked.
