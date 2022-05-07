---
Title: 'Regular Expressions'
Description: 'Regular expressions are language used for pattern-matching text content, and they are implemented in Java through the Pattern and Matcher classes.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Classes'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

[Regular expressions](https://www.codecademy.com/resources/docs/regular-expressions) are language used for pattern-matching text content, and they are implemented in Java through the `Pattern` and `Matcher` classes. The `Pattern` class represents a compiled regular expression, while the `Matcher` class uses a `Pattern` to perform operations on text. Multiple `Matcher` instances can use the same `Pattern` instance.

Details on the syntax of regular expressions can be found in the [general regular expression entry](https://www.codecademy.com/resources/docs/regular-expressions).

## Using the `Pattern` Class

An instance of the `Pattern` class is used to hold a compiled version of a regular expression pattern. The syntax for creating a pattern instance is:

```java
Pattern p = Pattern.compile(pattern, flags)
```

Where `pattern` is a regular expression pattern. And `flags` is an optional int bit mask specifying the flags for the pattern.

The `flags` parameter can include the following:

-  `CASE_INSENSITIVE`: Enables case-insensitive matching
-  `MULTILINE`: Enables multiline mode where `^` and `$` match the start and end of a line rather than start and end of the whole text.
-  `DOTALL`: Allows `.` to match any character, including a line terminator.
-  `UNICODE_CASE`: Allows `CASE_INSENSITIVE` to follow the Unicode standard, rather than restricting to the US-ASCII character set.
-  `CANON_EQ`: Forces matching to take canonical equivalence into account.
-  `UNIX_LINES`: Forces `\n` to be the only line delimiter recognized by `.`,`^` and `$`.
-  `LITERAL`: Forces all metacharacters in the pattern to be interpreted as literal characters instead.
-  `UNICODE_CHARACTER_CLASS`: Enables the Unicode version of character classes.
-  `COMMENTS`: Allows whitespace and comments in pattern.

The `Pattern` class has the following methods:

- `.compile(pattern, flags)` : Static method that returns a `Pattern` instance based on the given `pattern` and optional `flags`.
- `.pattern()` : Returns the string pattern with which the instance was compiled.
- `.flags()` : Returns the flags bit mask with which the instance was compiled.
- `.matcher(input)` : Returns a `Matcher` instance that applies the `Pattern` instance against the supplied `input` text.
- `.matches(pattern,input) : Static method returns a boolean if the given `pattern` matches a string in the supplied `input` text.
- `.split(input,limit) : Returns an array that splits the `input` around the matches found by the compiled pattern, optional int `limit` specifies the maximum number of strings to return in the array.
