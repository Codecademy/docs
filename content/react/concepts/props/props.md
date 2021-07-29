---
Title: "Props"
Subjects:
  - "Web Development"
Tags:
  - "Properties"
  - "React"
Catalog Content:
  - "https://www.codecademy.com/learn/react-101"
  - "https://www.codecademy.com/learn/paths/web-development"
---

In React, components are able to use props, or "properties", to display and share data throughout the application. Parent components can pass props to their child components, but not the other way around. Props can be many data types, including:

- Numbers
- Strings
- Functions
- Objects

## Syntax

```jsx
import React from 'react';
class ParentComponent extends React.Component {
  render() {
      return <ChildComponent prop1="Mike" prop2="piza">
  }
}

function ChildComponent(props) {
    return <h2>This is prop1: {props.prop1}. This is prop2: {props.prop2}.</h2>
}
```
