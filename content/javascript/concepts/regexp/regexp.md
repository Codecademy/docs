---
Title: 'RegExp'
Description: 'The RegExp object is used for matching strings with Regular Expressions, which is a special string pattern that uses various character sequences to match a character sequence or pattern in other strings.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Regular Expressions'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

The `RegExp` object is used for matching strings with Regular Expressions. A Regular Expression is a special string, called a pattern, that uses various character sequences to define the characteristics to match a character sequence within another string.

A `RegExp` object can also have flags set along with a pattern to change how matches are performed.

## Syntax

There are two methods of creating a `RegExp` object. The first method is literal notation using slashes to delimit the pattern, followed by any flags. The second method uses the `RegExp` constructor which takes the pattern as the first argument and any flags as the second.

```pseudo
// Using literal notation
let re1 = /foo?/i;

// Using RegExp constructor
let re2 = new RegExp('foo?', 'i');

// Both create a RegExp object with a pattern = "foo?" and a flag = "i"
```

There is a difference between the methods. Literal notation compiles when the expression is evaluated. It should be used when the pattern will remain constant, so it won't be recompiled unnecessarily, such as in a loop.

Using the object constructor means the expression will be compiled at runtime. It should be used when the pattern of the `RegExp` object would be subject to change, or the pattern is obtained during runtime, such as from user input.

### RegExp Properties

| Property      | Description                                                                                                                      |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `.flags`      | Returns a string containing the flags of the `RegExp` object.                                                                    |
| `.dotAll`     | Does `.` match newlines or not?                                                                                                  |
| `.global`     | Does the `RegExp` object test against all matches in a string, or only the first?                                                |
| `.hasIndices` | Does the Regular Expression result expose the start and end indices of captured substrings?                                      |
| `.ignoreCase` | Does the `RegExp` object ignore case when performing a match?                                                                    |
| `.multiline`  | Does the `RegExp` object perform matches across multiple lines?                                                                  |
| `.source`     | The text of the pattern used by the `RegExp` object.                                                                             |
| `.sticky`     | Is the search sticky? (Does the next match have to occur at `lastIndex`, or can we match the next occurrence after `lastIndex`?) |
| `.unicode`    | Are Unicode features enabled?                                                                                                    |
| `.lastIndex`  | The index at which to start the next match.                                                                                      |

### RegExp Methods

| Method       | Description                                      |
| ------------ | ------------------------------------------------ |
| `.exec(str)` | Execute a search on its `str` string parameter.  |
| `.test(str)` | Tests for a match in its `str` string parameter. |

### String Methods that Can Use RegExp Objects

In the following `re` is a `RegExp` object.

| Method                 | Description                                                        |
| ---------------------- | ------------------------------------------------------------------ |
| `.match(re)`           | Returns the array result of match(es) against the string.          |
| `.matchAll(re)`        | Returns an iterator of all the matches found within the string.\*  |
| `.replace(re, substr)` | Replaces match(es) in the string with a given substring, `substr`. |
| `.search(re)`          | Returns the index of the first match in the string.                |
| `.split(re)`           | Splits string into an array using the match(es) as a delimiter.    |

\* The RegExp object must have the `g` flag set or an exception is thrown.

### `RegExp` Flags

When specified, these flags change the default match behavior of the `RegExp` object.

| Flag | Description                                                              |
| ---- | ------------------------------------------------------------------------ |
| `g`  | Performs a global match, finding all matches rather than just the first. |
| `i`  | Makes matches case-insensitive. Matches both uppercase and lowercase.    |
| `m`  | Performs multiline matches. (Changes behavior of `^`,`$`)                |
| `s`  | Allows `.` to match newline characters.                                  |
| `u`  | Enables Unicode support.                                                 |
| `y`  | Matches are sticky, looking only at exact position in the text.          |

Usage:

```js
let re1 = /foo?/gim;
let re2 = new RegExp('foo?', 'gim');

// Create a RegExp object that performs a global, case-insensitive, multiline search
```

