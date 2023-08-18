---
Title: '.equals()'
Description: 'A method designed to check if the invoking date object
contains a date and time that is equal to the one specified by date object'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Calendar'
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.equals()`** is method of `Date` class. It compares the current date object to the specified object based on millisecond difference. It will returns **`true`** if the invoking date object contains a date that is equal to the one specified by date object. Otherwise, it returns **`false`**.

## Syntax

```pseudo
boolean equals(Object date)
```
>**Note:** The return type of the method is  `boolean` so this method will return either `true` or `false`.

## Example

In this example, the `JavaDateEqualsExample` class demonstrates the use of `.equals()`method. 

```java
import java.util.Date;

public class JavaDateEqualsExample {

    public static void main(String[] args) {
        // create a new date object
        Date dateOne = new Date();

        // print the current date and time
        System.out.println("first date object - current date and Time : " + dateOne);

        // create a second date object
        Date dateTwo = new Date();

        // print second date object
        System.out.println("second date object - current date and Time : " + dateTwo);

        // compare the first and second date object using equals() method
        boolean dateEqual = dateOne.equals(dateTwo);

        // print the result
        System.out.println("first date object and second date object are equal: " + dateEqual);
    }
}
```

This code will return an output similar to the following:

```shell
first date object - current date and Time : Fri Aug 18 22:55:26 IST 2023
second date object - current date and Time : Fri Aug 18 22:55:26 IST 2023
first date object and second date object are equal: false
```

>**Note:** The output of the above example is **`false`** because it compares based on millisecond difference.