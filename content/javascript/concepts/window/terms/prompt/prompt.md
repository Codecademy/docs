---
Title: 'prompt()'
Description: 'Displays a dialog box to accept user input.'
Subjects:
  - 'Web Development'
  - 'JavaScript'
Tags:
  - 'Browser'
  - 'User Input'
  - 'Dialog Box'
CatalogContent:
  - 'learn-javascript'
  - 'paths/full-stack-engineer-career-path'
---

The **`prompt()`** function is a built-in method in JavaScript that displays a dialog box to accept user input. It is part of the Web API provided by the browser's Window object and pauses JavaScript execution until the user responds.

## Syntax

The `prompt()` function accepts two parameters and returns a string or null:

```js
prompt(message)
prompt(message, defaultValue)
```

- `message`: A string that will be displayed in the dialog box.
- `defaultValue`: (Optional) A string to pre-populate the input field.

The function returns:
- A string containing the text entered by the user if OK is clicked
- `null` if Cancel is clicked or the dialog is dismissed

## Example

This example demonstrates how to use the `prompt()` function to get user input:

```js
let name = prompt("Please enter your name:");

if (name !== null) {
  console.log("Hello, " + name + "!");
} else {
  console.log("You didn't enter a name.");
}
```

In this example, if the user enters their name and clicks OK, a greeting with their name will be displayed. If they click Cancel, a message indicating no name was entered will be shown.
