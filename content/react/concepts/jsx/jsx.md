---
Title: "JSX"
Subjects:
  - "Web Development"
Tags:
  - "HTML"
  - "React"
Catalog Content:
  - "https://www.codecademy.com/learn/react-101"
  - "https://www.codecademy.com/learn/paths/web-development"
---

JSX is a programming language that combines the JavaScript and HTML-like syntax to provide highly functional, reusable markup. While not required in React, JSX provides a neat visual reqresentation of the application's UI.

## Syntax

JSX looks a lot like HTML.

```js
const headerElement = <h1>This is a header</h1>;
```

But under the hood, and after its been processed to regular JavaScript, it looks like this:

```js
const headerElement = React.createElement("h1", "This is a header");
```

JavaScript code, such as variables and functions, can be used in JSX, as well:

```js
import React from "react";

const App = () => {
  return (
    <React.Fragment>
      <button onClick={() => "The button was clicked!"}>Click!</button>
    </React.Fragment>
  );
};
```
