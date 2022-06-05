---
Title: 'JSON'
Description: 'JSON is a data format that is readable, writable, and parsable for both humans and machines.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'JSON'
  - 'Objects'
  - 'Data Structures'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

JavaScript Object Notation (JSON) is a data format that is readable, writable, and parsable for both humans and machines. JSON is based on the syntax of the third edition of [JavaScript](https://www.codecademy.com/resources/docs/javascript) (ECMA-262) that was released back in December 1999. However, it is language-independent. Many programming languages, such as [Python](https://www.codecademy.com/resources/docs/python), have implemented [libraries](https://www.codecademy.com/resources/docs/python/json-module) to parse and generate JSON-formatted data.

More can be learned about JSON by visiting [json.org](https://www.json.org/).

## Syntax

A JSON object contains a series of any number of comma-delimited name-value pairs inside curly brackets:

```pseudo
{
  "name1" : value1,
  "name2: : value2,
  "name3" : value3,
  .
  .
  .
  "nameN" : valueN
}
```

Where the names are strings and the values can be any one of JSON's basic data types:

- Number: A signed decimal number. JSON makes no distinction between integer and floating point.
- String: A sequence of zero or more Unicode characters enclosed in double quotes.
- Boolean: Either `true` or `false`.
- Array: An ordered, comma delimited, list of zero or more elements of one of JSON's data types, enclosed in square brackets.
- Object: A collection of name-value pairs inside curly brackets.
- `null`: An empty value represented by the word `null`.

Whitespace is ignored between names, values, and punctuation. JSON considers whitespace to be one of the four characters; space, tab, line feed, and carriage return.

JSON objects cannot contain comments.

An important point to note is that while it borrows from JavaScript-like syntax, JSON itself is not JavaScript.

## Example

Below is an example of a JSON object representing a vehicle:

```pseudo
{
  "make" : "Chevy",
  "model" : "Silverado",
  "miles" : 27500,
  "year" : 2020,
  "owner" : {
    "firstName" : "John",
    "lastName" : "Doe"
   },
  "features" : ["4WD", "Towing Package", "Lift Kit"],
  "lease" : false
}
```

## Bad Practices

Below are two points regarding what should be avoided when using JSON format:

- It is not useful to abide by an XML-like, "attribute vs. element" framework. JSON is only about "name:value"-pairs.
- While the nesting of inner-JSON objects is possible, going more than two levels deep could get complicated.
