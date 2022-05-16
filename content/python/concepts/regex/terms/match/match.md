---
Title: 're.match()'
Description: 'Returns a matching character pattern anywhere at the beginning of a given string.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Regular Expressions'
  - 'Strings'
  - 'Characters'
CatalogContent:
  - 'introduction-to-regular-expressions'
  - 'practical-data-cleaning'
  - 'language-parsing'
  - 'text-preprocessing'
---

The `.match()` method returns a matching character pattern anywhere at the beginning of a given string.

## Syntax

```pseudo
re.match(<pattern>, string, <flags>)
```

A `<pattern>` can include any of the following:

- A string: `Jane`
- A character class code: `/w`, `/s` , `/d`
- A regex symbol: `$`, `|`, `^`

The `<flags>` are optional and can be set to `IGNORECASE`, `VERBOSE`, or `DOTALL`.

**Note:** `.search()` will only return the the first match (as a match object) within the string; alternatively, the `.findall()` method matches every occurrence (and returns a list of matches).

## Example

All content that appears within parentheses are matched with the `.search()` method in the example below:

```py
import re

result = re.match(r'www\S+', 'www.codeacademy.com')
# \S matches any character except a space, tab or newline

print(result)
```

The output will look like this:

```shell
<re.Match object; span=(0, 19), match='www.codeacademy.com'>
```

## Codebyte Example

The following example returns `None` because the test pattern is not at the beginning of the string:

```py
import re

result = re.search(r'codecademy', 'www.codeacademy.com')
# \S matches any character except a space, tab or newline

print(result)
```
