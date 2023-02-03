---
Title: '.equalsIgnoreCase()'
Description: 'Compares strings in a case-insensitive manner.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'String'
CatalogContent:
  - 'learn-java'
---

The **`.equalsIgnoreCase()`** method compares strings and then then gives an output of true or false. It is not a case sensitive method.

## Syntax

```pseudo
boolean result = stringOne.equalsIgnoreCase(stringTwo);
```
In the syntax above, there are three different variables. One of them, `result` being a boolean type variable, the other two being a string type variables. If the values stored in the strings are same, ignoring the case, the result stored in `result` will be true. Otherwise, it will be false.

## Example

In the example below, there are three different strings named `firstString`, `secondString`, and `thirdString`. To store the result, two boolean type variables are created, which are called `firstResult` and `secondResult`. With the `.equalsIgnoreCase()` method, the values assigned to strings are compared. As a result, there is an output of true, if the strings compared have the same values, and an output of false if the values assigned to those strings are different. Then, as mentioned in the beginning, those values are stored in two different boolean type variables and the result is printed.

```java
String firstString="welcome"; 
String secondString="WELcome"; 
string thirdString="Hello there"; 
boolean firstResult = firstString.equalsIgnoreCase(secondString);
System.out.pritln("Is the first string equal to the second string? The answer is: " + firstResult);

boolean secondResult = secondString.equalsIgnoreCase(thirdString);
System.out.pritln("Is the second string equal to the third string? The answer is: " + secondResult);
```

The example above will have this output as a result:

```output
Is the first string equal to the second string? The answer is: true
The example above will have the output: Is the second string equal to the third string? The answer is: false
```

