---
Title: 'JSON'
Description: 'JSON is a data format that is readable, writable, and parsable for both humans and machines.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'JSON'
  - 'Objects'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

<link rel="canonical" href="https://www.codecademy.com/article/what-is-json" />

**JavaScript Object Notation (JSON)** is a data format that is readable, writable, and parsable for both humans and machines. JSON is based on the syntax of the third edition of [JavaScript](https://www.codecademy.com/resources/docs/javascript) ([ECMA-262](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)) that was released back in December 1999. However, it is language-independent.

JSON is commonly used for transferring data between clients and servers for tasks such as web browsing or form submission. Companies also use JSON to allow their data to use in other applications via [API](https://www.codecademy.com/resources/docs/general/api). Some examples include:

- [google maps](https://developers.google.com/maps/documentation/geocoding/start)
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

Data is stored in an object, depicted by two curly braces `{``}`, and name-value pairs are separated by a colon `:`. The pairs themselves are separated by a comma `,`. The following are [data types](https://www.codecademy.com/resources/docs/general/data-types) that can be used:

- [Strings](https://www.codecademy.com/resources/docs/general/string) (double-quoted)
- [Numbers](https://www.codecademy.com/resources/docs/general/number) (integer or floating-point)
- [Objects](https://www.codecademy.com/resources/docs/general/object) (name-value pairs)
- [Arrays](https://www.codecademy.com/resources/docs/general/array) (comma-delimited)
- [Booleans](https://www.codecademy.com/resources/docs/general/boolean) (true or false)
- null types

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
- Trailing commas are forbidden
- Even thought JavaScript names are not this strict, JSON property names _must_ be in double-quotes.

## Bad Practices

Below are a few points regarding what should be avoided when using JSON format:

- It is not useful to abide by an XML-like, "attribute vs. element" framework. JSON is only about "name-value" pairs.
- While the nesting of inner-JSON objects is possible, going more than two levels deep could get complicated.

## Example

The following JSON example uses one level of nested objects, an array, and each valid data type:

```pseudo
{
  "student": {
    "name": "Codey",
    "age": 30,
    "fullTime": true,

    "languages": [ "JavaScript", "HTML", "CSS" ],
    "GPA": 3.9,
    "favoriteSubject": null
  }
}
```