## Regular Expressions

The following characters are used to define a Regular Expression string.

### Assertions

The following match the boundaries between characters, not the characters themselves.

| Characters | Meaning                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `^`        | Matches the beginning of input. In multiline search, matches immediately after a line break character.                                                                   |
| `$`        | Matches the end of input. In multiline search matches immediately before a line break character.                                                                         |
| `\b`       | Matches a word boundary. Point where a word character is not followed by a word character, or the point where a word character is not preceded by another word character |
| `\B`       | Matches a non-word boundary. Point where preceding and following character are of the same type.                                                                         |

The following match a character or expression based on what follows or precedes it.

| Characters | Meaning                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------- |
| `x(?=y)`   | Match `x` only if `x` is immediately followed by `y`. `y` is not part of the match results.     |
| `x(?!y)`   | Match `x` only if `x` is not immediately followed by `y`. `y` is not part of the match results. |
| `(?<=y)x`  | Match `x` only if `x` is immediately preceded by `y`. `y` is not part of the match results.     |
| `(?<!y)x`  | Match `x` only if `x` is not immediately preceded by `y`. `y` is not part of the match results. |

#### Examples

```js
let str = 'Sally sells seashells by the seashore';

let re = /s(?=e)/gi;
console.log(str.replace(re, 'x'));
// Output: Sally xells xeashells by the xeashore

re = /s(?!e)/gi;
console.log(str.replace(re, 'x'));
// Output: xally sellx seaxhellx by the seaxhore

re = /^s/gi;
console.log(str.replace(re, 'x'));
// Output: xally sells seashells by the seashore

re = /\Bs/gi;
console.log(str.replace(re, 'x'));
// Output: Sally sellx seaxhellx by the seaxhore
```

### Character Classes

Character classes specify a given type of character to match.

| Characters                  | Meaning                                                                                             |
| --------------------------- | --------------------------------------------------------------------------------------------------- |
| `.`                         | Matches any character except line terminators. When `s` flag set, it also matches line terminators. |
| `\d`                        | Matches any digit (Arabic numeral).                                                                 |
| `\D`                        | Matches any character that is not a digit (Arabic numeral).                                         |
| `\w`                        | Matches any alphanumeric character from Latin alphabet, including underscore.                       |
| `\W`                        | Matches any character that is not an alphanumeric character from Latin alphabet or underscore.      |
| `\s`                        | Matches any whitespace character (space, tab, newline, non-breaking space, and similar).            |
| `\S`                        | Matches any character that isn't a whitespace character.                                            |
| `\t`                        | Matches a horizontal tab.                                                                           |
| `\r`                        | Matches a carriage return.                                                                          |
| `\n`                        | Matches a linefeed.                                                                                 |
| `\v`                        | Matches a vertical tab.                                                                             |
| `\f`                        | Matches a form-feed.                                                                                |
| `[\b]`                      | Matches a backspace.                                                                                |
| `\0`                        | Matches a NUL character (when not followed by another digit).                                       |
| <code>\\x<i>nn</i></code>   | Matches the character code <code><i>nn</i></code> (two hexadecimal digits).                         |
| <code>\\u<i>nnnn</i></code> | Matches a UTF-16 code unit with the value <code><i>nnnn</i></code> (four hexadecimal digits).       |
| `\`                         | Followed by a special character, means that the character should be matched literally.              |

#### Examples

```js
let str = '2001: A Space Odyssey';

let re = /\W/gi;
console.log(str.replace(re, 'x'));
// Output: 2001xxAxSpacexOdyssey

re = /\d/gi;
console.log(str.replace(re, 'x'));
// Output: xxxx: A Space Odyssey

