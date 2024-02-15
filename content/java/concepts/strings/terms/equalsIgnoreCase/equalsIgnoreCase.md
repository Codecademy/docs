---
Title: '.equalsIgnoreCase()'
Description: 'Compares two strings in a case-insensitive manner.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'String'
CatalogContent:
  - 'learn-java'
  - 'path/computer-science'
---

The **`.equalsIgnoreCase()`** method compares two strings ignoring lower/upper case differences and returns true if the two are the same. Otherwise, it returns false.

## Syntax

```pseudo
boolean result = stringOne.equalsIgnoreCase(stringTwo);
```

- `result` is a [boolean](https://www.codecademy.com/resources/docs/general/data-types/boolean) type [variable](https://www.codecademy.com/resources/docs/java/variables) that stores the output.
- `stringOne` and `stringTwo` are the two strings being compared.

## Example

The example below uses the `.equalsIgnoreCase()` method to compare the `firstString`, `secondString`, and `thirdString` strings. The results are stored in `firstResult` and `secondResult` and then printed out:

```java
public class CompareStrings {
  public static void main(String[] args) {
    //Declare strings
    String firstString = "welcome";
    String secondString = "WELcome";
    String thirdString = "Hello there";

    // Compare firstString and secondString
    boolean firstResult = firstString.equalsIgnoreCase(secondString);
    System.out.println("Is the first string equal to the second string? The answer is: " + firstResult);

    //Compare secondString and thirdString
    boolean secondResult = secondString.equalsIgnoreCase(thirdString);
    System.out.println("Is the second string equal to the third string? The answer is: " + secondResult);
  }
}
```

This will output the following result:

```shell
Is the first string equal to the second string? The answer is: true
The example above will have the output: Is the second string equal to the third string? The answer is: false
```
