---
Title: 'createContext()'
Description: 'Creates a context that components can read values.'
Subjects:
  - 'Web Development'
Tags:
  - 'Components'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

The **createContext()** function is used to create an instance of the [Context API](https://www.codecademy.com/resources/docs/react/context) that other components can read. It should be used in combination with the [useContext](https://www.codecademy.com/resources/docs/react/hooks/useContext) hook.

## Syntax

```pseudo
import { createContext } from 'react';

const MyContext = createContext(defaultValue);
```

- The `defaultValue` can either be another context made from the `createContext()` method or a primitive [data type](https://www.codecademy.com/resources/docs/javascript/data-types), including `null`.
- `createContext()` returns a context object that should be named in `PascalCase`.

To pass the context down further, it is necessary to wrap the component tree in a context provider. A `value` prop needs to be passed inside the provider.

## Example

```jsx
export default function App() {
  const theme = 'light';

  return (
    <ThemeContext.Provider value={theme}>
      <Container />
    </ThemeContext.Provider>
  );
}
```

Components have to use the [`useContext()`](https://www.codecademy.com/resources/docs/react/hooks/useContext) hook to get the context information.

> **Note**: In legacy code, there may not only be `Providers` but also `Consumers` that wrap the components. This is no longer recommended.
