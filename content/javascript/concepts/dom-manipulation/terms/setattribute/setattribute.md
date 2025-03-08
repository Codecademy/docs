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

The **`.setAttribute()`** method of the Element interface sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

## Syntax

```pseudo
setAttribute(name, value);
```

## Example

This example sets the name of a button to 'helloButton'.

```js
const button = document.querySelector("button");

button.setAttribute("name","helloButton");
```