---
Title: '.equalsIgnoreCase()'
Description: 'This method compares strings.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'String'
CatalogContent:
  - 'learn-java'
---

The `equalsIgnoreCase` method compares the strings in the program and then gives an output of true of false. It is not a case sensitive method, so this method does not consider this as a factor while comparing the strings.

## Syntax

```pseudo
String nameOfYourString = "the value you assign";
String nameOfYourString2 = "THE VALUE YOU ASSIGN";
String nameOfYourString3 = "Value you assing";
System.out.pritln(nameOfYourString.equalsIgnoreCase(nameOfYourString2)); //output of this will be true.
System.out.pritln(nameOfYourString.equalsIgnoreCase(nameOfYourString3)); //output of this will be false.
```

## Example

The example below will show you how this method works.

```example
String firstString="welcome";
String secondString="WELcome";
string thirdString="Hello there";
System.out.pritln(firstString.equalsIgnoreCase(secondString)); 
System.out.pritln(firstString.equalsIgnoreCase(thirdString));
```