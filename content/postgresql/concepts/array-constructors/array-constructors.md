---
Title: 'Array Constructors'
Description: 'An array constructor is a method used to work with collections of data'
Subjects:
  - 'Computer Science'
  - 'Relational Database'
Tags:
  - 'Arrays'
  - 'Data Types'
  - 'PostgreSQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In PostgreSQL, an **array constructor** is a method for creating arrays, which are collections of data with similar datatype, they can be one-dimensional, two-dimensional, multi-dimensional, or nested. These arrays can then be stored and manipulated in the postgres database.

## Syntax

Array constructor [**_syntax_**](https://www.postgresql.org/docs/current/arrays.html#ARRAYS-DECLARATION) are defined by appending `[]` to the data type name of the array elements. The data type name signifies the datatype of the array.

```sql
column_name datatype []
```

## Example 1

To create an array with a specific element, you can use the `ARRAY` keyword, or you can write arrays as string literals by using curly braces `{}`.

```sql
-- This creates a table named 'example1' with two columns: 'id' and 'numbers'.
-- 'id' is an auto-incrementing primary key, and 'numbers' can hold a collection of integers.
CREATE TABLE example1 (id SERIAL PRIMARY KEY, numbers INTEGER[]);
-- using the 'ARRAY' keyword to insert integer arrays into the number column
INSERT INTO example1 (numbers) VALUES (ARRAY[1, 2, 3, 4]);
-- using string literals to insert integer arrays into the number column
INSERT INTO example1 (numbers) VALUES ('{5, 6, 7, 8}');
```

When the example above is run it would create a a table name called `example1` with 2 rows. The `numbers` column contains a one-dimensional array of integers.

`example1` table:

| id  | numbers[] |
| --- | --------- |
| 1   | {1,2,3,4} |
| 2   | {5,6,7,8} |

## Example 2

Now let's create a new table called `example 2` with `team` column and add a two-dimensional values of type `text`:

```sql
-- This creates a table named 'example1' with two columns: 'id' and 'numbers'.
-- 'id' is an auto-incrementing primary key, and 'team' can hold a collection of text.
CREATE TABLE example2 (id SERIAL PRIMARY KEY, team text[][]);
-- Using the 'ARRAY' keyword to insert text arrays into the 'team' column
INSERT INTO example2 (team) VALUES (ARRAY[['Tolu','Sophie'],['Chloe','Kemi']]);
-- using string literals to insert integer arrays into the number column
INSERT INTO example2 (team) VALUES ('{{"Kim","Tayo"},{"Achur","Timi"}}');
```

122
`example2` table:

| id  | team[]                       |
| --- | ---------------------------- |
| 1   | {{Tolu,Sophie},{Chloe,Kemi}} |
| 2   | {{Kim,Tayo},{Achur,Timi}}    |

## Example 3

We have now successfully learned how to insert arrays into our postgres table, now let's learn
how to access our array element using the `example3` table below:

```sql
-- This creates a table named 'example3' with three columns: 'id', 'names' and contacts.
-- 'id' is an auto-incrementing primary key, 'names' hold text values and 'contacts' can hold a collection of text.
CREATE TABLE example3 (id SERIAL PRIMARY KEY, names text, contacts text[]);
-- Using the 'ARRAY' keyword to insert text arrays into the 'contacts' column
INSERT INTO example3 (names, contacts) VALUES ('Tolu', ARRAY['(+234)81-1765-3345','(+234)81-1265-3347']);
-- using string literals to insert text array into the 'contacts' column
INSERT INTO example3 (names, contacts) VALUES ('Micheal','{"(+234)71-1700-3935","(+234)81-1905-0007"}');
```

`example3` table:

| id  | names   | contacts[]                              |
| --- | ------- | --------------------------------------- |
| 1   | Tolu    | {(+234)81-1765-3345,(+234)81-1265-3347} |
| 2   | Micheal | {(+234)71-1700-3935,(+234)81-1905-0007} |

We can access the array elements using [**_array subscript numbers_**](https://www.postgresql.org/docs/current/arrays.html#ARRAYS-ACCESSING) which are written between square brackets.

Accessing the `example3` table

By using the _array subscript number_ we can select all first item on the `contacts` column
using the script below:

```sql
SELECT  names, contacts[ 1 ] FROM example3;
```

Our queried table:

| id  | names   | contacts[]          |
| --- | ------- | ------------------- |
| 1   | Tolu    | (+234)81-1765-3345  |
| 2   | Micheal | (+234)71-1700-39357 |

We can also use _array subscript number_ with the `where` statements to filter out the result rows

```sql
SELECT names FROM example3 WHERE contacts[ 2 ] = '(+234)81-1905-0007';
```

Our queried table:

| id  | names   |
| --- | ------- |
| 1   | Micheal |

Finally, let's try updating our table using the same idea, with the following script

```sql
UPDATE example3 SET Contacts[1]='(+234)81-0000-0000' WHERE names = 'Tolu';
```

Now, if we check our `example3` table again we will find out that the contact `(+234)81-1265-3347` has been changed to `(+234)81-0000-0000` in the table below:

```sql
SELECT * FROM example3
```

Our queried table:

| id  | names   | contacts[]                              |
| --- | ------- | --------------------------------------- |
| 1   | Tolu    | {(+234)81-0000-0000,(+234)81-1265-3347} |
| 2   | Micheal | {(+234)71-1700-3935,(+234)81-1905-0007} |
