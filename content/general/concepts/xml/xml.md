---
Title: 'XML'
Description: 'XML (Extensible Markup Language) is used to define the content and structure of data in a document.'
Subjects:
  - 'Code Foundations'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Development'
  - 'Tags'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-analyst'
---

**XML (Extensible Markup Language)** is used to define the content and structure of arbitrary data in a document. It is a human-readable text-based markup language used to store and transmit many different types of data, from individual records in a database, to things as complex as a Microsoft Word document. XML is primarily defined in the [XML 1.0 Specification](http://www.w3.org/TR/REC-xml) from the [World Wide Web Consortium](https://www.w3.org/standards/) (W3C). XML was designed for simplicity, general application, and usability across the Internet. While document-based, it is widely used to store all types of arbitrary data structures.

Many computer languages, such as [Python](https://www.codecademy.com/resources/docs/python) or [Java](https://www.codecademy.com/resources/docs/java), provide their own libraries or modules for processing XML documents. XML has proved to be a popular format for [serializing](https://www.codecademy.com/resources/docs/general/serialization) objects.

An XML document can consist of the following pieces:

## Elements

An element is defined with an opening tag with an arbitrary name enclosed with angle brackets `<...>` and a closing tag defined by the same name enclosed in angle brackets and a leading slash `</...>`. Between these two tags can be an arbitrary number of other elements or a text value. An element can combine opening and closing tags by enclosing the tag name with angle brackets and a trailing slash `<.../>`. A well-formed XML document has only one outermost element that contains the rest of the document's content.

The following are all valid elements:

```pseudo
<tag>text</tag>
<notext />
<outer><inner /></outer>
```

Element names are case sensitive and cannot contain spaces or special characters and cannot begin with a digit.

## Attributes

Attributes consist of name-value pairs that can be included in an opening tag of an element, after the element's name. Any attribute name can appear only once and can only have one value. The following are examples of attributes:

```pseudo
<tag attribute="value" />
<tag attr1="value 1" attr2="value 2" />
```

Attribute names have the same restrictions as element names.

## Comments

XML permits comments anywhere except inside element tags. They are enclosed between the tags `<!--` and `-->` and do not affect the parsing of the XML document. They behave exactly like [HTML comments](https://www.codecademy.com/resources/docs/html/comments).

## Entities

For rendering special characters, XML uses [entities like HTML](https://www.codecademy.com/resources/docs/html/entities). Entities can be used inside attribute and text values, but not in element and attribute names. They are required for some special characters. Unlike HTML, XML only has five predefined entities:

| Name              |  Entity  | Character |
| ----------------- | :------: | :-------: |
| Quotation mark    | `&quot;` |    `"`    |
| Ampersand         | `&amp;`  |    `&`    |
| Apostrophe        | `&apos;` |    `'`    |
| Less-than sign    |  `&lt;`  |    `<`    |
| Greater-than sign |  `&gt;`  |    `>`    |

`&amp;` and `&lt;` are required when rendering those characters in any content. `&quot;` and `&apos;` are required when rendering those characters in attribute values.

Like HTML, XML allows numeric entity references, allowing most Unicode characters to be used in the content. These are used in the following way:

- `&#number;`: where `number` is the character's decimal Unicode number.
- `&#xnumber;`: where `number` is the character’s hexadecimal Unicode number.

So the `©` copyright character can be represented as `&#169;` or `&#xA9;`.
