---
Title: '.setAttribute()' 
Description: 'Sets the attribute of a specified element.'
Subjects: 
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Attributes'
  - 'DOM'
CatalogContent: 
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.setAttribute()`** method of the Element interface sets or updates an attribute on the specified element. If the attribute already exists, its value is updated; otherwise, a new attribute is created with the given name and value.

## Syntax

```pseudo
setAttribute(name, value);
```

- `name` (string): The name of the attribute to set (e.g., `"class"`, `"id"`, `"href"`).
- `value` (string): The value to assign to the specified attribute.

## Example

This example sets the `name` attribute of a button element to `"helloButton"`:

```js
const button = document.querySelector("button");

button.setAttribute("name","helloButton");
```
