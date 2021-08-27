---
Title: "Routing"
Subjects:
  - "Web Development"
Tags:
  - "React"
  - "Requests"
CatalogContent:
  - "react-101"
  - "paths/front-end-engineer-career-path"
---

In React, routing is most commonly achieved through React Router.

## React Router

React Router is a third-party library that allow components to be used as routed endpoints on an application. This library comes in three packages:

- `react-router`: For core functionality
- `react-router-native`: React Native version
- `react-router-dom`: Recommended for web applications

Install with `npm`:

```
npm install react-router-dom
```

## Example

Below, a `BrowserRouter` is used to map the navigation `<Link/>` components to a `<Switch/>` component. The `<Switch/>` renders the appropriate `<Route>` based on a top-down search and match between the `to` attribute in the `Link` and the `path` attribute in the `Route`.

```jsx
import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => {
  return <h2>Home</h2>;
};

const About = () => {
  return <h2>About</h2>;
};

const Projects = () => {
  return <h2>Projects</h2>;
};

const Contact = () => {
  return <h2>Contact</h2>;
};

export default App;
```
