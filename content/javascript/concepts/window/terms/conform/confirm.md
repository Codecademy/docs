---
Title: 'confirm()'
Description: 'Instructs the browsers window to show a optional message, the user then must confirm or cancel the message'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Parameters'
  - 'Arguments'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

## Syntax

**`confirm(paramMessage)`** The method takes in a message parameter that will be displayed in a pop-up window. The user can select 'cancel' or 'ok' by default, this information sent back to the browser as a boolean statement determines what will happen based on an if statement when used.


## Example 1
The following example uses the `confirm()` function to ask the user if they wish to exit the page.

```js

window.confirm("Do you want to exit?")

```

## Example 2
The following example uses the `confirm()` function to ask the user if they wish to exit the page with an if statement to control how the function performs based on the input.

```js

if (window.confirm("Do you really want to leave?")) {
  window.open("exit.html", "Thanks for Visiting!");
}

```
