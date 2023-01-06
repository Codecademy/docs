---
Title: '.length()'
Description: 'Returns the length of a string, in terms of number of characters.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'String'
  - 'Data Types'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, the `.length()` method is a member of the `String` class that returns the length of a `string`, in terms of number of characters.

## Syntax

```pseudo
int length = str.length();
```

Here, `str` is a string variable or a string literal, and length is an integer variable that will hold the length of the string.

## Example

```java
public static void main(String[] args) {
        String str = "Hello, World!";
        int len = str.length();
        System.out.println("The length of the string is: " + len);
    }
```

The output for the above code will be:

```
The length of the string is: 13
```