re = /\d\D/gi;
console.log(str.replace(re, 'x'));
// Output: 200x A Space Odyssey
```

### Groups and Ranges

Indicate groups and ranges of characters to match.

| Characters                           | Meaning                                                                                                                                            |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `x                                   | y`                                                                                                                                                 | Matches either `x` or `y`. |
| `[xyz]`                              | Matches the character `x`, `y` or `z`.                                                                                                             |
| `[a-c]`                              | Matches the character that falls between `a` and `c` inclusive (`a`, `b` and `c`).\*                                                               |
| `[^xyz]`                             | Matches the character that is not `x`, `y` or `z`.                                                                                                 |
| `[^a-c]`                             | Matches the character that does not fall between `a` and `c` inclusive (not `a`, `b` or `c`).\*                                                    |
| `(x)`                                | Matches `x` and remembers the match, capturing the group.                                                                                          |
| <code>\\<i>n</i></code>              | Where <code><i>n</i></code> is a positive integer, represents a back reference to the last substring matching the _n<sup>th</sup>_ captured group. |
| <code>(?&lt;<i>Name</i>&gt;x)</code> | Matches `x` and stores it in the groups property of the returned matches under the name <code><i>Name</i></code>.                                  |
| <code>\\k&lt;<i>Name</i>&gt;</code>  | Represents a back reference to the last substring matched in the named capturing group specified by <code><i>Name</i></code>.                      |
| `(?:x)`                              | Represents a non-capturing group. Matches `x` but does not remember the match.                                                                     |

\* If the hyphen falls at the start or end of the sequence in brackets, it is treated as a literal hyphen.

#### Examples

```js
let str = 'Peter Piper picked a peck of pickled peppers.';

let re = /[aeiou]/gi;
console.log(str.replace(re, 'x'));
// Output: Pxtxr Pxpxr pxckxd x pxck xf pxcklxd pxppxrs.

re = /[^p]/gi;
console.log(str.replace(re, 'x'));
// Output: PxxxxxPxpxxxpxxxxxxxxpxxxxxxxpxxxxxxxpxppxxxx

re = /pi(ck|pe)/gi;
console.log(str.replace(re, 'x'));
// Output: Peter xr xed a peck of xled peppers.
```

### Quantifiers

Quantifiers specify the number of characters or expressions to match.

| Characters                        | Meaning                                                                                                                                                                                                                                               |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `x*`                              | Matches the preceding item `x` zero or more times.                                                                                                                                                                                                    |
| `x+`                              | Matches the preceding item `x` one or more times.                                                                                                                                                                                                     |
| `x?`                              | Matches the preceding item `x` zero or one times.                                                                                                                                                                                                     |
| <code>x{<i>n</i>}</code>          | Matches the preceding item `x` <code><i>n</i></code> times, where <code><i>n</i></code> is a positive integer.                                                                                                                                        |
| <code>x{<i>n</i>,}</code>         | Matches the preceding item `x` <code><i>n</i></code> or more times, where <code><i>n</i></code> is a positive integer.                                                                                                                                |
| <code>x{<i>n</i>,<i>m</i>}</code> | Matches the preceding item `x` at least <code><i>n</i></code> times and at most <code><i>m</i></code> times where <code><i>n</i></code> and <code><i>m</i></code> are positive integers and <code><i>n</i></code> is less than <code><i>m</i></code>. |

By default, these quantifiers are greedy, matching as much of the string as possible. By following the quantifier with `?` (`x*?`) the match will stop at its first occurrence.

#### Examples

```js
let str = 'Billy bought a bushel of blue balloons.';

let re = /b.?l+/gi;
console.log(str.replace(re, 'x'));
// Output: xy bought a bushel of xue xoons.

re = /[olu]{2}/gi;
console.log(str.replace(re, 'x'));
// Output: Bixy bxght a bushel of bxe baxxns.

re = /l\w*/gi;
console.log(str.replace(re, 'x'));
// Output: Bix bought a bushex of bx bax.

re = /o\w+?/gi;
console.log(str.replace(re, 'x'));
// Output: Billy bxght a bushel x blue balxns.
```
