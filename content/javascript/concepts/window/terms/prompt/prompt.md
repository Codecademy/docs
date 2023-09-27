---
Title: 'prompt()'
Description: 'Displays a dialog with an optional message asking users to input some text.'
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

The **`prompt()`** function is serviced globally by the `window` object provided by the user's browser. It displays a dialog with an optional message asking users to input some text.

## Syntax

`prompt()` expects up to two parameters.

Below are examples of how `prompt()` can be composed:

```pseudo
prompt()

prompt(message)

prompt(message, defaultValue)
```

- `message` is used to display the title of the dialog.
- `defaultValue` is used for an optional default value used in case the user does not input any data, otherwise `prompt()` returns null.

## Example

In the following code sample, the browser will automatically stop any running JavaScript code until the user clicks on the `OK` or `cancel` button. If the user clicks on the cancel button, `'Chihuahuas'` will be printed out:

```js
const dog = prompt("What's your favorite dog?", 'Chihuahuas');

console.log(`I really love ${dog}!`);
```
