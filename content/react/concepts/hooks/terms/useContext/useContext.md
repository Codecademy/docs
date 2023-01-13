---
Title: 'React useContext()'
Description: 'Hook to use the React Context API in components.'
Subjects:
  - 'Web Development'
Tags:
  - 'Components'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

The **`useContext()`** hook subscribes a child [component](https://www.codecademy.com/resources/docs/react/components) to a [context component](https://www.codecademy.com/resources/docs/react/context) (and its `value` [prop](https://www.codecademy.com/resources/docs/react/props)) that exists further up the component tree.

## Syntax

The components can then use the `Context` value using the `useContext` hook:

```pseudo
const theme = useContext(ThemeContext);
```

The `useContext()` hook searches for the closest provider above the component in which it was called within the tree hierarchy. Therefore, providers within the same component are ignored.

## Example

The following example shows how a background theme could be passed down to all child components via the `useContext()` hook, and without using props:

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

The `useContext()` hook was used to apply a `ThemeContext` to the `<Container>` component in order to switch the colors of the text and background (between `black'` and `'white'`).

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

## Context From Other Files

The `useContext()` hook can subscribe a component to a context imported from another file, as well:

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

Now, other files can import the `NotificationContext`, along with the exported `Provider`, to be applied to their own components:

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
