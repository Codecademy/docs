---
Title: '.todayIn()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Passing a specific time zone as an argument and calling this method on an instant value of Clock will return the current date without time.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
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

The **`.todayIn()`** method takes a `TimeZone` argument, and when called on an instant value of `Clock`, it returns a local date without time.

## Syntax


```
Clock.todayIn(timeZone: TimeZone)
```

The `.todayIn()` method will use an instant value from `Clock` and a time `TimeZone` argument to return a date in a YYYY-MM-DD format.
## Example


```
fun main() {
  val todaysDate: LocalDate = Clock.System.todayIn(TimeZone.currentSystemDefault())

  print(todaysDate)
  // Output: YYYY-MM-DD (local time)

}
```
<!-- 
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
-->
