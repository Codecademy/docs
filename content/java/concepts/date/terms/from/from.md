---
Title: '.from()' 

Description: 'Returns an instance of a Date'

Subjects:
  - 'Data Science'
  - 'Computer Science'
  - 'Discrete Math'

Tags: 
  - 'Date'
  - 'Time'
  - 'Methods'

CatalogContent: 
  - 'learn-java'
  - 'paths/computer-science'
---

The **'Date.from'** method returns an instance of a Date that is retrieved from an Instant object.  An Instant is more precise than a Date because it reports past milliseconds to nanoseconds.

## Syntax

```pseudo
date.from(inst)
```

The `Date.from()` method is used in combination with an `Instant` object:

In Java `from` is not a keyword.  The `from` method can be used with the [Date](https://www.codecademy.com/resources/docs/java/date) class to retrieve the current day, date, time, timezone and year.  

Date today = new Date();
Instant inst = Instant.now();
System.out.println(today.from(inst));

## Example
The following example uses the words "apples" and "oranges" to avoid syntax confusion: 

```java
import java.time.Instant;
import java.util.Date;

class JavaDateDemo {
    public static void main(String args[])
    {
        // This line creates a Date object called "apples".
        Date apples = new Date();

        // This line creates an Instant object called "oranges".
        Instant oranges = Instant.now();

        // This line displays the instant using the .from() method.
        System.out.println(
                "Present day, date, time, timezone and year: "
                        + apples.from(oranges));
    }
}
```
The output will be the exact day, date, time, timezone and year of the moment the query is submitted.  


```shell
Present day, date, time, timezone and year: Wed Aug 02 11:06:16 AKDT 2023
```
