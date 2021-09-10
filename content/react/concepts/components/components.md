---
Title: 'Components'
Description: 'In React, components make up the UI of the application. Components are pieces of code that are reuseable and independent. Each component comes with 1 or 2 of the following things: - state: Data in a component expected to change over time - props: Data that can be shared from parent component to child component Class componenets contain a state and use a render() function to return JSX markup. When defined, the class has to be an extention of the React.Component class: jsx import React from react; class ClassComponent extends React.Component {'
Subjects:
  - 'Web Development'
Tags:
  - 'Components'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

In React, components make up the UI of the application. Components are pieces of code that are reuseable and independent. Each component comes with 1 or 2 of the following things:

- `state`: Data in a component expected to change over time
- `props`: Data that can be shared from parent component to child component

## Class Components

Class componenets contain a state and use a `render()` function to return JSX markup. When defined, the `class` has to be an extention of the `React.Component` class:

```jsx
import React from 'react';

class ClassComponent extends React.Component {
  this.state = {
    property1: "A string",
    property2: 1,
    property3: true
  }

  render() {
    return (
      <div>
        ...
      <div>
    )
  };
};
```

## Function Components

Function components are stateless and only use the `return` statement. No import statement necessary:

```jsx
function FunctionComponent() {
  return (
    <div>
      ...
    <div>
  )
}
```
