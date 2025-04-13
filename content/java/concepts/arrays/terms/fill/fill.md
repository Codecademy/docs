---
Title: '.fill()'
Description: 'Fills an array with a specified value.'
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

The `.fill()` method of the `Arrays` class fills a given array with a given value. The value must match the [data type](https://www.codecademy.com/resources/docs/java/data-types) of the array.

## Syntax

```pseudo
Arrays.fill(array, value)

Arrays.fill(array, start, end, value)
```

Here, `array`, is the array being filled and `value` is the value being filled in the array. `start` and `end` indices can also be specified and the fill will be confined to the given range.

## Example

The following example creates an array and then fills part of it.

```java
import java.util.*;

public class Example {
    public static void main(String args[]) {
      String[] a = {"one", "two", "three", "four", "five", "six"};
      Arrays.fill(a, 1, 5, "zero");
      for (int i = 0; i < 6; i++) {
        System.out.println(a[i]);
       }
    }
}
```

This will output the following:

```shell
one
zero
zero
zero
zero
six
```
