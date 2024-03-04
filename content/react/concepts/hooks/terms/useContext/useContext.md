---
Title: 'useContext()'
Description: 'Subscribes a component to a context which includes its value prop that exists further up the component tree.'
Subjects:
  - 'Web Development'
Tags:
  - 'Components'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

The **`useContext()`** hook subscribes a child [component](https://www.codecademy.com/resources/docs/react/components) to a [context](https://www.codecademy.com/resources/docs/react/context) which includes its `value` [prop](https://www.codecademy.com/resources/docs/react/props) that exists further up the component tree.

## Syntax

The components can read the `Context` value using the `useContext()` hook:

```pseudo
const myValue = useContext(MyContext);
```

The `useContext()` hook searches for the closest provider above the component in which it was called within the tree hierarchy. Therefore, providers within the same component are ignored. Additionally, `useContext` needs to be imported from `react` at the top of the file.

Context is passed to other components by wrapping them in a context provider component. Inside the component, a `value` prop has to be created and assigned a value:

```pseudo
<MyContext.Provider value={theme}>
  {/*
    Child components that subscribe to the context
    through the context provider.
  */}
</MyContext.Provider>
```

## Example 1

The following example shows a single file, `App.js`, and how a background theme could be passed down to all child components via the `useContext()` hook. The `value` prop in this case is the `theme` state:

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

The `useContext()` hook was used to apply a `ThemeContext` to the `<Container>` component to switch the colors of the text and background between black and white.

The `theme` state is changed through the `setter` function that is passed to the `Button` component as a prop. The component uses it in the `onClick` event. In the example above, the theme is changed to black if the theme is white and vice versa.

## Example 2

The following example shows how the `useContext()` hook can subscribe a component to a context imported from another file:

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

Now, other files can import the `NotificationContext`, along with the exported `Provider`, to be applied to their components:

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
