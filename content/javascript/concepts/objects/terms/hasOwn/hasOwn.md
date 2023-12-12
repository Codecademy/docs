---
Title: '.hasOwn()'
Description: 'Returns true if the specified property is directly owned by the object. If the property is inherited or doesn't exist, the method returns false'
Subjects:
  - 'Web Development'
  - 'Code Foundations'
Tags:
  - 'Objects'
  - 'Methods'
  - 'Values'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

The **`.hasOwn()`** method is used to check if the object has the specified property or not. It returns true if the property exists else false. This method was introduced as a replacement for the `Object.hasOwnProperty()` method. It is different from `in` operator as it does not check for inherited properties.

## Syntax

```pseudo
Object.hasOwn(obj, prop)
```

- `Obj`: The Javascript object instance to test.
- `prop`: It is the property on which the check is to be applied.

## Example

### Direct properties

```js
let details = {
  name: 'Jack',
  course: 'Javascript Foundation',
};

console.log(Object.hasOwn(details, 'name'));
console.log(Object.hasOwn(details, 'course'));
console.log(Object.hasOwn(details, 'phone number'));
```

This above example will return the following output:

```shell
true
true
false
```

### Direct vs Inherited properties

```js
let details = {
  name: 'Jack',
};
name.age = 25;
console.log(Object.hasOwn(details, 'age'));
console.log(Object.hasOwn(details, 'toString'));
```

This above example will return the following output

```shell
true
false
```
