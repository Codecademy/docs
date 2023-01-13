---
Title: 'React Context'
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

The **Context** API in [React](https://www.codecademy.com/resources/docs/react) is an easy way to manage the state of some information. It let's the parent [component](https://www.codecademy.com/resources/docs/react/components) pass the information down to any other component further down the tree hierarchy without needing to pass it as a [prop](https://www.codecademy.com/resources/docs/react/props).
It can be used in combination with the [useState](https://www.codecademy.com/resources/docs/react/hooks/useState) hook to change the state. Typical use cases are passing themes (e.g. color, paddings, font-sizes etc.) or the current authenticated user.

## Reason to use it

Normally, information of values is passed between components as props. But sometimes it has to be passed down several levels in the tree, also called `prop drilling`. In larger applications this can be complicated and lead to code that is hard to maintain.
With `Context` this is no longer necessary.

## Example

To implement the Context API it's necessary to first create the Context using [createContext](https://www.codecademy.com/resources/docs/react/context/createContext) and later use the [useContext](https://www.codecademy.com/resources/docs/react/hooks/useContext) hook (both have to be imported from the `react` library) like in the following example:

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

For a breakdown of this example, please visit the [useContext](https://www.codecademy.com/resources/docs/react/hooks/useContext) docs!
