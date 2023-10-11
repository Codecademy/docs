---
Title: '.setFirstDayOfWeek()'
Description: 'Sets the first day of the week.'
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

The **`.setFirstDayOfWeek()`** method of the `Calendar` class sets what the first day of all weeks will be by accepting an integer value that represents a specific day of the week. 

> **Note:** Most countries consider either Saturday, Sunday, or Monday to be the first day of the week. For example, the United States recognises Sunday as the first day of the week, while Monday is observed as the first day of the week in India.

## Syntax

```pseudo
calendar.setFirstDayOfWeek(day_val)
```

This method takes only one arguement, `day_val`, which is an integer that represents one of seven days of the week. E.g. `Calendar.FRIDAY`.