---
Title: 'Object.getOwnPropertyDescriptor()' 
Description: 'Enables access to full information of a property.' 
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Web Development'
  - 'Computer Science'  
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Objects'
  - 'Methods'  
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`Object.getOwnPropertyDescriptor()`** method is a built-in object that enables access to full information about a property and returns a property descriptor of the given property if it exists on the object, otherwise, it returns `undefined`. It only works on its properties directly defined by the object itself, meaning it does not have access to inherited properties from the object's prototype chain.

## Syntax

Here's the basic syntax of `Object.getOwnPropertyDescriptor()`:
```pseudo
Object.getOwnPropertyDescriptor(obj, prop)
```
- `obj`: The object where to look for the property.
- `prop`: The name or Symbol of the property whose description is to be retrieved.

## Example

The example below shows how `Object.getOwnPropertyDescriptor()` works:

```JavaScript
const person = {
  name: "Jane",
  age: 21
};
const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor)

// Output: { value: 'Jane', writable: true, enumerable: true, configurable: true }
```
> **Note:** Object.getOwnPropertyDescriptor() method only works for an individual property of an object
