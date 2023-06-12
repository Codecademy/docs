---
Title: '.getUTCDay()'
Description: 'Returns the day of the week in the specified date according to universal time.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-developer-career-path'
---

The **`.getUTCDay()`** method returns the day of the week in the specified date according to universal time, as an integer value from 0 - 6 where 0 represents Sunday, 1 for Monday and so on.

## Syntax

```pseudo
date_obj.getUTCDay();
```

The return value will give return an integer between 0 and 6:

- 0 = Sunday
- 1 = Monday
- 2 = Tuesday
- 3 = Wednesday
- 4 = Thursday
- 5 = Friday
- 6 = Saturday

## Example

The following example shows the method in use.

```js
const date = new Date('10 June 2023 14:15:30');
console.log(date.getUTCDay());
```

This will result in the following output:

```shell
6
```
