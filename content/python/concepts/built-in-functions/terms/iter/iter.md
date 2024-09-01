---
Title: 'iter()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'create an iterator object.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'computer science'
  - 'data science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Iterators'

CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-python-3'
  - 'paths/computer-science'
---

<!-- [A brief definition - make sure first mention of term is in **bold**.] -->
**iter()** function is a built-in function in python that returns an [iterator](https://www.codecademy.com/resources/docs/python/iterators)

## Syntax


```pseudo
iter(object)
iter(object, sentinel)
```
- `object` is the parameter on which the iterator will be run. It must be an iterable collections object if the sentinel parameter is not given (some types that can be used are: list, str, tuple, dict and file objects). These types can also include your own classes given that they have been defined with the **\_\_iter\_\_()** method or the **\_\_getitem\_\_()** method. If the sentinel parameter is given, then it must be a callable object.
- `sentinel` is the parameter that stores the value which represents the end of the sequence 

## Example

[Text, code, images, etc. about example 1]

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
