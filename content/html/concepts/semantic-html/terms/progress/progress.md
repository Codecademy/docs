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

The code snippet below shows the `<progress>` tag is being used to convey an MP4 file being uploaded.

```html
<form action="/upload" method="POST">
  <label for="mp4-file">Upload MP4 file:</label>
  <input type="file" id="mp4-file" name="mp4-file" />
  <br />
  <label for="mp4-progress">Upload progress:</label>
  <progress id="mp4-progress" value="50" max="100">50%</progress>
  <br />
  <input type="submit" value="Upload" />
</form>
```

Here's how it looks in a browser:

[Progress Bar](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-progress-bar-example.png)

> **Note:** The example above demonstrates the basic implementation of the syntax for the `<progress>` tag. A true implementation would require additional scaffolding (such as JavaScript) in order to update the graphic dynamically.
