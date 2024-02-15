---
Title: '.getUTCMilliseconds()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Returns the milliseconds for a passed date according to universal time.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Web Development'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Date'
  - 'Methods'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.getUTCMilliseconds()`** method returns the milliseconds for the provided `Date` object, according to universal time (not be be confused with the [`.getMilliseconds()`](https://www.codecademy.com/resources/docs/javascript/dates/getMilliseconds) method).

## Syntax

```pseudo
myDate.getUTCMilliseconds()
```

The `.getUTCMilliseconds()` method will return an integer between 0 and 999, which represents the milliseconds for the given date, `myDate`, according to universal time.

The method will return `NaN` if the [date](https://www.codecademy.com/resources/docs/javascript/dates) is invalid.

## Example

In the given example, `.getUTCMilliseconds()` is applied to the constant `selectedDate` and logged to the console.

```js
const selectedDate = new Date('2020-08-09T01:32:28.412+01:00');
console.log(selectedDate.getUTCMilliseconds());
```

The code will result in the following output:

```shell
  412
```
