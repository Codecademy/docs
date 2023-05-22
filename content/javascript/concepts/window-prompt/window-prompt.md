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

The **`prompt()`** method is serviced globally by the `window` object provided by the user's browser. It displays a dialog with an optional message asking users to input some text.

## Syntax

`prompt()` expects 1 to 2 parameters. The first one is used to display the title of the dialog. The second is used for an optional default value used in case the user does not input any data, otherwise `prompt()` returns null.

Below shows some examples of how `prompt()` is composed:

```pseudo
prompt()

prompt(message)

prompt(message, defaultValue)
```

## Example

In the following code sample, the browser will automatically stop any running Javascript code until the user clicks on the `OK` button or `cancel` button. If the user clicks on cancel button 'Chihuahuas' will be printed out.

```shell
const dog = prompt('What\'s your favorite dog?', 'Chihuahuas');

console.log(`I really love ${dog}!`);

```
