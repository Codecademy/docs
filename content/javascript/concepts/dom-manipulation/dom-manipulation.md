---
Title: 'DOM Manipulation'
Description: 'The DOM is a tree-like structure representing HTML or XML documents, allowing JavaScript to interact with and modify webpage elements.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Conceptual'
  - 'DOM'
  - 'Dynamic Programming'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/computer-science'
---

The **Document Object Model (DOM)** is a cross-platform programming interface for web documents. It represents an HTML or XML document as a tree structure where each element, attribute, and piece of text is a node. This structure allows JavaScript to access and manipulate the design and content of web pages in a structured way.

The DOM makes it possible to dynamically update content, styles, and structure of a webpage after the page has loaded, enabling interactivity and user-driven changes.

## HTML DOM Tree Structure

Consider the following HTML document:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

This HTML is interpreted as the following DOM tree structure:

```
Document
 ├── <html>
 │   ├── <head>
 │   │   └── <title> Page Title </title>
 │   ├── <body>
 │       ├── <h1> Hello, World! </h1>
 │       └── <p> This is a paragraph. </p>
```

## DOM Nodes

In the DOM tree, each part of the webpage is represented as a node. There are several types of nodes in the DOM:

- **Element Nodes**: Represent HTML elements such as `<h1>`, `<p>`, or `<div>`. In the DOM tree, each element is a node with its own attributes and content.

  - Example: `<h1> Hello, World! </h1>` is an element node.

- **Text Nodes**: Contain the textual content within an element. These nodes are children of element nodes.

  - Example: The text "Hello, World!" inside the `<h1>` tag is a text node.

- **Attribute Nodes**: Represent attributes of an element, such as `id`, `class`, or `src`.

  - Example: The attribute `id="heading"` in `<h1 id="heading">` is an attribute node.

- **Comment Nodes**: Represent comments in the HTML code. These are nodes but not visible to the user.
  - Example: `<!-- This is a comment -->` is a comment node.

## How Nodes Work in the DOM Tree

- The **root node** within the DOM tree is the Document node, which represents the entire HTML or XML document.
- **Child nodes** are elements that fall under a parent node in the hierarchy. For example, the `<body>` element is a child of the `<html>` element.
- Each node can have **sibling nodes** that share the same parent. For example, the `<h1>` and `<p>` elements are siblings under the `<body>` node.

## DOM Manipulation

**DOM manipulation** refers to dynamically updating, modifying, or removing elements from a webpage using JavaScript. It enables interactive experiences by allowing content, attributes, and styles to change in response to user actions or system events.

### Key Aspects of DOM Manipulation

- **Selecting Elements**: Methods like `getElementById()`, `querySelector()`, and `querySelectorAll()` retrieve specific elements from the DOM.
- **Modifying Content & Attributes**: Properties like `innerText`, `innerHTML`, and methods such as `setAttribute()` update content and element attributes.
- **Adding & Removing Elements**: Methods like `createElement()`, `appendChild()`, `removeChild()`, and `replaceChild()` dynamically modify the page structure.
- **Modifying Styles**: The `style` property or `classList.add()` and `classList.remove()` methods change element appearance.

## Debugging DOM Manipulation

Modern browsers ship with powerful developer tools (DevTools) that let you inspect and modify the DOM in real time while watching the JavaScript that drives those changes. Such DevTools are found in the latest releases of **Chrome**, **Firefox**, and **Safari**.

### 1. Opening the DevTools Console

| Browser       | Shortcut                                                     |
| ------------- | ------------------------------------------------------------ |
| Chrome / Edge | **`Ctrl + Shift + I`** (Win/Linux) / **`⌘ + ⌥ + I`** (macOS) |
| Firefox       | **`Ctrl + Shift + I`** (Win/Linux) / **`⌘ + ⌥ + I`** (macOS) |
| Safari \*     | **`⌘ + ⌥ + I`** (macOS)                                      |

<sub>\*Enable the **Develop** menu first in **Safari › Settings › Advanced**.</sub>

### 2. DevTools Main References

* **Elements / Inspector**
  Browse and live‑edit the DOM tree.
  *Tip:* Selecting nodes targets them on the console for manipulation. Any node highlighted can be referenced in the console with `$0`. With a node selected, **Alt + click** (Option + click on macOS) toggles expansion for all its child nodes.

* **Console**
  Execute JavaScript in the page’s context and inspect results.
  *Shortcuts:* `$('selector')` / `$$('selector')`, `dir($0)`, `console.log()` for quick dumps, `clear()` to wipe output.

* **Sources / Debugger**
  Set breakpoints, step through code, and watch variables.

* **Network**
  Inspect HTTP requests, responses, and payload sizes.

Other panels may include **_Performance_**, **_Application / Storage_**, and **_Accessibility / Lighthouse_**.

> These panels appear in every major browser’s developer tools with largely consistent names, so you can carry the same workflow between Chrome, Firefox, and Safari.