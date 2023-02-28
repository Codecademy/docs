---
Title: '.length'
Description: 'The .length property is used to determine the length or size of an array.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arrays'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, the **`.length`** property is used to determine the length or size of an array. It is a built-in property for arrays and returns an integer value that represents the number of elements in the array.

## Syntax

Here is the syntax of .length property:

```pseudo
arrayName.length;
```

## Example

Here's an example of how to use the .length property to determine the size of an array:

```java
int[] numbers = {1, 2, 3, 4, 5};
int length = numbers.length;
System.out.println("Length of the array is" + length)
```

In this example, the `numbers` array contains five elements, and the `.length` property returns the value 5, which is assigned to the `length` variable.

Output for the above code will be:

```shell
Length of the array is 5
```
