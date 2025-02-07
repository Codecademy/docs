---
Title: 'prompt()'
Description: 'Displays a dialog with an optional message asking users to input some text.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arguments'
  - 'Functions'
  - 'Parameters'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`prompt()`** function is a built-in JavaScript method that displays a modal dialog box prompting the user for input. It is part of the Web API, provided by the browser's `window` object, and pauses script execution until the user responds. The function returns the user's input as a string or `null` if the user cancels the dialog.

## Syntax

The `prompt()` function accepts two parameters and returns a string or null:

```js
prompt(message)
```

or, alternatively

```pseudo
prompt(message, defaultValue)
```

- `message`: A string that will be displayed in the dialog box.
- `defaultValue` (Optional): A default value pre-filled in the input field.

The function returns:
- The user’s input as a string.
- `Null` if the user clicks "Cancel" or closes the dialog.

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
