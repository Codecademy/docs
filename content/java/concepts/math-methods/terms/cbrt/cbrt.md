---
Title: '.cbrt()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Returns the cubed root of a double-type value.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Data Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Arithmetic'
  - 'Documentation'
  - 'Functions'
  - 'Numbers'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-java'
  - 'path/computer-science'
---

The **`Math.cbrt()`** method returns the cubed root of a `double` value.

## Syntax

```pseudo
Math.cbrt(double num)
```

The `.cbrt()` method will return the cube root of `num`. The value of `num` can be any real number. Edge cases for this method include:

- If the argument is `NaN`, the return value will be `NaN`.
- If the argument is ±infinity, the return value will be ±infinity.

## Example

Here is an example using the `Math.cbrt()` method:

```java
public class Main {
    public static void main(String[] args) {
        double a = 27.0;
        System.out.println( "Math.cbrt("+a") returns: " + Math.cbrt(a) );

        double b = -8.0;
        System.out.println( "Math.cbrt("+b") returns: " + Math.cbrt(b) );

    }
}
```

This will result in the following output:

```
Math.cbrt(27.0) returns: 3.0
Math.cbrt(-8.0) returns: -2.0
```