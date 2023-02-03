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
String nameOfYourString = "the value you assign";
String nameOfYourString2 = "THE VALUE YOU ASSIGN";
String nameOfYourString3 = "Value you assing";
boolean nameOfYourVariable = nameOfYourString.equalsIgnoreCase(nameOfYourString2);
System.out.pritln(nameOfYourString.equalsIgnoreCase(nameOfYourString2)); //output of this will be true.
boolen nameOfYourVariable2 = nameOfYourString2.equalsIgnoreCase(nameOfYourString3);
System.out.pritln(nameOfYourString.equalsIgnoreCase(nameOfYourString3)); //output of this will be false.
```
In the Syntax (psuedo code) above, we created three different strings, and assigned them to three different values. Then, created two different boolean type variables and made them equal to our condition. For the last part, we have our print commands. The print result will be determined by comparing the values we assigned to the strings in a case in-sensitive manner. If the strings are equal to the same values, the program will print `true`. Otherwise, the program will print `false`.  

## Example

On the example below, there are three different strings named `firstString`, `secondString`, and `thirdString`. To store the result two boolean type variables are created, which are called `firstResult` and `secondResult`. With the `.equalsIgnoreCase()` method, the values assigned to strings are compared. As a result, there is an output of true, if the strings compared have the same values, and an output of false, if the values assigned to those strings are different. Then, as mentioned in the beginning, those values are stored in two different boolean type variables and the result is printed.

```java
String firstString="welcome"; 
String secondString="WELcome"; 
string thirdString="Hello there"; 
boolean firstResult = firstString.equalsIgnoreCase(secondString);
System.out.pritln("Is the first string equal to the second string? The answer is: " + firstResult);

boolean secondResult = secondString.equalsIgnoreCase(thirdString);
System.out.pritln("Is the second string equal to the third string? The answer is: " + secondResult);
```

"The example above will have this output as a result:"

```output
Is the first string equal to the second string? The answer is: true
The example above will have the output: Is the second string equal to the third string? The answer is: false
```
