---
Title: '.groupBy()'
Description: 'Used to group objects based on a key extracted from each object using a provided callback function.'
Subjects:
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Objects'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

The **`.groupBy()`** method groups items according to the value returned by a [callback function](https://codecademy.com/ressources/docs/javascript/callbacks). The return value of the `.groupBy()` method is a null-prototype object that doesn't inherit any object methods.

## Syntax

```pseudo
Object.groupBy(items, callfunc);
```

- `items`: It is an array. They will be grouped according to the result of the `callfunc`.
- `callfunc`: It is a callback function. This function returns a string or a symbol.

## Example

In the following example, the code groups users by their subscription year.

```js
const subs = [
    { userName: 'Lisa', yearSub: 2022 },
    { userName: 'Akim', yearSub: 2020 },
    { userName: 'Lola', yearSub: 2020 },
    ];

const subsByYear = Object.groupBy(subs, user => {
    return user.yearSub;
    });
```

The output would be:

```shell
{ 2020: [
{ userName: 'Akim', yearSub: 2020 },
{ userName: 'Lola', yearSub: 2020 },
],
  2022 : [
{ userName: 'Lisa', yearSub: 2022 },
]}
```

## 
