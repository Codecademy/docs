---
Title: '.intern()'
Description: 'Explanation of the string.intern() method in java and use case'
Subjects: 'app development', 'web application'
Tags: 'java'
CatalogContent: 'learn-java'
---

## .intern()

The .intern() method copies a string in the Heap and stores it in the Pool. 


## Syntax

string.intern()

## Example

String st1 = 'hello';
String st2 = new String('Hello');
String st3 = st1.intern(); // returns string same as st2
System.out.println(st1==st2); // returns false because the reference variables of st1 and st2 are pointing to different instances in memory
System.out.println(st2==st3); // return true because both st2 and st3 have same reference variable

