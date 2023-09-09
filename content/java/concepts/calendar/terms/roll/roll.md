---
Title: '.roll()' 
Description: 'Used to operate on the given calendar by moving up or down by a single unit' 
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Code Foundations'
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Date'
  - 'Methods'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-java'
  - 'paths/computer-science'
---

The **.roll()** method for the `Calendar` class will be able to add or substract a single unit of time on the given calendar without changing the larger fields.

## Syntax

```pseudo
calendar.roll(int calndr_field, boolean up_down)
```

This method takes two arguments, 'int calndr_field', which will be used to select which field of the calendar you will use (YEAR,MONTH,DAY). The second one `boolean up_down` will add a single unit of time if true or will substract a single unit of time if false.
## Example

In the following example, `.roll()` is being used to add and substract one year to the calendar being used.

```java
import java.util.*;
public class roll_method {
    public static void main(String args[])
    {
  
        // Creating a calendar.
        Calendar calndr = Calendar.getInstance();
  
        // Current Year.
        System.out.println("The Current Year is: "+ calndr.get(Calendar.YEAR));
  
        // Decrementing the year, false will substract a single unit.
        calndr.roll(Calendar.YEAR, false);
  
        // Showing year after operation
        System.out.println("The New Year is: "+ calndr.get(Calendar.YEAR));
  
        // Incrementing the year, true will add a single unit.

        calndr.roll(Calendar.YEAR, true);
  
        // Showing year after operation.
        System.out.println("The New Year is: "+ calndr.get(Calendar.YEAR));
    }
}
```

The output of the above code will be:

```shell
The Current Year is: 2023
The New Year is: 2022
The New Year is: 2023
```
