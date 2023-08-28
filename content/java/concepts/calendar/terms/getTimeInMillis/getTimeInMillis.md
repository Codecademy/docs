---
Title: '.getTimeInMillis()'
Description: 'Returns the time in milliseconds.'
Subjects: 
	- 'Code Foundations'
	- 'Computer Science'
Tags:
	- 'Date'
	- 'Methods'
CatalogContent:
	- 'learn-java'
	- 'paths/computer-science'
---

The **`.getTimeInMillis()`** method of the `Calendar` class returns the time represented by a calendar object in the form of milliseconds.

## Syntax

```pseudo
calendar.getTimeInMillis()
```

## Example

This example code creates a calendar object, records the current time, sets and records the time back to 12:00 AM the same day, and then prints the difference.

```java
import java.util.Calendar;

// CalendarGetTimeInMillisExample.java
public class CalendarGetTimeInMillisExample {
	public static void main(String[] args) {

		// Create a Calendar instance
		Calendar calendar = Calendar.getInstance();

		// Get the current time in milliseconds
		long currentTime = calendar.getTimeInMillis();

		// Sets the time back to 12:00 AM today
		calendar.set(Calendar.HOUR_OF_DAY, 0);
		calendar.set(Calendar.MINUTE, 0);
		calendar.set(Calendar.SECOND, 0);
		calendar.set(Calendar.MILLISECOND, 0);

		// Get the time in milliseconds of 12:00 AM today
		long earlierToday = calendar.getTimeInMillis();

		// Prints current amount of milliseconds that have passed today
		System.out.println("Time passed today so far in milliseconds: " + (currentTime - earlierToday));
	}
}
```

The output of the code above is the time passed in milliseconds today from 12:00 AM.
