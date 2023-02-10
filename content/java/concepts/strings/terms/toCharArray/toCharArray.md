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
  - 'paths/computer-science'
---

The method `.toCharArray()` returns a new character array from the given string. The length of the array is equal to the length of the original string.

## Syntax

```java
string.toCharArray()
```
- Where `string` is the string to be transformed to a new array of characters.
- This method doesn't take any parameters.

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

The example below uses the `.toCharArray()` method to create a new array, and uses a loop to iterate through the array and print each character:

```java
// Example2.java
class Example2 {
  public static void main(String[] args) {
    String salutation = "Hello CodeCademy!";

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
