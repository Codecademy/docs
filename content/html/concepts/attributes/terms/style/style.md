---
Title: 'Style'
Description: 'The style attribute specifies how a page will be rendered in a web browser.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Style' 
  - 'Attributes'
  - 'Elements'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `style` attribute specifies how an element will be rendered in a web browser, e.g. the color or the size of a font in a paragraph.

When we use the `style` attribute inline, it overrides any styles set globally. 

**Note:** We can also specify the style of our elements through an external CSS style sheet or embedded in the `<head>` element using the `<style>` tag.

## Syntax

```pseudo
<element_tag style="property1:value;property2:value;"></element_tag>
```
The `style` attribute supports all HTML tags and can take many properties, e.g. you can use the `style` attribute in the `<p>`, the `<h1>` or the `<hr>`.

## Example

In the example below, the `<p>` (paragraph) element is given a `style` attribute to specify its color, the text alignment and the font size:

```html
<p style="color:green;font-size:12px;text-align:center;">
  Here's some text that is being styled using the style attribute.
</p>
```