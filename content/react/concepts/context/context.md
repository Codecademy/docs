---
Title: 'Context'
Description: 'Enables data sharing across the component tree without passing props down manually at every level.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Components'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

**Context** in React is a powerful mechanism that enables data sharing across the component tree without the need to pass props down manually at every level. Context solves the "prop drilling" problem by allowing components to access shared state or data directly, regardless of their position in the component hierarchy. Context should be used when multiple components at different nesting levels need access to the same data, such as user authentication status, theme preferences, or application settings.

## Implementation Methods

Context is implemented using three core React APIs:

- [`createContext()`](https://www.codecademy.com/resources/docs/react/context/createContext): Creates a new context object that can hold and share data
- `Context.Provider`: A component that supplies the context value to its descendants
- [`useContext()`](https://www.codecademy.com/resources/docs/react/context/createContext): A React hook that consumes context values within functional components

The typical setup is:

1. Create a context using `createContext()` with an optional default value.
2. Wrap components needing access in `Context.Provider` and pass the shared `value` via the value prop.
3. Use `useContext()` in child components to consume the nearest context value.

## Frequently Asked Questions

### 1. Why do we need to use Context?

It avoids passing props through multiple layers when many components need the same data. This makes code easier to maintain.

### 2. Is React Context a hook?

No, React Context is not a hook. Context is a feature consisting of `createContext()` and Provider/Consumer components. However, `useContext()` is a hook that allows functional components to consume context values.

### 3. When to use React Context vs Redux?

Use Context for simpler state management like themes, user data, or small-to-medium applications. Choose Redux for complex applications with frequent state updates, complex state logic, and when you need advanced debugging tools.
