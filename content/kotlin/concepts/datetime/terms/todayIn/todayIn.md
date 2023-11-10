---
Title: '.todayIn()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Returns the current date without time-of-day at the given time zone.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Code Foundations'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Methods'
  - 'Date'
  - 'Kotlin'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.todayIn()`** method takes the current instant from the system clock and a given timezone to return a local date without time.

## Syntax

[Text, code, images, parameters, etc. about the syntax]
```
Clock.System.todayIn(timeZone: TimeZone)
```

A local date without time is returned by calling the `.todayIn()` method on `Clock.System` and passing `TimeZone` as an argument for the method.
## Example

[Text, code, images, etc. about example 1]

```
val todaysDate: LocalDate = Clock.System.todayIn(TimeZone.currentSystemDefault())
```

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```