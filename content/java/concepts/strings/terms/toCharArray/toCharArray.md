---
Title: '.toCharArray()'
Description: 'Returns an new character array from a given string.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The method **`.toCharArray()`** returns a new character array from the given string. The length of the array is equal to the length of the original string.

## Syntax

```pseudo
string.toCharArray()
```

- `string` is the string to be transformed to a new array of characters.
- This method doesn't take any parameters.

## Example

The example below uses the `.toCharArray()` method to create a new array, uses a loop to iterate through the array, and prints each character:

```java
// Example.java
class Example {
  public static void main(String[] args) {
    String salutation = "Hello Codecademy!";

    char[] textArray = salutation.toCharArray();

    for (int i = 0; i < textArray.length; i++) {
        System.out.println(textArray[i]);
      }
  }
}
```

This will produce the following output:

```shell
H
e
l
l
o

C
o
d
e
c
a
d
e
m
y
!
```
