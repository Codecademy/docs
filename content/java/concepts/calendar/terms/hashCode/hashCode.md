---
Title: '.hashCode()'
Description: 'Returns the hash code for a Calendar object.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Calendar'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.hashCode()`** method in Java is a part of the **`Calendar`** class, which is used for date and time manipulation in Java. This method returns a hash code value for the calendar instance based on its current state. Hash codes are commonly used in data structures like hash tables to quickly identify and access objects.

## Syntax

```pseudo
result = myCalendar.hashCode()
```

- The `.hashCode()` method is a non-static method of the Calendar class, so it is called on an instance of the Calendar class, `myCalendar`.
- It returns an integer value, `result`, which is the hash code for the current state of the calendar object.
- The hash code is calculated based on the fields and values within the calendar object, such as the year, month, day, hour, minute, second, and time zone settings.

## Example 1

In this example, the `.hashCode()` method is used to calculate a `Calendar` object's hash code and prints it:

```java
import java.util.Calendar;

public class CalendarHashCodeExample {
    public static void main(String[] args) {
        // Calendar object is created using the .getInstance() method.
        Calendar calendar = Calendar.getInstance();
        int hashCode = calendar.hashCode();
        System.out.println("Hash code of the calendar object: " + hashCode);
    }
}
```

This code will output (the hash code may differ):

```shell
Hash code of the calendar object: 12345678
```

## Example 2

In the example below, a **`HashMap`** is created to store `Calendar` objects, and the `.hashCode()` method of each `Calendar` object is used as keys in the map.

Then, the objects from the map are retrieved using their hash codes and checked if they are equal to the original objects using the **`.equals()`** method. Since the hash codes are used as keys, the original `Calendar` objects can be successfully retrieved from the map and confirmed that they are equal.

```java
import java.util.Calendar;
import java.util.HashMap;

public class CalendarHashMapExample {
    public static void main(String[] args) {
        // Create a HashMap to store Calendar objects and their descriptions:
        HashMap<Integer, Calendar> calendarMap = new HashMap<>();

        // Create two Calendar objects:
        Calendar calendar1 = Calendar.getInstance();
        Calendar calendar2 = Calendar.getInstance();

        // Store the Calendar objects in the HashMap with unique hash codes as keys:
        calendarMap.put(calendar1.hashCode(), calendar1);
        calendarMap.put(calendar2.hashCode(), calendar2);

        // Retrieve the Calendar objects from the HashMap:
        Calendar retrievedCalendar1 = calendarMap.get(calendar1.hashCode());
        Calendar retrievedCalendar2 = calendarMap.get(calendar2.hashCode());

        // Check if the retrieved objects are equal to the original objects:
        boolean areEqual1 = calendar1.equals(retrievedCalendar1);
        boolean areEqual2 = calendar2.equals(retrievedCalendar2);

        // Print the results:
        System.out.println("Original calendar1 and retrieved calendar1 are equal: " + areEqual1);
        System.out.println("Original calendar2 and retrieved calendar2 are equal: " + areEqual2);
    }
}
```

This code will return an output similar to the following:

```shell
Original calendar1 and retrieved calendar1 are equal: true
Original calendar2 and retrieved calendar2 are equal: true
```
