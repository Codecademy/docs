---
Title: 'Routing'
Description: 'Allows React components to be used as routed endpoints within an application.'
Subjects:
  - 'Web Development'
Tags:
  - 'React'
  - 'Requests'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

In React, routing is most commonly achieved through React Router.

React Router is a third-party library that allow components to be used as routed endpoints within an application. This library comes in three packages:

- `react-router`: For core functionality
- `react-router-native`: React Native version
- `react-router-dom`: Recommended for web applications

Install the newest version with `npm`:

```
npm install react-router-dom@latest
```

The newest version of React Router is [v6](https://reactrouter.com/en/6.10.0/start/overview), which comes with many breaking changes including:

- Using a `<Routes />` component instead of a `<Switch />` component for `<Route />` configuration.
- Using the `element` attribute instead of `component` when passing a JSX to a `<Link />`.

## Example

Below, a `<BrowserRouter/>` (aliased as `<Router/>`) is used to map the navigation `<Link/>` components to a `<Routes/>` component. The `<Routes/>` renders the appropriate `<Route>` based on the most specific-matching `path` among all possible matches.

```jsx
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
            </Routes>
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
      </Router>
    </div>
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
