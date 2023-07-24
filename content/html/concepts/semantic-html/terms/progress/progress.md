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
  - 'path/front-end--engineer-career-path'
---

The **`<progress>`** tag is a semantic HTML element that is used to a display a progress bar, an indicator that represents the progress a person has made in completing tasks such as a level in a game, question in an online exam, or parts of a [form](https://www.codecademy.com/resources/docs/html/forms).

## Syntax

```html
<progress value="number" max="number"> 
  <!-- Percentage of completed task goes here -->
  </progress>
```

> **Note:** When using the `max` attribute in the `<progress>` element, the value must be greater than `0` and be a valid floating point number(e.g., 5.3). If the value is not specified, the default value is `1`.

## Example 1

The code snippet below shows the `<progress>` tag being used to convey the bar only being 90% finished.

```html
<label for="download">Downloading...90%</label>
<progress value="90" max="100">90%</progress>
```

Here's how it looks in a browser:
[Progress Bar 1](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-progress-bar-example-1.jpg)

## Example 2

The snippet below shows the tag being used to convey a 99% of a MP4 file being uploaded.

```html
<label for="mp4-file">Uploading MP4 file...99% complete:</label>
<progress id="mp4-file" value="99" max="100">99%</progress>
```

Here's how it looks in a browser:
[Progress Bar 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-progress-bar-example-2.jpg)
