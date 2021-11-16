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

In React, components make up the UI of the application. Components are pieces of code that are reusable and independent. Each component comes with one or both of the following:

- A [`state` object](https://www.codecademy.com/resources/docs/react/state) that contains component data that is expected to change over time. 
- A [`props` object](https://www.codecademy.com/resources/docs/react/props) with data that can be passed down from parent component to child component.

## Class Components

Class components contain a state and use a `render()` function to return JSX markup. When defined, the `class` has to be an extention of the `React.Component` class:

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
function FunctionComponent(props) {
  return (
    <div>
      ...
    <div>
  )
}
```

## Arrow function

Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions:
 
```jsx
const FunctionComponent = (props) => {
  return (
    <div>
      ...
    <div>
  )
}
```
