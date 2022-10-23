---
Title: 'useState()'
Description: 'Returns the current state of the component and its setter function'
Subjects:
  - 'Web Development'
Tags:
  - 'Components'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

The **`useState()`** hook returns the current [state](https://www.codecademy.com/resources/docs/react/state) of the [component](https://www.codecademy.com/resources/docs/react/components) and its setter function. State must be changed through the setter only and not be mutated directly as it may cause unexpected behavior.

## Syntax

The `useState()` hook accepts an initial value as its parameter. If no value is passed, it will be `undefined`.

The return value is an array whose first and second elements are the current state and state setter respectively. Those variables can be obtained through array destructuring.

```pseudo
import React, { useState } from 'react';

const [state, setState] = useState(initialValue);
```

The `useState()` is imported from the `"react"` library.
When the component is first rendered, its `state` is assigned an `initialValue` through the `useState()` hook. If one is not provided, the default value is `undefined`. Afterwards, the `setState` function can change the value of `state` and trigger a re-render of the component.

The return value of `useState()` is an [array](https://www.codecademy.com/resources/docs/javascript/arrays) whose elements (the state and setter function) can be accessed through destructuring.

> **Note:** The name of the setter function should correlate with the name of the `state` value (e.g., `const [time, setTime] = useState(0);`).

<!-- comment -->

> **Note:** In cases where the state is an array or [object](https://www.codecademy.com/resources/docs/javascript/objects), the setter function must update with a modified copy of the state, not the original (see Example #2 below).

## Example #1

A controlled input whose value depends on the `name` state and changes it through `setName` setter on `onChange` event.

```jsx
import React, { useState } from 'react';

function ProfileName() {
  const [name, setName] = useState('');

  function handleChange(event) {
    /*
     Sets the name state to the value of
     the input after the onChange event.
    */
    setName(event.currentTarget.value);
  }

  return <input value={name} onChange={handleChange} />;
}
```

## Example #2

The following example involves deleting an item from the `foods` state array and updating with `filteredItems` through the `onClick` event:

```jsx
import React, { useState } from 'react';

function FavoriteFoodList() {
  const [foods, setFoods] = useState(['pizza', 'hot dog']);

  function handleDeleteFood(deletedIndex) {
    /*
      Instead of changing the foods array directly,
      the .filter() method can be used to return a 
      copy that excludes the deleted item.
    */
    const filteredItems = foods.filter((food, index) => index !== deletedIndex);

    setFoods(filteredItems);
  }

  return (
    <div>
      {foods.map((item, index) => (
        <button onClick={() => handleDeleteFood(index)}>{item}</button>
      ))}
    </div>
  );
}
```
