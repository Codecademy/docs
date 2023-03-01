---
Title: 'Elements'
Description: 'An HTML element is a piece of content in an HTML document.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Attributes'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

An HTML element is a piece of content in an HTML document.

## Syntax

Elements consist of at least one tag but can have two tags with optional content. The tag name determines how the element will be rendered in the HTML document. Elements can also have [attributes](https://www.codecademy.com/resources/docs/html/attributes).

### HTML Element

```pseudo
<opening-tag> content </closing-tag>
```

Most HTML elements include opening and closing [tags](https://www.codecademy.com/resources/docs/html/tags), enclosing the element's content. The content of an element is optional and can be text content, other elements or comments.

### Void HTML Element

```pseudo
<void-element-tag>
```

Some elements cannot have content; therefore, they do not require a closing tag. These elements are called void or empty elements.

### Self Closing HTML Element

```pseudo
<self-closing-tag />
```

Adding a closing slash (`/`) at the end of the void element's opening tag is allowed, which creates a self-closing element. Turning void elements into self-closing is up to personal preference, but it improves compatibility with XHTML. The following elements are void elements:

- `<area>`
- `<base>`
- [`<br>`](https://www.codecademy.com/resources/docs/html/elements/br)
- `<col>`
- [`<embed>`](https://www.codecademy.com/resources/docs/html/elements/embed)
- [`<hr>`](https://www.codecademy.com/resources/docs/html/elements/hr)
- [`<img>`](https://www.codecademy.com/resources/docs/html/elements/img)
- [`<input>`](https://www.codecademy.com/resources/docs/html/elements/input)
- [`<link>`](https://www.codecademy.com/resources/docs/html/elements/link)
- [`<meta>`](https://www.codecademy.com/resources/docs/html/elements/meta)
- [`<source>`](https://www.codecademy.com/resources/docs/html/elements/source)
- `<track>`
- `<wbr>`

## Nested Elements

HTML elements can be nested, meaning that elements can contain other elements inside or nested. All HTML documents consist of nested HTML elements.

The following example contains four HTML elements: `<html>`, `<body>`, `<h1>`, and `<p>`:

```html
<!DOCTYPE >
<html>
  <body>
    <h1>Blog Post</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```
