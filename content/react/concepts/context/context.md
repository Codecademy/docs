---
Title: 'Context'
Description: 'Enables data sharing across the component tree without passing props down manually at every level.'
Subjects:
  - 'Mobile Development'
  - 'Web Development'
Tags:
  - 'React'
  - 'Components'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

**Context** in [React](https://www.codecademy.com/resources/docs/react) is a feature that allows data to be shared across the component tree without passing props manually at every level. It solves the prop drilling problem by enabling [components](https://www.codecademy.com/resources/docs/react/components) to access shared state directly, no matter their depth in the hierarchy. This is useful when multiple components at different nesting levels need access to the same data, such as authentication state, theme preferences, or application settings.

## Implementation Methods

Context is implemented using three core React APIs:

- [`createContext()`](https://www.codecademy.com/resources/docs/react/context/createContext): Creates a new context object that can hold and share data
- `Context.Provider`: A component that supplies the context value to its descendants
- [`useContext()`](https://www.codecademy.com/resources/docs/react/context/createContext): A React hook that consumes context values within functional components

The typical setup is:

1. Create a context using `createContext()` with an optional default value.
2. Wrap components needing access in `Context.Provider` and pass the shared value via the `value` prop.
3. Use `useContext()` in child components to consume the nearest context value.

## Example 1: Theme Management with React Context

This example demonstrates creating a theme context for managing application-wide color themes:

```jsx
import React, { createContext, useContext, useState } from 'react';

// Define context type
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Create context with default value
const ThemeContext =
  createContext <
  ThemeContextType >
  {
    theme: 'light',
    toggleTheme: () => {},
  };

// Provider component
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = (useState < 'light') | ('dark' > 'light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Consumer component
const ThemedButton: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#000000' : '#ffffff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
      }}
    >
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
};

// Main app
const App: React.FC = () => (
  <ThemeProvider>
    <div style={{ padding: '20px' }}>
      <h1>Theme Example</h1>
      <ThemedButton />
    </div>
  </ThemeProvider>
);

export default App;
```

The `ThemeContext` holds the current theme and a function to toggle it. `ThemeProvider` manages the state, while `ThemedButton` consumes it for UI changes.

## Example 2: Sharing User Data with React Context

This example demonstrates sharing user information across components without prop drilling:

```jsx
import React, { createContext, useContext, useState } from 'react';

// Define user type
interface User {
  name: string;
  role: string;
}

// Create context
const UserContext = (createContext < User) | (null > null);

// Provider
const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user] =
    useState <
    User >
    {
      name: 'John Doe',
      role: 'Administrator',
    };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

// Consumers
const Header: React.FC = () => {
  const user = useContext(UserContext);

  return (
    <header style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <h1>Welcome, {user?.name}!</h1>
    </header>
  );
};

const UserProfile: React.FC = () => {
  const user = useContext(UserContext);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>User Profile</h2>
      <p>Name: {user?.name}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
};

// Main app
const App: React.FC = () => (
  <UserProvider>
    <Header />
    <UserProfile />
  </UserProvider>
);

export default App;
```

The `UserContext` stores user information. Both `Header` and `UserProfile` read from the same source without manually passing props.

## Frequently Asked Questions

### 1. Why do we need to use Context?

It avoids passing props through multiple layers when many components need the same data. This makes code easier to maintain.

### 2. Is React Context a hook?

No, React Context is not a hook. Context is a feature consisting of `createContext()` and Provider/Consumer components. However, `useContext()` is a hook that allows functional components to consume context values.

### 3. When to use React Context vs Redux?

Use Context for simpler state management like themes, user data, or small-to-medium applications. Choose Redux for complex applications with frequent state updates, complex state logic, and when you need advanced debugging tools.
