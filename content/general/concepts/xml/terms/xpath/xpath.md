---
Title: 'XPath'
Description: 'XPath is a language used to query different parts of an XML document.'
Subjects:
  - 'Code Foundations'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Development'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-analyst'
---

XPath is a language used to query different parts of an [XML](https://www.codecademy.com/resources/docs/general/xml) document. There are several versions of the secification from the [World Wide Web Consortium](https://www.w3.org/) (W3C):

- [XPath 1.0](https://www.w3.org/TR/1999/REC-xpath-19991116/) was introduced in 1999 and is still the most widly implemented version.
- [XPath 2.0](https://www.w3.org/TR/xpath20/) was introduced in 2007, with a second edition in 2010. It offered considerable revisions primarily around a richer type system, and is a subset of version 1.0 of the more expansive XQuery language.
- [XPath 3.0](https://www.w3.org/TR/xpath-30/) was introduced in 2014 and is a subset of XQuery 3.0.
- [XPath 3.1](https://www.w3.org/TR/xpath-31/) was introduced in 2017 with additional data types to support JSON.

XPath is implemented via libraries for many different programming languages, such as [Python](https://www.codecademy.com/resources/docs/python), [Java](https://www.codecademy.com/resources/docs/java) and [JavaScript](https://www.codecademy.com/resources/docs/javascript). If a language offers tools for any sort of XML processing, it will probably offer support for using some version of XPath to query XML documents. 

## Basic Syntax

XPath treats an XML document as a tree structure, much like folders stored on a disk drive. In fact, in it's simplest form, XPath expressions can resemble file paths. These file-path-like expressions are referred to as location paths. Each location path consists of a sequence of location steps, and each location step has three components:

- an axis specifing what "direction" we're looking for a node.
- a node test specifing what node we want to match.
- zero or more predicates that add restrictions onto what node the expression will ultimatly match. (i.e. conditions the node has to satisfy in order to match.)

Consider the following XML document:

```pseudo
<A>
  <B C="1">
    <D E="2"/>
  </B>
  <B C="3">
    <D F="4"/>
  </B>
</A>
```

Example expressions include:

- `A/B/D`, the most basic type of XPath expresion. The slashes represent the child axis, and `A`,`B` & `C` represent the element nodes we're matching. This matches all `D` elements that are children of `B` elements that are children of `A` elements. It would match both `D` elements in the example.
- `A//D`, also matches both `D` elements in the example, because the double slash (`//`) represents the descendant-or-self axis. This expression matches all `D` elemets that are descendants of the `A` element.
- `A//D[1]` adds a predicate (in the square brackets `[...]`) to the `D` node test. This predicate specifies that we're only matching the first `D` descendant of `A`.
- `A//@C` adding the `@` before the node test means we're seaching along the attribute axis. In this case we're looking for all `C` attributes belonging to `A` or `A`'s descendants. This matches the two `C` attributes in the `B` elements in the example.


