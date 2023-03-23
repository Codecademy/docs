---
Title: '.EndsWith()'
Description: 'Determines if the end of the string instance matches the specified string and returns a boolean.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Characters;
  - 'Methods'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.EndsWith()`** method determines whether the end of the String instance matches the specified character or string.  Additional parameters may be supplied to define the criteria for a match.

## Syntax

```pseudo
// Determines whether the String instance's last character matches the specified character
String.EndsWith(char);

// Determines whether the end of String instance matches the specified string
String.EndsWith(string);

// Same as above but uses additional case-sensitive and culture-sensitive
String.EndsWith(string, ignoreCase, culture)

// Same as above but uses an enumeration to determine the case- and culture-sensitive criteria
String.EndsWith(string, comparisonType)
```

`.EndsWith()` is a static methid of the `String` object.  It takes the following arguments:
- `char` is a instance of the `Char` structure; represents a single letter
- `string` is a instance of the `String` object
- `ignoreCase` is a boolean; if `true` then case is ignored for comparison (e.g., 'a' == 'A')
- `culture` is an instance of the `CultureInfo` class which includes culture-specific sort order rules
- `comparisonType` is an element of the `StringComparison` enumeration which encapsulates the case- and culture-specific criteria; available fields include:
  - `CurrentCulture` = use the current culture rules
  - `CurrentCultureIgnoreCase` = use the current culture rules but ignore case
  - `InvariantCulture` = use the invariant culture's sorting rules (it's a culture that doesn't change based on the user's location)
  - `InvariantCultureIgnoreCase` = use the invariant culture rules but ignore case
  - `Ordinal` = use ordinal (binary) sort rules to compare strings
  - `OrdinalIgnoreCase` = use ordinal (binary) sort rules to compare strings but ignore case

## Example


