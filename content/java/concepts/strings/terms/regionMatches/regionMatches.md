---
Title: 'regionMatches()'
Description: 'Tests if two string regions are equal.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Characters'
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.regionMatches()`** tests if two string regions are equal. It compares a substring of the String object with another substring of the string passed as an argument.

## Syntax

```java
regionMatches (boolean ignoreCase, int toffset, String other, int ooffset, int len);
```

Where:
- `ignoreCase` is a boolean value that specifies whether the method should be case-sensitive or not.
- `toffset` is an integer representing the index of the starting point of the substring in the first string to be compared.
- `other` is the string argument to be compared.
- `ooffset` is an integer representing the index of the starting point of the substring in the second string to be compared.
- `len` is an integer representing the number of characters to be compared in both strings.
&nbsp;  

> **Note:** For the method to be case sensitive, `ignoreCase` can also be omitted.

## Example

This example compares a substring of the String object with a substring of a specified string:

```java
// Example.java
public class Example{
  
  public static void main(String[] args){
     
    String S1 = new String("This is an example");
    String S2 = new String("is");
    System.out.print("Result of comparing S1 with S2: ");
    System.out.println(S1.regionMatches(true, 5, S2, 0, 2));
    
  }
  
}
```

This outputs the following:

```shell
Result of comparing S1 with S2: true
```
