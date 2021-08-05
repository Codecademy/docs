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

JSX is a syntax extension of JavaScript that combines the JavaScript and HTML-like syntax to provide highly functional, reusable markup. It's used to create DOM elements which are then rendered in the React DOM.

While not required in React, JSX provides a neat visual reqresentation of the application's UI.

A JavaScript file containing JSX will have to be compiled before it reaches a web browser.

## Syntax

JSX looks a lot like HTML:

```js
const headerElement = <h1>This is a header</h1>;
```

In the block of code, we see the similarities between JSX syntax and HTML: they both use the angle bracket opening and closing tags (`<h1>` and `</h1>`).

But under the hood, after it's been processed to regular JavaScript, it looks like this:

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

## JSX Attributes

The syntax of JSX attributes closely resembles that of HTML attributes. 

```js
const example = <h1 id="example">JSX Attributes</h1>;
```

In the block of code, inside of the opening tag of the `<h1>` JSX element, we see an `id` attribute with the value `"example"`.

## Nested JSX elements

In order for the code to compile, a JSX expression must have exactly one outermost element. In the below block of code, the `<a>` tag is the outermost element.

```js
const myClasses = (
  <a href="https://www.codecademy.com">
    <h1>
      Sign Up!
    </h1>
  </a>
);
```

## Multiline JSX Expression

A JSX expression that spans multiple lines must be wrapped in parentheses `(` and `)`.

```js
const myList = (
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
);
```

Here, we see the opening parentheses on the same line as the constant declaration, before the JSX expression begins. We see the closing parentheses on the line following the end of the JSX expression.



