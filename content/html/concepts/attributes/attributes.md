---
Title: 'Attributes'
Description: 'Attributes can be added to the opening tag of an HTML element to change its default behavior or provide additional data about it.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Attributes'
  - 'Elements'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

HTML **attributes** are data that can be added to the opening tag of an HTML element. These attributes modify the default behavior of the element or provide additional information about it.

Attributes consist of a name and are usually set equal to a value. Values are enclosed in double or single quotation marks.

## Syntax

The syntax for adding attributes to an HTML element is as follows:

```html
<tagname attribute="value"></tagname>
```

> **Note:** Attribute names are not case-sensitive, but it is good practice to write HTML markup in lowercase.

## Examples

### Image Attributes

Using an [`<img>`](https://www.codecademy.com/resources/docs/html/elements/img) element, which is commonly used to display images, reveals several attributes, such as `src`, `width`, and `height`. These attributes exert significant influence over the manner in which the image appears on the web page. The dimensions of the particular element, once specified, enable precise control over the end result.

```html
<img src="source_of_image.png" width="500" height="600" />
```

![GIF showcasing effect of height attribute on an img element](https://raw.githubusercontent.com/Codecademy/docs/main/media/Changing-height-attribute-of-html-element.gif)

### `disabled` Attribute

The `disabled` attribute is applied to form elements like buttons and inputs to make them nonfunctional:

```html
<button disabled>Submit</button>
```

This is the output of the above code snippet:
![Disable attribute on a <button> element](https://raw.githubusercontent.com/Codecademy/docs/main/media/button-disabled-attribute.gif)
