---
Title: 'confirm()'
Description: 'Instructs the browser window to show a optional message, the user then must confirm or cancel the message'
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

The **`confirm()`** method takes in a message parameter that will be displayed in a pop-up window at the current location. The user can select 'cancel' or 'ok' by default, this information is sent back to the browser as a [boolean statement](https://www.codecademy.com/resources/docs/general/data-types/boolean) which determines what will happen based on the [if statement](https://www.codecademy.com/resources/docs/javascript/conditionals) when used.

## Syntax

The confirm() method has one optional parameter which takes in a [string](https://www.codecademy.com/resources/docs/general/data-types/string) to display a message.

```pseudo
window.confirm(message);
```

## Example 1

The following example uses the `confirm()` function to ask the user if they wish to exit the page.

```js
window.confirm('Do you want to exit?');
```

## Example 2

The following example uses the `confirm()` function to ask the user if they wish to exit the page. It uses an `if` statement to control how the function performs based on the input. The passed in "exit.html" will redirect the user to that page if that is the desired outcome.

```js
if (window.confirm('Do you really want to leave?')) {
  window.open('exit.html', 'Thanks for Visiting!');
}
```
