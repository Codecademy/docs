---
Title: 'JSON'
Description: 'JSON (JavaScript Object Notation) is a human readable notation used to store and transmit data objects.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Data Structures'
  - 'Development'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

JSON (JavaScript Object Notation) is a human readable notation used to store and transmit data objects. It stores data as attribute-value pairs and [arrays](https://www.codecademy.com/resources/docs/general/array). It is a popular data format to exchange data electronically and has multiple uses, particularly in web applications.

JSON was first developed in the early 2000s as a means of server-to-browser communication without the necessity for browser plug-ins. It was standardized in 2017 as ECMA-404. While derived from [JavaScript](https://www.codecademy.com/resources/docs/javascript), JSON is language independent and many programming languages, such as [Python](https://www.codecademy.com/resources/docs/python), have implemented [libraries](https://www.codecademy.com/resources/docs/python/json-module) to parse and generate JSON-formatted data.

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

- Number: A signed decimal number. JSON makes no distiction between integer and floating point.
- String: A sequence of zero or more Unicode characters enclosed in double quotes.
- Boolean: Either `true` or `false`.
- Array: An ordered, comma delimited, list of zero or more elements of one of JSON's data types, enclosed in square brackets.
- Object: A collection of name-value pairs inside curly brackets.
- `null`: An empty value represented by the word `null`.

Whitespace is ignored between names, values, and punctuation. JSON considers whitespace to be one of the four characters; space, tab, line feed, and carrage return.

JSON objects cannot contain comments.

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
  "features" : ["4WD","Towing Package","Lift Kit"],
  "lease" : false
}
```




