---
Title: '.toUTCString()'
Description: 'Get a date object as a string, according to UTC.'
Subjects: 
  - 'Web Development'
  - 'Computer Science'
Tags: 
  - 'Date'
  - 'Methods'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-Git-&-GitHub'
  - 'paths/back-end-engineer-career-path'
---

The **toUTCString()** method is used to convert a given date object’s content into a string according to the universal time zone UTC. 

## Syntax

```js
myDate.toUTCString();
```

## Example

Get the Date object as a string, according to UTC:

```js
const date = new Date('1 Aug 2023 08:54:00');

const utcDateString = date.toUTCString();

console.log(utcDateString);
// Output: Tue, 01 Aug 2023 07:54:00 GMT
```

## Codebyte Example

The following is runnable and demonstrates the use of the `toUTCString()` method.

```codebyte/javascript
const date = new Date('1 Aug 2023 08:54:00');
const utcDateString = date.toUTCString();

console.log(utcDateString);
```
