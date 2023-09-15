---
Title: 'lower()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Returns a copy of the string given as a parameter, with all uppercase characters transformed to lowercase' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Code Foundations'
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Strings'
  - 'Functions'
  - 'Values'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-lua'
  - 'paths/computer-science'
---

**string.lower()** Receives a string and returns a transformed copy with all uppercase letters changed to lowercase, and all other characters unchanged. Uppercase characters are defined by the current locale.

## Syntax

```psuedo
string.lower( s )
```

Where `s` is a string.

Returns a copy of `s` with letters that are uppercase in the current locale converted to lowercase. The string `s` is unmodified.

# Example

```
stringvar = string.lower("HOw Now Brown CoW?")
print(stringvar)
```

```shell
"how now brown cow?"
```

