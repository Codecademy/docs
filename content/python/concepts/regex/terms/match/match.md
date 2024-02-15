---
Title: 're.match()'
Description: 'Returns a matching character pattern at the beginning of a given string.'
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

The **`.match()`** method returns a matching character pattern at the beginning of a given string.

## Syntax

```pseudo
re.match(<pattern>, string, <flags>)
```

A `<pattern>` can include any of the following:

- A string: `Jane`
- A character class code: `/w`, `/s` , `/d`
- A regex symbol: `$`, `|`, `^`

The `<flags>` are optional and can be set to `IGNORECASE`, `VERBOSE`, or `DOTALL`.

> **Note:** [`.search()`](https://www.codecademy.com/resources/docs/python/regex/search) will only return the first match (as a match object) within the string; alternatively, the [`.findall()`](https://www.codecademy.com/resources/docs/python/regex/findall) method matches every occurrence (and returns a list of matches).

## Example

In the example below, the `.match()` method is used to find a pattern at the beginning of the string:

```py
import re

result = re.match(r"www", "www.codeacademy.com")

print(result)
```

The output will look like this:

```shell
<_sre.SRE_Match object; span=(0, 3), match="www">
```

## Codebyte Example

The following example returns a match object (`<re.Match object; span=(0, 12), match='123-456-7890'>`) and not `None` since the phone number (`123-456-7890`) matches the test pattern:

```codebyte/python
import re

phone_number = "123-456-7890"

result = re.match(r"\d{3}-\d{3}-\d{4}", phone_number)

print(result)
```
