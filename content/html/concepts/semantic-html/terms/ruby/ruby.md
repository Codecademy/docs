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

The **`<ruby>`** tag is a semantic HTML element that represents small annotations usually used for showing the pronunciation of Japanese and East Asian characters. `<ruby>` can be used together with `<rt>` and/or `<rp>`.

The `<ruby>` tag entails one or more characters that require an explanation or pronunciation, the `<rt>` element provides the explanation or pronunciation, and the optional `<rp>` element provides what to show for browsers that lack support for annotations.

## Syntax

```html
<ruby>
  <!-- Contents go here -->
</ruby>
```

`<ruby>` wraps around the text that needs annotation.

## Example

This following example shows `<ruby>` being used with `<rt>` and `<rp>` tag:

```html
<ruby> ゆきひろ まつもと <rp>(</rp><rt>Yukihiro Matsumoto</rt><rp>)</rp> </ruby>
```

This will display the following:

![HTML ruby tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media/semantic-html-ruby.png)
