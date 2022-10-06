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

There are a few rules when using hooks! Specifically:

- Call hooks at the top level of React functions. If hooks are called in a loop, condition, or nested function, they may not render in the same order every time.
- Call hooks from React functions and not regular JavaScript functions.

While there are standard React hooks, like `useState()` and `useEffect()`, there are also custom-made hooks!

Hooks are imported at the top of a file from the `react` library:

```jsx
import React, { useState, useEffect } from 'react';
```

## Codebyte Example

In the example below, a user table component calls an external API to populate its columns and rows each time the user clicks Previous/Next

- `TableData` and `currentPage` holds the state of the table with the [useState hook](https://www.codecademy.com/resources/docs/react/hooks/useState).
- `fetchData` is ran every time `currectPage` changes, using the [useEffect hook](https://www.codecademy.com/resources/docs/react/hooks/useEffect).

```js
function UserTable() {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const users = await someApiCall(currentPage);

      setTableData(users.data);
    }

    fetchData();
  }, [currentPage]); // runs everytime currentPage changes

  function handlePrevClick() {
    setCurrentPage(Math.max(0, currentPage - 1));
  }

  function handleNextClick() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <Table
      data={tableData}
      onPrevClick={handlePrevClick}
      onNextClick={handleNextClick}
    />
  );
}
```
