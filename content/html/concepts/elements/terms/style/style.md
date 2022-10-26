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

The **`<style>`** element allows developer to add [CSS](https://www.codecademy.com/resources/docs/css) to an HTML document.

## Syntax

```pseudo
<!-- In-document style -->
<head>
  <style>
    /* CSS rules go here */
  </style>
</head>
```
The `<style>` element must be included inside the `<head>` section of the document. All CSS styles follow the same [anatomy](https://www.codecademy.com/resources/docs/css/anatomy) for rulesets and declarations like external stylesheets.

The following attributes are available to the `<style>` element:

- `media` : Specifies on what device the linked document will be displayed.
- `title` : Specifies a preferred or alternative stylesheet.

## Example

The following example showcases the `<style>` element applying CSS rules to elements in the document:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 {
        color:green;
      }
      
      p {
        color:yellow;
      }
    </style>
  </head>
  <body>
    <h1>A header</h1>
    <p>A paragraph.</p>
  </body>
</html>
```

