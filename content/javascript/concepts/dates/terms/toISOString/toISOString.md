---
Title: '.toISOString()'
Description: 'Returns a string representation of a date in an ISO 8601-compliant format.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Date'
  - 'Functions'
  - 'Methods'
  - 'Time'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

The `.toISOString()` method returns a string representation of a date in an [ISO 8601](https://www.iso.org/obp/ui/#iso:std:iso:8601:-1:ed-1:v1:en)-compliant format according to universal time (UTC).

## Syntax

```pseudo
date.toISOString();
```

The string returned from the `.toISOString()` method will always be 24 or 27 characters long such as `YYYY-MM-DDThh:mm:ss.sssZ` or `±YYYYYY-MM-DDThh:mm:ss.sssZ`, respectively.

## Example

In the example below, today's date is declared and stored in a variable. It is then invoked against the `.toISOString()` method:

```js
const today = new Date();

console.log(today.toISOString());
```

The snippet above will output something similar to the following:

```shell
2022-04-22T18:12:21.369Z
```

## Codebyte Example

The following example further demonstrates how the `.toISOString()` method is used:

```codebyte/javascript
const d = new Date("01/01/2010");

console.log(d.toISOString());
```
