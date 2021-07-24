---
Title: "RegExp in JavaScript" 
Subjects: 
  - "Web Development"
  - "Computer Science"
Tags:
  - "Regular Expressions" 
  - "Strings"
Catalog Content: 
  - "https://www.codecademy.com/learn/introduction-to-javascript"
  - "https://www.codecademy.com/learn/paths/create-a-back-end-app-with-javascript"
---
The `RegExp` object is used for matching strings with a Regular Expressions. A Regular Expression is a special string, called a pattern, that uses various character sequences to define the characteristics to match a character sequence within another string. 

A `RegExp` object can also take modifiers along with a pattern string to change how matches are performed.

## Syntax

There are two methods of creating a `RegExp` object. The first method is literal notation using slashes to delimit the pattern, followed by any modifiers. The second method uses the `RegExp` constructor which takes the pattern as the first argument and any modifiers as the second.

```javascript
let re1 = /foo?/i; // literal notation
let re2 = new RegExp("foo?","i") // RegExp constructor

// both create a RegExp object with a pattern = "foo?" and a modifier = "i"
```

There is a difference between the methods. Literal notation compiles when the expression is evaluated. It should be used when the pattern will remain constant, so it won't be recompiled unnecessarily, such as in a loop.

Using the object constructor means the expression will be compiled at runtime. It should be used when the pattern of the `RegExp` object would be subject to change, or the pattern is obtained during runtime, such as from user input.

### `RegExp` Properties

- `flags`: Returns a string containing the flags of the `RegExp` object.
- `dotAll`: Does `.` match newlines or not?
- `global`: Does the `RegExp` object test against all matches in a string, or only the first?
- `hasIndices`: Does the Regular Expression result expose the start and end indices of captured substrings?
- `ignoreCase`: Does the `RegExp` object ignore case when performing a match?
- `multiline`: Does the `RegExp` object perform matches across multiple lines?
- `source`: The text of the pattern used by the `RegExp` object.
- `sticky`: Is the search sticky? (Does the next match have to occur at `lastIndex`, or can we match the next occurance after `lastIndex`?)
- `unicode`: are unicode features enabled?
- `lastIndex`: The index at which to start the next match.

### `RegExp` Methods

- `exec()`: Execute a search on its string parameter.
- `test()`: Tests for a match in its string parameter.

### `String` Methods That Use `RegExp` Objects

- `match()`: Returns the result of a match against the string.
- `matchAll()`: Returns all the matches found within the string.
- `replace()`: Replaces matches in the string with a given substring.
- `search()`: Returns the index where a match was found in the string.
- `split()`: Splits string into an array using matches as a delimiter.

