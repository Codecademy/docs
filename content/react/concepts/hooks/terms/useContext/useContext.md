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

The **`useContext()`** hook can be used to manage the [state](https://www.codecademy.com/resources/docs/react/state) of the React App globally instead of setting the state in the highest parent [component](https://www.codecademy.com/resources/docs/react/components) and passing it to children component as [props](https://www.codecademy.com/resources/docs/react/props). This makes the code more readable and easier to maintain.
It can be used in combination with the [useState](https://www.codecademy.com/resources/docs/react/hooks/useState) hook to change the state. Typical use cases are passing themes (e.g. color, paddings, font-sizes etc.) or the current authenticated user.

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

> **Note:** The `value` prop must not be omitted!

The components can then use the `Context` value using the `useContext` hook:

```pseudo
const theme = useContext(ThemeContext);
```

## Example

In this example, React Context is used to pass the background theme to all components without passing it as props.

```jsx
// App.js

import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState('white');
  return (
    <ThemeContext.Provider value={theme}>
      <Button setTheme={setTheme} />
      <Container />
    </ThemeContext.Provider>
  );
}

function Button(props) {
  const theme = useContext(ThemeContext);
  const textColor = theme === 'white' ? 'black' : 'white';
  return (
    <button
      style={{
        background: theme,
        color: textColor,
        border: `1px solid ${textColor}`,
        borderRadius: 6,
      }}
      onClick={() => {
        theme === 'white' ? props.setTheme('black') : props.setTheme('white');
      }}
    >
      Click me to change the color
    </button>
  );
}

function Container() {
  const theme = useContext(ThemeContext);
  const textColor = theme === 'white' ? 'black' : 'white';
  return (
    <div
      style={{
        background: theme,
        color: textColor,
        border: `1px solid ${textColor}`,
        borderRadius: 6,
      }}
    >
      <h2>I will change my color!</h2>
      <h6>So will the background!</h6>
    </div>
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
      <Container />
      <Button setTheme={setTheme} />
    </ThemeContext.Provider>
  );
}
```

If other components should use the `theme` state, it is necessary to use the `useContext` hook.

```jsx
function Container() {
  const theme = useContext(ThemeContext);
  const textColor = theme === 'white' ? 'black' : 'white';
  return (
    <div style={{ background: theme, color: textColor }}>
      <h2>I will change my color!</h2>
      <h6>So will the background!</h6>
    </div>
  );
}
```

But how is the `theme` state changed? The `setter` function is passed to the `Button` component as a prop, which uses it as an `onClick` event. In this example the theme is changed to `black` if the theme is `white` and vice versa.

```jsx
function Button(props) {
  const theme = useContext(ThemeContext);
  const textColor = theme === 'white' ? 'black' : 'white';
  return (
    <button
      style={{
        background: theme,
        color: textColor,
        border: `1px solid ${textColor}`,
        borderRadius: 6,
      }}
      onClick={() => {
        theme === 'white' ? props.setTheme('black') : props.setTheme('white');
      }}
    >
      Click me to change the color
    </button>
  );
}
```

## Example 2

The Context can also be created in a separate file and exported for other (and multiple if needed) files to use.

```jsx
// App.js
import { createContext } from 'react';
import { Display } from './Display';

export const NotificationContext = createContext();

export function App() {
  const notifications = [
    'This is awesome!',
    'And so versatile!',
    'I really like this',
  ];

  return (
    <NotificationContext.Provider value={notifications}>
      <Display />
    </NotificationContext.Provider>
  );
}
```

Now other files simply have to import the `Context` as well as the exported `Provider`:

```jsx
// Display.js
import { useContext } from 'react';
import { NotificationContext } from './context.js';

export function Display() {
  const notifications = useContext(NotificationContext);

  return (
    <div>
      {notifications.map((notification) => {
        <h2 key={notification}>{notification}</h2>;
      })}
    </div>
  );
}
```

In this example the `Display` component uses the `notifications`, which was passed as a value in the `Context Provider`, to display them as an `h2` element.
