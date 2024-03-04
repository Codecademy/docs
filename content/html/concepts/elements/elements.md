---
Title: 'Elements'
Description: 'Elements are discrete components within an HTML document that generally consist of at least one tag but can have two tags with optional content.'
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

**Elements** are discrete components within an HTML document that generally consist of at least one tag but can have two tags with optional content. The tag name determines how the element will be rendered in the HTML document. Elements can also have any number of [attributes](https://www.codecademy.com/resources/docs/html/attributes).

## Syntax

Elements can be grouped, whether or not they can support content. Elements that can't have any content are void and self-closing elements. If an element has attributes, attributes must be attached to the opening tag of the element.

### HTML Element with Content

```pseudo
<opening-tag> content </closing-tag>
```

Most HTML elements include opening and closing [tags](https://www.codecademy.com/resources/docs/html/tags), enclosing the element's content. The content of an element is optional and can be any of the following:

- Text content, which creates raw text elements. For example `<title>`, [`<i>`](https://www.codecademy.com/resources/docs/html/elements/i), [`<label>`](https://www.codecademy.com/resources/docs/html/elements/label), [`<li>`](https://www.codecademy.com/resources/docs/html/elements/li) elements can only hold text content.
- Other elements, creating nested elements (see below). Nested elements can also have text content along with the elements.
- Comments only or in combination with text content and nested elements.

In rare cases, the opening tag can be omitted. For example, the opening tag of [`<head>`](https://www.codecademy.com/resources/docs/html/elements/head) and `<body>` can be left out if they are empty.

### Void HTML Element

```pseudo
<void-element-tag>
```

Some elements cannot have content; therefore, they do not require a closing tag. These elements are called void or empty elements.

### Self-Closing HTML Element

```pseudo
<self-closing-tag />
```

Adding a closing slash (`/`) at the end of the void element's opening tag is allowed, which creates a self-closing element. Turning void elements into self-closing is up to personal preference, but it improves compatibility with XHTML. The following elements are void elements:

- `<area>`
- `<base>`
- [`<br>`](https://www.codecademy.com/resources/docs/html/elements/br)
- [`<col>`](https://www.codecademy.com/resources/docs/html/elements/col)
- [`<embed>`](https://www.codecademy.com/resources/docs/html/elements/embed)
- [`<hr>`](https://www.codecademy.com/resources/docs/html/elements/hr)
- [`<img>`](https://www.codecademy.com/resources/docs/html/elements/img)
- [`<input>`](https://www.codecademy.com/resources/docs/html/elements/input)
- [`<link>`](https://www.codecademy.com/resources/docs/html/elements/link)
- [`<meta>`](https://www.codecademy.com/resources/docs/html/elements/meta)
- [`<source>`](https://www.codecademy.com/resources/docs/html/elements/source)
- [`<track>`](https://www.codecademy.com/resources/docs/html/elements/track)
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

The image below shows these HTML elements as they appear in the browser:

![Screenshot of rendered HTML elements](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-elements-example.png)
