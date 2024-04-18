---
Title: 'SPARQL'
Description: 'A language for querying RDF data.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data'
  - 'Semantic'
  - 'Metadata'
CatalogContent:
  - 'paths/data-science-foundations'
  - 'paths/data-science-nlp'
---

**SPARQL Protocol and RDF Query Language (SPARQL)** is a language used to retrieve and manipulate data stored in [RDF](https://www.codecademy.com/resources/docs/general/semantic-technologies/rdf).

## Query Patterns

A **query pattern** is a set of RDF triples with one or more terms in each triple replaced by a variable. SPARQL uses query patterns to identify which data to retrieve when running a query.

A query pattern is introduced with the keyword `WHERE`. The following is an example of a query pattern with a variable as the object term:

```pseudo
WHERE {
  <http://books.com/books#pachinko> <http://document-ontology.org/ontology#hasAuthor> ?x
}
```

As seen above, variables in SPARQL begin with the character `?`.

A query pattern either matches or does not match any given RDF triple. There is a match if, and only if, there is a triple within the query pattern that shares all the same terms with the other triple, with the exception of any variables.

For instance, the following triple matches the example query pattern given above:

```pseudo
<http://books.com/books#pachinko> <http://document-ontology.org/ontology#hasAuthor> <https://www.minjinlee.com/about>.
```

Conversely, the following triple does not not match the example query pattern, since it contains a non-matching subject term:

```
<http://books.com/books#mosquitoCoast> <http://document-ontology.org/ontology#hasAuthor> <https://www.paultheroux.com/bio>.
```

## Query Forms

The following keywords are used to implement different types of queries, or **query forms**. Query forms differ in what information they return based on a collection of RDF data.

For the example queries below, assume that the RDF data to be queried is as follows:

```
@base <http://books.com/books#>.
@prefix doc: <http://document-ontology.org/ontology#>.

<pachinko>
  doc:authoredBy <https://www.minjinlee.com/about>;
  doc:title      "Pachinko";
  doc:soldCopies 1276201.

<mosquito-coast>
  doc:authoredBy <https://www.paultheroux.com/bio>;
  doc:title      "The Mosquito Coast";
  doc:soldCopies 2661988.

<gesture-life>
  doc:authoredBy <https://en.wikipedia.org/wiki/Chang-Rae_Lee>;
  doc:title      "A Gesture Life"
  doc:soldCopies 87740.
```

### `SELECT`

A **`SELECT`** query returns some of the values of the terms in the RDF data that match with the variables of the query pattern defined within the query. Which of these values will be returned is specified in the `SELECT` clause.

For example, the following query will return the values matching `?title` in the query pattern:

```
PREFIX doc: <http://document-ontology.org/ontology#>
SELECT ?title
WHERE {
  ?x doc:title ?title
}
```

This results in the output:

| ?title |
|:-:|
| "Pachinko" |
| "The Mosquito Coast" |
| "A Gesture Life" |

The special character `*` can be used to return the values matching all variables in the query pattern:

```
PREFIX doc: <http://document-ontology.org/ontology#>
SELECT *
WHERE {
  :gesture-life ?x ?y
}
```

This results in the output:

|?x|?y|
|:-:|:-:|
|doc:authoredBy|https://en.wikipedia.org/wiki/Chang-Rae_Lee|
|doc:title|"A Gesture Life"|
|doc:soldCopies|87740|

### `ASK`

An **`ASK`** query returns a value of `true` or `false`. If there are triples in the RDF data matching the query pattern, `true` will be returned. Otherwise, `false` will be returned.

Note that query patterns within `ASK` queries do not need to be introduced with a `WHERE` clause.

The following query returns `true`:

```
PREFIX doc: <http://document-ontology.org/ontology#>
ASK {
  ?x ?y "Pachinko"
}
```

### `CONSTRUCT`

A **`CONSTRUCT`** query returns a set of triples based on the query pattern and a template provided in the `CONSTRUCT` clause. The query will take the terms that match the query pattern and insert them into the template to create a new set of triples.

For example, the following `CONSTRUCT` query would return a set of triples asserting that each object in the RDF data is a book:

```
PREFIX doc: <http://document-ontology.org/ontology#>
CONSTRUCT {
  ?x rdf:type doc:isBook
}
WHERE {
  ?x ?y ?z
}
```

This results in the following output:

```
@base <http://books.com/books#>.
@prefix doc: <http://document-ontology.org/ontology#>.

<pachinko> rdf:type doc:isBook.
<mosquito-coast> rdf:type doc:isBook.
<gesture-life> rdf:type doc:isBook.
```

### `DESCRIBE`

A **`DESCRIBE`** query returns a set of triples that describe either an entire set of RDF data or particular terms within that data. The exact information returned by a `DESCRIBE` query is not guaranteed, but rather depends on the implementation of specific SPARQL query processers.

An example of a `DESCRIBE` query for an entire set of RDF data is as follows:

```
DESCRIBE <http://books.com/books#>
```

This query would return some triples describing the data located the IRI within the query.

To create a query that describes a particular term within this data, a query pattern within a `WHERE` clause would be used:

```
PREFIX doc: <http://document-ontology.org/ontology#>
DESCRIBE ?x
WHERE {
  ?x doc:title "A Gesture Life"
}
```

This query would return some triples describing the term `<gesture-life>` within our sample data.

## Filters

**Filters** are clauses containing boolean expressions that can be used to restrict the space of matches for a given query pattern. Specifically, a filter eliminates triples that contain terms which, when substituted into the filter clause, result in the expression evaluating as `false` or throwing an error.

Filters are specified in a query pattern within a `WHERE` clause by using the keyword `FILTER`, as follows:

```
WHERE {
	# some query pattern goes here
	FILTER ()
}
```

The query will first match the data to the pattern above the `FILTER` clause, and then further restrict those matches based on the content of the filter.

### Functions and Operators Within Filters

SPARQL includes many functions and operators that can be used within a `FILTER` clause to create boolean expressions. Some examples are given below:

- Arithmetic functions and logical operators: For example, `=`, `!=` (inequality), `>`, `>=`, `+`, `*`, `||` (logical OR), and `&&` (logical AND).
  - Example: `FILTER (?x >= ?y * ?z)`
- `IN` and `NOT IN`: Tests whether a value is contained within a list of other values.
  - Example: `FILTER (?x IN (13, 14, 15))
- `CONTAINS`: Tests whether a string is contained within another string.
  - Example: `FILTER (CONTAINS("gmail.com", ?x))`
- `CONCAT`: Concatenates multiple strings together.
  - Example: `FILTER (CONTAINS(CONCAT(?x , ".com"), ?y))`

## Solution Modifiers

A **solution modifier** is a clause that changes the final output of a SPARQL query. Solution modifiers are applied outside of the query pattern to the set of matching solutions from that query pattern, altering the final data returned to the user.

Some important types of solution modifiers are given below:

- `ORDER BY`: Alters the order of a solution. `DESC` can be used to place solutions in a descending order based on a given variable, otherwise the default order is ascending.
  - Example: `ORDER BY DESC(?x)`
- `LIMIT`: Limits the number of values returned for a solution.
  - Example: `LIMIT 15`
- `OFFSET`: Skips a certain number of values for a solution (only used together with `ORDER BY`).
  - Example: `OFFSET 5`
