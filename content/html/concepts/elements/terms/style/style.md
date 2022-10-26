---
Title: '<style>'
Description: 'Applies CSS styles to an HTML document.'
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
<head>
  <style>
    /* CSS rules go here */
  </style>
</head>
```
The `<style>` element must be included inside the `<head>` section of the document. All CSS styles follow the same [anatomy](https://www.codecademy.com/resources/docs/css/anatomy) for rulesets and declarations like external stylesheets.

The following attributes are available to the `<style>` element:

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

