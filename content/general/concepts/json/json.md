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

JavaScript Object Notation (JSON) is a data format that is readable, writable, and parsable for both humans and machines. JSON is based on the syntax of the third edition of [JavaScript](https://www.codecademy.com/resources/docs/javascript) (ECMA-262) that was released back in December 1999. However, it is language-independent.

More can be learned about JSON by visiting [json.org](https://www.json.org/).

## Syntax

```pseudo
{
  "propertyOne": "valueOne",
  "propertyTwo": "valueTwo",
  "propertyThree": "valueThree",
}
```

As a format, JSON is textual, minimal, and universal. Multiple JSON objects can be collected in an array-like sequence:

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

An important point to note is that while it borrows from JavaScript-like syntax, JSON itself is not JavaScript.

## Bad Practices

Below are a few points regarding what should be avoided when using JSON format:

- It is not useful to abide by an XML-like, "attribute vs. element" framework. JSON is only about "name:value"-pairs.
- While the nesting of inner-JSON objects is possible, going more than two levels deep could get complicated.
