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

- `result` is a [boolean](https://www.codecademy.com/resources/docs/general/boolean) type [variable](https://www.codecademy.com/resources/docs/java/variables) that stores the output.
- `stringOne` and `stringTwo` are the two strings being compared.

## Example

In the example below, there are three different strings named `firstString`, `secondString`, and `thirdString`. To store the result, two boolean type variables are created, which are called `firstResult` and `secondResult`. With the `.equalsIgnoreCase()` method, the values assigned to strings are compared. As a result, there is an output of true, if the strings compared have the same values, and an output of false if the values assigned to those strings are different. Then, as mentioned in the beginning, those values are stored in two different boolean type variables and the result is printed.

```java
//Declare strings
String firstString = "welcome";
String secondString = "WELcome";
string thirdString = "Hello there";
// Compare firstString and secondString
boolean firstResult = firstString.equalsIgnoreCase(secondString);
System.out.pritln("Is the first string equal to the second string? The answer is: " + firstResult);
// Compare secondString and thirdString
boolean secondResult = secondString.equalsIgnoreCase(thirdString);
System.out.pritln("Is the second string equal to the third string? The answer is: " + secondResult);
```

This will output the following result:

```shell
Is the first string equal to the second string? The answer is: true
The example above will have the output: Is the second string equal to the third string? The answer is: false
```
