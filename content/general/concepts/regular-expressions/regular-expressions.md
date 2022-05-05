---
Title: 'Regular Expressions'
Description: ''
Subjects:
  - 'Code Foundations'
  - 'Computer Science'  
Tags:
  - 'Strings'
  - 'Data Types'
  - 'Characters'
CatalogContent:
  - 'learn-python-3'
  - 'learn-java'
---

Regular expressions, often shortened to regex or regexp, is a language used for pattern-matching text content. It is implemented in several different programming languages, either directly or through libraries. Languages that implement regular expressions include [Python](https://www.codecademy.com/resources/docs/python), [Java](https://www.codecademy.com/resources/docs/java), [JavaScript](https://www.codecademy.com/resources/docs/javascript), [C](https://www.codecademy.com/resources/docs/c) and [C++](https://www.codecademy.com/resources/docs/cpp). Regular expressions are generally standardized, though some implementations may provide some additions and variations to the basic syntax.

Implementation in each programming language is generally through functions and methods that accept some text and a regular expression pattern, and return a result based on what the regular expression pattern matched in the text.

## Regular Expression Patterns

A regular expression pattern is a string made up of normal characters mixed with metacharacters that have special meanings defining how characters should be matched. For instance, the pattern "h" by itself would match the single letter "h", where if we add the metacharacter ".", which matches any one character, then "h." would match sequences such as "ha","ho","h5" and "h!". 

Regular expressions use the following metacharacters and sequences for pattern matching:

Metacharacter|Description|Example
:-----------:|-----------|-------
`^` | Matches the start of text, or the start of a line, depending on the settings of the regex engine.| `^a` only matches the first "a" in "a match is made"
`$` | Matches the end of text, or the end of a line, depending on the settings of the regex engine.| `!$` only matches the second "!" in "Hello! World!"
`.` | Matches any one character.| `.` matches "c","a" and "t" in "cat"
`*` | Matches the preceeding element zero or more times.| `co*t` matches "ct", "cot" and "coot"
`+` | Matches the preceeding element one or more times.| `co+t` matches "cot","coot" but not "ct"
`?` | Matches the preceeding element zero or one time.| `co?t` matches "ct","cot" but not "coot"
`{n}` | Matches the preceeding element exactly n times | `co{2}t` matches "coot" but not "cot" or "cooot"
`{m,n}` | Matches the preceeding element at least `m` and not more than `n` times.| `co{2,3}t` matches "coot" and "cooot" but not "cot"
`[ ]` | Matches the characters inside the brackets. Can also specify ranges of characters such as `[a-z]`.| `[bcm]at` matches "cat","bat" and "mat"
`[^ ]` | Matches characters not inside the brackets. Can also specify ranges of characters such as `[^a-z]`.| `b[^a]t` matches "bit","bot", and "but" but not "bat"
`\|` | Matches the pattern on the right of the `\|` or the pattern on the left. | `yes\|no` matches both "yes" and "no"
`( )` | Groups a pattern together and marks it for future refrence | `(ca\|bi)t` matches "cat" and "bit"






