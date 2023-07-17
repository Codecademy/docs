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

The **`<ruby>`** tag is a semantic HTML element that represents small annotations usually used for showing pronunciation of Japanese and East Asian characters. You can use `<ruby>` together with `<rt>` /or `<rp>`. The `<ruby>` entails one or more chacters which require an explanation or pronunciation, and an `<rt>` element that provides that information, and an optional `<rp>` element which ascertains what to show to browsers that lack support for annotations.

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
