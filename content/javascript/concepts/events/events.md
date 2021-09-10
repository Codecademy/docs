---
Title: 'Events'
Description: 'Events are things that happen in HTML objects that can trigger scripting code. JavaScript can be executed by events in HTML via two methods: - The JavaScript code can appear within the appropriate HTML attribute in the HTML object. - Or a separate script can define an event handler on the object that executes when the event is fired. You can assign JavaScript code to an event attribute in an HTML object. html  Click Me!'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Events'
  - 'Functions'
  - 'HTML'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

Events are things that happen in HTML objects that can trigger scripting code. JavaScript can be executed by events in HTML via two methods:

- The JavaScript code can appear within the appropriate HTML attribute in the HTML object.
- Or a separate script can define an event handler on the object that executes when the event is fired.

## Syntax 1

You can assign JavaScript code to an event attribute in an HTML object.

```html
<!-- Clicking pops up a "Hello World!" dialog box -->
<button onclick="window.alert('Hello World!');">Click Me!</button>
```

## Syntax 2

There's HTML on the page with the object of interest.

```html
<button id="hello-button">Click Me!</button>
```

In a separate script the object is referred to and assigned an event handler.

```javascript
// Clicking the "hello-button" button pops up a "Hello World!" dialog box
var btn = document.getElementById('hello-button');

btn.addEventListener('click', () => {
  window.alert('Hello World!');
});
```
