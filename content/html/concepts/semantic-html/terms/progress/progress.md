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

> **Note:** When using the `max` attribute in the `<progress>` element, the value must be greater than `0` and be a valid floating point number(e.g., 5.3). If the value is not specified, the default value is `1`.

## Syntax

```html
<progress> </progress>
```

## Example 1

The code snippet below shows the `<progress>` tag being used to convey the bar only being 90% finished.

```html
<progress value="90" max ="100"> 90% </progress>
```

## Example 2

The snippet below shows the tag being used to convey a 80% of a PDF file being downloaded.

```html
<label for ="file" > Downloading PDF:</label> 
<progress id="file" value="80" max="100"> 80%</progress>
```
