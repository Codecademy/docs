---
Title: '<progress>' 
Description: 'Used to display a progress bar.' 
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags: 
  - 'Semantic'
  - 'Tags'
CatalogContent: 
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<progress>`** tag is a semantic HTML element that is used to display a progress bar, a graphic indicator that represents the status of an event or process such as the level in a game, a question in an online exam, or parts of a [form](https://www.codecademy.com/resources/docs/html/forms).

## Syntax

```html
<progress value="number" max="number"> 
  <!-- Percentage of the completed task goes here -->
  </progress>
```

> **Note:** When using the `max` attribute in the `<progress>` element, the value must be greater than `0` and be a valid floating point number (e.g. 5.3). If the value is not specified, the default value is `1`.

## Example 

The code snippet below shows the `<progress>` tag being used to convey the bar only being 90% finished.

```html
<label for="download">Downloading...90%</label>
<progress value="90" max="100">90%</progress>
```

Here's how it looks in a browser:
[Progress Bar](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-progress-bar-example.png)


