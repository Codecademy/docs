---
Title: '<style>'
Description: 'This element is used to apply a simple style sheet to an HTML document'
Subjects:
 - 'Web Development'
 - 'Web Design'
Tags: 
 - 'Elements'
 - 'Tags'
 - 'Style'
 CatalogContent:
 - 'learn-html'
 - 'paths/front-end-engineer-career-path'
---
The **`<style>`** element applies [CSS](https://www.codecademy.com/resources/docs/css) styles to an HTML document.

## Syntax

```html
<!-- In-document style -->
<style>
  // CSS element goes here
</style>

<!-- Inline style -->
<h1 style="color:yellow;text-align:center">This is a header</h1>
<p style="color:red">This is a paragraph.</p>

<!-- External style sheet -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```
The `<style>` tag is used to define style information (CSS) for a document or an HTML page.

Inside the `<style>` element you specify how HTML elements should render in a browser.

The `<style>` element must be included inside the `<head>` section of the document. In general, it is better to put your styles in external stylesheets and apply them using `<link>` elements.

- `crossorigin` : used to specify how the element handles cross-origin requests
- `href` : 	used to specify the location of the linked document
- `hreflang` : used to specify the language of the text in the linked document
- `media` : used to specify on what device the linked document will be displayed
- `referrerpolicy` : used to specify which referrer to use when fetching the resource
- `rel` : used to specify the relationship between the current document and the linked document
- `sizes` : used to specify the size of the linked resource. Only for rel="icon"
- `title` : used to specify a preferred or an alternate stylesheet
- `type` : used to specify the media type of the linked document

## Example

**Example of style sheet in document**

```html
<html>
<head>
<style>
  h1 {color:green;}
  p {color:yellow;}
</style>
</head>
<body>

<h1>A h1 heading</h1>
<p>A paragraph.</p>

</body>
</html>
```
**Example of inline style**

```html
<h1 style="color:blue;text-align:center">This is a header</h1>
<p style="color:green">This is a paragraph.</p>
```
**Example of external style sheet**
```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

