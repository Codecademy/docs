---
Title: "State"
Subjects:
  - "Web Development"
Tags:
  - "State"
  - "Props"
  - "DOM"
  - "React"
Catalog Content:
  - "https://www.codecademy.com/learn/react-101"
  - "https://www.codecademy.com/learn/paths/web-development"
---

The `state` object is where we store data in a component that is expected to change over time. When the `state` object changes, the component re-renders.

Props are passed down by parent components, whereas state is created and maintained by the component itself.

## Creating the `state` Object

The `state` object is initialized in the component's `constructor()`:

```js
class Car extends React.Component {
  constructor(props) {
    super(props);
    // The state object
    this.state = {
      brand: "Chevrolet",
      model: "Malibu",
      color: "white",
      year: 1998
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
      brand: "Chevrolet",
      model: "Malibu",
      color: "white",
      year: 1998
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

It will look like:

# My First Car

It is a white Chevrolet Malibu from 1998. 🚙


