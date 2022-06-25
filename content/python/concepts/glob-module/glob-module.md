---
Title: 'Glob Module'
Description: 'The glob module locates any and all pathnames matching a specific pattern, per Unix shell rules.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Libraries'
  - 'Modules'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`glob` module** locates any and all pathnames matching a specific pattern, per [Unix shell rules](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html#tag_18_13). The process of pattern matching is similar to [regular expressions](https://www.codecademy.com/resources/docs/python/regex). However, this module only uses two special characters:

- The asterisk `*` for matching zero or more characters.
- The question mark `?` for matching a single character.

In order to find a literal match of a special character, it must be wrapped in square brackets (e.g. `'[*]'`).
