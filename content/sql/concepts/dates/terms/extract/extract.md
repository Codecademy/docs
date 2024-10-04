---
Title: 'EXTRACT()'
Description: 'Used to extract a specific part from a given date such as year, month, etc.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Database'
  - 'Data'
  - 'Queries'
  - 'MySQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The `EXTRACT()` function in SQL is used to extract a specific part from a given date. It is supported in SQL databases like [MySQL](https://www.codecademy.com/resources/docs/mysql) and [PostgreSQL](https://www.codecademy.com/resources/docs/postgresql).

## Syntax

```pseudo
EXTRACT(part FROM date)
```

- `part`: The part of the date to be extracted. It can be `YEAR`, `MONTH`, or anything else.
- `date`: The date from which a specific part is to be extracted.

## Example

The following example shows how to extract different parts from a given date using the `EXTRACT()` function:

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

The output for the above code is:

| YearPart | MonthPart | DayPart | HourPart | MinutePart | SecondPart |
| -------- | --------- | ------- | -------- | ---------- | ---------- |
| 2024     | 9         | 22      | 15       | 30         | 45         |
