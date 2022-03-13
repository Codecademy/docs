---
Title: 'Entities'
Description: 'Entities are character sequences placed in the text of an HTML document to print out reserved or other special characters.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Characters'
  - 'Symbol'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

Entities are character sequences placed in the text of an HTML document to print out special characters which may otherwise be interpreted as HTML code by a browser, or other characters that would be difficult to generate with a typical keyboard. In fact, using refrence numbers, an entity can represent any unicode character. When parsing the HTML, a browser replaces the entity's character sequence with the character it represents.

## Syntax

Entities can take one of three forms.

The first form references an entity by name:

```pseudo
&name;
```

The second form references it by the decimal unicode number:

```pseudo
&#number;
```

The third represents it with the hexadecimal unicode number, often with leading zeros:

```pseudo
&#xnumber
```

So the `©` entity can be represented as `&copy;`, `&#169` or `&#x000A9;`.

## Entity Values

There are many, many HTML entities. The following are some common ones:

- `&nbsp;` or `&#160;`: non-breaking space.
- `&lt` or `&#60;` : The `<` character.
- `&gt` or `&#62;` : The `>` character.
- `&amp;` or `&#38;` : The `&` character.
- `&quot;` or `&#34;` : The `"` character.
- `&apos;` or `&#39;` : The `'` character.
- `&copy;` or `&#169;` : The `©` character.
- `&deg;` or `&#176;` : The `°` character.
- `&euro;` or `&#8364;` : The `€` character.
- `&bullet;` or `&#8226;` : The `•` character.

Here is a [extensive HTML 5 entity reference](https://dev.w3.org/html5/html-author/charref). Note that entity names are case sensitive.

## The Tab Entity

There is an entity `&Tab;` (or `&#9;`) which nominally produces a tab character. However it will not behave as expected because HTML collapses whitespace where it appears in text with the exception of the `&nbsp;` entity. So to render a tab in HTML text it needs to be used within a `<pre>` tag to preserve whitespace. Alternatively, four `&nbsp;` entities can be used.
