---
Title: '<rt>'
Description: 'Provides support for East Asian typography such as translations, pronunciation, or transliteration.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<rt>`** semantic HTML element represents the ruby text component of a ruby annotation, which provides translation, pronunciation, or transliteration information for East Asian typography. The `<rt>` element must be used within a `<ruby>` element at all times.

## Example

The following example provides a basic implementation of the tag illustrating a Romaji transliteration for the 'kenjutsu' characters within the `<ruby>` element:

```pseudo
<ruby> 剣 <rt>ken</rt> 術 <rt>jutsu</rt> </ruby>
```

Which yields the following result:

![kenjutsu](https://raw.githubusercontent.com/Codecademy/docs/main/media/kenjutsu.png 'kenjutsu')
