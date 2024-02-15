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

**Entities** are character sequences placed in the text of an HTML document to print out reserved characters which may otherwise be interpreted as HTML code by a browser, or other special characters that would be difficult to generate with a typical keyboard. In fact, using reference numbers, an entity can represent any Unicode character. When parsing the HTML, a browser replaces the entity's character sequence with the character it represents.

## Syntax

Entities are case-sensitive and can take one of three forms.

The first form references an entity by name:

```pseudo
&name;
```

The second form references it by the decimal Unicode number:

```pseudo
&#number;
```

The third represents it with the hexadecimal Unicode number, often with leading zeros:

```pseudo
&#xnumber;
```

So the copyright entity (`©`) can be represented as `&copy;`, `&#169` or `&#x000A9;`.

## Entity Values

There are many HTML entities. The following are some common ones:

| Entity Name           | 1st Form   | 2nd Form  | 3rd Form    |
| --------------------- | ---------- | --------- | ----------- |
| Non-breaking space    | `&nbsp;`   | `&#160;`  | `&#x000A0;` |
| Less-than sign `<`    | `&lt;`     | `&#60;`   | `&#x0003C;` |
| Greater-than sign `>` | `&gt;`     | `&#62;`   | `&#x0003E;` |
| Ampersand `&`         | `&amp;`    | `&#38;`   | `&#x00026;` |
| Quote `"`             | `&quot;`   | `&#34;`   | `&#x00022;` |
| Apostrophe `'`        | `&apos;`   | `&#39;`   | `&#x00027;` |
| Copyright `©`         | `&copy;`   | `&#169;`  | `&#x000A9;` |
| Degree `°`            | `&deg;`    | `&#176;`  | `&#x000B0;` |
| Euro `€`              | `&euro;`   | `&#8364;` | `&#x020AC;` |
| Bullet character `•`  | `&bullet;` | `&#8226;` | `&#x02022;` |

More can be found in this [extensive HTML 5 entity reference](https://dev.w3.org/html5/html-author/charref).

## The Tab Entity

There is an entity `&Tab;` (or `&#9;`) which nominally produces a tab character. However, it will not behave as expected because HTML collapses whitespace where it appears in text with the exception of the non-breaking space entity, `&nbsp;`. So to render a tab in HTML text, it needs to be wrapped within a `<pre>` tag to preserve the whitespace.

```html
<p>The tab entity &Tab; in this sentence is collapsed.</p>

<pre>
  <p>The tab entity &Tab; in this sentence is preserved.</p>
</pre>
```

Output:

![Output for the tab entity code block above](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-entity-tab.png)

Alternatively, four `&nbsp;` entities can be used.

```html
<p>The Tab entity &Tab; in this sentence is collapsed.</p>

<p>The spaces &nbsp;&nbsp;&nbsp;&nbsp; in this sentence are preserved.</p>
```
