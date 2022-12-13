---
Title: 'useContext()'
Description: 'React Context can be used to manage state globally without the need of prop drilling.'
Subjects:
  - 'Web Development'
Tags:
  - 'Components'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

The **`useContext()`** hook can be used to manage the [state](https://www.codecademy.com/resources/docs/react/state) of the React App globally instead of setting the state in the highest parent [component](https://www.codecademy.com/resources/docs/react/components) and passing it to children component as [props](https://www.codecademy.com/resources/docs/react/props). It can be used in combination with the [useState](https://www.codecademy.com/resources/docs/react/hooks/useState) hook to change the state.
Typical use cases are passing themes (e.g. color, paddings, font-sizes etc.) or the current authenticated user.

## Syntax

To create `Context`, it is necessary to import `createContext` and intialize it like this:

```pseudo
import { createContext } from 'react';

const ThemeContext = createContext();
```

> **Note:** The name of the `Context` is always written in `PascalCase` (e.g., `const ThemeContext = createContext();`).

If necessary, a fallback default value can be specified while using `createContext` (e.g. `createContext('white')`).

Now all `components` are wrapped in a `Context Provider` so that they can use the state Context with the `useContext` hook. Inside the `Context Provider` a value has to be passed, most of the time a `state` variable. 

```pseudo
function App() {
  const [theme, setTheme] = useState('white');
  return (
    <ThemeContext.Provider value={theme}>
      ...
    </ThemeContext.Provider>
  )
};
```

The components can then use the `Context` value using the `useContext` hook:
```pseudo
const theme = useContext(ThemeContext);
```

> **Note:** The `value` prop can not be omitted!


## Example

In this example, React Context is used to pass the background theme to all components without passing it as props.

```jsx
// App.js

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("white");
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <Button setTheme={setTheme} />
    </ThemeContext.Provider>
  );
}

function Form() {
  const theme = useContext(ThemeContext);
  const textColor = theme === "white" ? "black" : "white";
  return (
    <div style={{ background: theme, color: textColor, border: `1px solid ${textColor}`, borderRadius: 6 }}>
      <h2>I will change my color!</h2>
      <h6>So will the background!</h6>
    </div>
  );
}

function Button(props) {
  const theme = useContext(ThemeContext);
  const textColor = theme === "white" ? "black" : "white";
  return (
    <button
      style={{ background: theme, color: textColor, border: `1px solid ${textColor}`, borderRadius: 6 }}
      onClick={() => {
        theme === "white" ? props.setTheme("black") : props.setTheme("white");
      }}
    >
      Click me to change the color
    </button>
  );
}

```

Let's break it down:

First, the `Context` is created in the top level `component` using `createContext` imported from `react`. 

```jsx
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
```

The `Context` is then passed to other `components` by wrapping them in a `Context Provider` component. Inside the component, a `value` prop has to be created and assigned a value (in this case the `theme` state).

```jsx
function App() {
  const [theme, setTheme] = useState('white');
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <Button setTheme={setTheme} />
    </ThemeContext.Provider>
  )
};
```

If other components should use the `theme` state, it is necessary to use the `useContext` hook.

```jsx
function Form() {
  const theme = useContext(ThemeContext);
  const textColor = theme === 'white' ? 'black' : 'white';
  return (
    <div style={{ background: theme, color: textColor }}>
      <h2>I will change my color!</h2>
      <h6>So will the background!</h6>
    </div>
  )
};
```
But how is the `theme` state changed? The `setter` function is passed to the `Button` component as a prop, which uses it as an `onClick` event. In this example the theme is changed to `black` if the theme is `white` and vice versa.

```jsx
function Button(props) {
  const theme = useContext(ThemeContext);
  const textColor = theme === "white" ? "black" : "white";
  return (
    <button
      style={{ background: theme, color: textColor, border: `1px solid ${textColor}`, borderRadius: 6 }}
      onClick={() => {
        theme === "white" ? props.setTheme("black") : props.setTheme("white");
      }}
    >
      Click me to change the color
    </button>
  );
}
```
