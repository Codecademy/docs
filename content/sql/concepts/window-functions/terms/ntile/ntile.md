---
Title: 'NTILE()'
Description: 'Groups data together from a window function in roughly equal groups.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'SQL'
  - 'MySQL'
  - 'PostgreSQL'
  - 'SQLite'
  - 'Functions'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`NTILE()`** SQL function groups data into roughly equal groups like the SQL "GROUP BY" clause. However `NTILE()` is applicable to window functions. A number can be specified with the function which will display the data organized roughly across a specified number of groups.

## Syntax

The `...` used below is meant to indicate code before or after the `NTILE()` clause below. It's not part of the actual syntax.

A number is required between the parenthesis.

An `ORDER BY` and a `PARTITION BY` clause is a good idea to include. It makes the data more organized. The `ORDER BY` SQL clause can show query results in ascending or descending order. They can be specified with `ASC` or `DESC` respectively.

```pseudo
  ...
  NTILE(number_of_groups_to_split_data_between) OVER (
    PARTITION BY column1_name
    ORDER BY column2_name DESC
  ) ...
```

## Example

Let's say there is a "basketball_points" table where the first 10 rows look like this:

| player      | week | total_points |
| ----------- | ---- | ------------ |
| Kobe Bryant | 1    | 300          |
| Kobe Bryant | 2    | 220          |
| Kobe Bryant | 3    | 183          |
| Pau Gasol   | 1    | 170          |
| Pau Gasol   | 2    | 155          |
| Pau Gasol   | 3    | 149          |
| Pau Gasol   | 4    | 142          |
| Dwayne Wade | 1    | 112          |
| Dwayne Wade | 2    | 90           |
| Dwayne Wade | 3    | 74           |

Then running an NTILE query so the different players and their points can be seen across weeks.

```sql
  SELECT
  NTILE(4) OVER (
    PARTITION BY week
    ORDER BY total_points DESC
  ) AS 'quartile',
  player,
  week,
  total_points
  FROM basketball_points
  LIMIT 10;
```

Running the following query will show data from the "basketball_points" table organized roughly into 4 groups. They're going to be partitioned by week. That means that the results will display each week as a contiguous group. Each week is also ordered by total_points in descending order. Then the result of the "ntile" operation is set as "quartile". So, now this new column highlights where players place in one of four quartiles of total points scored for that specific week.

Finally, the "player", "week" and "total_points" columns are selected. The last line of the query adds a "LIMIT" condition, so that only the first 10 rows are displayed.

That will yield the following output:

| quartile | player          | week | total_points |
| -------- | --------------- | ---- | ------------ |
| 1        | Kobe Bryant     | 1    | 300          |
| 1        | Pau Gasol       | 1    | 170          |
| 2        | Dwayne Wade     | 1    | 112          |
| 2        | LeBron James    | 1    | 110          |
| 3        | Carmelo Anthony | 1    | 105          |
| 3        | Dirk Nowitzki   | 1    | 101          |
| 4        | Kevin Durant    | 1    | 98           |
| 4        | Chris Bosh      | 1    | 95           |
| 1        | Kobe Bryant     | 2    | 220          |
| 1        | Pau Gasol       | 2    | 155          |
