---
Title: "Components in React"
Subjects:
  - "Web Development"
Tags:
  - "Component"
  - "React"
Catalog Content:
  - "https://www.codecademy.com/learn/paths/web-development"
  - "https://www.codecademy.com/learn/react-101"
---

In React, components make up the UI of the application. Components are pieces of code that are reuseable and independent. Each component comes with 1 or 2 of the following things: 

* `state` - data in a component expected to change over time 
* `props` - data that can be shared from parent component to child component

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