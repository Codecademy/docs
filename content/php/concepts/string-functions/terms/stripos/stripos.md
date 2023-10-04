---
Title: 'stripos() Function'
Description: 'Find the position of a substring in a string (case-insensitive).'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'Learn PHP'
  - 'Paths/Computer Science'
---

**`stripos()` Function Overview**

The **`stripos()`** function is a powerful tool for locating the position of a substring within a given string, and it does so in a case-insensitive manner. If the substring is found, it returns the index of the substring's beginning. If not found, it returns nothing.

This function is particularly useful for tasks related to text manipulation and searching within strings. It is also binary-safe, meaning it handles strings with non-ASCII or null bytes correctly.

## Syntax

```php
stripos(given_string, sub_string_to_find, start_search)
