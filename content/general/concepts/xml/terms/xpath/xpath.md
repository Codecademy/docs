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

XPath treats an XML document as a tree structure, much like folders stored on a disk drive. In fact, in it's simplest form, XPath expressions can resemble file paths. These file-path-like expressions are referred to as location paths. Each location path consists of a sequence of location steps seperated by slashes (`/`), and each location step has three components:

- an axis specifing what "direction" we're looking for a node.
- a node test specifing what node we want to match.
- zero or more predicates that add restrictions onto what node the expression will ultimatly match. (i.e. conditions the node has to satisfy in order to match.)

A location step's full syntax is:

```pseudo
axis-specifier::node-test[predicate]
```

The most common axes have abreviated syntax so the whole axis name doesn't need to be used. An example of this is the fact the child axis is the default so doesn't require an axis specifier at all.

### Axis Specifiers

XPath uses the following axis specifiers:

- `ancestor`
- `ancestor-or-self`
- `attribute` : `@a` is an abbreviation for `attribute::a`.
- `child` : The default axis. `a` is an abbrviation for `child::a`.
- `descendant`
- `descendant-or-self` : `//` is an abbreviation for `/descendant-or-self::node()/`
- `following`
- `following-sibling`
- `namespace`
- `parent` : `..` is an abbreviation for `parent::node()`
- `preceding`
- `preceding-sibling`
- `self` : `.` is an abbreviation for `self::node()`

### Node Tests

Node tests consist of specific node names, or more general expressions. The more general expressions include:

- `node()` or `*` matches any node at all.
- `comment()` matches an XML comment node.
- `text()` matches a text node excluding any children.
- `processing-instruction()` matches XML processing instructions.

### Predicates

Predicates define an expression that must evaluate true for the node test to succeed. There can be any number of predicates, and they are evaluated in order from left to right, i.e. `A[1][./@C = "1"]` matches only if the first `A` element has an attribute `C` equal to "1" whereas `A[./@C="1"][1]` matches the first `A` element that has an attribute `C` equal to "1". A predicate must have a numeric or boolean value. A predicate that has a numeric value is equivelant to specifying the position of the node to match, i.e. `A[5]` is the same as `A[position()=5]`. 

Location paths can be used inside predicates, and are evaluated relitive to the node being tested. so the `./@C` in `A[./@C="1"]` is looking to match the `C` attribute of the `A` element.

The following operators can be used inside of predicates in XPath 1.0:

- `|`, the union operator creates the union of two node sets.
- the boolean operators `and` & `or`.
- the boolean function `not()`
- mathematical operators: `+`,`-`,`*`,`div` (divide) and `mod`.
- the comparison operators `=`,`!=`,`<`,`>`,`<=` & `>=`

Predicates also have a number of functions avalible in XPath 1.0, the following are some of the more commonly used ones:

- Node functions
 - `count(node-set)` returns the number of nodes in `node-set`.
 - `last()` returns the position of the last macth of the current node test.
 - `position()` returns the numeric position of the current node. 




## Examples

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

Example XPath expressions include:

- `A/B/D`, the most basic type of XPath expresion. Each location step is separated by a slash.  The default axis is the child axis and `A`,`B` & `C` represent the element nodes we're matching. This expression matches all `D` elements that are children of `B` elements that are children of `A` elements. It would match both `D` elements in the example. The expression can be written in full expanded form as `child::A/child::B/child::D`
- `A//D`, also matches both `D` elements in the example, because the double slash (`//`) represents the descendant-or-self axis. This expression matches all `D` elemets that are descendants of the `A` element. The expanded form of the expression is `child::A/descendant-or-self::node()/child::D`
- `A//D[1]` adds a predicate (in the square brackets `[...]`) to the `D` node test. Using a number alone in the square brackets is a shorthand way of specifying the position of the element. This predicate specifies that we're only matching the first `D` descendant of `A`. The expanded form of the expression is `child::A/descendant-or-self::node()/child::D[position()=1]`
- `A//@C` the `@` indicates we're seaching along the attribute axis. In this case we're looking for all `C` attributes belonging to `A` or `A`'s descendants. This matches the two `C` attributes in the `B` elements in the example. The expanded form of the expression is `child::A/descendant-or-self::node()/attribute::C`
- `//*[../@C="3"]` The `*` is a wildcard that matches any node. `..` means the parent axis, in this case the parent of the node refrenced by the predicate. This expression matches any node in the document whose parent has a `C` attribute with a value of `3`. In the above case that is the second `D` element. The full expanded form of the expression is `/descenant-or-self::node()/child::node()[parent::node()/attribute::C="3"]`. 
- `//*[./@C="3"]` Is the same as the prior example, except that `.` means the self axis. In this case that refers to the node refrenced by the predicate. This expression matches any node in the document that has a `C` attribute with a value of `3`. In the above case that is the second `B` element. The full expanded form of the expression is `/descenant-or-self::node()/child::node()[self::node()/attribute::C="3"]`.



