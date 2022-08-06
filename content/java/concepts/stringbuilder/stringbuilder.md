---
Title: 'StringBuilder'
Description: 'The StringBuilder class in Java represents a sequence of characters like a String, but unlike a Java String, this sequence is mutable.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Data Types'
  - 'Characters'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`StringBuilder`** class in Java represents a sequence of characters like a [`String`](https://www.codecademy.com/resources/docs/java/strings), but unlike a Java `String`, this sequence is mutable. This provides an alternative to the `String` calss when the it's a requirement to change a character sequence once it is defined.

It is similar to another class, `StringBuffer`, but is faster in most curcumstances. The difference between `StringBuilder` and `StringBuffer` is that `StringBuilder` is not thread-safe. Because `StringBuilder` offers no guarantee of synchronization, it should not be used across multiple [threads](https://www.codecademy.com/resources/docs/java/threading).

## Syntax

```pseudo
StringBuilder s1 = new StringBuilder();

StringBuilder s2 = new StringBuilder(capacity);

StringBuilder s3 = new StringBuilder(str);
```

A `StringBuilder` can be created the following ways:

- Calling the [constructor](https://www.codecademy.com/resources/docs/java/constructors) with no arguments creates a `StringBuilder` with no contents and a capacity of 16 characters.
- Calling the constructor with the int argument `capacity` creates a `StringBuilder` with no contents and a capacity of `capacity` characters.
- Calling the constructor with a `str` argument that is either a `String` or a `CharSequence` creates a `StringBuilder` with contents and capacity equal to the specified `String` or `CharSequence`.


