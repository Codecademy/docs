---
Title: '.toCharArray()'
Description: 'Returns an new character array from a given string.'
Subjects:
  - 'Java: Strings'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
---

The method `.toCharArray()` returns a new character array from the given string. Its length is equal to the the length of this string.

## Syntax

```java
string.toCharArray()
```
- Where `string` is the string to be transform in a new array of characters.
- This method doesn't take parameters.

## Example 1

Use `.toCharArray()` to print the character array `"Hello CodeCademy!"` and to demonstrate that the length is equal to the string's length:

```java
class Example {
  public static void main(String[] args) {
    String string = "Hello CodeCademy!";

    char[] array = string.toCharArray();

    System.out.println(array);
    System.out.println("The length of the string is: "+ string.length());
    System.out.println("The length of the array is: "+ array.length);
  }
}
```

The output would be:

```
Hello CodeCademy!
The length of the string is: 17
The length of the array is: 17

```

## Example 2

Use `.toCharArray()` and then print all the characters from the array `"Hello CodeCademy!"` using a for loop:

```java
class Example2 {
  public static void main(String[] args) {
    String string = "Hello CodeCademy!";

    char[] array = string.toCharArray();

    for (int i = 0; i < array.length; i++) {
        System.out.println(array[i]);
      }
  }
}
```

The output would be:

```
H
e
l
l
o

C
o
d
e
C
a
d
e
m
y
!
```
