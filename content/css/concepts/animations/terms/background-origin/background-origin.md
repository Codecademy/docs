---
Title: 'background-origin'
Description: 'Define where the background image or background color of an element should originate within the padding box of that element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Background'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Define where the background image or background color of an element should originate within the padding box of that element.

## Syntax

```css
background-origin: <value>;
```

where `<value>` can be one of the following keywords:

-`content-box`: This is the default value. It means that the background originates from the top-left corner of the element's content box. In this case, the background will be positioned relative to the content of the element, ignoring any padding.

-`padding-box`: The background originates from the top-left corner of the element's padding box. This means that the background will start from the edge of the element's padding and extend to cover both the content and the padding areas.

-`border-box`: The background originates from the top-left corner of the element's border box. In this case, the background covers the entire element, including both the content and the padding areas, and extends to the edge of the border.

## Example 1

```css
div {
  width: 200px;
  height: 100px;
  padding: 20px;
  background-image: url('example.jpg');
  background-repeat: no-repeat;
}

.content-box {
  background-origin: content-box;
}

.padding-box {
  background-origin: padding-box;
}

.border-box {
  background-origin: border-box;
}
```
