---
Title: '<section>'
Description: 'Used for creating standalone sections which contains logically grouped contents in the webpage which does not have specific semantic element to represent it.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Structure'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<section>`** element is used for grouping logically related contents together typically with a [`<heading>`](https://www.codecademy.com/resources/docs/html/headings) in the document, which does not have specific semantic element to represent it. 

This element should only be used whenever there is no [semantic element](https://www.codecademy.com/resources/docs/html/semantic-html) to use instead.

## Syntax

```pseudo
<section attributes=""><!-- Place section content here. --></<section>
```

The `<section>` element can be selected with [attributes](https://www.codecademy.com/resources/docs/html/attributes), such as `class` or `style`.

## Example

In the example below, a familiar programming description is marked up with `<section>`:

```html
<h1>Programming paradigm</h1>
<section>
<h2>Object-Oriented Programming</h2>
<p>Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).</p>
</section>
<section>
<h2>Functional Programming</h2>
<p>Functional programming is a programming paradigm where programs are constructed by applying and composing functions. It is a declarative programming paradigm in which function definitions are trees of expressions that map values to other values, rather than a sequence of imperative statements which update the running state of the program.</p>
</section>
```
