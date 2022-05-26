---
Title: '.sort()'
Description: 'Sorts an array into ascending order.'
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

The `.sort()` method of the `Arrays` class sorts a given array into ascending order.

## Syntax

```pseudo
Arrays.sort(array)

Arrays.sort(array, start, end)
```

Where `array` is the array being sorted. `start` and `end` indices can also be specified and the sort will be confined to the given range.

## Example

The following example creates an array and then sorts it.

```java
import java.util.*;

public class Example {
    public static void main(String args[]) {
      String[] a = {"one", "two", "three", "four", "five", "six"};
      Arrays.sort(a);
      for (int i = 0; i < 6; i++) {
        System.out.println(a[i]);
       }
    }
}
```

This will output the following:

```shell
five
four
one
six
three
two
```
