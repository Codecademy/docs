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
The `RegExp` object is used for matching strings with Regular Expressions. A Regular Expression is a special string, called a pattern, that uses various character sequences to define the characteristics to match a character sequence within another string. 

A `RegExp` object can also have flags set along with a pattern to change how matches are performed.

## Syntax

There are two methods of creating a `RegExp` object. The first method is literal notation using slashes to delimit the pattern, followed by any flags. The second method uses the `RegExp` constructor which takes the pattern as the first argument and any flags as the second.

```javascript
let re1 = /foo?/i; // literal notation
let re2 = new RegExp("foo?","i") // RegExp constructor

// both create a RegExp object with a pattern = "foo?" and a flag = "i"
```

There is a difference between the methods. Literal notation compiles when the expression is evaluated. It should be used when the pattern will remain constant, so it won't be recompiled unnecessarily, such as in a loop.

Using the object constructor means the expression will be compiled at runtime. It should be used when the pattern of the `RegExp` object would be subject to change, or the pattern is obtained during runtime, such as from user input.

### `RegExp` Properties

Property|Description
---|---
`flags`|Returns a string containing the flags of the `RegExp` object.
`dotAll`|Does `.` match newlines or not?
`global`|Does the `RegExp` object test against all matches in a string, or only the first?
`hasIndices`|Does the Regular Expression result expose the start and end indices of captured substrings?
`ignoreCase`|Does the `RegExp` object ignore case when performing a match?
`multiline`|Does the `RegExp` object perform matches across multiple lines?
`source`|The text of the pattern used by the `RegExp` object.
`sticky`|Is the search sticky? (Does the next match have to occur at `lastIndex`, or can we match the next occurrence after `lastIndex`?)
`unicode`|Are Unicode features enabled?
`lastIndex`|The index at which to start the next match.

### `RegExp` Methods

Method|Description
---|---
`exec(str)`|Execute a search on its `str` string parameter.
`test(str)`|Tests for a match in its `str` string parameter.

### `String` Methods That Can Use `RegExp` Objects

In the following `re` is a `RegExp` object

Method                |Description
----------------------|----------------------
`match(re)`           |Returns the array result of match(es) against the string.
`matchAll(re)`        |Returns an iterator of all the matches found within the string.\* 
`replace(re, substr)` |Replaces match(es) in the string with a given substring, `substr`.
`search(re)`          |Returns the index of the first match in the string.
`split(re)`           |Splits string into an array using the match(es) as a delimiter.

\* The RegExp object must have the `g` flag set or an exception is thrown.

### `RegExp` Flags

When specified, these flags change the default match behavor of the `RegExp` object.

Flag|Description
---|---
`g`|Perform a global match, finding all matches rather than just the first.
`i`|Makes matches case-insensitive.
`m`|Perform multiline matches. (Changes behavior of `^`,`$`)
`s`|Allows `.` to match newline `\n` characters.
`u`|Enables Unicode support.
`y`|Matches are sticky, looking only at exact position in the text.

Usage:

```javascript
let re1 = /foo?/gim; 
let re2 = new RegExp("foo?","gim") 

// create a RegExp object that performs a global, case-insensitive, multiline search
```

## Regular Expressions

The following characters are used to define a Regular Expression string.

### Assertions

#### Boundary-type assertions

Matches the boundries between characters, not the characters themselves.

Characters|Meaning
---|---
`^`|Matches the beginning of input. In multiline search, matches immediately after a line break character.
`$`|Matches the end of input. In multiline search matches immediately before a line break character.
`\b`|Matches a word boundary. Point where a word character is not followed by a word character, or the point where a word character is not preceded by another word character
`\B`|Matches a non-word boundary. Point where preceding and following character are of the same type.

#### Other assertions

Matches a character or expression based on what follows or precedes it.

Characters|Meaning
---|---
`x(?=y)`|Match `x` only if `x` is immediately followed by `y`. `y` is not part of the match results.
`x(?!y)`|Match `x` only if `x` is not immediately followed by `y`. `y` is not part of the match results.
`(?<=y)x`|Match `x` only if `x` is immediately preceded by `y`. `y` is not part of the match results.
`(?<!y)x`|Match `x` only if `x` is not immediately preceded by `y`. `y` is not part of the match results.

### Character Classes

Indicates a given type of character to match.

Characters|Meaning
---|---
`.`| Matches any character except line terminators. When `s` flag set, it also matches line terminators.
`\d`|Matches any digit (Arabic numeral).
`\D`|Matches any character that is not a digit (Arabic numeral).
`\w`|Matches any alphanumeric character from Latin alphabet, including underscore.
`\W`|Matches any character that is not an alphanumeric character from Latin alphabet or underscore.
`\s`|Matches any whitespace character.
`\S`|Matches any character that isn't a whitespace character.
`\t`|Matches a horizontal tab.
`\r`|Matches a carriage return.
`\n`|Matches a linefeed.
`\v`|Matches a vertical tab.
`\f`|Matches a form-feed.
`[\b]`|Matches a backspace.
`\0`|Matches a NUL character (when not followed by another digit).
<code>\\x<i>nn</i></code>|Matches the character code <code><i>nn</i></code> (two hexadecimal digits).
<code>\\u<i>nnnn</i></code>|Matches a UTF-16 code unit with the value <code><i>nnnn</i></code> (four hexadecimal digits).
`\`|Followed by a special character, means that the character should be matched literally.

### Groups and Ranges

Indicates groups and ranges of characters to match.

Characters|Meaning
---|---
`x\|y`|Matches either `x` or `y`.
`[xyz]`|Matches the character `x`, `y` or `z`.
`[a-c]`|Matches the character that falls between `a` and `c` inclusive (`a`, `b` and `c`).\* 
`[^xyz]`|Matches the character that is not `x`, `y` or `z`.
`[^a-c]`|Matches the character that does not fall between `a` and `c` inclusive (not `a`, `b` or `c`).\*
`(x)`|Matches `x` and remembers the match. 
<code>\\<i>n</i></code>|Where <code><i>n</i></code> is a positive integer, represents a back refrence to the last substring matching the *n<sup>th</sup>* captured group.
`(?<Name>x)`|Matches `x` and stores it in the groups property of the returned matches under the name `Name`.
`\k<Name>`|Represents a back refrence to the last substring matched in the named capturing group specified by `Name`. 
`(?:x)`|Represents a non-capturing group. Matches `x` but does not remember the match.

\* If the hyphen falls at the start or end of the sequence in brackets, it is treated as a literal hyphen.




### Quantifiers

Quantifiers specify the number of characters or expressions to match.

Characters|Meaning
---|---
`x*`|Matches the preceding item `x` zero or more times.
`x+`|Matches the preceding item `x` one or more times.
`x?`|Matches the preceding item `x` zero or one times.
`x{n}`|Matches the preceding item `x` `n` times, where `n` is a positive integer.
`x{n,}`|Matches the preceding item `x` `n` or more times, where `n` is a positive integer.
`x{n,m}`|Matches the preceding item `x` at least `n` times and at most `m` times where `n` and `m` are positive integers and `n` is less than `m`.

By default these quatifiers are greedy, matching as much of the string as possible. By following the quantifer with `?` (`x*?`) the match will stop at its first occurrence.
