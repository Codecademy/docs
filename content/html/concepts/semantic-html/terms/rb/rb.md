---
Title: '<rb>'
Description: 'Serving as the base component in ruby annotations for East Asian text, this element's use has declined and is now listed as deprecated.'
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

The **`<rb>`** element designates the base text for ruby annotations in East Asian languages. It must be within `<ruby>` tags and is often paired with `<rt>` for pronunciation guides and `<rp>` for fallback rendering.

> **Note:** The `<rb>` tag is considered deprecated, meaning it's no longer recommended for use in new projects. Be sure to consult current web standards and best practices when working with ruby annotations.

## Example

The example below showcases how the `<rb>` tag is used to transliterate the Chinese characters meaning 'I like to write code' inside a `<ruby>` element.

```pseudo
<ruby>
  <rb>我</rb><rt>I</rt>
  <rb>喜欢</rb><rt>like</rt>
  <rb>写</rb><rt>to write</rt>
  <rb>程序</rb><rt>code</rt>
</ruby>
```

This is what it looks like in the browser:

![Output of the above code with English translations](https://raw.githubusercontent.com/Codecademy/docs/main/media/iliketowritecode.png)

Another approach is to replace the English translations with Pinyin, which represents the Chinese characters using the Roman alphabet for pronunciation guidance. Here's an example: 

```pseudo
<ruby>
  <rb>我</rb><rt>wǒ</rt>
  <rb>喜欢</rb><rt>xǐ huān</rt>
  <rb>写</rb><rt>xiě</rt>
  <rb>程序</rb><rt>chéng xù</rt>
</ruby>
```

Running this code will display the following:

![Output of the above code with Pinyin transliterations](https://raw.githubusercontent.com/Codecademy/docs/main/media/woxihuanxiechengxu.png)