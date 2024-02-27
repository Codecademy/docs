---
Title: 'Metacharacters'
Description: 'Matches or qualifies regular character patterns or other expressions.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Strings'
  - 'Regular Expressions'
  - 'Characters'
CatalogContent:
  - 'introduction-to-regular-expressions'
  - 'paths/computer-science'
---

In regex, certain **metacharacters** are used to match and qualify regular character patterns or other expressions.

## Common Metacharacters

| Metacharacter | Description                                                      | Example                                                                                           |
| :-----------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|      `.`      | Matches any character.                                           | `r'.'` matches "**code_ninja@codecademy.com**".                                                   |
|     `[]`      | Matches character class inside the brackets not excluded by `^`. | `r'Char[mander\|meleon\|izard]'` matches "Char**mander**", "Char**meleon**", and "Char**izard**." |
|      `^`      | Matches characters at the beginning of a string.                 | `r'^C'` matches "**C**odecademy."                                                                 |
|      `$`      | Matches characters at the end of a string.                       | `r'y$'` matches "Codecadem**y**."                                                                 |

## Quantifiers

Some metacharacters are concerned with the frequency of certain character patterns as shown in the table below:

| Metacharacter | Description                                                     | Example                                                                 |
| :-----------: | --------------------------------------------------------------- | ----------------------------------------------------------------------- |
|      `?`      | Matches zero or one of the preceding character.                 | `r'neighbo?ur'` matches "neighbor" and "neighbo**u**r."                 |
|      `*`      | Matches zero or more of the preceding character.                | `r're*d'` matches "r**e**d" and "r**ee**d."                             |
|      `+`      | Matches one or more of the preceding character.                 | `r'tw+o'` matches "t**w**o" but not "to."                               |
|     `\|`      | Matches either the pattern before or after the `\|`.            | `r'true\|false'` matches "**true**" or "**false**."                     |
|     `{x}`     | Matches if the preceding character occurred `x` times in a row. | `r're{2}d'` matches "r**ee**d" (2 "e"s) but not "r**e**d" (only 1 "e"). |

## Capture Groups

Capture groups can be used to check and quantify different patterns in the string. This can be done with parentheses `(...)`, as shown in the example below:

```py
import re

pattern_one = 'red'
pattern_two = 'rad'
pattern_three = 'rid'

capture_group = r'r(e|a)d'

print(re.match(capture_group, pattern_one))
print(re.match(capture_group, pattern_two))
print(re.match(capture_group, pattern_three))
```

The capture group uses the pipe `|` quantifier to match two out of the three patterns since they both have "e" or an "a". The following output will be printed:

```shell
<_sre.SRE_Match object; span=(0, 3), match='red'>
<_sre.SRE_Match object; span=(0, 3), match='rad'>
None
```

## Special Sequences

The backslash `\` metacharacter has two primary uses:

- It matches a character literal that would otherwise have meaning (e.g. `^` or `$`).
- It finds a match within particular character classes or sequences, such as digits.

The table below describes these special metacharacters when used with the `\` backslash:

| Metacharacter | Description                                                        | Example                                                                   |
| :-----------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------- |
|     `\A`      | Only matches the beginning of a string.                            | `r'\AC'` matches "**C**odecademy" but not "**c**odecademy."               |
|     `\b`      | Matches the boundary at the beginning or end of a string.          | `r'\bCode\b'` matches "**Code** Ninja" but not "**Code**Ninja."           |
|     `\B`      | Matches the boundary within a string.                              | `r'Code\B'` matches "**Code**Ninja" but not **Code** Ninja."              |
|     `\d`      | Matches any digit character (0-9) in a string.                     | `r'\d square'` matches "**4** square" but not "**four** square."          |
|     `\D`      | Matches any non-digit character in a string.                       | `'\D square'` matches "fou**r** square" but not "**4** square".           |
|     `\s`      | Matches any whitespace character including tabs and line breaks.   | `r'Code\sNinja'` matches "Code Ninja" but not "CodeNinja."                |
|     `\S`      | Matches any non-whitespace character.                              | `r'Code Ninja\S'` matches "Code Ninja**s**" but not "Code Ninja."         |
|     `\w`      | Matches most word characters including numbers and the underscore. | `r'\w'` matches everything in "code_ninja.txt" except for the period `.`. |
|     `\W`      | Matches any non-word character.                                    | `r'\W'` only matches the period `.` in "code_ninja.txt."                  |
|     `\Z`      | Only matches the end of a string.                                  | `r'emy\Z'` matches "Codecad**emy**" but not "CODECAD**EMY**."             |

## Codebyte Example

The following snippet can be used for practicing with regex metacharacters:

```codebyte/python
import re

# Practice area for regex metacharacters
string = "Codecademy"
regex_pattern = r"e+"
print(re.findall(regex_pattern, string))
```
