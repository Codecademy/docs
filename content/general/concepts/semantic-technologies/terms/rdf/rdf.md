---
Title: 'RDF'
Description: 'A language for representing semantic data.'
Subjects:
  - 'Data Science'
Tags:
  - 'Data'
  - 'Semantic'
  - 'Metadata'
  - 'Tuples'
CatalogContent:
  - 'paths/data-science-foundations'
  - 'paths/data-science-nlp'
---

**Resource Description Framework (RDF)** is a language for representing information. All data within the suite of semantic technologies is represented in RDF.

## RDF Triples

RDF represents data in the format of **triples** &mdash; ordered sets of three elements. These elements signify a subject, a predicate, and an object.

An RDF triple can therefore be represented as follows:

```pseudo
subject, predicate, object
```

- _`subject`_: The element which the triple says something about.
- _`predicate`_: A feature or property that applies to `subject`.
- _`object`_: The value of the feature or property represented by `predicate`.

As an illustration, consider the sentence 'The novel _Pachinko_ was written by Min Jin Lee'. This sentence conveys some information about _Pachinko_, specifically: that it has the characteristic of having an author, and that this author is Min Jin Lee. This information can be represented using the following triple:

```pseudo
Pachinko, hasAuthor, Min Jin Lee
```

### Triple Terms

In contrast to the above examples, the elements in a valid RDF triple cannot just be any values at all, such as arbitrary strings (e.g., `hasAuthor`). Rather, each of these elements can only be particular values:

- A `subject` is either an **International Resource Identifier (IRI)**, a **blank node**, or a **quoted triple**.
- A `predicate` must be an IRI.
- An `object` is either an IRI, a blank node, a quoted triple, or a **literal**.

Each of these terms is explained below:

- _IRI_: A generalization of [URI](https://www.codecademy.com/resources/docs/general/uri), IRIs identify and link to resources on private and public networks.
- _Quoted triple_: An RDF triple used within a different RDF triple. Quoted triples allow statements to be made within RDF about other RDF statements.
- _Literal_: A value representing a number, string, boolean, date/time, or other simple values.
- _Blank node_: Do not specify a particular entity. Blank nodes allow stating that something stands in a given relationship without identifying what that thing is.

The following is an example of a triple using IRIs for the subject and predicate, and a literal (integer value) for the object:

```pseudo
https://www.goodreads.com/en/book/show/130520, http://document-ontology.org/ontology#soldCopies, 2661988
```

## RDF Serializations

Valid RDF must be written in a concrete RDF syntax, also known as an **RDF serialization**. Two important RDF serializations are briefly described below.

### Turtle

**Turtle** is a compact RDF syntax intended to make RDF simple for humans to read and write.

The most basic way to write RDF statements in Turtle is to enclose IRIs in angle brackets and end each statement with a period, as shown below:

```pseudo
<http://books.com/books#pachinko> <http://document-ontology.org/ontology#hasAuthor> <https://www.minjinlee.com/about>.
```

The above example represents the triple about _Pachinko_ using IRIs that correspond to the subject (_Pachinko_), predicate (hasAuthor), and object (Min Jin Lee).

However, Turtle allows for simpler formatting of statements by using IRI prefixes and grouping predicates and objects under a common subject, as shown below:

```pseudo
@base <http://books.com/books#>.
@prefix doc: <http://document-ontology.org/ontology#>.

<pachinko>
  doc:authoredBy <https://www.minjinlee.com/about> ;
  doc:soldCopies 1276201.

<mosquito-coast>
  doc:authoredBy <https://www.paultheroux.com/bio> ;
  doc:soldCopies 2661988.
```

The above example defines prefixes for IRIs that are used multiple times, a shorthand notation useful for improving readability and writing RDF more efficiently. Statements are also grouped under a common subject for the same reasons.

Turtle documents are saved with the extension `.ttl`.

### N-Triples

**N-Triples** is a simple RDF syntax that is a subset of Turtle. This means that anything written in N-Triples is valid in Turtle, but not vice-versa. N-Triples simplifies Turtle to allow RDF to be more compressible and quickly parsable by other technologies that read RDF documents.

Statements written in N-Triples must use the simple syntax given in the first example of Turtle. The second example, which uses prefixes and grouping predicates, is not valid N-Triples.

N-Triples documents are saved with the extension `.nt`.
