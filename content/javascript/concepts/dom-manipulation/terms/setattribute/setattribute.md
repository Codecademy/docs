---
Title: 'setAttribute()' 
Description: 'Sets the attribute of a specified element.'
Subjects: 
  - 'Web Development'
  - 'Web Design'
  - 'An nth subject name'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Attributes'
CatalogContent: 
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.setAttribute()`** method of the Element interface sets or updates an attribute on the specified element. If the attribute exists, its value is updated; otherwise, a new attribute is added with the given name and value.

## Syntax

```pseudo
// Sets the alignment of, e.g., a paragraph block to the right
setAttribute(name:"align", value:"right");
```

## Example

This example sets the name of a button to 'helloButton'.

```js
const button = document.querySelector("button");

button.setAttribute("name","helloButton");
```
