---
Title: 'collections.UserString'
Description: 'A custom wrapper for string objects.'
Subjects: 
  - 'Computer Science'
Tags: 
  - 'Strings'
  - 'Data Types'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
---

A **UserString* is a class in the `collections` module. It is a custom wrapper for string objects, behaving like a string but allowing easier subclassing. Unlike directly subclassing [`str`]((https://www.codecademy.com/resources/docs/python/dictionaries)), `UserString` stores its content in the `.data` attribute. The seq parameter passed at initialization can be anything that can be converted into a `str`.

**Note:** A `UserString` is a wrapper class that behaves like a sequence. The actual string is stored in the `.data` attribute.