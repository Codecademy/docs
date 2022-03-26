---
Title: 'State'
Description: 'The state object holds data in a component that is expected to change over time. It is created and maintained by the component itself, and when it changes, the component re-renders.'
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

The `state` object is where we store data in a component that is expected to change over time. When the `state` object changes, the component re-renders.

[Props](https://www.codecademy.com/resources/docs/react/props) are passed down by parent components, whereas state is created and maintained by the component itself.

Class and functional components handle state differently. Functional components use [hooks](https://www.codecademy.com/resources/docs/react/hooks) to manage state. The following will address how class components manage state.

## Creating the `state` Object

The `state` object is initialized in the component's `constructor()`:

```js
class Car extends React.Component {
  constructor(props) {
    super(props);
    // The state object
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
      </div>
    );
  }
}
```

## Using the `state` Object

Refer to the `state` object in the `render()` method:

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
          from {this.state.year}. 🚙
        </p>
      </div>
    );
  }
}
```

It will look like this:

```html
<h1>My First Car</h1>

<p>It is a white Chevrolet Malibu from 1998. 🚙</p>
```

## Caution

When you update a React component’s state, it will automatically re-render. That means you should never update the state in a `render()` method because it will cause an infinite loop.
