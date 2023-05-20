---
Title: 'prompt()'
Description: 'Displays a dialog with an optional message asking users to input some text'
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

**`prompt()`** is a method serviced globally by the window object provided by the user's browser.

## Syntax

**`prompt()`** expects 1 to 2 parameters, the first one display the title of the dialog, and the second is used for default value that can also be optional and it is used in case that the user does not input any data, otherwise would be null.

The provided sample code contains some examples of how `setTimeout()` is composed:

```pseudo
prompt()

prompt(message)

prompt(message, defaultValue)
```

## Example

```shell
const dog = prompt('What\'s your favorite dog?', 'Chihuahuas');

// The browser will automatically stop any running Javascript code until the user clicks on the `OK` button or `cancel` button.

console.log(`I really love ${dog}!`);

// If the user clicks on cancel button 'Chihuahuas' will be printed out.
```
