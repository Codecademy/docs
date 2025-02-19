---
Title: 'Events'
Description: 'Events refer to user interactions or browser-triggered actions that allow a webpage to respond dynamically.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Events'
  - 'HTML'
  - 'Functions'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

**Events** in JavaScript represent actions or occurrences detected by the browser, often triggered by user interactions or system processes. These events enable web pages to respond dynamically, allowing changes to content, styles, or behaviors when specific actions occur.

Events occur when actions are performed on HTML elements, such as clicking a button, entering text in an input field, or submitting a form. JavaScript provides the ability to detect and respond to these events, making it possible to create dynamic and interactive web applications. JavaScript can handle events in two primary ways:

- By embedding JavaScript code directly within an HTML event attribute (inline event handling).
- By defining an event handler in a separate script, which executes when the event occurs (using DOM properties or the `addEventListener` method).

## Types of Events

| **Event Type**      | **Description**                                | **Common Events**                                                                    |
| ------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Mouse Events**    | Triggered by mouse interactions.               | `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mouseenter`, `mouseleave` |
| **Keyboard Events** | Triggered by keyboard actions.                 | `keydown`, `keyup`, `keypress`                                                       |
| **Form Events**     | Triggered when interacting with form elements. | `submit`, `change`, `input`, `focus`, `blur`                                         |
| **Window Events**   | Triggered by browser window actions.           | `load`, `resize`, `scroll`, `unload`                                                 |
| **Touch Events**    | Triggered by touch gestures (mobile devices).  | `touchstart`, `touchmove`, `touchend`                                                |
