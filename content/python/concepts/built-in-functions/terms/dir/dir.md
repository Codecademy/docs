---
Title: '.dir()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Returns all properties and methods of the specified object, without the values' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'A second subject name'
  - 'An nth subject name'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Functions'
  - 'Methods'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-python'
  - 'paths/computer-science'
---

Returns all properties and methods of the specified object, without values.

## Syntax

```py
dir(object)
```

## Example

The example below uses `dir()` to return all of the properties and methods of the `Atomo` object, without values.

```py
class Atomo:
  name = "vasilis"
  age = 36
  country = "Esthonia"
  telephone = "1234567891"
  ```

```py
print(dir(Atomo))
```
