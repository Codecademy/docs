---
Title: '<ruby>'
Description: 'Represents small annotations usually used for showing pronunciation of Japanese and East Asian characters.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Semantic'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<ruby>`** tag is a semantic HTML element that represents small annotations usually used for showing the pronunciation of Japanese and East Asian characters. `<ruby>` can be used together with `<rt>` and/or `<rp>`. The `<ruby>` entails one or more characters that require an explanation or pronunciation, an `<rt>` element that provides information, and an optional `<rp>` element which ascertains what to show to browsers that lacks support for annotations.

## Syntax

```html
<ruby>
  <!-- contents go here -->
</ruby>
```

## Example 1

A ruby annotation:

```html
<ruby> ゆきひろ <rt> Yukihiro </rt> </ruby>
```

## Example 2

This snippet code shows `<ruby>` being used with `<rt>` and `<rp>` tag:

```html
<ruby> まつもと <rp>(</rp><rt>Matsumoto</rt><rp>)</rp> </ruby>
```
