---
Title: 'Props'
Description: 'In React, components are able to use props, or "properties", to display and share data throughout the application. In other words, props is the information that gets passed from one component to another. Parent components can pass props to their child components, but not the other way around. Props can be many data types, including: - Numbers - Strings - Functions - Objects jsx'
Subjects:
  - 'Web Development'
Tags:
  - 'Properties'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

In React, components are able to use props, or "properties", to display and share data throughout the application. In other words, props is the information that gets passed from one component to another.

Parent components can pass props to their child components, but not the other way around. Props can be many data types, including:

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

## `this.props`

Every component has something called `props`.

A component’s `props` is an object. It holds information about that component.

To see a component’s `props` object, you use the expression `this.props`. Here’s an example of `this.props` being used inside of a render method:

```jsx
render() {
  // Printing the props object
  console.log(this.props);

  return <h1>Hello world</h1>;
}
```

## Pass `props` to a Component

You can pass information to a React component. How? By giving that component an attribute:

```js
<MyComponent foo="bar" />
```

Let’s say that you want to pass a component the message, `"This is some top secret info."`. Here’s how you could do it:

```js
<Example message="This is some top secret info." />
```

As you can see, to pass information to a component, you need a name for the information that you want to pass.

In the above example, we used the name `message`. You can use any name you want.

If you want to pass information that isn’t a string, then wrap that information in curly braces. Here’s how you would pass an array:

```js
<Greeting myInfo={['top', 'secret', 'lol']} />
```

In this next example, we pass several pieces of information to `<Greeting />`. The values that aren’t strings are wrapped in curly braces:

```js
<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />
```

## Displaying the Props

You will often want a component to display the information that you pass.

Here’s how to make a component display passed-in information:

1. Find the component class that is going to receive that information.
2. Include `this.props.name-of-information` in that component class’s render method’s `return` statement.

```js
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(<Greeting firstName="Rybu" />, document.getElementById('app'));
```
