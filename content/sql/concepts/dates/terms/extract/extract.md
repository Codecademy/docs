---
Title: 'EXTRACT()'
Description: 'Used to extract a specific part from the date such as year, month, etc.'
Subjects:
  - 'Data Science'
Tags:
  - 'Database'
  - 'Queries'
  - 'MySQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The `EXTRACT()` function in SQL is used to extract a specific part from a date. It is supported in SQL databases like [MySQL](https://www.codecademy.com/resources/docs/mysql) and [PostgreSQL](https://www.codecademy.com/resources/docs/postgresql).

## Syntax

```pseudo
EXTRACT(part FROM date)
```

- `part`: Part of the date we want to extract. It can be `YEAR`, `MONTH`, or any other part of the date.
- `date`: the date from which specific parts are extracted.

## Example

The following example shows how to extract different parts from a date:

```sql
SELECT
    -- Extract the year from the date
    EXTRACT(YEAR FROM '2024-09-22 15:30:45') AS YearPart,
    
    -- Extract the month from the date
    EXTRACT(MONTH FROM '2024-09-22 15:30:45') AS MonthPart,
    
    -- Extract the day of the month from the date
    EXTRACT(DAY FROM '2024-09-22 15:30:45') AS DayPart,
    
    -- Extract the hour from the date
    EXTRACT(HOUR FROM '2024-09-22 15:30:45') AS HourPart,
    
    -- Extract the minute from the date
    EXTRACT(MINUTE FROM '2024-09-22 15:30:45') AS MinutePart,
    
    -- Extract the second from the date
    EXTRACT(SECOND FROM '2024-09-22 15:30:45') AS SecondPart;
```

Output of the above code is:

| YearPart | MonthPart    | DayPart | HourPart | MinutePart | SecondPart |
| -------- | ------------ | ------- | -------- | ---------- | ---------- |
| 2024     | 9            | 22      | 15       | 30         | 45         |
