---
Title: '<rb>'
Description: 'Representing the base component in ruby annotations for East Asian text, its use has declined and is now deprecated.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Semantic'
  - 'Tags'
  - 'Obsolete'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<rb>`** element designates the base text for ruby annotations in East Asian languages. It must be within [`<ruby>`](https://www.codecademy.com/resources/docs/html/semantic-html/ruby) tags and is often paired with [`<rt>`](https://www.codecademy.com/resources/docs/html/semantic-html/rt) for pronunciation guides and `<rp>` for fallback rendering.

> **Note:** The `<rb>` tag is deprecated, meaning it's no longer recommended for use in new projects. Instead, characters can be written directly within the `<ruby>` tags.

## Syntax

```html
<ruby>
  <rb>Base text goes here</rb>
  <rp>(</rp> <rt>Annotation text goes here</rt> <rp>)</rp>
</ruby>
```

## Example

The example below showcases how the `<rb>` tag is used to transliterate the Chinese characters meaning `'I like to write code'` inside a `<ruby>` element.

```html
<ruby>
  <rb>我</rb><rt>I</rt> <rb>喜欢</rb><rt>like</rt> <rb>写</rb><rt>to write</rt>
  <rb>程序</rb><rt>code</rt>
</ruby>
```

This is what it looks like in the browser:

![Output of the above code with English translations](https://raw.githubusercontent.com/Codecademy/docs/main/media/semantic-html-rb-example-1.png)

Another approach is to replace the English translations with Pinyin, which represents the Chinese characters using the Roman alphabet for pronunciation guidance. Here's an example:

```html
<ruby>
  <rb>我</rb><rt>wǒ</rt> <rb>喜欢</rb><rt>xǐ huān</rt> <rb>写</rb><rt>xiě</rt>
  <rb>程序</rb><rt>chéng xù</rt>
</ruby>
```

Running this code will display the following:

![Output of the above code with Pinyin transliterations](https://raw.githubusercontent.com/Codecademy/docs/main/media/semantic-html-rb-example-2.png)
