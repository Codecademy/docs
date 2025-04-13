---
Title: 'Regular Expressions'
Description: 'Regular expressions are a language used for pattern-matching text content, and they are implemented in Java through the Pattern and Matcher classes.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Regular Expressions'
  - 'Strings'
  - 'Classes'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Regular expressions are a language used for pattern-matching text content, and they are implemented in Java through the `Pattern` and `Matcher` classes. The `Pattern` class represents a compiled regular expression, while the `Matcher` class uses a `Pattern` to perform operations on text. Multiple `Matcher` instances can use the same `Pattern` instance. Both classes are part of `java.util.regex`.

Details on the syntax of regular expressions can be found [here](https://www.codecademy.com/resources/docs/general/regular-expressions).

## Using the `Pattern` Class

An instance of the `Pattern` class is used to hold a compiled version of a regular expression pattern. The syntax for creating a pattern instance is:

```pseudo
Pattern p = Pattern.compile(re, flags)
```

Where `re` is a regular expression pattern. And `flags` is an optional int bit mask specifying the flags for the pattern.

The `flags` parameter can include the following:

- `Pattern.CASE_INSENSITIVE`: Enables case-insensitive matching
- `Pattern.MULTILINE`: Enables multiline mode where `^` and `$` match the start and end of a line rather than start and end of the whole text.
- `Pattern.DOTALL`: Allows `.` to match any character, including a line terminator.
- `Pattern.UNICODE_CASE`: Allows `CASE_INSENSITIVE` to follow the Unicode standard, rather than restricting to the US-ASCII character set.
- `Pattern.CANON_EQ`: Forces matching to take canonical equivalence into account.
- `Pattern.UNIX_LINES`: Forces `\n` to be the only line delimiter recognized by `.`,`^` and `$`.
- `Pattern.LITERAL`: Forces all metacharacters in the pattern to be interpreted as literal characters instead.
- `Pattern.UNICODE_CHARACTER_CLASS`: Enables the Unicode version of character classes.
- `Pattern.COMMENTS`: Allows whitespace and comments in pattern.

The `Pattern` class includes the following methods:

- `.compile(pattern, flags)` : Static method that returns a `Pattern` instance based on the given `pattern` and optional `flags`.
- `.pattern()` : Returns the string pattern with which the instance was compiled.
- `.flags()` : Returns the flags bit mask with which the instance was compiled.
- `.matcher(input)` : Returns a `Matcher` instance that applies the `Pattern` instance against the supplied `input` text.
- `.matches(pattern, input)` : Static method returns a boolean if the given `pattern` matches a string in the supplied `input` text.
- `.split(input, limit)` : Returns an array that splits the `input` around the matches found by the compiled pattern, and the optional int `limit` specifies the maximum number of strings to return in the array.

## Using the `Matcher` Class

An instance of the `Matcher` class is used to perform operations against input text using a compiled `Pattern` instance. A `Matcher` instance is created from a `Pattern` instance using the following syntax.

```pseudo
Matcher m = pattern.matcher(input)
```

Where `pattern` is a compiled `Pattern` instance and `input` is the input text to be matched against it. The `Matcher` can be used to search the whole input, or a region of the input, finding each match, sub-matches, and their locations in the `input` text.

The `Matcher` class includes the following methods:

- `.end(group)` : Returns the offset after the last character matched. If optional `int` `group` included, returns the index of the match made by the given subgroup during the last match operation. (Subgroups defined by enclosing parentheses `(...)`)
- `.find(start)` : Attempts to find the next match in the input. If optional `int` `start` included, resets the `Matcher` instance and finds the next match after the specified index in the input.
- `.group(group)` : Returns the section of input last matched in the input. If optional `int` `group` specified, find the numbered subgroup matched in the input. (Subgroups defined by enclosing parentheses `(...)`)
- `.hitEnd()` : Returns true if the last match hit the end of input.
- `.lookingAt()` : Attempts to find a match beginning at start of region. True if one found.
- `.matches()` : Attempts to find a match in the entire region. True if found.
- `.pattern()` : Returns the `Pattern` instance used by this `Matcher` instance.
- `.region(start, end)` : Sets the region of input used by this `Matcher` instance.
- `.regionEnd()` : Returns the end of region for this `Matcher` instance.
- `.regionStart()` : Returns the start of region for this `Matcher` instance.
- `.replaceAll(replacement)` : Replaces all incidences of matches with the given `replacement` string. Returns modified string.
- `.replaceFirst(replacement)` : Replaces first match in the input with the given `replacement` string. Returns modified string.
- `.reset(input)` : Resets this `Matcher` instance. If optional `input` specified, resets with new `input` text.
- `.start(group)` : Returns the offset of the first character matched. If optional `int` `group` included, returns the index of the match made by the given subgroup during the last match operation. (Subgroups defined by enclosing parentheses `(...)`)
- `.usePattern(pattern)` : Sets `Matcher` instance to use new `Pattern` instance `pattern`.

## Example

The following example finds all the words that start with "s" and have an "e" as the second or third character.

```java
import java.util.regex.*;

public class Example {
    public static void main(String args[]) {
      Pattern p = Pattern.compile("s.?e[a-z]+");
      Matcher m = p.matcher("Susie sells sea shells by the sea shore.");
      boolean matchFound = m.find();
      while ( matchFound ) {
          System.out.println(m.group());
          matchFound = m.find();
      }
    }
}
```

This produces the following output:

```shell
sells
sea
shells
sea
```
