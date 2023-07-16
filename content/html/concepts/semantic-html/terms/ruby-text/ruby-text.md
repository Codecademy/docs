---
Title: '<ruby-text>'
Description: 'Used to provide pronunciation, translation, or transliteration information for East Asian typography.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<rt>`** semantic HTML element represents the [ruby](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby) text component of a ruby annotation, this provides pronunciation, translation, or transliteration information for East Asian typography. The `<rt>` element must be contained within a [`<ruby>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby) element at all time.

## Example

This simple example provides Romaji transliteration for the kanji characters within the `<ruby>` element:

```pseudo
<ruby> 漢 <rt>Kan</rt> 字 <rt>ji</rt> </ruby>
```

Which yields the following result:

![kanji](https://raw.githubusercontent.com/Codecademy/docs/main/media/kanji.png "kanji")