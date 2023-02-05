---
Title: 'createContext()'
Description: 'Creates an instance of the Context API.'
Subjects:
  - 'Web Development'
Tags:
  - 'Components'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

The **createContext()** function is used to create an instance of the [Context API](https://www.codecademy.com/resources/docs/react/context) that other components can read and has to be used in combination with the [useContext](https://www.codecademy.com/resources/docs/react/hooks/useContext) hook.

## Syntax

In the usage of `createContext` a `defaultValue` can be passed as argument.

```js
import { createContext } from 'react';

const ThemeContext = createContext('dark');
```

The data of the defaultValue can either be another context made from the `createContext()` method or a primitive [data type](https://www.codecademy.com/resources/docs/javascript/data-types), including `null`.

`createContext` returns a context object that has to be named in `PascalCase`. To pass the context down further it is necessary to wrap the component tree in a `context Provider`. Inside the `Provider` a `value` prop has to be passed.

```js
export default function App() {
  const theme = 'light';
  return (
    <ThemeContext.Provider value={theme}>
      <Container />
    </ThemeContext.Provider>
  );
}
```

> **Note**: The `value` prop must not be omitted!

Other components have to use the `useContext` hook to get the information in the context.

> **Note**: In legacy code there may not only be `Providers` but also `Consumers` that wrap the components. This is no longer recommended and will therefore not be discussed here.

To checkout some examples, please visit the [useContext](https://www.codecademy.com/resources/docs/react/hooks/useContext) docs!
