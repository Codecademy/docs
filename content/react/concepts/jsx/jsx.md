---
Title: 'JSX'
Description: 'JavaScript XML (JSX) is a syntax extension of JavaScript that provides highly functional and reusable markup code. It is used to create DOM elements which are then rendered in the React DOM. JSX provides a neat visual representation of the UI.'
Subjects:
  - 'Web Development'
Tags:
  - 'DOM'
  - 'React'
  - 'Syntax'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

JSX is a syntax extension of JavaScript that combines the JavaScript and HTML-like syntax to provide highly functional, reusable markup. It's used to create DOM elements which are then rendered in the React DOM.

While not required in React, JSX provides a neat visual reqresentation of the application's UI.

A JavaScript file containing JSX will have to be compiled before it reaches a web browser.

## Syntax

JSX looks a lot like HTML:

```js
const headerElement = <h1>This is a header</h1>;
```

In the block of code, we see the similarities between JSX syntax and HTML: they both use the angle bracket opening `<h1>` and closing `</h1>` tags.

Under the hood, after it's been processed to regular JavaScript, it looks like this:

```js
const headerElement = React.createElement('h1', 'This is a header');
```

JavaScript code, such as variables and functions, can be used in JSX, as well:

```js
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <button onClick={() => 'The button was clicked!'}>Click!</button>
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

## Nested JSX Elements

In order for the code to compile, a JSX expression must have exactly one outermost element. In the below block of code, the `<a>` tag is the outermost element.

```js
const myClasses = (
  <a href="https://www.codecademy.com">
    <h1>Sign Up!</h1>
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

## JSX with `.map()` Method

The array method `.map()` comes up often in React. It’s good to get in the habit of using it alongside JSX.

If you want to create a list of JSX elements from a given array, then`.map()` over each element in the array, returning a list item for each one.

```js
const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map((string) => <li>{string}</li>);

<ul>{listItems}</ul>;
```

## JSX Conditionals

JSX does not support `if`/`else` syntax in embedded JavaScript. There are three ways to express conditionals for use with JSX elements:

### Using Ternary Operator

Using ternary operator within curly braces in JSX:

```js
const headline = <h1>{age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff'}</h1>;
```

### Using `if` Statement

Using `if`/`else` statement outside of JSX element:

```js
let text;

if (age >= drinkingAge) {
  text = 'Buy Drink';
} else {
  text = 'Do Teen Stuff';
}

const headline = <h1>{text}</h1>;
```

### Using `&&` Operator

Using `&&` AND operator:

```js
// Renders as empty div if length is 0
const unreadMessages = ['hello?', 'remember me!'];

const update = (
  <div>
    {unreadMessages.length > 0 && (
      <h1>You have {unreadMessages.length} unread messages.</h1>
    )}
  </div>
);
```
