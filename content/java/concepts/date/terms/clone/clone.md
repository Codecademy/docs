---
Title: '.clone()'
Description: 'Clones the specified date.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science
Tags:
  - 'Date'
  - 'Methods'
  - 'Objects'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Date.clone()`** method returns a copy or duplicate of a specified Date object.

## Syntax

```pseudo
currentDate.clone()
```

The `Date.clone()` does not take any parameters.

It returns a copy or duplicate of the `currentDate` when the method is called without an argument. However, if an argument is passed on to the method, 

## Example

The following example shows the implementation of `Date.clone()`:

```java
import java.util.Date;

public class Main {
   public static void main(String[] args) {

      Date currentDate = new Date();
	
      System.out.println("The original date is " + currentDate);
      System.out.println("The clone of the date is " + currentDate.clone());
   }
}
```

The output will be:

```shell
The original date is Wed Jul 26 06:47:06 GMT 2023
The clone of the date is Wed Jul 26 06:47:06 GMT 2023
```
