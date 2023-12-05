---
Title: 'JSON'
Description: 'JSON is a data format that is readable, writable, and parsable for both humans and machines.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'JSON'
  - 'Objects'
  - 'Properties'
  - 'Values'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

<link rel="canonical" href="https://www.codecademy.com/article/what-is-json" />

**JavaScript Object Notation (JSON)** is a language-independent data format that is readable, writable, and parsable for both humans and machines. JSON is based on the syntax of the third edition of a [JavaScript](https://www.codecademy.com/resources/docs/javascript) standard known as ([ECMAScript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)). Many programming languages, such as [Python](https://www.codecademy.com/resources/docs/python), have implemented [libraries](https://www.codecademy.com/resources/docs/python/json-module) to parse and generate JSON-formatted data. JavaScript can parse JSON directly with the [`JSON` object](https://www.codecademy.com/resources/docs/javascript/json).

In addition to JavaScript, JSON uses some conventions from the [C](https://www.codecademy.com/resources/docs/c)-descendent languages, including C , [C++](https://www.codecademy.com/resources/docs/cpp), and [Java](https://www.codecademy.com/resources/docs/java).

JSON is commonly used for transferring data between clients and [servers](https://www.codecademy.com/resources/docs/general/server) for tasks such as web browsing or form submission. Some companies also use JSON to allow their data to be accessed in other applications via [API](https://www.codecademy.com/resources/docs/general/api). Some examples include:

- [Google Maps](https://developers.google.com/maps/documentation/geocoding/start)
- [Google Auth 2.0 Authentication](https://developers.google.com/identity/protocols/oauth2/service-account)
- [Meta (formerly Facebook) Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api)
- [Spotify Music Web API](https://developer.spotify.com/documentation/web-api/)
- [LinkedIn Profile API](https://docs.microsoft.com/en-us/linkedin/shared/integrations/people/profile-api)

More can be learned about JSON by visiting [json.org](https://www.json.org/).

## Syntax

```pseudo
{
  "propertyOne": "valueOne",
  "propertyTwo": "valueTwo",
  "propertyThree": "valueThree",
}
```

Data is stored in an object, depicted by a pair of curly braces `{ }`, and name-value pairs are separated by a colon `:`. The pairs themselves are separated by a comma `,`. The following are [data types](https://www.codecademy.com/resources/docs/general/data-types) that can be used:

- [Array](https://www.codecademy.com/resources/docs/general/data-structures/array): An ordered, comma delimited, list of zero or more elements of one of JSON's data types, enclosed in square brackets.
- [Boolean](https://www.codecademy.com/resources/docs/general/data-types/boolean): Either `true` or `false`.
- [Number](https://www.codecademy.com/resources/docs/general/data-types/number): A signed decimal number. JSON makes no distinction between integer and floating point.
- [Object](https://www.codecademy.com/resources/docs/general/data-structures/object): A collection of name-value pairs inside curly brackets.
- [String](https://www.codecademy.com/resources/docs/general/data-types/string): A sequence of zero or more Unicode characters enclosed in double quotes.
- `null`: An empty value represented by the word `null`.

[Whitespace](https://www.codecademy.com/resources/docs/general/whitespace) (e.g., spaces, tabs, line feeds, and carriage returns) is ignored between names, values, and punctuation. The following four characters are all considered whitespace: space, tab, line feed, and carriage return.

JSON objects cannot contain [comments](https://www.codecademy.com/resources/docs/general/comment).

Multiple JSON objects can be collected in an array-like sequence:

```pseudo
[
  {
    "propertyOne": "valueOne",
    "propertyTwo": "valueTwo",
    "propertyThree": "valueThree",
  },
  {
    "propertyA": "valueA",
    "propertyB": "valueB",
    "propertyC": "valueC",
  }
]
```

A few important points to note about JSON syntax:

- While it is derived from from the JavaScript language, JSON itself is not JavaScript.
- Trailing commas are forbidden.
- Although JavaScript names are not this strict, JSON property names must be in double quotes.

## Bad Practices

Below are two points regarding what should be avoided when using JSON format:

- It is not useful to abide by an [XML](https://www.codecademy.com/resources/docs/general/xml)-like, "attribute vs. element" framework. JSON is only about name-value pairs.
- While the nesting of inner-JSON objects is possible, going more than two levels deep could get complicated.

## Example

The following JSON example uses one level of nested objects, an array, and each valid data type:

```pseudo
{
  "make" : "Chevy",
  "model" : "Silverado",
  "miles" : 27500.5,
  "year" : 2020,
  "owner" : {
    "firstName" : "John",
    "lastName" : "Doe"
   },
  "features" : ["4WD", "Towing Package", "Lift Kit"],
  "lease" : false,
  "customizations": null
}
```
