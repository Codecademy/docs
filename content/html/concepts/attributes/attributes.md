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

HTML **attributes** are instructions that are placed inside the opening tag of an HTML element. These attributes modify the default setting of an element by adding additional features to it.

Attributes consist of a name and a value. The name describes the type of attribute, while the value, which can be enclosed in double or single quotation marks, determines the rate of changes that can be applied to the element.

## Syntax

The syntax for adding attributes to an HTML element is as follows:

```html
<tagname attribute="value"></tagname>
```

> **Note:** Attribute names are not case-sensitive, but it is good practice to write HTML markup in lowercase.

## Examples

### Image Attributes

Using an [`<img>`](https://www.codecademy.com/resources/docs/html/elements/img) tag, which is commonly used to display images, reveals several attributes, such as 'src`,`width`, and`height`. These attributes exert significant influence over the manner in which the image appears on the web page. For example, when the dimensions of an element are specified, its size will be maintained when rendered by a browser.

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
