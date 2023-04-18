---
Title: NTILE()
Description: Groups data together from a window function in roughly equal groups.
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
  - paths/analyze-data-with-sql
---


The NTILE() SQL tag. Groups data into roughly equal groups. Similiar to the SQL "GROUP BY" clause. However **NTILE()** is applicable to window functions. A number can be specified between the () tags. Which will display the data organized roughly across a specified number of groups.

## Syntax

The "..." signs are meant to indicate code before or after the syntax below. Its not part of the actual syntax.

A number is required between the () tags.

An "ORDER BY" and a "PARTITION BY" clause is a good idea to include. It makes the data more organized.

```pseudo
  ... 
  NTILE(number_of_groups_to_split_data_between) OVER (
    PARTITION BY column1_name
    ORDER BY column2_name DESC
  ) ...
```

## Example

Lets say there is a "streams" table where the first 10 rows look like this:

| Artist | Week | streams_millions | chart_position |
| -------- | ------ | ---- | ---------------- |
| Drake | 1 | 288.2 | 1 |
| Drake | 2 | 160.9 | 1 |
| Drake | 3 | 140.0 | 2 |
| Drake | 4 | 131.8 | 2 |
| Drake | 5 | 123.7 | 1 |
| Drake | 6 | 126.2 | 1 |
| Drake | 7 | 122.6 | 1 |
| Drake | 8 | 117.6 | 1 |
| The Weeknd | 1 |76.3 | 6 |
| The Weeknd | 2 | 72.6 | 9 |

Then running an NTILE query so the different artists streams in millions can be seen across week

```sql
  SELECT
  NTILE(4) OVER (
    PARTITION BY week
    ORDER BY streams_millions DESC
  ) AS 'quartile',
  artist,
  week,
  streams_millions
  FROM streams
  LIMIT 10;
```

Running the following query will show data from the "streams" table organized roughly into 4 groups. They're gonna be partitioned by week. That means that we will see a week at a time before we see the next week. Then each week is ordered by streams_millions in descending order. Then we name the "NTILE()" result column to "quartile". So we know where artists place in one of four quartiles of popularity.

At last we select the "artist", "week" and "streams_millions" columns. Along with the NTILE() column from earlier called "quartile" Then we "LIMIT" the rows to 10 so we dont get all the data at once.

That will give us the following output:


| quartile | artist | week | streams_millions |
| -------- | ------ | ---- | ---------------- |
| 1 | drake | 1 | 288.2 |
| 1 | The Weeknd | 1 | 76.3 |
| 2 | Luke Combs | 1 | 55.8 |
| 2 | Taylor Swift | 1 | 47.7 |
| 3 | Doja Cat | 1 | 41.7 |
| 3 | Bad Bunny | 1 | 33.7 |
| 4 | Beyoncé | 1 | 26.3 |
| 4 | Lady Gaga | 1 | 15.4 |
| 1 | Drake | 2 | 160.9 |
| 1 | The Weeknd | 2 | 72.6 |