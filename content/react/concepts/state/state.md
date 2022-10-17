---
Title: 'State'
Description: 'The state object is where we store data in a component that is expected to change over time. When the state object changes, the component re-renders.'
Subjects:
  - 'Web Development'
Tags:
  - 'State'
  - 'Props'
  - 'DOM'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

The **`state`** object holds data in a [component](https://www.codecademy.com/resources/docs/react/components) that is expected to change over time. It is created and maintained by the component itself, and when it changes, the component re-renders.

[Props](https://www.codecademy.com/resources/docs/react/props) are passed down by parent components, whereas state is created and maintained by the component itself.

Class and functional components handle state differently. Functional components use [hooks](https://www.codecademy.com/resources/docs/react/hooks) to manage state. The following will address how class components manage state.

## Syntax

### With Constructor

```js
class ComponentName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property: value,
    };
  }

  render() {
    return (
      /* value of property is rendered */
      <div>{this.state.property}</div>
    );
  }
}
```

### With Property Initializers

```js
class ComponentName extends React.Component {
  state = {
    property: value,
  };

  render() {
    return (
      /* value of property is rendered */
      <div>{this.state.property}</div>
    );
  }
}
```

## Example

The following example initializes the `state` object in the component's `constructor()` and returns its value in the `render()` method:

```js
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: 'Chevrolet',
      model: 'Malibu',
      color: 'white',
      year: 1998,
    };
  }

  render() {
    return (
      <div>
        <h1>My First Car</h1>
        <p>
          It is a {this.state.color}
          {this.state.brand}
          {this.state.model}
          made in {this.state.year}. 🚙
        </p>
      </div>
    );
  }
}
```

## Using Property Initializers

With Property Initializers it is not necessary to set state or bind methods in the constructor:

```js
class Car extends React.Component {
  // no need to set state in constructor
  state = {
    brand: 'Chevrolet',
    model: 'Malibu',
    color: 'white',
    year: 1998,
  };

  render() {
    return (
      <div>
        <h1 onClick={this.upgrade}>My First Car</h1>
        <p>
          It is a {this.state.color}
          {this.state.brand}
          {this.state.model}
          made in {this.state.year}. 🚙
        </p>
      </div>
    );
  }
}
```

It will appear like this:

![React State Example](https://raw.githubusercontent.com/Codecademy/docs/main/media/react-state-example.png)

> **Note:** When React component’s state is updated, it will automatically re-render. This means that the state should never be updated in a `render()` method because it will cause an infinite loop.
