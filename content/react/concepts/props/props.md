---
Title: 'Props'
Description: 'In React, props are read-only data passed from parent to child components, enabling communication and behavior customization through values and functions.'
Subjects:
  - 'Web Development'
Tags:
  - 'Properties'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

In React, components use **props** (short for "properties") to share and display data throughout the application. Props are passed from parent to child components only and cannot flow in the reverse direction.

With functional components, props are handled as parameters in the function definition, making the code simpler and more intuitive.

Props can be various data types, including:

- Numbers
- Strings
- Functions
- Objects
- Booleans
- Arrays

## Syntax

```pseudo
import React from 'react';

function ParentComponent() {
  return <ChildComponent prop1="Mike" prop2="pizza" />;
}

function ChildComponent(props) {
  return <h2>This is prop1: {props.prop1}. This is prop2: {props.prop2}.</h2>;
}

export default ParentComponent;
```

## `Props` in Functional Components

In functional components, props are received directly as an argument, making them simpler and more intuitive compared to class-based components, which use `this.props`.

### Class-Based Components

```js
class Greeting extends React.Component {
  render() {
    // Printing the props object
    console.log(this.props);

    return <h1>Hello world</h1>;
  }
}
```

### Function-Based Components

```js
function Greeting(props) {
function Greeting(props) {
  // Printing the props object
  console.log(props);

  return <h1>Hello world</h1>;
}
```

## Pass `props` to a Component

Information can be passed to a React component by giving it an attribute:

```js
<MyComponent foo="bar" />
```

For example, to pass a message, `"This is some top secret info."`, it can be done like this:

```js
<Example message="This is some top secret info." />
```

To pass information to a component, a name is assigned to the information that is being passed.

In the above example, the name `message` is used, but any name can be chosen.

For non-string information, wrap the data in curly braces. Here’s how an array can be passed:

```js
<Greeting myInfo={['top', 'secret', 'lol']} />
```

In this next example, several pieces of information are passed to `<Greeting />`, with values that aren't strings wrapped in curly braces:

```js
<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />
```

In functional components, props are directly received as an argument to the component function.

```js
function Greeting({ name, town, age, haunted }) {
  return (
    <div>
      <h1>
        Hello, {name} from {town}!
      </h1>
      <p>Age: {age}</p>
      <p>Haunted: {haunted ? 'Yes' : 'No'}</p>
    </div>
  );
}
```

## Displaying the Props

A component often needs to display the information that is passed to it.

To make a component display passed-in information:

1. Identify the component that will receive the information.
2. Access the prop directly in the function's parameter and use it inside the JSX.

```js
import React from 'react';
import ReactDOM from 'react-dom';

function Greeting({ firstName }) {
  return <h1>Hi there, {firstName}!</h1>;
}

ReactDOM.render(<Greeting firstName="Rybu" />, document.getElementById('app'));
```
