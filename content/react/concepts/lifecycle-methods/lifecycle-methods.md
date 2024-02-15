---
Title: 'Lifecycle Methods'
Description: 'In React, lifecycle methods are unique event listeners that listen for changes during certain points during a components lifecycle.'
Subjects:
  - 'Web Development'
Tags:
  - 'Methods'
  - 'React'
  - 'Components'
CatalogContent:
  - 'react-101'
  - 'paths/full-stack-engineer-career-path'
---

In React, **lifecycle methods** are unique event listeners that listen for changes during certain points during a [component](https://www.codecademy.com/resources/docs/react/components)'s lifecycle. A component's lifecycle usually runs in this order:

1. Rendering/mounting a component to the DOM for the first time.
2. Updating an existing component.
3. Catching any errors associated with a component render-gone-wrong.
4. Unmounting a component and removing it from the DOM.

Lifecycle methods were originally exclusive to class components. But thanks to [React hooks](https://www.codecademy.com/resources/docs/react/hooks), even functional component's can work with their lifecycle.

## Rendering/Mounting a Component

After a component is first created and `render()`ed to the DOM, it is "mounted". The method used here is called `componentDidMount()`, which occurs after the component is rendered.

```jsx
import React from "react";

class App extends React.Component {
  componentDidMount() {
    conosle.log("Component has mounted!")
  }

  render() {
    console.log("Rendering...")
    return(
      <React.Fragment>
      <React.Fragment>

    )
  }
}
```

And the output should be this:

```shell
Rendering...
Component has mounted!
```

## Updating a Component

When changes are made to a component, usually to its `state`, it is in the update-phase of its lifecycle. This is handled by the `componentDidUpdate()` method.

Using the common `<Counter>` example, and some custom `increase()` and `decrease()` event methods to change its `count` state, `compomentDidUpdate()` will execute immediately after either of these methods executes:

```jsx
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = () => this.setState({ count: this.state.count + 1 });
    this.decrement = () => this.setState({ count: this.state.count - 1 });
  }

  componentDidMount() {
    console.log('Component has mounted.');
  }

  componentDidUpdate() {
    console.log('Component updated. Count is now ' + this.state.count + '.');
  }

  render() {
    console.log('Rendering...');
    return (
      <React.Fragment>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </React.Fragment>
    );
  }
}
```

Assuming we clicked the "+" button twice, which causes a re-`render()` each time, our output would be this:

```shell
Rendering...
Component has mounted.
Rendering...
Component updated. Count is now 1.
Rendering...
Component updated. Count is now 2.
```

## Catching Errors in Components

Prior to React 16, there were no features that handled errors being thrown during the component tree's "rendering" phase. When this occurred, the following would happen:

- The entire app would crash and all components would ummount.
- A trace report of the error would replace the UI.

This prompted the creation of the following lifecycle methods for handling errors in React class components:

- `static getDerivedStateFromError(error)` for returning an updated state to allow a render of fallback UI.
- `componentDidCatch(error, errorInfo)` for logging error information to the console, including a component stack tracing back to the source of the error.

Any class component that uses either or both of these methods is considered to be an [Error Boundary component](https://reactjs.org/docs/error-boundaries.html) because they are catching errors thrown from their child components.

```jsx
import React from "react";

class CounterThatThrowsError extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    this.increment = () => this.setState({count: this.state.count + 1})
    this.decrement = () => this.setState({count: this.state.count - 1})
  }

  render() {
    if(this.state.count === 3) throw new Error("Crashed!")

    return(
      <React.Fragment>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </React.Fragment>
    )
  }
};

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
      error: null
    }
  }

  getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error.name + ": " error.message)
    // Output: Error: Crashed!
  }

  render() {
    if(this.state.hasError) {
      return (
        <div style={{ marginLeft: "2em" }}>
          <h1>Oh no! Something's gone wrong!</h1>
        </div>
      )
    }

    return(
      <div className="App">
        <Counter />
      </div>
    )
  }
}
```

> **Note:** `getDerivedStateFromError()` and `componentDidCatch()` are only able to work with errors strictly related to their child components. They are not compatible with errors related to event handlers.

## Unmounting a Component

When a component is unmounted, it is considered to be at the end of its lifecycle within the React application. The associated lifecycle method is `componentWillUnmount()`, which executes when React anticipates its host-component will be destroyed.

Going back to the previous example where the `<Counter>` component throws an error after is state is equal to 3, it is thereby destroyed and replaced by new a new UI inside of its parent component, `<App>`.

```jsx
import React from "react";

class CounterThatThrowsError extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    this.increment = () => this.setState({count: this.state.count + 1})
    this.decrement = () => this.setState({count: this.state.count - 1})
  }

  componentWillUnmount() {
    console.log("Counter has been unmounted!")
    // Output: Counter has been unmounted!
  }

  render() {
    if(this.state.count === 3) throw new Error("Crashed!")

    return(
      <React.Fragment>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </React.Fragment>
    )
  }
};

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
      error: null
    }
  }

  getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error.name + ": " error.message)
    // Output: Error: Crashed!
  }

  render() {
    if(this.state.hasError) {
      return (
        <div style={{ marginLeft: "2em" }}>
          <h1>Oh no! Something's gone wrong!</h1>
        </div>
      )
    }

    return(
      <div className="App">
        <Counter />
      </div>
    )
  }
}
```
