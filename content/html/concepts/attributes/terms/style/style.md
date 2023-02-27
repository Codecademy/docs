---
Title: 'style'
Description: 'Specifies how an element will be rendered in a web browser.'
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

The **`style`** attribute specifies how an element will render in a web browser, e.g., the color or size of a font in a paragraph.

When the `style` attribute is used inline, it overrides any styles set globally.

> **Note:** The styling of a page or elements on the page can also be embedded in the `<head>` element using the [`<style>`](https://www.codecademy.com/resources/docs/html/elements/style) tag. However, most developers refrain from using the inline `style` attribute and set the style of the elements through an external [CSS](https://www.codecademy.com/resources/docs/css) style sheet. This helps to keep the code clean and is more easily maintained.

## Syntax

```pseudo
<element_tag style="property1:value; property2:value;"></element_tag>
```

Like all global attributes, the `style` attribute supports all HTML tags and can take many properties, e.g., the `style` attribute can be used in the [`<p>`](https://www.codecademy.com/resources/docs/html/elements/p), [`<h1>`](https://www.codecademy.com/resources/docs/html/elements/h1-h6), or [`<hr>`](https://www.codecademy.com/resources/docs/html/elements/hr) tags.

## Example

In the example below, the [`<p>`](https://www.codecademy.com/resources/docs/html/elements/p) element is given a `style` attribute to specify its color, text alignment, and font size:

```html
<p style="color:green; font-size:12px; text-align:center;">
  Here's some text that is being styled using the style attribute.
</p>
```
