---
Title: '.hashCode()'
Description: 'method in Java is used to return the hash code for a Calendar object. The hash code is a unique integer value that is used to identify objects in a hash table.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Calendar'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`hashCode()`** method in Java is a part of the **`Calendar`** class, which is used for date and time manipulation in Java. This method returns a hash code value for the calendar instance based on its current state. Hash codes are commonly used in data structures like hash tables to quickly identify and access objects.


## Syntax

```pseudo
public int hashCode()
```
## Explanation:
>  The `hashCode()` method is a non-static method of the Calendar class, so it is called on an instance of the Calendar class.

>It returns an integer value, which is the hash code for the current state of the calendar object.

>The hash code is calculated based on the fields and values within the calendar object, such as the year, month, day, hour, minute, second, and time zone settings.

## Example 1

In this example, we create a **`Calendar`** object using **`Calendar.getInstance()`**, and then we use the **`hashCode()`** method to calculate its hash code and print it.

```java
import java.util.Calendar;

public class CalendarHashCodeExample {
    public static void main(String[] args) {
        Calendar calendar = Calendar.getInstance();
        int hashCode = calendar.hashCode();
        System.out.println("Hash code of the calendar object: " + hashCode);
    }
}

```
This code will return an output similar to the following:

```shell
Hash code of the calendar object: 12345678
```

## Example 2

In this example, we create a **`HashMap`** to store **`Calendar`** objects, and we use the **`hashCode()`** method of each **`Calendar`** object as the key in the map.<br>
Then, we retrieve the objects from the map using their hash codes and check if they are equal to the original objects using the **`equals()`** method. Since the hash code is used as the key, we can successfully retrieve the original **`Calendar`** objects from the map and confirm that they are equal.

```java
import java.util.Calendar;
import java.util.HashMap;

public class CalendarHashMapExample {
    public static void main(String[] args) {
        // Create a HashMap to store Calendar objects and their descriptions
        HashMap<Integer, Calendar> calendarMap = new HashMap<>();

        // Create two Calendar objects
        Calendar calendar1 = Calendar.getInstance();
        Calendar calendar2 = Calendar.getInstance();

        // Store the Calendar objects in the HashMap with unique hash codes as keys
        calendarMap.put(calendar1.hashCode(), calendar1);
        calendarMap.put(calendar2.hashCode(), calendar2);

        // Retrieve the Calendar objects from the HashMap
        Calendar retrievedCalendar1 = calendarMap.get(calendar1.hashCode());
        Calendar retrievedCalendar2 = calendarMap.get(calendar2.hashCode());

        // Check if the retrieved objects are equal to the original objects
        boolean areEqual1 = calendar1.equals(retrievedCalendar1);
        boolean areEqual2 = calendar2.equals(retrievedCalendar2);

        // Print the results
        System.out.println("Original calendar1 and retrieved calendar1 are equal: " + areEqual1);
        System.out.println("Original calendar2 and retrieved calendar2 are equal: " + areEqual2);
    }
}

```
This code will return an output similar to the following:

```shell
Hash code of the calendar object: 12345678
```



