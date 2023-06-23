---
Title: '.toLowerCase()'
Description: 'Converts a string to lowercase characters.'
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

The **`.toLowerCase()`** method converts all the characters of a string to lowercase characters in Java.

> **Note:** This method is locale sensitive, in consequence it might produce unexpected results because it takes into account the user's locale, particularly when the string represents locale-specific values, e.g. date or time.

## Syntax

```java
upperCaseString.toLowerCase();
```

Where `upperCaseString` is the string with some or all upper case characters to be converted.

## Example

This example converts uppercase characters to lowercase characters:

```java
// Example.java
public class Example {
    public static void main(String[] args){
        String S1 = new String("ThiS IS an EXAMple");
        System.out.println(S1.toLowerCase());
    }
}
```

This outputs the following:

```shell
this is an example
```
