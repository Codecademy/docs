---
Title: 'Query Attributes'
Description: 'Query attributes are attributes that can be defined by clients that apply to the next statement sent to the server for execution.'
Subjects:
  - 'Computer Science'
  - 'Information Technology'
Tags:
  - 'Database'
  - 'MySQL'
  - 'Queries'
CatalogContent:
  - 'learn-sql'
  - 'paths/full-stack-engineer'
---

**Query attributes** are attributes that can be defined by clients that apply to the next statement sent to the server for execution.

- Attributes are defined prior to sending the statement.
- Attributes exist until statement execution ends, at which point the attribute set is cleared.
- While attributes exist, they can be accessed on the server side.

The use of attribute queries can make it easier when dealing with very long attribute names multiple times within a statement. For example:

- A web application produces pages that generate database queries, and for each query must track the URL of the page that generated it.
- An application passes extra processing information with each query, for use by a plugin such as an audit plugin or query rewrite plugin.

## Subsection 1

[Text about subsection 1]

## Subsection 2

[Text about subsection 2]

## Subsection n

[Text about subsection n]

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```