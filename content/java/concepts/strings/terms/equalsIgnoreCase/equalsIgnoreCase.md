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
System.out.pritln(nameOfYourString.equalsIgnoreCase(nameOfYourString2)); //output of this will be true.
System.out.pritln(nameOfYourString.equalsIgnoreCase(nameOfYourString3)); //output of this will be false.
```

## Example

On the example below, we have three different strings named firstString, secondString, and thirdString. To store the result we created two boolean type variables, which are called firstResult and secondResult. With the **.equalsIgnoreCase()** method, we will be comparing the values we've assigned to strings. As a result, we will get an output of true, if the strings we compare have the same values. However, we will be getting an output of false, if the values we assigned to those strings are different. Then, as mentioned in the beginning, we will store those values in two different boolean type variables and print the result.

```example
String firstString="welcome";  //decleration of the first string.
String secondString="WELcome"; //decleration of the second string.
string thirdString="Hello there"; //decleration of the third string.
boolean firstResult = firstString.equalsIgnoreCase(secondString); //We created a boolean type variable here and named it firstResult, and we store the result in it. Result being the output of true or false after comparing firstString and the secondString.
System.out.pritln("Is the first string equal to the second string? The answer is: " + firstResult); //both firstString and the secondString have the same value so the output will be true.

boolean secondResult = secondString.equalsIgnoreCase(thirdString); //We created another boolean type variable and named it secondResult. It will store the result in it. Result being the output of true or false depending on comparison of second and the third string.
System.out.pritln("Is the second string equal to the third string? The answer is: " + secondResult);
```

"The example above will have these outputs as a result:"

```
Is the first string equal to the second string? The answer is: true
The example above will have the output: Is the second string equal to the third string? The answer is: false
```

